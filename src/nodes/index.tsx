import type { NodeTypes } from '@xyflow/react';

import ConsequenceNode from './ConsequenceNode/ConsequenceNode.tsx';
import DegradationControlNode from './DegradationControlNode/DegradationControlNode.tsx';
import DegradationFactorNode from './DegradationFactorNode/DegradationFactorNode.tsx';
import HazardNode from './HazardNode/HazardNode.tsx';
import MitigationBarrierNode from './MitigationBarrierNode/MitigationBarrierNode.tsx';
import PreventionBarrierNode from './PreventionBarrierNode/PreventionBarrierNode.tsx';
import ThreatNode from './ThreatNode/ThreatNode.tsx';
import TopEventNode from './TopEventNode/TopEventNode.tsx';

import { AppNode } from './types';
import { PositionLoggerNode } from './PositionLoggerNode.tsx';

export const nodeTypes = {
  consequenceNode: ConsequenceNode,
  degradationControlNode: DegradationControlNode,
  degradationFactorNode: DegradationFactorNode,
  hazardNode: HazardNode,
  mitigationBarrierNode: MitigationBarrierNode,
  preventionBarrierNode: PreventionBarrierNode,
  threatNode: ThreatNode,
  topEventNode: TopEventNode,
  positionLoggerNode: PositionLoggerNode,
} satisfies NodeTypes;

export const initialNodes = [
  {
    id: 'hazardNode',
    type: 'hazardNode',
      position: { x: 262.2367488655181, y: -66.85199253085085 },
    data: {
      label: 'Unsanitary Environment',
      description: 'Tooltip description'
    },
  },
    {
    id: 'topEventNode',
    type: 'topEventNode',
      position: { x: 262, y: 175 },
    data: {
      label: 'Ice Cream Contaminated',
      description: 'Tooltip description'
    },
  },
  {
    id: 'preventionBarrierNode-1',
    type: 'preventionBarrierNode',
    position: { x: -91.71330892826481, y: -54.74665894781488 },
    data: {
      label: 'Employee Hygiene Training',
      description: 'Barrier that prevents threats from leading to the Top Event.'
    },
  },
    {
      id: 'preventionBarrierNode-2',
      type: 'preventionBarrierNode',
      position: { x: -98.78467090064649, y: 157.75256406330485 },
      data: {
        label: 'Daily Equipment Sanitation',
        description: 'Barrier that prevents threats from leading to the Top Event.'
      },
    },
    {
      id: 'preventionBarrierNode-3',
      type: 'preventionBarrierNode',
      position: { x: -92.89186925699508, y: 360.5684094146367 },
      data: {
        label: 'Supplier QA Program',
        description: 'Barrier that prevents threats from leading to the Top Event.'
      },
    },
    {
      id: 'mitigationBarrierNode-1',
      type: 'mitigationBarrierNode',
      position: { x: 656.4574723087613, y: -44.2390405887403 },
      data: {
        label: 'Batch Recall Process',
        description: 'Mitigation barrier that reduces impact after the Top Event occurs.'
      },
      measured: { width: 197, height: 130 },
      selected: false,
      dragging: false,
    },
    {
      id: 'mitigationBarrierNode-2',
      type: 'mitigationBarrierNode',
      position: { x: 652.8977121615762, y: 183.22442804039406 },
      data: {
        label: 'Customer Alert System',
        description: 'Mitigation barrier for reducing consequences through rapid correction.'
      },
      measured: { width: 211, height: 130 },
      selected: false,
      dragging: false,
    },
    {
      id: 'mitigationBarrierNode-3',
      type: 'mitigationBarrierNode',
      position: { x: 623.2330442683672, y: 440.35256456273737 },
      data: {
        label: 'Crisis Response Team',
        description: 'Mitigation barrier that limits contamination spread by controlling temperature.'
      },
      measured: { width: 203, height: 130 },
      selected: false,
      dragging: false,

    },
    {
      id: 'consequenceNode-1',
      type: 'consequenceNode',
      position: { x: 880, y: -44 },
      data: {
        label: 'Public Health Impact',
        description: 'Adverse health outcomes from contaminated product.'
      },
      measured: { width: 120, height: 60 },
      selected: false,
      dragging: false,
    },
    {
      id: 'consequenceNode-2',
      type: 'consequenceNode',
      position: { x: 880, y: 183 },
      data: {
        label: 'Financial Loss',
        description: 'Costs from recalls, lost sales, and regulatory fines.'
      },
      measured: { width: 120, height: 60 },
      selected: false,
      dragging: false,
    },
    {
      id: 'consequenceNode-3',
      type: 'consequenceNode',
      position: { x: 880, y: 440 },
      data: {
        label: 'Brand Reputation Damage',
        description: 'Long-term loss of customer trust and market share.'
      },
      measured: { width: 120, height: 60 },
      selected: false,
      dragging: false,
    },
] as unknown as AppNode[];