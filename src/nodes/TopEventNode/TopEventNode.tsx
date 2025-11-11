import { Handle, Position } from '@xyflow/react';
import './TopEventNode.css';

interface TopEventNodeProps {
  data: {
    label: string;
  };
}

const TopEventNode: React.FC<TopEventNodeProps> = ({ data }) => {
  return (
    <div className="element top-event svg-node">
      <Handle id="topevent-left" type="target" position={Position.Left} style={{ top: '50%', transform: 'translateY(-50%)' }} />

      <svg className="svg-node__graphic" viewBox="0 0 100 60" width="120" height="60" role="img" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" pointerEvents="none">
        <rect x="0" y="0" width="100" height="60" rx="10" fill="none" />
        <path d="M20 40 C40 10 60 10 80 40 Z" fill="var(--element-color-on)" opacity="0.95" />
      </svg>

      <div className="node-label">
        <strong>{data.label}</strong>
      </div>

      <Handle id="topevent-right" type="source" position={Position.Right} style={{ top: '50%', transform: 'translateY(-50%)' }} />
      <Handle id="topevent-top" type="target" position={Position.Top} />
    </div>
  );
};

export default TopEventNode;