import type { NodeTypes } from '@xyflow/react';

import { PositionLoggerNode } from './PositionLoggerNode';
import { CustomBowtieNode } from './CustomBowtieNode';
import { TopEventNode } from './TopEventNode';
import { HazardNode } from './HazardNode';
import { AppNode } from './types';

export const nodeTypes = {
  'position-logger': PositionLoggerNode,
  hazardNode: HazardNode,
  topEventNode: TopEventNode,
  threatNode: (props) => <CustomBowtieNode {...props} type="threatNode" />,
  consequenceNode: (props) => <CustomBowtieNode {...props} type="consequenceNode" />,
  preventionBarrierNode: (props) => <CustomBowtieNode {...props} type="preventionBarrierNode" />,
  mitigationBarrierNode: (props) => <CustomBowtieNode {...props} type="mitigationBarrierNode" />,
  degradationFactorNode: (props) => <CustomBowtieNode {...props} type="degradationFactorNode" />,
  degradationControlNode: (props) => <CustomBowtieNode {...props} type="degradationControlNode" />,
} satisfies NodeTypes;

export const initialNodes = [
  // Existing Nodes (id/position updated for uniqueness)
  { id: 'hazardNode-1', type: 'hazardNode', data: { label: 'Hazard: Tank Leak' }, position: { x: 50, y: 50 } },
  { id: 'topEventNode-1', type: 'topEventNode', data: { label: 'Top Event: Loss of Containment' }, position: { x: 400, y: 50 } },

  // Missing Bowtie-related Nodes
  { 
    id: 'threatNode-1', 
    type: 'threatNode', 
    data: { label: 'Threat: Corrosion (by Emanuel :))' }, 
    position: { x: 250, y: 0 } 
  },
  { 
    id: 'consequenceNode-1', 
    type: 'consequenceNode', 
    data: { label: 'Consequence: Environmental Damage' }, 
    position: { x: 650, y: 0 } 
  },
  { 
    id: 'preventionBarrierNode-1', 
    type: 'preventionBarrierNode', 
    data: { label: 'Prevention: Inspection Schedule' }, 
    position: { x: 300, y: 150 } 
  },
  { 
    id: 'mitigationBarrierNode-1', 
    type: 'mitigationBarrierNode', 
    data: { label: 'Mitigation: Emergency Shutdown' }, 
    position: { x: 500, y: 150 } 
  },
  { 
    id: 'degradationFactorNode-1', 
    type: 'degradationFactorNode', 
    data: { label: 'Degradation Factor: Harsh Environment' }, 
    position: { x: 300, y: 250 } 
  },
  { 
    id: 'degradationControlNode-1', 
    type: 'degradationControlNode', 
    data: { label: 'Degradation Control: Cathodic Protection' }, 
    position: { x: 500, y: 250 } 
  },
] as unknown as AppNode[];