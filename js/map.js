let currentHighlightedTable = null;

export function initMap() {
    renderColumn('col-1', [1, 2, 3, 4, 5, 6]);
    renderColumn('col-2', [7, 8, 9, 10, 11, 12]);
    renderColumn('col-3', [null, 13]); // 1 table at row 2
    renderColumn('col-4', [null, 14]); // 1 table at row 2
    renderColumn('col-5', [15, 16, 17, 18, 19, 20]);
    renderColumn('col-6', [21, 22, 23, 24, 25, 26]);

    // Return the update function so it can be used by the search module
    return updateMapHighlight;
}

function renderColumn(elementId, tables) {
    const container = document.getElementById(elementId);
    if (!container) return;

    container.innerHTML = '';
    tables.forEach(num => {
        if (num === null) {
            // Placeholder for empty slot
            const placeholder = document.createElement('div');
            placeholder.className = "w-10 h-10 md:w-14 md:h-14"; // Same dimensions as table
            container.appendChild(placeholder);
        } else {
            const el = createTableElement(num);
            container.appendChild(el);
        }
    });
}

function createTableElement(tableNum) {
    const div = document.createElement('div');
    div.id = `table-${tableNum}`;
    div.className = `relative w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-all duration-500 bg-white text-stone-600 border-stone-300`;
    div.innerHTML = `
        ${tableNum}
        <div class="absolute inset-0 rounded-full border-[1px] border-dotted border-stone-300 scale-125 pointer-events-none opacity-50"></div>
    `;
    return div;
}

function updateMapHighlight(tableNum) {
    // Reset previous
    if (currentHighlightedTable !== null) {
        const prev = document.getElementById(`table-${currentHighlightedTable}`);
        if (prev) {
            if (currentHighlightedTable === 0) {
                // Reset Main Table
                prev.className = `relative w-16 h-16 md:w-24 md:h-24 rounded-full bg-wedding-rose/10 border-2 border-wedding-rose flex items-center justify-center text-center shadow-sm transition-all duration-500 text-wedding-rose`;
            } else {
                // Reset Normal Table
                prev.className = `relative w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-all duration-500 bg-white text-stone-600 border-stone-300`;
            }
        }
    }

    currentHighlightedTable = tableNum;

    // Highlight new
    if (tableNum !== null) {
        const curr = document.getElementById(`table-${tableNum}`);
        if (curr) {
            if (tableNum === 0) {
                // Highlight Main Table
                curr.className = `relative w-16 h-16 md:w-24 md:h-24 rounded-full bg-wedding-rose text-white border-wedding-rose flex items-center justify-center text-center shadow-[0_0_20px_rgba(230,184,184,0.9)] scale-110 z-20 transition-all duration-500`;
            } else {
                // Highlight Normal Table
                curr.className = `relative w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-all duration-500 bg-wedding-rose text-white border-wedding-rose scale-125 shadow-[0_0_15px_rgba(230,184,184,0.8)] z-10`;
            }
        } else {
            // If table element doesn't exist (e.g. Table 27+), just do nothing visually on the map.
            // The search result panel will still show the table number.
            console.log(`Table ${tableNum} not found on map.`);
        }
    }
}
