import { GALLERY_PHOTOS } from './data.js';

export function initGallery() {
    const container = document.getElementById('gallery-grid');
    if (!container) return;
    
    GALLERY_PHOTOS.forEach(photo => {
        const div = document.createElement('div');
        let spans = "";
        if (photo.size === 'large') spans = "col-span-2 row-span-2";
        else if (photo.size === 'medium') spans = "col-span-1 row-span-2";
        else spans = "col-span-1 row-span-1";

        div.className = `relative group overflow-hidden rounded-lg shadow-sm transition-all hover:shadow-xl cursor-pointer ${spans}`;
        
        div.innerHTML = `
            <img src="${photo.url}" class="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110" loading="lazy">
            <div class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"></div>
        `;
        container.appendChild(div);
    });
}
