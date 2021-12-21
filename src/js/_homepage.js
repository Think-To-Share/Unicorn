import { tns } from 'tiny-slider/src/tiny-slider'

if (document.querySelector('.unicorn-hero-section')) {
    tns({
        container:'.unicorn-hero-section .slides',
        items: 1,
        nav: true,
        autoplay: true,
        autoplayButtonOutput: false,
        controls:false,
    })
}