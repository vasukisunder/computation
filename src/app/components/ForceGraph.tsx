'use client';

import { useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import { Graph, Node, Link } from '../types/graph';

// Dynamically import ForceGraph to avoid SSR issues
const ForceGraph2D = dynamic(() => import('react-force-graph').then(mod => mod.ForceGraph2D), {
  ssr: false,
  loading: () => <div className="w-full h-[600px] flex items-center justify-center">Loading visualization...</div>
});

interface ForceGraphProps {
  data: Graph;
}

const NODE_COLORS = {
  Person: '#4CAF50',  // Green
  Invention: '#2196F3',  // Blue
  Event: '#FFC107',  // Amber
  Idea: '#9C27B0',  // Purple
};

export default function ForceGraph({ data }: ForceGraphProps) {
  const graphRef = useRef(null);
  const [selectedNode, setSelectedNode] = useState<Node | null>(null);

  // Transform the data to the format required by ForceGraph
  const graphData = {
    nodes: data.nodes.map(node => ({
      ...node,
      color: NODE_COLORS[node.type],
    })),
    links: data.links
  };

  return (
    <div className="relative w-full h-[600px] border border-gray-200 rounded-lg">
      <ForceGraph2D
        ref={graphRef}
        graphData={graphData}
        nodeLabel={(node: any) => `${node.name} (${node.year || 'unknown'})`}
        nodeColor={(node: any) => node.color}
        nodeRelSize={8}
        linkLabel={(link: any) => link.description}
        onNodeClick={(node: any) => setSelectedNode(node)}
        linkDirectionalArrowLength={4}
        linkDirectionalArrowRelPos={1}
      />

      {selectedNode && (
        <div className="absolute bottom-0 left-0 right-0 bg-white p-4 shadow-lg">
          <h3 className="text-lg font-bold">{selectedNode.name}</h3>
          <p className="text-sm text-gray-600">{selectedNode.type} | {selectedNode.year || 'unknown'}</p>
          <p className="mt-2">{selectedNode.description}</p>
          <button 
            className="mt-2 text-sm text-blue-600"
            onClick={() => setSelectedNode(null)}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
} 