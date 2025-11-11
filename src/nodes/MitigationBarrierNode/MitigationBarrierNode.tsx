import { Handle, Position } from '@xyflow/react';
import './MitigationBarrierNode.css';

interface MitigationBarrierNodeProps {
  data: {
    label: string;
  };
}

const MitigationBarrierNode: React.FC<MitigationBarrierNodeProps> = ({ data }) => {
  return (
    <div className="element mitigative-barrier svg-node">
      <Handle type="target" position={Position.Left} style={{ top: '50%', transform: 'translateY(-50%)' }} />

      <svg className="svg-node__graphic" viewBox="0 0 100 60" width="120" height="60" role="img" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" pointerEvents="none">
        <rect className="svg-bg" x="0" y="0" width="100" height="60" rx="6" />
        <rect x="10" y="10" width="80" height="40" rx="6" fill="var(--element-color-on)" opacity="0.06" />
        <path d="M30 35 L45 25 L70 40" stroke="var(--element-color-on)" strokeWidth="2" fill="none" strokeLinecap="round" />
      </svg>

      <div className="node-label">
        <strong>{data.label}</strong>
      </div>

      <Handle type="source" position={Position.Right} style={{ top: '50%', transform: 'translateY(-50%)' }} />
    </div>
  );
};

export default MitigationBarrierNode;