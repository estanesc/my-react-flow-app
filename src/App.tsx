import { useLayoutEffect, useCallback } from 'react';
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  ReactFlowProvider,
  useReactFlow,
  addEdge,
  useNodesState,
  useEdgesState,
  type OnConnect,
} from '@xyflow/react';

import '@xyflow/react/dist/style.css';

// Assuming these files exist and provide the necessary data/functions
import { initialNodes, nodeTypes } from './nodes';
import { initialEdges, edgeTypes } from './edges';
import { getLayoutedElements } from './utils/elkLayout';

// --- 1. Component that uses the React Flow context and handles all logic ---
function FlowComponent() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  
  // ✅ useReactFlow is now inside a component wrapped by ReactFlowProvider
  const { fitView } = useReactFlow(); 

  const onConnect: OnConnect = useCallback(
    (connection) => {
      console.log('New connection established:', connection);
      return setEdges((edges) => addEdge(connection, edges));
    },
    [setEdges]
  );

  /**
   * Function to calculate and apply the ELK layout.
   * This is used for the manual "Run Auto-Layout" button.
   */
  const onLayout = useCallback(
    () => {
      // Pass current nodes/edges (from state) to the layout utility
      getLayoutedElements(nodes, edges).then(({ nodes: layoutedNodes, edges: layoutedEdges }) => {
        setNodes(layoutedNodes);
        setEdges(layoutedEdges);
        // Zoom/pan the view to fit the new layout
        window.requestAnimationFrame(() => {
          fitView();
        });
      });
    },
    // IMPORTANT: Dependencies must be included here for the manual button to work with current data
    [nodes, edges, setNodes, setEdges, fitView],
  );

  /**
   * Trigger initial layout ONCE on mount.
   * This fixes the flickering and allows user interaction.
   */
  useLayoutEffect(() => {
    // We use the initial data directly here, so the effect only runs once on mount.
    getLayoutedElements(initialNodes, initialEdges).then(({ nodes: layoutedNodes, edges: layoutedEdges }) => {
      setNodes(layoutedNodes);
      setEdges(layoutedEdges);
      window.requestAnimationFrame(() => {
        fitView();
      });
    });
  // ✅ Empty dependency array: runs once on mount only.
  // This prevents infinite re-layouts that caused flickering and blocked movement.
  }, []); 

  // The main ReactFlow canvas
  return (
    <ReactFlow
      nodes={nodes}
      nodeTypes={nodeTypes}
      onNodesChange={onNodesChange}
      edges={edges}
      edgeTypes={edgeTypes}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      fitView
      // Ensure nodes can be dragged and canvas can be zoomed/panned
      // (These are default, but crucial for interaction)
      proOptions={{ hideAttribution: false, }} 
    >
      <Background />
      <MiniMap />
      <Controls />
      {/* Button for manual re-layout */}
      <div style={{ position: 'absolute', top: 10, right: 10, zIndex: 10 }}>
        <button onClick={onLayout} style={{ userSelect: "none" }}>Run Auto-Layout</button>
      </div>
    </ReactFlow>
  );
}

// --- 2. Main App Component (The wrapper) ---
export default function App() {
  return (
    // Set a defined size for the container
    <div style={{ width: '100vw', height: '100vh' }}>
      {/* ✅ ReactFlowProvider wraps the component that uses useReactFlow */}
      <ReactFlowProvider>
        <FlowComponent />
      </ReactFlowProvider>
    </div>
  );
}