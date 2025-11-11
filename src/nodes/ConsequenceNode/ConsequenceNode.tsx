import { Handle, Position } from '@xyflow/react';
import './ConsequenceNode.css';

interface ConsequenceNodeProps {
  data: {
    label: string;
  };
}

const ConsequenceNode: React.FC<ConsequenceNodeProps> = ({ data }) => {
  return (
    <div className="element consequence svg-node">
      <Handle type="target" position={Position.Left} style={{ top: '50%', transform: 'translateY(-50%)' }} />

      <svg className="svg-node__graphic" viewBox="0 0 100 60" width="120" height="60" role="img" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" pointerEvents="none">
        <rect x="10" y="10" width="80" height="40" rx="8" fill="var(--element-color-on)" opacity="0.12" />
        <circle cx="50" cy="30" r="8" fill="var(--element-color-on)" />
      </svg>

      <div className="node-label">
        <strong>{data.label}</strong>
      </div>
    </div>
  );
};

export default ConsequenceNode;