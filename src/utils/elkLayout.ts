// src/utils/elkLayout.ts

import ELK, { ElkExtendedEdge } from 'elkjs/lib/elk.bundled'; 
import { Node, Edge, Position } from '@xyflow/react';

// Initialize ELK
const elk = new ELK();

// Define the layout options for a layered (symmetrical) layout
const elkOptions = {
  'elk.algorithm': 'layered',
  'elk.layered.spacing.nodeNodeBetweenLayers': '100', // Vertical spacing
  'elk.spacing.nodeNode': '80', // Horizontal spacing
  'elk.direction': 'RIGHT', // Change to 'DOWN' for vertical flow
};

// Function to calculate the layout
export async function getLayoutedElements<T extends Node>(nodes: T[], edges: Edge[], options: Record<string, string> = {}) {
  const isHorizontal = elkOptions['elk.direction'] === 'RIGHT';

  const graph = {
    id: 'root',
    layoutOptions: { ...elkOptions, ...options },
    children: nodes.map(node => ({
      ...node,
      // ELK needs explicit dimensions for layouting
      width: node.width || 150, 
      height: node.height || 50,
      
      // Update the handle positions based on the flow direction
      targetPosition: isHorizontal ? Position.Left : Position.Top,
      sourcePosition: isHorizontal ? Position.Right : Position.Bottom,
    })),
    
    // 1. FIX: Double-cast input edges to ELK's required type
    edges: edges as any as ElkExtendedEdge[], 
  };

  try {
    const layoutedGraph = await elk.layout(graph);
    
    // Convert ELK's output back to React Flow format
    return {
      nodes: layoutedGraph.children
        ? layoutedGraph.children.map(node => ({
            ...node,
            position: { x: node.x || 0, y: node.y || 0 },
          })) as T[]
        : [],
        
      // 2. FIX: Double-cast output edges back to React Flow's Edge type
      edges: layoutedGraph.edges as unknown as Edge[] || [], 
    };
  } catch (error) {
    console.error('ELK Layout Error:', error);
    return { nodes, edges }; // Return original if layout fails
  }
}