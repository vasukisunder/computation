// Types for the technology evolution visualization

export type NodeType = 'Person' | 'Invention' | 'Event';

export interface Node {
  id: string;
  name: string;
  type: NodeType;
  year?: number;
  description: string;
  image?: string; // URL to the image
  source?: string; // URL to the source reference
  // Fields we can add later:
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