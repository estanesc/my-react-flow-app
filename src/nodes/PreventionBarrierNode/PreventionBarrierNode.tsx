import { Handle, Position } from '@xyflow/react';
import './PreventionBarrierNode.css';

interface PreventionBarrierNodeProps {
  data: {
    label: string;
  };
}

const PreventionBarrierNode: React.FC<PreventionBarrierNodeProps> = ({ data }) => {
  return (
    <div className="element preventive-barrier svg-node">
      <Handle type="target" position={Position.Left} style={{ top: '50%', transform: 'translateY(-50%)' }} />

      <svg className="svg-node__graphic" viewBox="0 0 100 60" width="120" height="60" role="img" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" pointerEvents="none">
        <rect className="svg-bg" x="0" y="0" width="100" height="60" rx="6" />
        <g transform="translate(50,32)" fill="currentColor">
          <path d="M-8 -10 a8 8 0 0 1 16 0 v6 a8 8 0 0 1 -16 0 z" />
          <rect x="-4" y="-2" width="8" height="6" rx="1" />
        </g>
      </svg>

      <div className="node-label">
        <strong>{data.label}</strong>
      </div>

      <Handle type="source" position={Position.Right} style={{ top: '50%', transform: 'translateY(-50%)' }} />
    </div>
  );
};

export default PreventionBarrierNode;