// Port Connection Management

let connectionMode = false;
let connectionStart = null;

export function initializePortConnections(editor) {
  // Handle port clicks for connections
  document.addEventListener("click", function (e) {
    if (e.target.classList.contains("stack-port")) {
      e.stopPropagation();
      e.preventDefault();
      handlePortClick(e.target, editor);
    }
  });

  // Prevent dragging on port mousedown
  document.addEventListener("mousedown", function (e) {
    if (e.target.classList.contains("stack-port")) {
      e.stopPropagation();
    }
  });

  // Visual feedback for connection mode
  document.addEventListener("mouseover", function (e) {
    if (connectionMode && e.target.classList.contains("stack-port")) {
      e.target.style.transform = "scale(1.5)";
    }
  });

  document.addEventListener("mouseout", function (e) {
    if (e.target.classList.contains("stack-port")) {
      e.target.style.transform = "";
    }
  });
}

function handlePortClick(port, editor) {
  const portType = port.getAttribute("data-port-type");
  const portId = port.getAttribute("data-port-id");
  const nodeId = port.closest("[data-node-id]").getAttribute("data-node-id");

  if (!connectionMode) {
    // Start connection
    connectionStart = { nodeId, portId, portType, element: port };
    connectionMode = true;
    port.style.boxShadow = "0 0 15px rgba(255, 255, 255, 1)";
    port.style.background = "#4caf50";
    console.log("Connection started:", connectionStart);
  } else {
    // Complete connection
    const connectionEnd = { nodeId, portId, portType, element: port };

    // Validate connection (output -> input)
    if (
      connectionStart.portType === "output" &&
      connectionEnd.portType === "input"
    ) {
      createConnection(editor, connectionStart, connectionEnd);
    } else if (
      connectionStart.portType === "input" &&
      connectionEnd.portType === "output"
    ) {
      createConnection(editor, connectionEnd, connectionStart);
    } else {
      console.warn("Invalid connection: must connect output to input");
    }

    // Reset connection mode
    connectionStart.element.style.boxShadow = "";
    connectionStart.element.style.background = "#ffffff";
    connectionStart = null;
    connectionMode = false;
  }
}

function createConnection(editor, outputPort, inputPort) {
  try {
    editor.addConnection(
      parseInt(outputPort.nodeId),
      parseInt(inputPort.nodeId),
      outputPort.portId,
      inputPort.portId,
    );
    console.log(
      "Connection created:",
      outputPort.nodeId,
      "->",
      inputPort.nodeId,
    );
  } catch (error) {
    console.error("Failed to create connection:", error);
  }
}

export function cancelConnection() {
  if (connectionMode && connectionStart) {
    connectionStart.element.style.boxShadow = "";
    connectionStart.element.style.background = "#ffffff";
    connectionStart = null;
    connectionMode = false;
  }
}

// Cancel connection on Escape key
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    cancelConnection();
  }
});
