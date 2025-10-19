// Port Tooltip Management

let tooltip = null;

export function initializeTooltips() {
    // Create tooltip element
    tooltip = document.createElement("div");
    tooltip.className = "port-tooltip";
    document.body.appendChild(tooltip);

    // Add event listeners for tooltip on all ports
    document.addEventListener("mouseover", function (e) {
        if (e.target.classList.contains("stack-port")) {
            showTooltip(e.target);
        }
    });

    document.addEventListener("mouseout", function (e) {
        if (e.target.classList.contains("stack-port")) {
            hideTooltip();
        }
    });
}

function showTooltip(port) {
    const portName = port.getAttribute("data-port-name");
    if (!portName) return;

    tooltip.textContent = portName;

    // Determine if port is on left or right
    const isLeft = port.closest(".port-stack").classList.contains("left");
    tooltip.className = "port-tooltip visible " + (isLeft ? "left" : "right");

    // Position tooltip
    const rect = port.getBoundingClientRect();
    if (isLeft) {
        tooltip.style.left = rect.left - tooltip.offsetWidth - 15 + "px";
    } else {
        tooltip.style.left = rect.right + 15 + "px";
    }
    tooltip.style.top = rect.top + rect.height / 2 - tooltip.offsetHeight / 2 + "px";
}

function hideTooltip() {
    tooltip.className = "port-tooltip";
}
