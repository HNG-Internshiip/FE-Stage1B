const epochEl = document.getElementById('epoch-time');

function updateEpoch() {
  epochEl.textContent = Date.now();
}

// Set immediately on load, then tick every second
updateEpoch();
setInterval(updateEpoch, 1000);