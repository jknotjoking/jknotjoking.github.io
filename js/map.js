let currentHighlightedTable = null;

export function initMap() {
    renderColumn('col-1', [1, 2, 3, 4, 5]);
    renderColumn('col-2', [6, 7, 8, 9, 10]);
    renderColumn('col-3', [11, 12, 13, 14, 15]);
    renderColumn('col-4', [16, 17, 18, 19, 20]);

    // Return the update function so it can be used by the search module
    return updateMapHighlight;
}

function renderColumn(elementId, tables) {
    const container = document.getElementById(elementId);
    if (!container) return;
    
    container.innerHTML = '';
    tables.forEach(num => {
        const el = createTableElement(num);
        container.appendChild(el);
    });
}

function createTableElement(tableNum) {
    const div = document.createElement('div');
    div.id = `table-${tableNum}`;
    div.className = `relative w-14 h-14 md:w-14 md:h-14 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-all duration-500 bg-white text-stone-600 border-stone-300`;
    div.innerHTML = `
        ${tableNum}
        <div class="absolute inset-0 rounded-full border-[1px] border-dotted border-stone-300 scale-125 pointer-events-none opacity-50"></div>
    `;
    return div;
}

function updateMapHighlight(tableNum) {
    // Reset previous
    if (currentHighlightedTable) {
        const prev = document.getElementById(`table-${currentHighlightedTable}`);
        if (prev) {
            prev.className = `relative w-14 h-14 md:w-14 md:h-14 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-all duration-500 bg-white text-stone-600 border-stone-300`;
        }
    }
    
    currentHighlightedTable = tableNum;

    // Highlight new
    if (tableNum) {
        const curr = document.getElementById(`table-${tableNum}`);
        if (curr) {
            curr.className = `relative w-14 h-14 md:w-14 md:h-14 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-all duration-500 bg-wedding-rose text-white border-wedding-rose scale-125 shadow-[0_0_15px_rgba(230,184,184,0.8)] z-10`;
        }
    }
}
