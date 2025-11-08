import { Handle, Position } from '@xyflow/react';
import './CustomBowtieNode.css';

interface CustomBowtieNodeProps {
  data: {
    label: string;
  };
}

const CustomBowtieNode: React.FC<CustomBowtieNodeProps> = ({ data }) => {
  return (
    <div className="element hazard">
      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />
      <div className="custom-node-content">
        <strong>{data.label}</strong>
      </div>
    </div>
  );
};

export default CustomBowtieNode;