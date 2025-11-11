import { Handle, Position } from '@xyflow/react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import './DegradationControlNode.css';

interface DegradationControlNodeProps {
  data: {
    label: string;
  };
}

const DegradationControlNode: React.FC<DegradationControlNodeProps> = ({ data }) => {
  return (
    <Tippy content={data.label} placement="top" arrow={true}>
      <div className="element degradation-control svg-node">
      <Handle type="target" position={Position.Left} style={{ top: '50%', transform: 'translateY(-50%)' }} />

      <svg className="svg-node__graphic" viewBox="0 0 100 60" width="120" height="60" role="img" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" pointerEvents="none">
        <rect className="svg-bg" x="0" y="0" width="100" height="60" rx="6" />
        <g transform="translate(50,32)" fill="currentColor">
          <path d="M-10 -2 L10 2 L8 8 L-8 4 Z" />
          <circle cx="0" cy="0" r="6" />
        </g>
      </svg>

      <div className="node-label">
        <strong>{data.label}</strong>
      </div>

      <Handle type="source" position={Position.Right} style={{ top: '50%', transform: 'translateY(-50%)' }} />
      </div>
    </Tippy>
  );
};

export default DegradationControlNode;