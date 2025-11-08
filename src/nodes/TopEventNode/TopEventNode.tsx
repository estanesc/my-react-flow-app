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
      <Handle id="topevent-left" type="target" position={Position.Left} />
      <div className="node-label">
        <strong>{data.label}</strong>
      </div>
      <Handle id="topevent-right" type="source" position={Position.Right} />
      <Handle id="topevent-top" type="target" position={Position.Top} />
    </div>
  );
};

export default TopEventNode;