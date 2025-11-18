<!-- .github/copilot-instructions.md - guidance for AI coding agents working on this repo -->

# Project-specific Copilot Instructions

This repository is a Vite + TypeScript React app built around React Flow (via `@xyflow/react`). Below are concise, actionable pointers an AI coding agent should follow to be immediately productive.

- Project type: `Vite` + `TypeScript` React app. Entry: `src/main.tsx` → `src/App.tsx`.
- Build / Dev commands (see `package.json`):
  - Start dev server: `npm install` then `npm run dev`.
  - Production build: `npm run build` (runs `tsc && vite build`).
  - Preview build: `npm run preview`.
  - Lint: `npm run lint`.

- Major libraries and integration points:
  - `@xyflow/react`: a React Flow distribution used throughout (components, hooks, types).
  - `elkjs`: layouting engine used in `src/utils/elkLayout.ts` (function: `getLayoutedElements`).
  - `html2canvas` + `jspdf` used in `src/App.tsx` to export diagrams as PDF.

- Key directories to inspect for changes:
  - `src/nodes/` — custom node components. Each node lives in its own folder (`FooNode/FooNode.tsx` + `FooNode.css`) and is exported from `src/nodes/index.tsx` where `nodeTypes` and `initialNodes` live.
  - `src/edges/` — edge components and `initialEdges`/`edgeTypes` exported from `src/edges/index.ts`.
  - `src/utils/elkLayout.ts` — adapts ELK layout output to React Flow; preserves explicit width/height and sets handle positions.

- Common patterns / conventions to follow when editing code:
  - Custom nodes must be added to `src/nodes/` and exported in `src/nodes/index.tsx` so `nodeTypes` and `initialNodes` are updated.
  - `initialNodes` is typed to `AppNode[]` and currently includes explicit `position` entries — do not rely on implicit layout unless you call `getLayoutedElements`.
  - Layout is applied by calling `getLayoutedElements(nodes, edges)` returning `{ nodes, edges }` compatible with React Flow. Preserve the promise/async pattern used in `App.tsx`.
  - UI-oriented utilities (PDF export, save/load JSON) are implemented inside `App.tsx` and interact directly with DOM (e.g., `document.querySelector('.react-flow')`) — keep DOM selectors stable if changing markup.

- TypeScript / typing notes:
  - `nodeTypes` uses `satisfies NodeTypes` to ensure correct typing for custom nodes (see `src/nodes/index.tsx`).
  - The repo uses `type: "module"` in `package.json`; prefer ESM imports.

- Testing / CI:
  - There are no automated tests or CI configs in the repository. When proposing tests, reference the app boundaries (unit tests for layout helpers in `src/utils/elkLayout.ts`, and component tests for nodes under `src/nodes/*`).

- When adding features or making changes, be mindful of these gotchas:
  - ELK requires explicit node dimensions. The helper uses defaults (`width: 150`, `height: 50`) — if you add components with different sizes, set `width`/`height` on the node objects to improve layout.
  - `getLayoutedElements` double-casts edges for ELK interop; preserve that conversion when modifying.
  - `App.tsx` performs multiple `requestAnimationFrame` calls to wait for DOM updates before calling `fitView` — keep that sequence if attempting automated view fitting.

- Example workflows (short):
  - Add a new node type:
    1. Create `src/nodes/MyNode/MyNode.tsx` and `MyNode.css`.
    2. Export `MyNode` from `src/nodes/index.tsx` and add it to `nodeTypes` (`myNode: MyNode`).
    3. Add an `initialNodes` entry with `type: 'myNode'` and a `position` (or let layout compute positions via `getLayoutedElements`).

  - Re-layout existing diagram programmatically:
    - Call `getLayoutedElements(nodes, edges)` (already used in `App.tsx`) then `setNodes` / `setEdges` with the returned objects. Keep the shift-by-minY + margin logic to prevent nodes being flushed to the top.

- If you change public APIs or major folder names, update imports in `src/App.tsx`, `src/main.tsx`, and `src/nodes/index.tsx` — these files are good single-file jump points to validate global import integrity.

If any of the above assumptions are wrong or if you want the instructions to prioritize a different workflow (e.g., Yarn/Pnpm, adding tests, or CI), tell me which area to focus on and I'll iterate.
