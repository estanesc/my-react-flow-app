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
    id: 'positionLogger-1',
    type: 'positionLoggerNode',
      position: { x: 0, y: 0 },
    data: { label: 'Position Logger' },
  },
  {
    id: 'consequenceNode-1',
    type: 'consequenceNode',
      position: { x: 0, y: 0 },
    data: { label: 'Consequence' },
  },
  {
    id: 'degradationControlNode-1',
    type: 'degradationControlNode',
      position: { x: 0, y: 0 },
    data: { label: 'Degradation Control' },
  },
  {
    id: 'degradationFactorNode-1',
    type: 'degradationFactorNode',
      position: { x: 0, y: 0 },
    data: { label: 'Degradation Factor' },
  },
  {
    id: 'hazardNode-1',
    type: 'hazardNode',
      position: { x: 0, y: 0 },
    data: { label: 'Hazard2' },
  },
  {
    id: 'mitigationBarrierNode-1',
    type: 'mitigationBarrierNode',
      position: { x: 0, y: 0 },
    data: { label: 'Mitigation Barrier' },
  },
  {
    id: 'preventionBarrierNode-1',
    type: 'preventionBarrierNode',
      position: { x: 0, y: 0 },
    data: { label: 'Prevention Barrier' },
  },
  {
    id: 'threatNode-1',
    type: 'threatNode',
      position: { x: 0, y: 0 },
    data: { label: 'Threat' },
  },
    {
    id: 'topEvent-1',
    type: 'topEventNode',
      position: { x: 0, y: 0 },
    data: { label: 'Top Event' },
  },
] as unknown as AppNode[];