import React from 'react';

const items = [
  { key: 'hazard', label: 'Hazard', colorVar: '--hazard' },
  { key: 'top-event', label: 'Top Event', colorVar: '--top-event' },
  { key: 'threat', label: 'Threat', colorVar: '--threat' },
  { key: 'preventive-barrier', label: 'Prevention', colorVar: '--preventive' },
  { key: 'mitigative-barrier', label: 'Mitigation', colorVar: '--mitigative' },
  { key: 'consequence', label: 'Consequence', colorVar: '--consequence' },
  { key: 'degradation-factor', label: 'Degradation Factor', colorVar: '--degradation-factor' },
  { key: 'degradation-control', label: 'Degradation Control', colorVar: '--degradation-control' },
];

export default function Legend() {
  return (
    <div className="rf-legend" aria-hidden={false}>
      {items.map((it) => (
        <div className="rf-legend-item" key={it.key}>
          <span
            className="rf-legend-swatch"
            style={{ background: `var(${it.colorVar})` }}
            aria-hidden
          />
          <span className="rf-legend-label">{it.label}</span>
        </div>
      ))}
    </div>
  );
}
