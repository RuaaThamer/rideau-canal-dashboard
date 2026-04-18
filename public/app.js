async function fetchLatestData() {
    try {
        const response = await fetch('/api/latest');
        const data = await response.json();
        
        const container = document.getElementById('latest-data-container');
        container.innerHTML = ''; // Clear old data

        data.forEach(item => {
            const card = document.createElement('div');
            card.className = `card ${item.safetyStatus.toLowerCase()}`;
            card.innerHTML = `
                <h3>${item.location.toUpperCase()}</h3>
                <div class="status-badge">${item.safetyStatus}</div>
                <p><strong>Ice Thickness:</strong> ${item.avgIceThickness.toFixed(1)} cm</p>
                <p><strong>Surface Temp:</strong> ${item.avgSurfaceTemp.toFixed(1)} °C</p>
                <p><strong>Snow:</strong> ${item.maxSnowAccumulation} cm</p>
                <p class="timestamp">Last Updated: ${new Date(item.windowEnd).toLocaleTimeString()}</p>
            `;
            container.appendChild(card);
        });
    } catch (error) {
        console.error('Error updating dashboard:', error);
    }
}

// Initial load
fetchLatestData();

// Auto-refresh every 30 seconds as per requirements
setInterval(fetchLatestData, 30000);