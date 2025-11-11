import { Handle, Position } from '@xyflow/react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import './ThreatNode.css';

interface ThreatNodeProps {
  data: {
    label: string;
    description: string;
  };
}

const ThreatNode: React.FC<ThreatNodeProps> = ({ data }) => {
  return (
    <Tippy content={data.description} placement="top" arrow={true}>
      <div className="element threat svg-node">
      <svg
        className="svg-node__graphic"
        viewBox="0 0 100 60"
        width="120"
        height="60"
        role="img"
        aria-hidden="true"
        focusable="false"
        xmlns="http://www.w3.org/2000/svg"
        pointerEvents="none"
      >
        <rect className="svg-bg" x="0" y="0" width="100" height="60" rx="8" />
  <path d="M55 14 L38 34 L52 34 L40 46 L66 22 L54 22 Z" fill="currentColor" />
      </svg>

      <div className="node-label">
        <strong>{data.label}</strong>
      </div>

      <Handle type="source" position={Position.Right} style={{ top: '50%', transform: 'translateY(-50%)' }} />
      </div>
    </Tippy>
  );
};

export default ThreatNode;