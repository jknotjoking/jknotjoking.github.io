import { ALL_GUESTS, TABLES, GALLERY_PHOTOS } from './data.js';

function initSearch() {
    const searchInput = document.getElementById('guest-search');
    const resultsContainer = document.getElementById('search-results');
    const seatingMap = document.getElementById('seating-map');

    if (!searchInput || !resultsContainer) return;

    searchInput.addEventListener('input', (event) => {
        const term = event.target.value.trim().toLowerCase();
        resultsContainer.innerHTML = '';
        
        if (seatingMap) {
            seatingMap.querySelectorAll('.highlight').forEach(el => el.classList.remove('highlight'));
        }
        
        if (term.length < 2) {
            resultsContainer.innerHTML = '<div class="p-4 text-center text-stone-500">輸入姓名以查詢您的桌號。</div>';
            return;
        }

        const matches = ALL_GUESTS.filter(g => g.name.toLowerCase().includes(term)).slice(0, 6);

        if (matches.length > 0) {
            matches.forEach(guest => {
                const resultItem = document.createElement('div');
                resultItem.className = 'p-3 hover:bg-stone-50 transition duration-150 cursor-pointer rounded-lg flex justify-between items-center';
                resultItem.innerHTML = `
                    <span class="text-stone-800 font-medium">${guest.name}</span>
                    <span class="text-xs text-stone-500 bg-stone-100 px-2 py-1 rounded-full table-tag">查看座位</span>
                `;
                resultItem.addEventListener('click', () => {
                    alert(`賓客：${guest.name}\n桌號：第 ${guest.tableId} 桌`);
                    updateMapHighlight(guest.tableId); 
                    searchInput.value = guest.name;
                    resultsContainer.innerHTML = ''; 
                });
                resultsContainer.appendChild(resultItem);
            });
        } else {
            resultsContainer.innerHTML = '<div class="p-3 text-stone-500 text-center">找不到相符的賓客</div>';
        }
    });
}

function updateMapHighlight(tableId) {
    const tableElement = document.getElementById(`table-${tableId}`);
    const seatingMap = document.getElementById('seating-map');
    
    if (!seatingMap) return;

    seatingMap.querySelectorAll('.highlight').forEach(el => el.classList.remove('highlight'));
    
    if (tableElement) {
        tableElement.classList.add('highlight');
        tableElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

function initGallery() {
    const galleryContainer = document.getElementById('gallery-container');
    if (!galleryContainer) return;
    
    GALLERY_PHOTOS.forEach((photo) => {
        const item = document.createElement('div');
        item.className = 'w-1/2 sm:w-1/3 p-1.5 md:p-2.5 group overflow-hidden';
        item.innerHTML = `
            <img src="${photo.src}" alt="${photo.alt}" loading="lazy" 
                 class="w-full h-auto object-cover aspect-square rounded-lg shadow-md cursor-pointer 
                        group-hover:scale-[1.02] transition duration-300 ease-in-out" 
                 onclick="openModal('${photo.src}', '${photo.alt}')">
        `;
        galleryContainer.appendChild(item);
    });
}

function checkCeremonyAccess() {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('inv') === 'ceremony') {
        const section = document.getElementById('ceremony-section');
        if (section) section.classList.remove('hidden');
    }
}

function initSeatingMapEvents() {
    const seatingMap = document.getElementById('seating-map');
    if (!seatingMap) return;

    const tables = seatingMap.querySelectorAll('.table-shape');
    
    tables.forEach(table => {
        table.addEventListener('click', () => {
            const tableId = parseInt(table.dataset.tableId);
            const guests = TABLES.find(t => t.tableId === tableId);
            
            if (guests) {
                alert(`第 ${tableId} 桌的賓客有：\n${guests.names.join('、')}`);
                updateMapHighlight(tableId);
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // 確保 Lucide Icon 被渲染
    if (typeof lucide !== 'undefined' && lucide.createIcons) {
        lucide.createIcons();
    }
    
    // 呼叫所有初始化函式
    initSearch();
    initGallery();
    initSeatingMapEvents();
    checkCeremonyAccess();
});
