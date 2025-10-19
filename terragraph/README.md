# Terrain Graph Editor

Node-based image processing graph editor using Drawflow.

## Design

**Layout:** Split view with node graph editor (left) and preview area (right).

**Nodes:** RGB and RGBA image processing nodes with stacked port groups, file upload, and operation selection.

**Port Groups:** 
- Tangent to node edges in rounded rectangles
- Green background = enabled, Red = disabled
- Tooltips show port names on hover
- Click ports to create connections (output → input)

**Features:**
- Image upload (PNG/BMP) with inline preview
- Channel-based operations: Add, Subtract, Multiply, XOR
- Port group exclusion logic (using one group disables others)
- Purple theme with green selection outline

## Structure

```
src/
  styles/
    main.css      - Layout and UI
    nodes.css     - Node styling
    ports.css     - Port groups and tooltips
  js/
    app.js            - Main entry point
    nodeTemplates.js  - RGB/RGBA node HTML
    fileUpload.js     - Image upload and preview
    portConnections.js - Click-to-connect ports
    tooltips.js       - Port name tooltips

index-modular.html  - Main application
```

## Usage

Open `index-modular.html` in a browser.

**Controls:**
- Click port → click another port to connect
- Upload images via file input
- Drag nodes to reposition
- Mouse wheel to zoom
- Right-click node to delete
