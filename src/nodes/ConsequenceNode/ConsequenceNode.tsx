import { Handle, Position } from '@xyflow/react';
import './ConsequenceNode.css';

interface ConsequenceNodeProps {
  data: {
    label: string;
  };
}

const ConsequenceNode: React.FC<ConsequenceNodeProps> = ({ data }) => {
  return (
    <div className="element consequence">
      <Handle type="target" position={Position.Left} />
      <div className="node-label">
        <strong>{data.label}</strong>
      </div>
    </div>
  );
};

export default ConsequenceNode;