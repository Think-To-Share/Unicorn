import { tns } from 'tiny-slider/src/tiny-slider'

if (document.querySelector('.unicorn-hero-section')) {
    tns({
        container: '.unicorn-hero-section .slides',
        items: 1,
        nav: true,
        autoplay: true,
        autoplayButtonOutput: false,
        controls: false,
    })
}

if (document.querySelector('.scl-parents-sec')) {
    tns({
        container: '.scl-parents-sec .slides',
        items: 1,
        nav: false,
        controlsContainer: '.scl-parents-sec .parent-nav',
        autoplay: true,
        autoplayButtonOutput: false,
        autoHeight: true,
    })
}
