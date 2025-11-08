import { Handle, Position } from '@xyflow/react';
import './MitigationBarrierNode.css';

interface MitigationBarrierNodeProps {
  data: {
    label: string;
  };
}

const MitigationBarrierNode: React.FC<MitigationBarrierNodeProps> = ({ data }) => {
  return (
    <div className="element mitigative-barrier">
      <Handle type="target" position={Position.Left} />
      <div className="node-label">
        <strong>{data.label}</strong>
      </div>
      <Handle type="source" position={Position.Right} />
    </div>
  );
};

export default MitigationBarrierNode;