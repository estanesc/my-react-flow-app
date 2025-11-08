import { Handle, Position } from '@xyflow/react';
import './DegradationFactorNode.css';

interface DegradationFactorNodeProps {
  data: {
    label: string;
  };
}

const DegradationFactorNode: React.FC<DegradationFactorNodeProps> = ({ data }) => {
  return (
    <div className="element degradation-factor">
      <Handle type="target" position={Position.Left} />
      <div className="node-label">
        <strong>{data.label}</strong>
      </div>
    </div>
  );
};

export default DegradationFactorNode;