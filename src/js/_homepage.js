import { tns } from 'tiny-slider/src/tiny-slider'

if (document.querySelector('.unicorn-hero-section')) {
    // hide all hero text
    const heroText = document.querySelectorAll('.unicorn-hero-text p')
    heroText.forEach(text => {
        text.style.display = 'none'
    })

    // slider
    const heroSlider = tns({
        container: '.unicorn-hero-section .slides',
        items: 1,
        nav: true,
        autoplay: true,
        autoplayButtonOutput: false,
        controls: false,
    })

    // show first hero text
    heroText[0].style.display = 'block'

    // show hero text on slide change
    heroSlider.events.on('indexChanged', (info) => {
        const text = heroText[info.index - 1]

        if(text) {
            heroText.forEach(text => {
                text.style.display = 'none'
            })

            text.style.display = 'block'

            // animate hero text
            text.classList.add('animate__animated', 'animate__slideInRight')
            text.style.setProperty('--animate-duration', '0.5s');
            text.addEventListener('animationend', () => {
                text.classList.remove('animate__animated', 'animate__slideInRight');
            })
        }
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
