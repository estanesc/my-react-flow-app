import { Handle, Position } from '@xyflow/react';
import './ThreatNode.css';

interface ThreatNodeProps {
  data: {
    label: string;
  };
}

const ThreatNode: React.FC<ThreatNodeProps> = ({ data }) => {
  return (
    <div className="element threat">
      <div className="node-label">
        <strong>{data.label}</strong>
      </div>
      <Handle type="source" position={Position.Right} />
    </div>
  );
};

export default ThreatNode;