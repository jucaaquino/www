$("#gallery").justifiedGallery({
    rowHeight : 200,
    lastRow : 'justify',
    margins : 10,
    border: 0,
    captions: false
});

import PhotoSwipeLightbox from './photoswipe-lightbox.esm.min.js';
const lightbox = new PhotoSwipeLightbox({
  gallery: '#gallery',
  children: 'a',
  pswpModule: () => import('./photoswipe.esm.min.js')
});
lightbox.init();

