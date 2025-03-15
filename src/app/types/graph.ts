// Types for the technology evolution visualization

export type NodeType = 'Person' | 'Invention' | 'Event' | 'Idea';

export interface Node {
  id: string;
  name: string;
  type: NodeType;
  year?: number;
  description: string;
  // Fields we can add later:
  // image?: string;
  // tags?: string[];
  // significance?: number; // For visual sizing
}

export interface Link {
  source: string; // Node ID
  target: string; // Node ID
  description: string; // How they're connected
}

export interface Graph {
  nodes: Node[];
  links: Link[];
} 