# Lessons Learned — React Flow Bowtie Diagram Project

## Project Overview
- **Goal:** Build an interactive Bowtie diagram editor using React + TypeScript and a React Flow distribution (`@xyflow/react`). The app supports custom nodes/edges, layout helpers (ELK), PDF export, a Node Details editor, and UI/UX polish (legend, theme, controls).

## Key Technical Learnings
- **React Flow fundamentals:** Learned how React Flow models a diagram with `nodes` and `edges`, how to register `nodeTypes` and `edgeTypes`, and how to control state using `useNodesState` and `useEdgesState` for predictable updates.
- **Custom nodes & handles:** Built node components (SVG-based and styled) and used named handles to attach edges to specific ports. Naming handles consistently across node components simplifies wiring edges programmatically.
- **Programmatic layout (ELK):** Integrated `elkjs` via the `getLayoutedElements` helper to compute graph layout. Learned to respect ELK's need for explicit node dimensions and to shift positioned nodes by their minimum Y to avoid clipping.
- **Exporting canvas to PDF:** Discovered html2canvas limitations with SVG stroke styles. The working solution used `foreignObjectRendering: true`, device-aware `scale`, and a temporary CSS injection to force visible SVG strokes before capturing.
- **TypeScript typing tradeoffs:** The app uses a union type for `AppNode` data shapes. Mutating node `data` required cautious casts in a few places; the correct fix is to unify shared fields (e.g., optional `description`) in `src/nodes/types.ts` to avoid casts.

## UX & Interaction Learnings
- **Selection & editing:** A Node Details sidebar that edits `data.label` and `data.description` is effective. Syncing the selected node ID with React Flow's internal `node.selected` flag allowed a consistent visual highlight via CSS.
- **Visual hierarchy:** On a dark canvas, nodes with near-white surfaces stand out. We adjusted CSS variables (e.g., `--surface`, `--details-surface`) so node bodies and the details panel have distinct surfaces for readability.
- **Toolbar affordances:** Increased the size and border contrast of React Flow controls and top-right toolbar buttons. Subtle borders and hover states improved discoverability.
- **Legend:** A top-left legend provides immediate mapping from node type → color. Implemented both as a static component and left the option to make it dynamic (derived from `initialNodes` or `nodeTypes`).

## Challenges & Solutions
- **SVG edges not visible in exports:** html2canvas sometimes captures SVG shapes without their CSS-applied strokes. We inject temporary CSS rules to set `stroke`/`stroke-width` prior to capture and remove it afterward.
- **Type mismatches updating node `data`:** Some node data interfaces didn't include optional fields (e.g., `description`). We used local type casts as a pragmatic fix. Long-term: update `src/nodes/types.ts` to add shared optional fields to node data types.
- **Auto-fit on load:** Users couldn't see the whole diagram on load. We added a `nodesReadyFlag` and used two `requestAnimationFrame` cycles before calling `fitView` to ensure DOM nodes rendered before fitting.

## Implementation Decisions & Best Practices
- **CSS variables for theme:** Use CSS variables (e.g., `--canvas-bg`, `--surface`, `--hazard`, etc.) to keep colors in one place and make theme adjustments straightforward.
- **Small, focused components:** Keep node components, the legend, and the details panel isolated for easier testing and styling.
- **Avoid inline magic strings:** Favor CSS variables and central styles rather than hard-coded colors sprinkled throughout components.

## Files & Areas to Inspect
- `src/nodes/` — custom node components and `src/nodes/index.tsx` (exports `nodeTypes` and `initialNodes`).
- `src/edges/index.ts` — initial edges and edge types.
- `src/utils/elkLayout.ts` — ELK layout helper (`getLayoutedElements`).
- `src/components/NodeDetails.tsx` — details sidebar used to edit node data.
- `src/components/Legend.tsx` — legend component for node types.
- `src/App.tsx` — main application wiring (controls, export, node/edge state, NodeDetails, legend).
- `src/index.css` / `src/reactflow-overrides.css` — theme variables and overrides for controls/legend/selection.

## Suggested Next Steps / Improvements
- **TypeScript cleanup:** Update `src/nodes/types.ts` to add shared optional fields (e.g., `description?: string`) so node data updates don't require casts.
- **Dynamic legend & interactions:** Generate the legend from `initialNodes` or `nodeTypes`, allow click-to-toggle visibility, and hover-to-highlight nodes of a type.
- **Theme toggle:** Implement a light/dark theme switch that updates CSS variables and persists the user's preference.
- **Undo/redo & persistence:** Add an action history stack and save/load from local storage for better edit recovery.
- **Tests:** Add unit tests for `getLayoutedElements` and component snapshot tests for node components.
- **Accessibility:** Add keyboard navigation for node selection and ensure color contrast meets WCAG levels for text on colored swatches.

## What we learned (personal / team growth)
- **Working with graph UIs is detail-heavy:** Small visual and interaction choices (handle placement, node sizing, hover states) make a big difference in usability.
- **Tooling matters:** Integrations like html2canvas and ELK are powerful but require adaptation (temporary styles, explicit dimensions). Reading their docs and experimenting saved time.
- **Iterative polish:** Start with a working flow and progressively refine UX (legend, selection highlight, larger controls) rather than trying to get pixel-perfect early.

---
If you want, I can expand this into a slide deck or a short presentation with screenshots showing before/after visuals for the export fix, the legend, and the Node Details panel.
