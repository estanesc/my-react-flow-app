import { Handle, Position } from '@xyflow/react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import './DegradationFactorNode.css';

interface DegradationFactorNodeProps {
  data: {
    label: string;
    description: string;
  };
}

const DegradationFactorNode: React.FC<DegradationFactorNodeProps> = ({ data }) => {
  return (
    <Tippy content={data.description} placement="top" arrow={true}>
      <div className="element degradation-factor svg-node">
      
      <svg className="svg-node__graphic" viewBox="0 0 100 60" width="120" height="60" role="img" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" pointerEvents="none">
        <rect className="svg-bg" x="0" y="0" width="100" height="60" rx="6" />
        <polygon points="50,14 66,46 34,46" fill="currentColor" />
      </svg>

      <div className="node-label">
        <strong>{data.label}</strong>
      </div>

      <Handle type="source" position={Position.Right} style={{ top: '50%', transform: 'translateY(-50%)' }} />
      </div>
    </Tippy>
  );
};

export default DegradationFactorNode;