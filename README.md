# Bowtie Diagram — React Flow Prototype

Team #3

Chosen approach

We implemented a single-page React + TypeScript application using `@xyflow/react` (a React Flow distribution) to build a Bowtie diagram editor. The app uses controlled `nodes` and `edges` state, custom node components, named handles for port-specific connections, an ELK-based layout helper for optional auto-layout, and `html2canvas` + `jspdf` for PDF export.

Risk story (3–5 sentences)

Working with graph UIs introduced a few risks: SVG and CSS interactions make reliable exports non-trivial (we mitigated this by injecting temporary styles and using `foreignObjectRendering`), and programmatic layout engines require explicit node dimensions to avoid overlap. TypeScript union types for node data demanded pragmatic casts during rapid iteration; we recommend consolidating shared fields to reduce type friction. Lastly, accessibility and color-contrast needed active attention once we switched to a dark canvas with bright node surfaces.

How to run / view

1. Install dependencies:

```bash
npm install
```

2. Run the dev server (open http://localhost:5173):

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
npm run preview
```

Prototype links

- Local preview (dev): `http://localhost:5173`
- Deployed prototype: [Add deployed URL here if available]

Acknowledgement

This is a student project developed for DSBA 5122 in collaboration with Todus Advisors. Bowtie Symbols are proprietary of Todus Advisors.

Notes / Resources

- Project entry: `src/main.tsx` → `src/App.tsx`.
- Node definitions and exports: `src/nodes/index.tsx`.
- Layout helper: `src/utils/elkLayout.ts`.
- Node details editor: `src/components/NodeDetails.tsx`.
- Legend: `src/components/Legend.tsx`.

If you'd like, I can add a short live demo link (Netlify / Vercel) and small screenshots to this README. Replace the placeholders above with your deployed prototype URL to share with your instructor.
