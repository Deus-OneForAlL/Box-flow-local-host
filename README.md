# Boxflow — Visual Diagramming Tool

A lightweight, high-performance canvas-based diagramming application inspired by **Excalidraw**, reverse-engineered using the **REA** workflow.

---

## ✨ Features

- **Create Multiple Boxes (`R`)**: Click and drag on the canvas to draw rectangular cards with rounded corners.
- **Connect Boxes with Arrows (`A`)**: Drag an arrow from any box to another. The arrow automatically detects perimeter intersections and keeps connections linked.
- **Write Text Inside Boxes**: Double-click any box (or create a new box) to edit its text inline with live text wrapping and multi-line support.
- **Edit Outline (Stroke)**: Customize stroke color, stroke width (Thin, Medium, Bold), and stroke style (Solid, Dashed, Dotted).
- **Edit Inside Color (Fill)**: Choose from vibrant pastel palettes or transparent backgrounds.
- **Save & Load Diagram**: Save diagrams as portable `.json` files and reload them anytime.
- **Export to Image (PNG)**: One-click export of your canvas into a high-resolution PNG image.
- **Undo / Redo (`Ctrl+Z` / `Ctrl+Shift+Z`)**: Full state history for effortless editing.
- **Zoom & Pan**: Mouse wheel or zoom controls to explore an infinite canvas with dot grid.

---

## 🚀 How to Run

### Option 1: Double-Click the Launcher


### Option 2: Run via Terminal


Then open your browser at **(http://localhost:5173)**.

---

## ⌨️ Keyboard Shortcuts

| Key | Action |
| :--- | :--- |
| **`V`** | Selection / Move Tool |
| **`R`** | Box Tool (Rectangle) |
| **`A`** | Arrow Connection Tool |
| **`E`** | Eraser Tool |
| **`Delete` / `Backspace`** | Delete selected element(s) |
| **`Ctrl` + `Z`** | Undo |
| **`Ctrl` + `Shift` + `Z`** | Redo |
| **`Ctrl` + Wheel** | Zoom in / out |
| **`Shift` + Drag** or **Middle Click** | Pan canvas |
| **`Escape`** | Deselect / Cancel tool |
