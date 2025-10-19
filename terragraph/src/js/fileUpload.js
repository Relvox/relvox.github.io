// File Upload and Image Preview Management

const nodeImages = new Map(); // Store uploaded images per node

export function initializeFileUpload(editor) {
  // Delegate event handling for file uploads
  document.addEventListener("change", function (e) {
    if (e.target.hasAttribute("data-upload")) {
      const nodeId = e.target.getAttribute("data-upload");
      handleFileUpload(e.target, nodeId);
    }
  });
}

function handleFileUpload(input, nodeId) {
  const file = input.files[0];

  if (!file) return;

  // Validate file type
  if (!file.type.match("image/(png|bmp)")) {
    alert("Please upload a PNG or BMP image");
    input.value = "";
    return;
  }

  // Read and display image
  const reader = new FileReader();

  reader.onload = function (e) {
    const imageData = e.target.result;

    // Create image to get dimensions
    const img = new Image();
    img.onload = function () {
      // Store image data with dimensions
      nodeImages.set(nodeId, {
        data: imageData,
        filename: file.name,
        type: file.type,
        size: file.size,
        width: img.width,
        height: img.height,
      });

      // Update preview with aspect ratio
      updateNodePreview(nodeId, imageData, img.width, img.height);

      console.log(
        `Image uploaded to node ${nodeId}:`,
        file.name,
        `${img.width}x${img.height}`,
      );
    };
    img.src = imageData;
  };

  reader.readAsDataURL(file);
}

function updateNodePreview(nodeId, imageData, width, height) {
  const previewElement = document.querySelector(`[data-preview="${nodeId}"]`);

  if (previewElement) {
    // Calculate aspect ratio
    const aspectRatio = width / height;
    const maxHeight = 120;
    const containerWidth = previewElement.offsetWidth || 250;

    let previewHeight = maxHeight;
    let previewWidth = previewHeight * aspectRatio;

    // If width exceeds container, scale down
    if (previewWidth > containerWidth) {
      previewWidth = containerWidth;
      previewHeight = previewWidth / aspectRatio;
    }

    previewElement.style.height = previewHeight + "px";
    previewElement.innerHTML = `<img src="${imageData}" alt="Preview" />`;
  }
}

export function getNodeImage(nodeId) {
  return nodeImages.get(nodeId);
}

export function clearNodeImage(nodeId) {
  nodeImages.delete(nodeId);
  const previewElement = document.querySelector(`[data-preview="${nodeId}"]`);

  if (previewElement) {
    const nodeData = previewElement.closest("[data-node-id]");
    const nodeType = nodeData ? nodeData.getAttribute("data-node-type") : "RGB";
    previewElement.innerHTML = `<span>${nodeType} Preview</span>`;
  }
}

export function getAllNodeImages() {
  return nodeImages;
}
