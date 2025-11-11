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
        <rect className="svg-bg" x="0" y="0" width="100" height="60" rx="10" />
        <g transform="translate(50,30)" fill="currentColor">
          <path d="M0 -18 L5 -6 L18 -6 L7 2 L12 16 L0 8 L-12 16 L-7 2 L-18 -6 L-5 -6 Z" />
          <circle cx="0" cy="0" r="3" fill="var(--top-event)" />
        </g>
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