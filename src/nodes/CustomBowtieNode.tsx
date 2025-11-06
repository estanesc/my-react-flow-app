// CustomBowtieNode.tsx - A reusable component for most rectangular elements

import React from 'react';
import { Handle, Position } from '@xyflow/react';

// Maps your custom node type to its color and handle positions
const config = {
  threatNode: { color: '#4a86e8', handles: [Position.Right] },
  consequenceNode: { color: '#cc0000', handles: [Position.Left] },
  degradationFactorNode: { color: '#ffec3e', handles: [Position.Right] },
  // Barriers need both Left and Right handles
  preventionBarrierNode: { color: '#6aa84f', handles: [Position.Left, Position.Right] },
  mitigationBarrierNode: { color: '#6aa84f', handles: [Position.Left, Position.Right] },
  degradationControlNode: { color: '#6aa84f', handles: [Position.Left, Position.Right] },
};
 
type CustomBowtieNodeProps = {
  data: { label?: string };
  type: keyof typeof config;
};

export const CustomBowtieNode: React.FC<CustomBowtieNodeProps> = ({ data, type }) => {
  const { color, handles } = config[type] || { color: 'gray', handles: [Position.Left, Position.Right] };
  const isBarrier = type.includes('Barrier') || type.includes('Control');

  return (
    <div
      style={{
        padding: '10px 15px',
        border: `2px solid ${color}`,
        borderRadius: isBarrier ? '5px 5px 20px 5px' : '5px', // Simulate the clip/pin shape for barriers
        backgroundColor: color + '33', // Lighter background
        minWidth: '120px',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '12px',
      }}
    >
      {data.label}
      {handles.includes(Position.Left) && <Handle type="target" position={Position.Left} style={{ background: color }} />}
      {handles.includes(Position.Right) && <Handle type="source" position={Position.Right} style={{ background: color }} />}
      {/* Degradation nodes connect to the barrier/control below them, but we'll manage this via layout coordinates for simplicity */}
    </div>
  );
};