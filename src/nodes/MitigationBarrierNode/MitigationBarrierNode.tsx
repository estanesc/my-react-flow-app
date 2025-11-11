import { Handle, Position } from '@xyflow/react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import './MitigationBarrierNode.css';

interface MitigationBarrierNodeProps {
  data: {
    label: string;
  };
}

const MitigationBarrierNode: React.FC<MitigationBarrierNodeProps> = ({ data }) => {
  return (
    <Tippy content={data.label} placement="top" arrow={true}>
      <div className="element mitigative-barrier svg-node">
      <Handle type="target" position={Position.Left} style={{ top: '50%', transform: 'translateY(-50%)' }} />

      <svg className="svg-node__graphic" viewBox="0 0 100 60" width="120" height="60" role="img" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" pointerEvents="none">
        <rect className="svg-bg" x="0" y="0" width="100" height="60" rx="6" />
        <g transform="translate(50,30)" fill="currentColor">
          <rect x="-18" y="-6" width="36" height="12" rx="3" />
          <path d="M-8 -2 L0 6 L12 -6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
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

export default MitigationBarrierNode;