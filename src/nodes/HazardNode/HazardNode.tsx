import { Handle, Position } from '@xyflow/react';
import './HazardNode.css';

interface HazardNodeProps {
  data: {
    label: string;
  };
}

const HazardNode: React.FC<HazardNodeProps> = ({ data }) => {
  return (
    <div className="element hazard">
      <div className="node-label">
        <strong>{data.label}</strong>
      </div>
      <Handle type="target" position={Position.Bottom} />
    </div>
  );
};

export default HazardNode;