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
  // Top Event right handles -> Mitigation barriers (left)
  {
    id: 'topevent-right-1-to-mitigation-1',
    source: 'topEventNode',
    sourceHandle: 'topevent-right-1',
    target: 'mitigationBarrierNode-1',
  },
  {
    id: 'topevent-right-2-to-mitigation-2',
    source: 'topEventNode',
    sourceHandle: 'topevent-right-2',
    target: 'mitigationBarrierNode-2',
  },
  {
    id: 'topevent-right-3-to-mitigation-3',
    source: 'topEventNode',
    sourceHandle: 'topevent-right-3',
    target: 'mitigationBarrierNode-3',
  },
  // Mitigation barriers -> Consequence nodes
  {
    id: 'mitigation-1-to-consequence-1',
    source: 'mitigationBarrierNode-1',
    target: 'consequenceNode-1',
  },
  {
    id: 'mitigation-2-to-consequence-2',
    source: 'mitigationBarrierNode-2',
    target: 'consequenceNode-2',
  },
  {
    id: 'mitigation-3-to-consequence-3',
    source: 'mitigationBarrierNode-3',
    target: 'consequenceNode-3',
  },
  // Degradation factor -> Degradation control (Manager Inspections)
  {
    id: 'degradationfactor-1-to-control-1',
    source: 'degradationFactorNode-1',
    target: 'degradationControlNode-1',
  },
  {
    id: 'control-1-right-to-prevention-3-bottom',
    source: 'degradationControlNode-1',
    target: 'preventionBarrierNode-3',
    targetHandle: 'topevent-bottom',
  },
  // Threat nodes -> Prevention barriers
  {
    id: 'threat-1-to-prevention-1',
    source: 'threatNode-1',
    target: 'preventionBarrierNode-1',
  },
  {
    id: 'threat-2-to-prevention-2',
    source: 'threatNode-2',
    target: 'preventionBarrierNode-2',
  },
  {
    id: 'threat-3-to-prevention-3',
    source: 'threatNode-3',
    target: 'preventionBarrierNode-3',
  },
];

export const edgeTypes = {
  // Add your custom edge types here!
} satisfies EdgeTypes;
