// justify image gallery
$("#gallery").justifiedGallery({
    rowHeight : 200,
    //lastRow : 'justify',
    margins : 8,
    border: 0,
    captions: false
});

// activate lightbox
import PhotoSwipeLightbox from './photoswipe-lightbox.esm.min.js';
import PhotoSwipeDynamicCaption from './photoswipe-dynamic-caption-plugin.esm.min.js'
const lightbox = new PhotoSwipeLightbox({
    gallery: '#gallery',
    children: 'a',

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
    },
});

const captionPlugin = new PhotoSwipeDynamicCaption(lightbox, {
    type: 'auto',
    mobileCaptionOverlapRatio: 1
});

lightbox.init();

