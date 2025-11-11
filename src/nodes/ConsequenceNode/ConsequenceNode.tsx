import { Handle, Position } from '@xyflow/react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import './ConsequenceNode.css';

interface ConsequenceNodeProps {
  data: {
    label: string;
  };
}

const ConsequenceNode: React.FC<ConsequenceNodeProps> = ({ data }) => {
  return (
    <Tippy content={data.label} placement="top" arrow={true}>
      <div className="element consequence svg-node">
      <Handle type="target" position={Position.Left} style={{ top: '50%', transform: 'translateY(-50%)' }} />

      <svg className="svg-node__graphic" viewBox="0 0 100 60" width="120" height="60" role="img" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" pointerEvents="none">
        <rect className="svg-bg" x="0" y="0" width="100" height="60" rx="8" />
        <g fill="currentColor">
          <path d="M30 25 L40 20 L50 30 L60 22 L70 30 L60 38 L50 32 L40 40 Z" />
        </g>
      </svg>

      <div className="node-label">
        <strong>{data.label}</strong>
      </div>
      </div>
    </Tippy>
  );
};

export default ConsequenceNode;