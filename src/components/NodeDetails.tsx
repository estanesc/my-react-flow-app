import React, { useCallback, useEffect, useState } from 'react';
import type { AppNode } from '../nodes/types';

interface Props {
  node: AppNode | null;
  onSave: (id: string, data: { label?: string; description?: string }) => void;
  onClose: () => void;
}

const NodeDetails: React.FC<Props> = ({ node, onSave, onClose }) => {
  const [label, setLabel] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (node) {
      setLabel(node.data?.label ?? '');
      setDescription(node.data?.description ?? '');
    }
  }, [node]);

  const handleSave = useCallback(() => {
    if (!node) return;
    onSave(node.id, { label: label.trim(), description: description.trim() });
    onClose();
  }, [node, label, description, onSave, onClose]);

  if (!node) return null;

  return (
    <aside style={styles.panel} aria-label="Node details panel">
      <div style={styles.header}>
        <strong>Node Details</strong>
        <button onClick={onClose} style={styles.closeButton} aria-label="Close">✕</button>
      </div>

      <div style={styles.field}>
        <label style={styles.label}>ID</label>
        <div style={styles.value}>{node.id}</div>
      </div>

      <div style={styles.field}>
        <label style={styles.label}>Type</label>
        <div style={styles.value}>{node.type}</div>
      </div>

      <div style={styles.field}>
        <label style={styles.label}>Label</label>
        <input value={label} onChange={(e) => setLabel(e.target.value)} style={styles.input} />
      </div>

      <div style={styles.field}>
        <label style={styles.label}>Description</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={4} style={styles.textarea} />
      </div>

      <div style={styles.actions}>
        <button onClick={handleSave} style={styles.saveButton}>Save</button>
        <button onClick={onClose} style={styles.secondaryButton}>Cancel</button>
      </div>
    </aside>
  );
};

const styles: Record<string, React.CSSProperties> = {
  panel: {
    position: 'absolute',
    right: 12,
    top: 12,
    width: 320,
    maxWidth: 'calc(100vw - 40px)',
    background: 'var(--details-surface)',
    borderRadius: 8,
    boxShadow: '0 10px 30px rgba(2,6,23,0.12)',
    padding: 12,
    zIndex: 60,
    fontFamily: 'Inter, system-ui, sans-serif',
    color: 'var(--details-text)',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  closeButton: {
    border: 'none',
    background: 'transparent',
    cursor: 'pointer',
    fontSize: 16,
  },
  field: { marginBottom: 10 },
  label: { display: 'block', fontSize: 12, fontWeight: 600, marginBottom: 6, color: 'var(--muted)' },
  input: { width: '100%', padding: 8, borderRadius: 6, border: '1px solid rgba(11,18,32,0.06)', background: 'rgba(11,18,32,0.03)', color: 'var(--details-text)' },
  textarea: { width: '100%', padding: 8, borderRadius: 6, border: '1px solid rgba(11,18,32,0.06)', resize: 'vertical', background: 'rgba(11,18,32,0.03)', color: 'var(--details-text)' },
  value: { fontSize: 13, color: 'var(--details-text)', padding: '6px 8px', borderRadius: 6, background: 'rgba(11,18,32,0.02)' },
  actions: { display: 'flex', gap: 8, justifyContent: 'flex-end', marginTop: 8 },
  saveButton: { background: '#1976d2', color: '#fff', padding: '8px 12px', border: 'none', borderRadius: 6, cursor: 'pointer' },
  secondaryButton: { background: 'transparent', color: 'var(--muted)', padding: '8px 12px', border: '1px solid rgba(255,255,255,0.04)', borderRadius: 6, cursor: 'pointer' },
};

export default NodeDetails;
