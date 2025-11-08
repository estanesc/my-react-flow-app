import { Handle, Position } from '@xyflow/react';
import './TopEventNode.css';

interface TopEventNodeProps {
  data: {
    label: string;
  };
}

const TopEventNode: React.FC<TopEventNodeProps> = ({ data }) => {
  return (
    <div className="element top-event">
      <Handle type="target" position={Position.Left} />
      <div className="node-label">
        <strong>{data.label}</strong>
      </div>
      <Handle type="source" position={Position.Right} />
    </div>
  );
};

export default TopEventNode;