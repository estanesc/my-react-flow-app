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
      description: 'Hazard: Conditions that increase contamination risk in production areas.'
    },
  },
    {
    id: 'topEventNode',
    type: 'topEventNode',
      position: { x: 262, y: 175 },
    data: {
      label: 'Ice Cream Contaminated',
      description: 'Top Event: Finished product becomes contaminated and unsafe for consumption.'
    },
  },
  {
    id: 'preventionBarrierNode-1',
    type: 'preventionBarrierNode',
    position: { x: -91.71330892826481, y: -54.74665894781488 },
    data: {
      label: 'Employee Hygiene Training',
      description: 'Prevention Barrier: Training and practices that reduce contamination risk from staff.'
    },
  },
    {
      id: 'preventionBarrierNode-2',
      type: 'preventionBarrierNode',
      position: { x: -98.78467090064649, y: 157.75256406330485 },
      data: {
        label: 'Daily Equipment Sanitation',
        description: 'Prevention Barrier: Regular cleaning routines that remove pathogens from equipment and surfaces.'
      },
    },
    {
      id: 'preventionBarrierNode-3',
      type: 'preventionBarrierNode',
      position: { x: -92.89186925699508, y: 360.5684094146367 },
      data: {
        label: 'Supplier QA Program',
        description: 'Prevention Barrier: Supplier quality checks that stop contaminated ingredients before they arrive.'
      },
    },
    {
      id: 'threatNode-1',
      type: 'threatNode',
      position: { x: -398.8349875625903, y: -79.8580575041961 },
      data: {
        label: 'Infected Employee',
        description: 'Threat: Infected or ill staff who can introduce biological contaminants into the process.'
      },
      measured: { width: 175, height: 130 },
      selected: false,
      dragging: false,
    },
    {
      id: 'threatNode-2',
      type: 'threatNode',
      position: { x: -440.49542611515704, y: 157.42588990441504 },
      data: {
        label: 'Contaminated Equipment',
        description: 'Threat: Equipment or tooling that carries residues or allows microbial growth to contaminate product.'
      },
      measured: { width: 229, height: 130 },
      selected: true,
      dragging: false,
    },
    {
      id: 'threatNode-3',
      type: 'threatNode',
      position: { x: -416.1333384083256, y: 394.1773152406438 },
      data: {
        label: 'Employee Mishandling',
        description: 'Threat: Human handling mistakes that transfer contaminants to product or surfaces.'
      },
      measured: { width: 206, height: 130 },
      selected: false,
      dragging: false,
    },
    {
      id: 'mitigationBarrierNode-1',
      type: 'mitigationBarrierNode',
      position: { x: 656.4574723087613, y: -44.2390405887403 },
      data: {
        label: 'Unsafe Raw Materials',
        description: 'Mitigation Barrier: Processes to contain, remove, or isolate contaminated batches to limit harm.'
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
        description: 'Mitigation Barrier: Systems that notify stakeholders quickly to enable fast corrective action.'
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
        description: 'Mitigation Barrier: A response team coordinating containment and recovery to minimize impact.'
      },
      measured: { width: 203, height: 130 },
      selected: false,
      dragging: false,

    },
    {
      id: 'degradationFactorNode-1',
      type: 'degradationFactorNode',
      position: { x: -520.7803244283552, y: 581.5246550664629 },
      data: {
        label: 'Skipped Clean Logs',
        description: 'Degradation Factor: Missing or skipped cleaning records that raise the chance of unnoticed contamination.'
      },
      measured: { width: 150, height: 130 },
      selected: false,
      dragging: false,
    },
    {
      id: 'degradationControlNode-1',
      type: 'degradationControlNode',
      position: { x: -240.98144783234412, y: 606.27671299142 },
      data: {
        label: 'Manager Inspections',
        description: 'Degradation Control: Inspections and oversight that catch sanitation lapses before they escalate.'
      },
      measured: { width: 160, height: 130 },
      selected: false,
      dragging: false,
    },
    {
      id: 'consequenceNode-1',
      type: 'consequenceNode',
      position: { x: 981.9516995315196, y: -39.86682299196542 },
      data: {
        label: 'Illness and Lawsuits',
        description: 'Consequence: Health impacts for consumers and potential legal actions against the producer.'
      },
      measured: { width: 193, height: 130 },
      selected: false,
      dragging: false,
    },
    {
      id: 'consequenceNode-2',
      type: 'consequenceNode',
      position: { x: 1008.1284872490717, y: 183.00000000000003 },
      data: {
        label: 'Brand Reputation Damage',
        description: 'Consequence: Loss of customer trust and sales following widely publicized contamination events.'
      },
      measured: { width: 142, height: 130 },
      selected: false,
      dragging: false,
    },
    {
      id: 'consequenceNode-3',
      type: 'consequenceNode',
      position: { x: 965.4189914993813, y: 441.37772566934484 },
      data: {
        label: 'Regulatory Penalties',
        description: 'Consequence: Regulatory fines and restrictions that follow demonstrated safety failures.'
      },
      measured: { width: 237, height: 130 },
      selected: false,
      dragging: false,
    },
    
] as unknown as AppNode[];