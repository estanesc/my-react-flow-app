import { Handle, Position } from '@xyflow/react';
import './DegradationControlNode.css';

interface DegradationControlNodeProps {
  data: {
    label: string;
  };
}

const DegradationControlNode: React.FC<DegradationControlNodeProps> = ({ data }) => {
  return (
    <div className="element degradation-control">
      <Handle type="target" position={Position.Left} />
      <div className="node-label">
        <strong>{data.label}</strong>
      </div>
      <Handle type="source" position={Position.Right} />
    </div>
  );
};

export default DegradationControlNode;