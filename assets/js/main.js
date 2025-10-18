// justify image gallery
$("#gallery").justifiedGallery({
    rowHeight : 250,
    //lastRow : 'justify',
    margins : 10,
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
            top: 30, bottom: 30, left: 15, right: 15
        }
    },
});

const captionPlugin = new PhotoSwipeDynamicCaption(lightbox, {
    type: 'auto',
    mobileCaptionOverlapRatio: 1
});

lightbox.init();

