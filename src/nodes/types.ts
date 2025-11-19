//import type { Node, BuiltInNode } from '@xyflow/react';
import type { Node } from '@xyflow/react';

export type PositionLoggerNode = Node<{ label: string }, 'position-logger'>;
type CustomNode = Node<{ label: string; description?: string }, 'custom'>;
export type AppNode = CustomNode;
