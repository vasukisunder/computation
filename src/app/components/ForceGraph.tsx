'use client';
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useRef, useState, useCallback, useEffect } from 'react';
import { Network, Node, Edge } from 'vis-network';
import { DataSet } from 'vis-data';
import Image from 'next/image';
import { NODE_COLORS } from '@/app/utils/constants';

// Define proper types for our graph data
interface GraphNode {
  id: string;
  type: string;
  name: string;
  description: string;
  year?: number;
  color?: string;
  image?: string;
  source?: string;
}

interface GraphLink {
  source: string;
  target: string;
  description?: string;
}

interface ForceGraphProps {
  data: {
    nodes: GraphNode[];
    links: GraphLink[];
  };
  onError?: (error: Error) => void;
}

export default function ForceGraph({ data, onError }: ForceGraphProps) {
  const networkRef = useRef<HTMLDivElement>(null);
  const networkInstance = useRef<Network | null>(null);
  const [selectedNode, setSelectedNode] = useState<GraphNode | null>(null);
  const [selectedLink, setSelectedLink] = useState<GraphLink | null>(null);

  // Add error handling
  useEffect(() => {
    try {
      if (!data || !data.nodes || !data.links) {
        throw new Error('Invalid data format');
      }
    } catch (err) {
      onError?.(err as Error);
    }
  }, [data, onError]);

  // Project info to display when nothing is selected
  const projectTitle = "History of Computation";
  const projectDescription = "This interactive visualization maps the evolution of computation through time, showing key inventions, people, and historical events that shaped our technological progress. Click on nodes or links to explore connections and learn more about each element.";

  // Initialize the network
  useEffect(() => {
    if (!networkRef.current) return;

    // Create nodes dataset
    const nodes = new DataSet<Node>(
      data.nodes.map(node => ({
        id: node.id,
        label: node.name,
        color: {
          background: NODE_COLORS[node.type as keyof typeof NODE_COLORS] || '#999999',
          border: '#ffffff'
        },
        shape: 'dot',
        size: 16,
        font: {
          size: 14,
          face: 'Sans-Serif'
        },
        shadow: true,
        title: `${node.name} (${node.year || 'unknown'})`
      }))
    );

    // Create edges dataset with elastic lines
    const edges = new DataSet<Edge>(
      data.links.map(link => ({
        from: link.source,
        to: link.target,
        smooth: {
          enabled: true,
          type: 'dynamic',
          roundness: 0.5,
          forceDirection: 'none'
        },
        color: {
          color: '#9a8c98',
          highlight: '#7a6c78',
          opacity: 0.8
        },
        width: 2,
        title: link.description,
        arrows: 'to',
        physics: true,
        length: undefined // Allow edges to stretch freely
      }))
    );

    // Network configuration
    const options = {
      nodes: {
        shape: 'dot',
        size: 16,
        font: {
          size: 14,
          face: 'Sans-Serif'
        },
        borderWidth: 2,
        shadow: true
      },
      edges: {
        smooth: {
          enabled: true,
          type: 'dynamic',
          roundness: 0.5,
          forceDirection: 'none'
        },
        color: {
          color: '#9a8c98',
          highlight: '#7a6c78',
          opacity: 0.8
        },
        width: 2,
        arrows: 'to',
        physics: true,
        length: undefined,
        scaling: {
          min: 1,
          max: 3,
          label: true
        }
      },
      physics: {
        enabled: true,
        solver: 'forceAtlas2Based',
        forceAtlas2Based: {
          gravitationalConstant: -1000,
          centralGravity: 0.1,
          springLength: 100,
          springConstant: 0.08,
          damping: 0.4,
          avoidOverlap: 0.3
        },
        stabilization: {
          enabled: true,
          iterations: 1000,
          updateInterval: 50
        },
        minVelocity: 0.1,
        maxVelocity: 50,
        timestep: 0.3,
        adaptiveTimestep: true
      },
      interaction: {
        hover: true,
        tooltipDelay: 200,
        dragNodes: true,
        dragView: true,
        zoomView: true,
        selectable: true,
        selectConnectedEdges: false,
        keyboard: false,
        multiselect: false,
        navigationButtons: false,
        zoomSpeed: 0.8
      }
    };

    // Create the network
    const network = new Network(networkRef.current, { nodes, edges }, options);
    networkInstance.current = network;

    // Set initial zoom after network stabilization
    network.once('stabilizationIterationsDone', () => {
      network.fit({
        animation: false
      });
      
      // Get current scale and zoom in closer
      const currentScale = network.getScale();
      network.moveTo({
        scale: currentScale * 2,
        animation: {
          duration: 0,
          easingFunction: 'linear'
        }
      });
    });

    // Event handlers
    network.on('click', (params) => {
      if (params.nodes.length > 0) {
        const nodeId = params.nodes[0];
        const node = data.nodes.find(n => n.id === nodeId);
        if (node) {
          setSelectedNode(node);
          setSelectedLink(null);
        }
      } else if (params.edges.length > 0) {
        const edgeId = params.edges[0];
        const edge = data.links.find(e => `${e.source}-${e.target}` === edgeId);
        if (edge) {
          setSelectedLink(edge);
          setSelectedNode(null);
        }
      }
    });

    // Add event handlers for more dramatic elastic behavior
    network.on('dragStart', () => {
      network.setOptions({
        physics: {
          ...options.physics,
          forceAtlas2Based: {
            ...options.physics.forceAtlas2Based,
            springLength: 30,
            springConstant: 0.04,
            damping: 0.2
          }
        }
      });
    });

    network.on('dragging', (params: any) => {
      if (params.nodes && params.nodes.length > 0) {
        const dragDistance = Math.sqrt(
          Math.pow(params.pointer.canvas.x, 2) + 
          Math.pow(params.pointer.canvas.y, 2)
        );
        network.setOptions({
          physics: {
            ...options.physics,
            forceAtlas2Based: {
              ...options.physics.forceAtlas2Based,
              springLength: Math.min(30 + dragDistance / 4, 200),
              springConstant: 0.04
            }
          }
        });
      }
    });

    network.on('dragEnd', () => {
      network.setOptions({
        physics: {
          ...options.physics,
          forceAtlas2Based: {
            ...options.physics.forceAtlas2Based,
            springLength: 100,
            springConstant: 0.08,
            damping: 0.4
          }
        }
      });
    });

    // Add console logging to debug
    console.log('Nodes:', nodes.get());
    console.log('Edges:', edges.get());
    console.log('Network:', network);

    // Cleanup
    return () => {
      network.destroy();
      networkInstance.current = null;
    };
  }, [data]);

  return (
    <div className="absolute inset-0 bg-white">
      {/* Graph container */}
      <div className="absolute inset-0 ml-[300px]">
        <div ref={networkRef} className="w-full h-full" />
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
                  onClick={() => setSelectedNode(null)}
                >
                  ✕
                </button>
              </div>
              
              <p className="text-xs text-gray-500 mb-2">{selectedNode.type} | {selectedNode.year || 'unknown'}</p>
              
              {selectedNode.image && (
                <div className="mb-3 w-full h-36 relative">
                  <Image 
                    src={selectedNode.image} 
                    alt={selectedNode.name}
                    fill
                    style={{ objectFit: 'contain' }}
                    unoptimized
                  />
                </div>
              )}
              
              <p className="text-sm text-gray-700 mb-4">
                {selectedNode.description}
              </p>
              
              {selectedNode.source && (
                <a 
                  href={selectedNode.source} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-xs text-blue-500 hover:underline"
                >
                  Read more →
                </a>
              )}
            </>
          ) : selectedLink ? (
            // Link info content
            <>
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-md font-medium text-gray-800">Connection</h3>
                <button 
                  className="ml-1 text-xs text-gray-400 hover:text-gray-700"
                  onClick={() => setSelectedLink(null)}
                >
                  ✕
                </button>
              </div>
              
              <p className="text-sm text-gray-700 mb-4">
                <>
                  <span className="font-medium">
                    {data.nodes.find(n => n.id === selectedLink.source)?.name || 'Unknown'}
                  </span>
                  {" "}
                  <span className="text-gray-700">{selectedLink.description}</span>
                  {" "} 
                  <span className="font-medium">
                    {data.nodes.find(n => n.id === selectedLink.target)?.name || 'Unknown'}
                  </span>
                </>
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