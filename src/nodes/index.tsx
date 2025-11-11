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
    data: {
      label: 'Position Logger',
    },
  },
  {
    id: 'consequenceNode-1',
    type: 'consequenceNode',
      position: { x: 0, y: 0 },
    data: {
      label: 'Consequence',
      description: 'Represents the possible outcomes or impacts resulting from the Top Event in a Bowtie diagram.'
    },
  },
  {
    id: 'degradationControlNode-1',
    type: 'degradationControlNode',
      position: { x: 0, y: 0 },
    data: {
      label: 'Degradation Control',
      description: 'Represents measures that help maintain the effectiveness of barriers and controls in the Bowtie diagram.'
    },
  },
  {
    id: 'degradationFactorNode-1',
    type: 'degradationFactorNode',
      position: { x: 0, y: 0 },
    data: {
      label: 'Degradation Factor',
      description: 'Indicates factors that can reduce the effectiveness of barriers or controls in the Bowtie diagram.'
    },
  },
  {
    id: 'hazardNode-1',
    type: 'hazardNode',
      position: { x: 0, y: 0 },
    data: {
      label: 'Hazard',
      description: 'Represents a source of potential harm or danger in the Bowtie diagram.'
    },
  },
  {
    id: 'mitigationBarrierNode-1',
    type: 'mitigationBarrierNode',
      position: { x: 0, y: 0 },
    data: {
      label: 'Mitigation Barrier',
      description: 'Barriers that reduce the consequences or impact after the Top Event has occurred in the Bowtie diagram.'
    },
  },
  {
    id: 'preventionBarrierNode-1',
    type: 'preventionBarrierNode',
      position: { x: 0, y: 0 },
    data: {
      label: 'Prevention Barrier',
      description: 'Barriers that prevent threats from leading to the Top Event in the Bowtie diagram.'
    },
  },
  {
    id: 'threatNode-1',
    type: 'threatNode',
      position: { x: 0, y: 0 },
    data: {
      label: 'Threat',
      description: 'Represents events or conditions that can trigger the Top Event in the Bowtie diagram.'
    },
  },
    {
    id: 'topEvent-1',
    type: 'topEventNode',
      position: { x: 0, y: 0 },
    data: {
      label: 'Top Event',
      description: 'The central event in the Bowtie diagram, representing the point where control is lost and consequences may occur.'
    },
  },
] as unknown as AppNode[];