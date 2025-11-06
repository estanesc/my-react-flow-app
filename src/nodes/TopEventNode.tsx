// TopEventNode.tsx
import { Handle, Position } from '@xyflow/react';

export const TopEventNode = ({ data }: { data: { label: string } }) => (
  <div
    style={{
      width: '100px',
      height: '100px',
      borderRadius: '50%', // Circle shape
      backgroundColor: 'white',
      border: '4px solid #cc0000', // Red border
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: '14px',
    }}
  >
    {data.label}
    <Handle type="target" position={Position.Left} style={{ background: '#cc0000' }} />
    <Handle type="source" position={Position.Right} style={{ background: '#cc0000' }} />
  </div>
);