import { useLayoutEffect, useCallback, useState } from 'react';
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

import { initialNodes, nodeTypes } from './nodes';
import { initialEdges, edgeTypes } from './edges';
import { getLayoutedElements } from './utils/elkLayout';

function FlowInner({ nodesReadyFlag }: { nodesReadyFlag: boolean }) {
  const { fitView } = useReactFlow();

  useLayoutEffect(() => {
    if (nodesReadyFlag) {
      // ensure DOM has updated, then fit
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          fitView({ padding: 0.1 });
        });
      });
    }
  }, [nodesReadyFlag, fitView]);

  return (
    <>
      <Background />
      <MiniMap />
      <Controls />
    </>
  );
}

function FlowComponent() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const [nodesReadyFlag, setNodesReadyFlag] = useState(false);

  const onConnect: OnConnect = useCallback(
    (connection) => {
      console.log('New connection established:', connection);
      return setEdges((es) => addEdge(connection, es));
    },
    [setEdges]
  );

  const applyLayoutAndFit = useCallback(
    (sourceNodes: typeof initialNodes, sourceEdges: typeof initialEdges) => {
      getLayoutedElements(sourceNodes, sourceEdges).then(({ nodes: layoutedNodes, edges: layoutedEdges }) => {
        // Compute minimum Y and shift nodes down by a margin so the graph isn't flush to the top
        const margin = 40; // px, adjust as needed
        const ys = layoutedNodes.map((n) => (n.position?.y ?? 0));
        const minY = ys.length ? Math.min(...ys) : 0;
        const shiftedNodes = layoutedNodes.map((n) => ({
          ...n,
          position: {
            x: n.position?.x ?? 0,
            y: (n.position?.y ?? 0) - minY + margin,
          },
        }));

        // Apply layouted nodes/edges
        setNodes(shiftedNodes);
        setEdges(layoutedEdges);

        // Delay the flag flip until after React re-render / DOM update
        window.requestAnimationFrame(() => {
          // Extra RAF to match manual button timing and ensure children mounted
          window.requestAnimationFrame(() => {
            setNodesReadyFlag((v) => !v);
          });
        });
      });
    },
    [setNodes, setEdges]
  );

  const onLayout = useCallback(() => {
    applyLayoutAndFit(nodes, edges);
  }, [nodes, edges, applyLayoutAndFit]);

  useLayoutEffect(() => {
    // run initial layout once on mount using the initial data
    applyLayoutAndFit(initialNodes, initialEdges);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <ReactFlow
      nodes={nodes}
      nodeTypes={nodeTypes}
      onNodesChange={onNodesChange}
      edges={edges}
      edgeTypes={edgeTypes}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      proOptions={{ hideAttribution: false }}
    >
      <FlowInner nodesReadyFlag={nodesReadyFlag} />

      <div style={{ position: 'absolute', top: 10, right: 10, zIndex: 10 }}>
        <button onClick={onLayout} style={{ userSelect: 'none' }}>Run Auto-Layout</button>
      </div>
    </ReactFlow>
  );
}

export default function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlowProvider>
        <FlowComponent />
      </ReactFlowProvider>
    </div>
  );
}
