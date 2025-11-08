import { Handle, Position } from '@xyflow/react';
import './PreventionBarrierNode.css';

interface PreventionBarrierNodeProps {
  data: {
    label: string;
  };
}

const PreventionBarrierNode: React.FC<PreventionBarrierNodeProps> = ({ data }) => {
  return (
    <div className="element preventive-barrier">
      <Handle type="target" position={Position.Left} />
      <div className="node-label">
        <strong>{data.label}</strong>
      </div>
      <Handle type="source" position={Position.Right} />
    </div>
  );
};

export default PreventionBarrierNode;