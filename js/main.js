import { initMap } from './map.js?v=1';
import { initSearch } from './search.js';
import { initGallery } from './gallery.js';

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Icons
    if (window.lucide) window.lucide.createIcons();

    // Initialize Components
    const updateMapCallback = initMap();
    initSearch(updateMapCallback);
    initGallery();

    // Check URL params for ceremony
    checkCeremonyAccess();
});

function checkCeremonyAccess() {
    const params = new URLSearchParams(window.location.search);
    if (params.get('inv') === 'ceremony') {
        const section = document.getElementById('ceremony-section');
        if (section) {
            section.classList.remove('hidden');
        }
    }
}
