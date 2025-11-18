import { Handle, Position } from '@xyflow/react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import './TopEventNode.css';

interface TopEventNodeProps {
  data: {
    label: string;
    description: string;
  };
}

const TopEventNode: React.FC<TopEventNodeProps> = ({ data }) => {
  return (
    <Tippy content={data.description} placement="top" arrow={true}>
      <div className="element top-event svg-node">
      <Handle id="topevent-left-1" type="target" position={Position.Left} style={{ top: '35%', transform: 'translateY(-35%)' }} />
      <Handle id="topevent-left-2" type="target" position={Position.Left} style={{ top: '50%', transform: 'translateY(-50%)' }} />
      <Handle id="topevent-left-3" type="target" position={Position.Left} style={{ top: '75%', transform: 'translateY(-75%)' }} />

      <svg className="svg-node__graphic" viewBox="0 0 100 60" width="120" height="60" role="img" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" pointerEvents="none">
        <rect className="svg-bg" x="0" y="0" width="100" height="60" rx="10" />
        <g transform="translate(50,30)" fill="currentColor">
          <path d="M0 -18 L5 -6 L18 -6 L7 2 L12 16 L0 8 L-12 16 L-7 2 L-18 -6 L-5 -6 Z" />
          <circle cx="0" cy="0" r="3" fill="var(--top-event)" />
        </g>
      </svg>

      <div className="node-label">
        <strong>{data.label}</strong>
      </div>

      <Handle id="topevent-right-1" type="source" position={Position.Right} style={{ top: '35%', transform: 'translateY(-35%)' }} />
      <Handle id="topevent-right-2" type="source" position={Position.Right} style={{ top: '50%', transform: 'translateY(-50%)' }} />
      <Handle id="topevent-right-3" type="source" position={Position.Right} style={{ top: '75%', transform: 'translateY(-75%)' }} />
      <Handle id="topevent-top" type="target" position={Position.Top} />
      </div>
    </Tippy>
  );
};

export default TopEventNode;