import type { NodeTypes } from '@xyflow/react';

import ConsequenceNode from './ConsequenceNode/ConsequenceNode.tsx';
import { AppNode } from './types';

export const nodeTypes = {
  consequenceNode: ConsequenceNode,
} satisfies NodeTypes;

export const initialNodes = [
    {
    id: 'consequenceNode-1',
    type: 'consequenceNode',
    position: { x: 0, y: 0 },
    data: { label: 'Consequence Node' },
  },
] as unknown as AppNode[];