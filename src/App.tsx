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
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

import '@xyflow/react/dist/style.css';

import { initialNodes, nodeTypes } from './nodes';
import { initialEdges, edgeTypes } from './edges';
import { getLayoutedElements } from './utils/elkLayout';
import NodeDetails from './components/NodeDetails';
import Legend from './components/Legend';
import type { AppNode } from './nodes/types';

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
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);

  // Keep node `selected` property in sync with `selectedNodeId` so React Flow
  // and our custom node styles reflect selection visually.
  useLayoutEffect(() => {
    setNodes((nds) => nds.map((n) => ({ ...n, selected: n.id === selectedNodeId })));
  }, [selectedNodeId, setNodes]);

  const [nodesReadyFlag, setNodesReadyFlag] = useState(false);
  const { toObject, setViewport } = useReactFlow();

  // Ensure the diagram is centered on initial load by triggering the
  // `nodesReadyFlag` which `FlowInner` listens for to call `fitView`.
  useLayoutEffect(() => {
    // Flip the flag once after mount so the child can call `fitView`
    setNodesReadyFlag(true);
  }, []);

  const onConnect: OnConnect = useCallback(
    (connection) => {
      console.log('New connection established:', connection);
      return setEdges((es) => addEdge(connection, es));
    },
    [setEdges]
  );

  // Save diagram as JSON file
  const onSave = useCallback(() => {
    const flow = toObject();
    const dataStr = JSON.stringify(flow, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
    const exportFileDefaultName = `bowtie-diagram-${new Date().toISOString().slice(0, 10)}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
    console.log('Diagram saved as file!');
  }, [toObject]);

  // Load diagram from JSON file
  const onLoad = useCallback(() => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    
    input.onchange = (e: Event) => {
      const target = e.target as HTMLInputElement;
      const file = target.files?.[0];
      
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          try {
            const flow = JSON.parse(event.target?.result as string);
            setNodes(flow.nodes || []);
            setEdges(flow.edges || []);
            if (flow.viewport) {
              setViewport(flow.viewport);
            }
            console.log('Diagram loaded from file!', flow);
            alert('Diagram loaded successfully!');
          } catch (error) {
            console.error('Error loading diagram:', error);
            alert('Error loading diagram file. Please check the file format.');
          }
        };
        reader.readAsText(file);
      }
    };
    
    input.click();
  }, [setNodes, setEdges, setViewport]);

  // Export diagram to PDF
  const onExportPDF = useCallback(() => {
    const flowElement = document.querySelector('.react-flow') as HTMLElement;
    
    if (!flowElement) {
      alert('Unable to find diagram element');
      return;
    }

    // Show loading message
    const originalCursor = document.body.style.cursor;
    document.body.style.cursor = 'wait';

    // Inject temporary styles to make sure SVG edges/paths are visible to html2canvas
    const tmpStyle = document.createElement('style');
    tmpStyle.setAttribute('data-html2canvas-fix', 'true');
    tmpStyle.innerHTML = `
      .react-flow svg path, .react-flow svg line, .react-flow svg polyline {
        stroke: #222 !important;
        stroke-width: 1.5px !important;
        fill: none !important;
      }
      .react-flow svg { background: transparent; }
    `;
    flowElement.appendChild(tmpStyle);

    html2canvas(flowElement, {
      backgroundColor: '#ffffff',
      scale: Math.max(2, window.devicePixelRatio || 1), // Higher quality and device-aware
      logging: false,
      useCORS: true,
      foreignObjectRendering: true,
    }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      
      // Calculate PDF dimensions
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = imgWidth / imgHeight;
      
      // Use landscape orientation for wider diagrams
      const pdfWidth = ratio > 1.4 ? 297 : 210; // A4 dimensions in mm
      const pdfHeight = ratio > 1.4 ? 210 : 297;
      
      const pdf = new jsPDF({
        orientation: ratio > 1.4 ? 'landscape' : 'portrait',
        unit: 'mm',
        format: 'a4',
      });
      
      // Calculate image dimensions to fit PDF page with margins
      const margin = 10;
      const maxWidth = pdfWidth - (margin * 2);
      const maxHeight = pdfHeight - (margin * 2);
      
      let finalWidth = maxWidth;
      let finalHeight = finalWidth / ratio;
      
      if (finalHeight > maxHeight) {
        finalHeight = maxHeight;
        finalWidth = finalHeight * ratio;
      }
      
      // Center the image
      const x = (pdfWidth - finalWidth) / 2;
      const y = (pdfHeight - finalHeight) / 2;
      
      pdf.addImage(imgData, 'PNG', x, y, finalWidth, finalHeight);
      
      const fileName = `bowtie-diagram-${new Date().toISOString().slice(0, 10)}.pdf`;
      pdf.save(fileName);
      
      // cleanup temporary style
      tmpStyle.remove();

      document.body.style.cursor = originalCursor;
      console.log('Diagram exported to PDF!');
    }).catch((error) => {
      console.error('Error exporting to PDF:', error);
      // cleanup temporary style if present
      const existing = document.querySelector('style[data-html2canvas-fix]');
      if (existing) existing.remove();
      document.body.style.cursor = originalCursor;
      alert('Error exporting diagram to PDF');
    });
  }, []);

  /* eslint-disable @typescript-eslint/no-unused-vars */
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
  /* eslint-enable @typescript-eslint/no-unused-vars */
  // Reference the function to avoid "declared but its value is never read" compile errors.
  // It remains available for manual layout triggers (see commented usage below).
  void applyLayoutAndFit;

  const selectedNode = nodes.find((n) => n.id === selectedNodeId) ?? null;

  


  // Initial auto-layout on mount disabled to preserve `initialNodes` positions.
  // If you want to enable automatic layout on first load, uncomment below.
  // useLayoutEffect(() => {
  //   applyLayoutAndFit(initialNodes, initialEdges);
  // }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <ReactFlow
      nodes={nodes}
      nodeTypes={nodeTypes}
      onNodesChange={onNodesChange}
      edges={edges}
      edgeTypes={edgeTypes}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      onNodeClick={(_, node) => {
        setSelectedNodeId(node.id);
      }}
      onPaneClick={() => setSelectedNodeId(null)}
      proOptions={{ hideAttribution: false }}
    >
      <FlowInner nodesReadyFlag={nodesReadyFlag} />

      {/* Node details panel (appears when a node is selected) */}
      <NodeDetails
        node={selectedNode}
        onSave={(id, data) => {
          setNodes((nds) => (nds.map((n) => (n.id === id ? ({ ...n, data: { ...n.data, ...data } }) : n)) as unknown) as AppNode[]);
        }}
        onClose={() => setSelectedNodeId(null)}
      />

      <Legend />
      <div style={{ position: 'absolute', top: 10, right: 10, zIndex: 10, display: 'flex', gap: '8px', flexDirection: 'column' }}>
        <button
          onClick={onSave}
          style={{
            userSelect: 'none',
            padding: '8px 12px',
            cursor: 'pointer',
            backgroundColor: '#2E7D32', /* muted/darker green */
            color: 'white',
            border: '1px solid rgba(0,0,0,0.12)',
            borderRadius: '4px',
          }}
        >
          Save Diagram
        </button>
        <button
          onClick={onLoad}
          style={{
            userSelect: 'none',
            padding: '8px 12px',
            cursor: 'pointer',
            backgroundColor: '#1565C0', /* muted/darker blue */
            color: 'white',
            border: '1px solid rgba(0,0,0,0.12)',
            borderRadius: '4px',
          }}
        >
          Load Diagram
        </button>
        <button
          onClick={onExportPDF}
          style={{
            userSelect: 'none',
            padding: '8px 12px',
            cursor: 'pointer',
            backgroundColor: '#AD1457', /* darker muted magenta */
            color: 'white',
            border: '1px solid rgba(0,0,0,0.12)',
            borderRadius: '4px',
          }}
        >
          Export to PDF
        </button>
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
