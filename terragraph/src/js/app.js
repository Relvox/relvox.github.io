// Main Application Entry Point

import { rgbNodeTemplate, rgbaNodeTemplate } from "./nodeTemplates.js";
import { initializeFileUpload } from "./fileUpload.js";
import { initializePortConnections } from "./portConnections.js";
import { initializeTooltips } from "./tooltips.js";

// Initialize Drawflow
const editor = new Drawflow(document.getElementById("drawflow"));
editor.reroute = true;
editor.start();

// Initialize modules
initializeTooltips();
initializeFileUpload(editor);
initializePortConnections(editor);

// Node creation functions
window.addRGBNode = function () {
  // Get next node ID from Drawflow before creating
  const nodeId = editor.nodeId;
  const drawflowNodeId = editor.addNode(
    "rgb",
    3,
    4,
    Math.random() * 500 + 50,
    Math.random() * 300 + 50,
    "rgb-node",
    { operation: "subtract" },
    rgbNodeTemplate(nodeId),
  );
  return drawflowNodeId;
};

window.addRGBANode = function () {
  // Get next node ID from Drawflow before creating
  const nodeId = editor.nodeId;
  const drawflowNodeId = editor.addNode(
    "rgba",
    4,
    5,
    Math.random() * 500 + 50,
    Math.random() * 300 + 50,
    "rgba-node",
    { operation: "add" },
    rgbaNodeTemplate(nodeId),
  );
  return drawflowNodeId;
};

window.clearSelection = function () {
  const data = editor.export();
  console.log("Current graph data:", data);

  // Remove all connections
  Object.keys(data.drawflow.Home.data).forEach((nodeId) => {
    const node = data.drawflow.Home.data[nodeId];
    Object.keys(node.outputs).forEach((outputKey) => {
      const connections = node.outputs[outputKey].connections;
      connections.forEach((conn) => {
        editor.removeSingleConnection(
          nodeId,
          conn.node,
          outputKey,
          conn.output,
        );
      });
    });
  });

  console.log("All connections cleared");
};

// Event listeners
editor.on("connectionCreated", function (info) {
  console.log("Connection created:", info);
});

editor.on("connectionRemoved", function (info) {
  console.log("Connection removed:", info);
});

editor.on("nodeCreated", function (id) {
  console.log("Node created:", id);
});

editor.on("nodeRemoved", function (id) {
  console.log("Node removed:", id);
});

editor.on("nodeSelected", function (id) {
  console.log("Node selected:", id);
});

// Add initial example nodes
addRGBNode();
addRGBANode();

// Create example connection
setTimeout(() => {
  editor.addConnection(1, 2, "output_1", "input_1");
}, 100);

// Expose editor globally for debugging
window.editor = editor;
console.log("Terrain Graph Editor initialized");
console.log("Use editor.export() to see the graph JSON");
