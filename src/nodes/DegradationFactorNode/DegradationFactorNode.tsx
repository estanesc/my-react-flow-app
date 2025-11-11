import { Handle, Position } from '@xyflow/react';
import './DegradationFactorNode.css';

interface DegradationFactorNodeProps {
  data: {
    label: string;
  };
}

const DegradationFactorNode: React.FC<DegradationFactorNodeProps> = ({ data }) => {
  return (
    <div className="element degradation-factor svg-node">
      <Handle type="target" position={Position.Left} style={{ top: '50%', transform: 'translateY(-50%)' }} />

      <svg className="svg-node__graphic" viewBox="0 0 100 60" width="120" height="60" role="img" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" pointerEvents="none">
        <rect x="12" y="12" width="76" height="36" rx="6" fill="var(--element-color-on)" opacity="0.06" />
        <circle cx="30" cy="30" r="6" fill="var(--element-color-on)" />
        <circle cx="70" cy="30" r="6" fill="var(--element-color-on)" />
      </svg>

      <div className="node-label">
        <strong>{data.label}</strong>
      </div>

      <Handle type="source" position={Position.Right} style={{ top: '50%', transform: 'translateY(-50%)' }} />
    </div>
  );
};

export default DegradationFactorNode;