'use client';

import { useRef, useState, useCallback, useEffect } from 'react';
import dynamic from 'next/dynamic';
import * as d3 from 'd3';
import { Graph, Node, Link } from '../types/graph';
import Image from 'next/image';

// Dynamically import only the ForceGraph2D component
const ForceGraph2D = dynamic(() => import('react-force-graph-2d'), {
  ssr: false,
  loading: () => <div className="absolute inset-0 flex items-center justify-center">Loading visualization...</div>
});

interface ForceGraphProps {
  data: Graph;
}

const NODE_COLORS = {
  Person: '#4a4e69',  // Dusty blue/purple
  Invention: '#c9ada7',  // Muted pink/mauve
  Event: '#9a8c98',  // Dusty lavender/gray
};

export default function ForceGraph({ data }: ForceGraphProps) {
  // Use RefObject<any> to fix the type issue
  const graphRef = useRef<any>(null);
  const [selectedNode, setSelectedNode] = useState<Node | null>(null);
  const [selectedLink, setSelectedLink] = useState<any | null>(null);
  
  // Project info to display when nothing is selected
  const projectTitle = "History of Computation";
  const projectDescription = "This interactive visualization maps the evolution of computation through time, showing key inventions, people, and historical events that shaped our technological progress. Click on nodes or links to explore connections and learn more about each element.";

  // Create a stable reference to data that won't change unexpectedly
  const graphData = useRef({
    nodes: data.nodes.map(node => ({
      ...node,
      color: NODE_COLORS[node.type],
    })),
    // Keep links as they come, react-force-graph will handle ID references internally
    links: data.links.map(link => ({
      ...link,
      // Don't transform source/target here - let the library handle it
    }))
  }).current;

  // Configure the force simulation when the graph is ready
  const configureForces = useCallback((fg: any) => {
    if (!fg) return;
    
    // Set link distance based on node types
    fg.d3Force('link')
      .distance(() => 120)
      .strength(0.8); // Stronger links so they don't break
    
    // Adjust repulsive forces between nodes
    fg.d3Force('charge')
      .strength(-180)
      .distanceMax(300);
    
    // Add a center force to keep everything within view
    fg.d3Force('center')
      .strength(0.1);
    
    // Add a collision force to prevent overlap
    fg.d3Force('collision', d3.forceCollide(20));
    
    // Reheat the simulation to keep it active
    fg.d3ReheatSimulation();
  }, []);

  // Initialize the graph when the component mounts
  useEffect(() => {
    if (graphRef.current) {
      configureForces(graphRef.current);
    }
  }, [configureForces]);

  // Event handlers with stable references
  const handleNodeClick = useCallback((node: any) => {
    if (graphRef.current) {
      // Keep the simulation active
      configureForces(graphRef.current);
      graphRef.current.d3ReheatSimulation();
    }
    
    setSelectedNode(node);
    setSelectedLink(null);
  }, [configureForces]);

  const handleLinkClick = useCallback((link: any) => {
    if (graphRef.current) {
      // Keep the simulation active
      configureForces(graphRef.current);
      graphRef.current.d3ReheatSimulation();
    }
    
    setSelectedLink(link);
    setSelectedNode(null);
  }, [configureForces]);

  const closeInfoPanel = useCallback(() => {
    setSelectedNode(null);
    setSelectedLink(null);
    
    if (graphRef.current) {
      // Reheat when closing the panel
      configureForces(graphRef.current);
      graphRef.current.d3ReheatSimulation();
    }
  }, [configureForces]);

  return (
    <div className="absolute inset-0 bg-white">
      {/* Graph container - adjust to account for always-visible panel */}
      <div className="absolute inset-0 ml-[300px]">
        <ForceGraph2D
          ref={graphRef}
          graphData={graphData}
          backgroundColor="#ffffff"
          nodeLabel={(node: any) => `${node.name} (${node.year || 'unknown'})`}
          nodeColor={(node: any) => node.color}
          nodeRelSize={8}
          linkColor={() => "#9a8c98"}
          linkWidth={2}
          linkLabel={(link: any) => link.short || link.description}
          onNodeClick={handleNodeClick}
          onLinkClick={handleLinkClick}
          onEngineStop={() => {
            // Keep the simulation active
            if (graphRef.current) {
              graphRef.current.d3ReheatSimulation();
            }
          }}
          cooldownTicks={Infinity} // Never stop the simulation completely
          warmupTicks={100} // More ticks for better initial layout
          onNodeDrag={(node: any) => {
            // Fix this node in place during drag
            node.fx = node.x;
            node.fy = node.y;
          }}
          onNodeDragEnd={(node: any) => {
            // Release the fixed position when drag ends
            node.fx = null;
            node.fy = null;
            
            // Reheat the simulation
            if (graphRef.current) {
              configureForces(graphRef.current);
              graphRef.current.d3ReheatSimulation();
            }
          }}
          linkDirectionalArrowLength={4}
          linkDirectionalArrowRelPos={1}
          nodeCanvasObject={(node: any, ctx, globalScale) => {
            // Draw the node
            const size = 8;
            ctx.beginPath();
            ctx.arc(node.x, node.y, size, 0, 2 * Math.PI);
            ctx.fillStyle = node.color;
            ctx.fill();
            // No stroke/outline
            
            // Draw node labels for all nodes
            const label = node.name;
            const fontSize = 12/globalScale;
            ctx.font = `${fontSize}px Sans-Serif`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            
            // Add background for better readability
            const textWidth = ctx.measureText(label).width;
            ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
            ctx.fillRect(
              node.x - textWidth/2 - 2,
              node.y + size + 2,
              textWidth + 4,
              fontSize + 4
            );
            
            // Draw the actual text
            ctx.fillStyle = '#333333';
            ctx.fillText(label, node.x, node.y + size + fontSize/2 + 4);
          }}
          linkCanvasObjectMode={() => 'after'}  
          linkCanvasObject={(link: any, ctx, globalScale) => {
            // Calculate the position for the link label
            const start = link.source;
            const end = link.target;
            const textPos = Object.assign({
              x: start.x + (end.x - start.x) * 0.5,
              y: start.y + (end.y - start.y) * 0.5
            });
            
            // Draw link labels with background
            const label = link.short || link.description;
            if (!label) return;
            
            const fontSize = 10/globalScale;
            ctx.font = `${fontSize}px Sans-Serif`;
            
            // Add background for better readability
            const textWidth = ctx.measureText(label).width;
            ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
            ctx.fillRect(
              textPos.x - textWidth/2 - 2,
              textPos.y - fontSize/2 - 2,
              textWidth + 4,
              fontSize + 4
            );
            
            // Draw the actual text
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillStyle = '#333333';
            ctx.fillText(label, textPos.x, textPos.y);
          }}
        />
      </div>

      {/* Always visible information panel on the left */}
      <div className="absolute top-0 left-0 bottom-0 bg-white p-3 shadow-sm border-r border-gray-200" style={{ width: '280px', overflow: 'auto', pointerEvents: 'auto' }}>
        <div className="flex flex-col h-full">
          {selectedNode ? (
            // Node info content
            <>
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-md font-medium text-gray-800">{selectedNode.name}</h3>
                <button 
                  className="ml-1 text-xs text-gray-400 hover:text-gray-700"
                  onClick={closeInfoPanel}
                >
                  ✕
                </button>
              </div>
              
              <p className="text-xs text-gray-500 mb-2">{selectedNode.type} | {selectedNode.year || 'unknown'}</p>
              
              {selectedNode.image && (
                <div className="mb-3 w-full h-36 relative">
                  <img 
                    src={selectedNode.image} 
                    alt={selectedNode.name}
                    className="w-full h-full object-cover rounded-sm"
                  />
                </div>
              )}
              
              <p className="text-xs text-gray-700">{selectedNode.description}</p>
            </>
          ) : selectedLink ? (
            // Link info content
            <>
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-md font-medium text-gray-800">
                  {selectedLink.medium || `Relationship between ${selectedLink.source.name} and ${selectedLink.target.name}`}
                </h3>
                <button 
                  className="ml-1 text-xs text-gray-400 hover:text-gray-700"
                  onClick={closeInfoPanel}
                >
                  ✕
                </button>
              </div>
              
              <p className="text-xs text-gray-700">
                {selectedLink.long ? (
                  <span>{selectedLink.long}</span>
                ) : (
                  <>
                    <span className="font-medium">{selectedLink.source.name}</span>
                    {" "}
                    <span className="text-gray-700">{selectedLink.short || selectedLink.description}</span>
                    {" "}
                    <span className="font-medium">{selectedLink.target.name}</span>
                  </>
                )}
              </p>
            </>
          ) : (
            // Default project info when nothing is selected
            <>
              <h2 className="text-md font-medium text-gray-800 mb-2">{projectTitle}</h2>
              <p className="text-xs text-gray-600 mb-4">{projectDescription}</p>
              
              <div className="mt-2">
                <h3 className="text-xs font-medium text-gray-600 uppercase tracking-wide mb-2">Legend</h3>
                <div className="space-y-1.5">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-[#4a4e69] mr-2"></div>
                    <span className="text-xs text-gray-600">Person</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-[#c9ada7] mr-2"></div>
                    <span className="text-xs text-gray-600">Invention</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-[#9a8c98] mr-2"></div>
                    <span className="text-xs text-gray-600">Event</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-auto pt-4 text-xs text-gray-500">
                <p>Interact with the visualization:</p>
                <p>Click on a node to see details</p>
                <p>Click on a link to view relationships</p>
                <p>Drag nodes to rearrange the layout</p>
                <p>Scroll to zoom in and out</p>
                  
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
} 