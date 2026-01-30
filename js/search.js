import { ALL_GUESTS } from './data.js';

export function initSearch(onTableSelect) {
    const input = document.getElementById('guest-search-input');
    const resultsContainer = document.getElementById('search-results');
    const noResults = document.getElementById('no-results');
    const emptyState = document.getElementById('empty-state');

    const searchMode = document.getElementById('search-mode');
    const resultMode = document.getElementById('result-mode');
    const resetBtn = document.getElementById('reset-search-btn');

    if (!input) return;

    input.addEventListener('input', (e) => {
        const term = e.target.value.trim().toLowerCase();
        resultsContainer.innerHTML = '';

        if (!term) {
            emptyState.classList.remove('hidden');
            noResults.classList.add('hidden');
            return;
        }

        emptyState.classList.add('hidden');
        const matches = ALL_GUESTS.filter(g => g.name.toLowerCase().includes(term)).slice(0, 6);

        if (matches.length === 0) {
            noResults.classList.remove('hidden');
            // GA4 Tracking: 記錄查無此人的搜尋（可以幫你發現名單是否有漏）
            if (term.length >= 2) {
                gtag('event', 'search_no_results', {
                    'search_term': term
                });
            }
        } else {
            noResults.classList.add('hidden');
            matches.forEach(guest => {
                const li = document.createElement('li');
                li.className = "flex items-center justify-between p-3 hover:bg-stone-50 rounded-lg cursor-pointer transition-colors group border-b border-stone-100 last:border-0";
                li.innerHTML = `
                     <div class="flex items-center gap-3">
                        <div class="bg-stone-200 p-2 rounded-full group-hover:bg-wedding-rose group-hover:text-white transition-colors">
                            <i data-lucide="user" class="w-4 h-4"></i>
                        </div>
                        <span class="font-medium text-stone-700">${guest.name}</span>
                    </div>
                    <span class="text-stone-400 text-xs">選擇 / Select</span>
                `;
                li.onclick = () => selectGuest(guest);
                resultsContainer.appendChild(li);
            });
            // Re-render icons for new elements
            if (window.lucide) window.lucide.createIcons();
        }
    });

    function selectGuest(guest) {
        gtag('event', 'view_seating_result', {
            'guest_name': guest.name,
            'table_number': guest.tableNumber === 0 ? 'Main Table' : guest.tableNumber
        });
        
        // Switch UI to Result Mode
        searchMode.classList.add('hidden');
        resultMode.classList.remove('hidden');

        // Update Text
        // Update Text
        if (guest.tableNumber === 0) {
            document.getElementById('result-table-circle').textContent = "主";
            document.getElementById('result-table-title').textContent = "主桌";
            document.getElementById('result-table-subtitle').textContent = "Main Table";
        } else {
            document.getElementById('result-table-circle').textContent = guest.tableNumber;
            document.getElementById('result-table-title').textContent = `第 ${guest.tableNumber} 桌`;
            document.getElementById('result-table-subtitle').textContent = `Table ${guest.tableNumber}`;
        }
        document.getElementById('result-guest-name').textContent = `Welcome, ${guest.name}`;

        // Update Map via callback
        if (onTableSelect) onTableSelect(guest.tableNumber);
    }

    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            resultMode.classList.add('hidden');
            searchMode.classList.remove('hidden');
            input.value = '';
            resultsContainer.innerHTML = '';
            emptyState.classList.remove('hidden');
            if (onTableSelect) onTableSelect(null);
        });
    }
}
