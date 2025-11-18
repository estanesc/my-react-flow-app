import type { Edge, EdgeTypes } from '@xyflow/react';

export const initialEdges: Edge[] = [
  // Hazard bottom -> Top Event top
  {
    id: 'hazard-to-topevent',
    source: 'hazardNode',
    sourceHandle: 'hazard-bottom',
    target: 'topEventNode',
    targetHandle: 'topevent-top',
  },

  // Connect each prevention barrier (right) -> top event (left)
  {
    id: 'prevention-1-to-topevent',
    source: 'preventionBarrierNode-1',
    sourceHandle: 'topevent-right',
    target: 'topEventNode',
    targetHandle: 'topevent-left-1',
  },
  {
    id: 'prevention-2-to-topevent',
    source: 'preventionBarrierNode-2',
    sourceHandle: 'topevent-right',
    target: 'topEventNode',
    targetHandle: 'topevent-left-2',
  },
  {
    id: 'prevention-3-to-topevent',
    source: 'preventionBarrierNode-3',
    sourceHandle: 'topevent-right',
    target: 'topEventNode',
    targetHandle: 'topevent-left-3',
  },
];

export const edgeTypes = {
  // Add your custom edge types here!
} satisfies EdgeTypes;
