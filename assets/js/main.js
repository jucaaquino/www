import PhotoSwipeLightbox from './photoswipe-lightbox.esm.min.js';
import PhotoSwipeDynamicCaption from './photoswipe-dynamic-caption-plugin.esm.min.js'

// justify image gallery
const justifiedGallerySettings = {
    rowHeight: $(window).width() < 816 ? 150 : 200,
    //lastRow : 'justify',
    margins: 4,
    border: 0,
    captions: false
};

$("#gallery").justifiedGallery(justifiedGallerySettings);

// activate lightbox
const lightboxSettings = {
    gallery: '#gallery',
    children: '.gallery__item',

    arrowPrev: false,
    arrowNext: false,
    zoom: false,
    close: false,
    counter: false,

    bgOpacity: 1.0,
    imageClickAction: 'close',
    tapAction: 'close',

    pswpModule: () => import('./photoswipe.esm.min.js'),
    paddingFn: (viewportSize) => {
        return {
            top: 32, bottom: 32, left: 16, right: 16
        }
    }
};

const captionSettings = {
    type: 'auto',
    mobileCaptionOverlapRatio: 1
};

const lightbox = new PhotoSwipeLightbox(lightboxSettings);
const captionPlugin = new PhotoSwipeDynamicCaption(lightbox, captionSettings);
lightbox.init();
