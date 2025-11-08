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

export const nodeTypes = {
  consequenceNode: ConsequenceNode,
  degradationControlNode: DegradationControlNode,
  degradationFactorNode: DegradationFactorNode,
  hazardNode: HazardNode,
  mitigationBarrierNode: MitigationBarrierNode,
  preventionBarrierNode: PreventionBarrierNode,
  threatNode: ThreatNode,
  topEventNode: TopEventNode,
} satisfies NodeTypes;

export const initialNodes = [
  {
    id: 'consequenceNode-1',
    type: 'consequenceNode',
    position: { x: 0, y: 0 },
    data: { label: 'Consequence Node' },
  },
  {
    id: 'degradationControlNode-1',
    type: 'degradationControlNode',
    position: { x: -400, y: 200 },
    data: { label: 'Degradation Control Node' },
  },
  {
    id: 'degradationFactorNode-1',
    type: 'degradationFactorNode',
    position: { x: 0, y: 200 },
    data: { label: 'Degradation Factor Node' },
  },
  {
    id: 'hazardNode-1',
    type: 'hazardNode',
    position: { x: -200, y: -200 },
    data: { label: 'Hazard Node' },
  },
  {
    id: 'mitigationBarrierNode-1',
    type: 'mitigationBarrierNode',
    position: { x: 400, y: 200 },
    data: { label: 'Mitigation Barrier Node' },
  },
  {
    id: 'preventionBarrierNode-1',
    type: 'preventionBarrierNode',
    position: { x: -400, y: -200 },
    data: { label: 'Prevention Barrier Node' },
  },
  {
    id: 'threatNode-1',
    type: 'threatNode',
    position: { x: 200, y: -200 },
    data: { label: 'Threat Node' },
  },
    {
    id: 'topEvent-1',
    type: 'topEventNode',
    position: { x: 200, y: -200 },
    data: { label: 'Top Event Node' },
  },
] as unknown as AppNode[];