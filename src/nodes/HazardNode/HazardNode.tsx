import { Handle, Position } from '@xyflow/react';
import './HazardNode.css';

interface HazardNodeProps {
  data: {
    label: string;
  };
}

const HazardNode: React.FC<HazardNodeProps> = ({ data }) => {
  return (
    <div className="element hazard svg-node" role="group" aria-label={data.label}>
      {/* Left target handle (centered vertically) */}
      <Handle
        type="target"
        position={Position.Left}
        id="hazard-left"
        style={{ top: '50%', transform: 'translateY(-50%)' }}
      />

      {/* Inline SVG graphic for crisp vector rendering */}
      <svg
        className="svg-node__graphic"
        viewBox="0 0 100 80"
        width="140"
        height="80"
        role="img"
        aria-hidden="true"
        focusable="false"
        xmlns="http://www.w3.org/2000/svg"
        pointerEvents="none"
      >
        <path className="svg-bg" d="M50 4 L84 20 L84 48 C84 64 68 76 50 80 C32 76 16 64 16 48 L16 20 Z" stroke="rgba(0,0,0,0.06)" strokeWidth="2" />

        <g transform="translate(50,40)" fill="currentColor" stroke="none">
          <rect x="-4" y="-16" width="8" height="14" rx="2" />
          <circle cx="0" cy="18" r="4" />
        </g>
      </svg>

      <div className="node-label">
        <strong>{data.label}</strong>
      </div>

      {/* Right source handle (centered vertically) */}
      <Handle
        type="source"
        position={Position.Right}
        id="hazard-right"
        style={{ top: '50%', transform: 'translateY(-50%)' }}
      />

      {/* Bottom source for flows that connect downward */}
      <Handle id="hazard-bottom" type="source" position={Position.Bottom} />
    </div>
  );
};

export default HazardNode;