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
] as unknown as AppNode[];