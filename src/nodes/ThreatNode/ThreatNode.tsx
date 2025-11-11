import { Handle, Position } from '@xyflow/react';
import './ThreatNode.css';

interface ThreatNodeProps {
  data: {
    label: string;
  };
}

const ThreatNode: React.FC<ThreatNodeProps> = ({ data }) => {
  return (
    <div className="element threat svg-node">
      <svg
        className="svg-node__graphic"
        viewBox="0 0 100 60"
        width="120"
        height="60"
        role="img"
        aria-hidden="true"
        focusable="false"
        xmlns="http://www.w3.org/2000/svg"
        pointerEvents="none"
      >
        <rect className="svg-bg" x="0" y="0" width="100" height="60" rx="8" />
        <circle cx="50" cy="30" r="12" fill="var(--element-color-on)" opacity="0.95" />
      </svg>

      <div className="node-label">
        <strong>{data.label}</strong>
      </div>

      <Handle type="source" position={Position.Right} style={{ top: '50%', transform: 'translateY(-50%)' }} />
    </div>
  );
};

export default ThreatNode;