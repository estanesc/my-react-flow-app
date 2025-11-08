import type { Edge, EdgeTypes } from '@xyflow/react';

export const initialEdges: Edge[] = [
  // Threat -> Prevention Barrier
  { 
    id: 'threat-prevention',
    source: 'threatNode-1',
    target: 'preventionBarrierNode-1',
  },
  // Prevention Barrier -> Top Event
  {
    id: 'prevention-topevent',
    source: 'preventionBarrierNode-1',
    target: 'topEvent-1',
  },
  // Hazard -> Top Event
  {
    id: 'hazard-topevent',
    source: 'hazardNode-1',
    target: 'topEvent-1',
    targetHandle: 'topevent-top',
  },
  // Top Event -> Mitigation Barrier
  {
    id: 'topevent-mitigation',
    source: 'topEvent-1',
    target: 'mitigationBarrierNode-1',
  },
  // Mitigation Barrier -> Consequence
  {
    id: 'mitigation-consequence',
    source: 'mitigationBarrierNode-1',
    target: 'consequenceNode-1',
  },
  // Degradation Factor -> Degradation Control
  {
    id: 'degradfactor-degradcontrol',
    source: 'degradationFactorNode-1',
    target: 'degradationControlNode-1',
  },
  // Degradation Control -> Prevention Barrier
  {
    id: 'degradcontrol-prevention',
    source: 'degradationControlNode-1',
    target: 'preventionBarrierNode-1',
    type: 'default'
  }
];

export const edgeTypes = {
  // Add your custom edge types here!
} satisfies EdgeTypes;
