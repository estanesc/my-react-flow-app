// HazardNode.tsx - Simplified Octagon/Warning box
import React from 'react';
import { Handle, Position } from '@xyflow/react';

type HazardNodeProps = {
  data: {
    label?: React.ReactNode;
  };
};

export const HazardNode: React.FC<HazardNodeProps> = ({ data }) => (
  <div
    style={{
      padding: '10px 15px',
      backgroundColor: '#ffc000', // Yellow
      border: '3px solid #000',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: '14px',
      // This simple trapezoid/rectangle approximates the shape
    }}
  >
    {data.label}
    <Handle type="source" position={Position.Bottom} style={{ background: '#000' }} />
  </div>
);