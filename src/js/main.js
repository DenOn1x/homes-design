document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('.header__fixed');

    function handleScroll() {
        if (window.scrollY > 0) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', handleScroll);

    handleScroll();
});

if (document.querySelector('[data-menu="btn"]')) {
    const elContainer = document.querySelector('[data-menu="container"]');
    const elCatalog = document.querySelector('.box-menu--catalog');
    const elButton = document.querySelector('[data-menu="btn"]');

    function mobileMenu(params) {
        this.el = params.elContainer || false;
        this.elCt = params.elCatalog || false;
        this.button = params.elButton;
        this.state = 'close';

        this.open = function () {
            if (this.el) {
                this.el.classList.add('open');
            }
            if (this.elCt) {
                this.elCt.classList.add('open');
            }
            this.button.classList.add('open');
            document.body.classList.add('m-opened');
            this.state = 'open';
        };

        this.close = function () {
            if (this.el) {
                this.el.classList.remove('open');
            }
            if (this.elCt) {
                this.elCt.classList.remove('open');
            }
            this.button.classList.remove('open');
            document.body.classList.remove('m-opened');
            this.state = 'close';
        };

        this.toggle = function () {
            if (this.state === 'close') this.open();
            else this.close();
        };
    }

    window.menuInstance = new mobileMenu({
        elButton,
        elCatalog,
        elContainer
    });

    elButton.addEventListener('click', function () {
        window.menuInstance.toggle();
    });

}


function initializeVideoBlocks(videoBlocks) {
    if (videoBlocks.length === 0) return;

    document.addEventListener('DOMContentLoaded', function () {
        videoBlocks.forEach(function (block) {
            let wrappers = document.querySelectorAll(block.wrapperClass);
            if (!wrappers.length) return;

            wrappers.forEach(function (wrapper) {
                let iframe = wrapper.querySelector(block.iframeClass);
                let playButton = wrapper.querySelector(block.playButtonClass);
                let poster = wrapper.querySelector(block.posterClass);

                playButton.addEventListener('click', function () {
                    let src = iframe.getAttribute('src');
                    iframe.setAttribute('src', src + '&autoplay=1');
                    hidePosterAndPlayButton();
                });

                function hidePosterAndPlayButton() {
                    playButton.style.opacity = 0;
                    playButton.style.pointerEvents = 'none';
                    poster.style.opacity = 0;
                    poster.style.pointerEvents = 'none';

                    setTimeout(function () {
                        playButton.style.display = 'none';
                        poster.style.display = 'none';
                    }, 500);
                }
            });
        });
    });
}

initializeVideoBlocks([
    {
        wrapperClass: '.homes-lesson__video-content',
        iframeClass: '.homes-lesson__iframe',
        playButtonClass: '.homes-lesson__video-play',
        posterClass: '.homes-lesson__video-poster'
    },
]);


document.addEventListener('DOMContentLoaded', function () {
    const sections = [...document.querySelectorAll("section")];
    let options = {
        rootMargin: "0px",
        threshold: .2,
    };
    const callback = (entries, observer) => {
        entries.forEach((entry) => {
            const {
                target
            } = entry;

            if (entry.intersectionRatio >= .2) {
                target.classList.add("is-visible");
            } else {
                // target.classList.remove("is-visible");
            }
        });
    };
    const observer = new IntersectionObserver(callback, options);
    sections.forEach((section, index) => {
        observer.observe(section);
    });

});


document.addEventListener('DOMContentLoaded', function () {
    const scrollerBtn = document.querySelector('.scroller__btn');
    const scroller = document.querySelector('.scroller');

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    window.addEventListener('scroll', function () {
        if (window.scrollY > 200) {
            scroller.classList.add('is-hidden');
        } else {
            scroller.classList.remove('is-hidden');
        }
    });

    scrollerBtn.addEventListener('click', scrollToTop);
});


function hasValue() {
    document.querySelectorAll('.homes-subscribe__field input, .homes-subscribe__field textarea').forEach(function (input) {
        input.addEventListener('input', function () {
            const label = input.nextElementSibling;
            if (input.value) {
                label.classList.add('has-value');
            } else {
                label.classList.remove('has-value');
            }
        });
    });
}

if (document.querySelector('.homes-subscribe__form')) {
    hasValue()
}

const swiper = new Swiper('[data-slider="swiper-about"]', {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    coverflowEffect: {
        rotate: 70,
        stretch: 10,
        depth: 5,
        modifier: 0.5,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 32,
        },
        767.98: {
            slidesPerView: 1.5,
            spaceBetween: 64,
        },
        1639.98: {
            slidesPerView: 1.5,
            spaceBetween: 128,
        },
    },
});


document.querySelectorAll('.slider-about__content').forEach((content) => {
    const textElement = content.querySelector('.slider-about__text');
    const button = content.querySelector('.btn-more');

    if (textElement && button) {
        button.addEventListener('click', function () {
            textElement.classList.toggle('is-open');
            button.textContent = textElement.classList.contains('is-open') ? 'Свернуть' : 'Читать полностью';
        });
    }
});

