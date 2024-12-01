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
    {
        wrapperClass: '.our-team__video-content',
        iframeClass: '.our-team__iframe',
        playButtonClass: '.our-team__video-play',
        posterClass: '.our-team__video-poster'
    },
    {
        wrapperClass: '.useful-materials__video-content',
        iframeClass: '.useful-materials__iframe',
        playButtonClass: '.useful-materials__video-play',
        posterClass: '.useful-materials__video-poster'
    },
    {
        wrapperClass: '.articles__video-content',
        iframeClass: '.articles__iframe',
        playButtonClass: '.articles__video-play',
        posterClass: '.articles__video-poster'
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

if (document.querySelector('[data-slider="swiper-about"]')) {
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
}

if (document.querySelector('[data-slider="swiper-about-info"]')) {
    const swiperThumbs = new Swiper('[data-slider="swiper-about-info"] .swiper-thumb', {
        spaceBetween: 8,
        slidesPerGroup: 1,
        freeMode: true,
        watchSlidesProgress: true,

        navigation: {
            nextEl: '[data-slider="swiper-about-info"] .swiper-button-next',
            prevEl: '[data-slider="swiper-about-info"] .swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 3,
            },
            767.98: {
                slidesPerView: 4,
            },
            1639.98: {
                slidesPerView: 6,
            },
        },

    });

    const swiperMain = new Swiper('[data-slider="swiper-about-info"] .swiper-main', {
        spaceBetween: 8,
        allowTouchMove: false,

        effect: 'fade',
        fadeEffect: {
            crossFade: true,
        },

        thumbs: {
            swiper: swiperThumbs,
        },
    });
}

if (document.querySelector('[data-slider="slider-certificates"]')) {
    const swiper = new Swiper('[data-slider="slider-certificates"]', {
        grabCursor: true,
        loop: true,
        slidesPerGroup: 1,
        freeMode: true,
        watchSlidesProgress: true,


        navigation: {
            nextEl: '[data-slider="slider-certificates"] .swiper-button-next',
            prevEl: '[data-slider="slider-certificates"] .swiper-button-prev',
        },

        breakpoints: {
            0: {
                slidesPerView: 1.2,
                spaceBetween: 24,
            },
            767.98: {
                slidesPerView: 2.4,
                spaceBetween: 48,
            },
            991.98: {
                slidesPerView: 3.4,
                spaceBetween: 80,
            },
            1639.98: {
                slidesPerView: 4,
                spaceBetween: 80,
            },
        },
    });
}


document.querySelectorAll('.faq').forEach(container => {
    const accordionHeads = container.querySelectorAll('.accordion__item');
    const icons = container.querySelectorAll('.accordion__head .icon');

    const toggleAccordion = (accordionHead) => {
        const accordionInfo = accordionHead.querySelector('.accordion__text');
        const isOpen = accordionInfo.classList.contains('INIT');

        accordionHeads.forEach(head => {
            const info = head.querySelector('.accordion__text');
            head.classList.remove('INIT');
            info.classList.remove('INIT');
        });

        if (!isOpen) {
            accordionHead.classList.add('INIT');
            accordionInfo.classList.add('INIT');

            if (window.innerWidth <= 768) {
                const offset = 100;
                const elementPosition = accordionHead.getBoundingClientRect().top + window.scrollY;
                const scrollToPosition = elementPosition - offset;

                window.scrollTo({
                    top: scrollToPosition,
                    behavior: 'smooth',
                });
            }
        }
    };

    accordionHeads.forEach(accordionHead => {
        accordionHead.addEventListener('click', () => {
            toggleAccordion(accordionHead);
        });
    });

    icons.forEach(icon => {
        icon.addEventListener('click', (event) => {
            event.stopPropagation();
            toggleAccordion(icon.closest('.accordion__item'));
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const API_YMAPS = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU';
    let ymapsLoaded = typeof window.ymaps !== 'undefined';
    let ymapsCallbacks = [];

    async function loadApiYmaps() {
        if (ymapsLoaded) {
            return window.ymaps;
        } else {
            return new Promise((resolve, reject) => {
                ymapsCallbacks.push(resolve);
                const script = document.createElement('script');
                script.src = API_YMAPS;
                script.onload = () => {
                    ymapsLoaded = true;
                    ymapsCallbacks.forEach(cb => cb(window.ymaps));
                    ymapsCallbacks = [];
                };
                script.onerror = reject;
                document.head.append(script);
            });
        }
    }

    async function initMap(mapContainer) {
        const coordinates = JSON.parse(mapContainer.getAttribute('data-coord'));
        const ymaps = await loadApiYmaps();
        ymaps.ready(function () {
            const mapInstance = new ymaps.Map(mapContainer.id, {
                center: coordinates,
                zoom: 17,
            }, {
                searchControlProvider: 'yandex#search'
            });

            const placemark = new ymaps.Placemark(coordinates, {}, {
                iconLayout: 'default#image',
                iconImageHref: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjgiIHZpZXdCb3g9IjAgMCA2MCA2OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF81MDdfNTYzMykiPg0KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjBfZl81MDdfNTYzMykiPg0KPHBhdGggZD0iTTMwLjUxIDU2LjUyM0MzMC41MDQxIDU2LjY1MTYgMzAuNDQ4OCA1Ni43NzI5IDMwLjM1NTcgNTYuODYxOEMzMC4yNjI1IDU2Ljk1MDYgMzAuMTM4NyA1Ny4wMDAxIDMwLjAxIDU3QzI5LjcyIDU3IDI5LjUgNTYuNzkgMjkuNDkgNTYuNTIzQzI5LjM0NSA1My4zNTUgMjcuNzM0IDUxLjMwNiAyNC42NTggNTAuMzc2QzE0LjUzIDQ3Ljk2OCA3IDM4Ljg2MyA3IDI4QzcgMTUuMjk3IDE3LjI5NyA1IDMwIDVDNDIuNzAzIDUgNTMgMTUuMjk3IDUzIDI4QzUzIDM4Ljg2MyA0NS40NyA0Ny45NjggMzUuMzQyIDUwLjM3NkMzMi4yNjYgNTEuMzA2IDMwLjY1NSA1My4zNTYgMzAuNTEyIDU2LjUyM0gzMC41MVoiIGZpbGw9IiNGRjAwMDAiLz4NCjwvZz4NCjxwYXRoIGQ9Ik0zMC41MSA1Ni41MjNDMzAuNTA0MSA1Ni42NTE2IDMwLjQ0ODggNTYuNzcyOSAzMC4zNTU3IDU2Ljg2MThDMzAuMjYyNSA1Ni45NTA2IDMwLjEzODcgNTcuMDAwMSAzMC4wMSA1N0MyOS43MiA1NyAyOS41IDU2Ljc5IDI5LjQ5IDU2LjUyM0MyOS4zNDUgNTMuMzU1IDI3LjczNCA1MS4zMDYgMjQuNjU4IDUwLjM3NkMxNC41MyA0Ny45NjggNyAzOC44NjMgNyAyOEM3IDE1LjI5NyAxNy4yOTcgNSAzMCA1QzQyLjcwMyA1IDUzIDE1LjI5NyA1MyAyOEM1MyAzOC44NjMgNDUuNDcgNDcuOTY4IDM1LjM0MiA1MC4zNzZDMzIuMjY2IDUxLjMwNiAzMC42NTUgNTMuMzU2IDMwLjUxMiA1Ni41MjNIMzAuNTFaIiBmaWxsPSIjRkYwMDAwIi8+DQo8cGF0aCBkPSJNMzAgNjhDMjcuNzkgNjggMjYgNjYuMjEgMjYgNjRDMjYgNjEuNzkgMjcuNzkgNjAgMzAgNjBDMzIuMjEgNjAgMzQgNjEuNzkgMzQgNjRDMzQgNjYuMjEgMzIuMjEgNjggMzAgNjhaIiBmaWxsPSJ3aGl0ZSIvPg0KPHBhdGggZD0iTTI5Ljk5OTcgNjZDMzAuMjY2IDY2LjAwNiAzMC41MzA5IDY1Ljk1ODggMzAuNzc4NyA2NS44NjFDMzEuMDI2NiA2NS43NjMzIDMxLjI1MjQgNjUuNjE3IDMxLjQ0MjkgNjUuNDMwOEMzMS42MzM0IDY1LjI0NDYgMzEuNzg0OCA2NS4wMjIyIDMxLjg4ODIgNjQuNzc2NkMzMS45OTE2IDY0LjUzMTEgMzIuMDQ0OSA2NC4yNjc0IDMyLjA0NDkgNjQuMDAxQzMyLjA0NSA2My43MzQ2IDMxLjk5MTggNjMuNDcwOCAzMS44ODg2IDYzLjIyNTNDMzEuNzg1MyA2Mi45Nzk3IDMxLjYzNCA2Mi43NTcyIDMxLjQ0MzYgNjIuNTcwOUMzMS4yNTMyIDYyLjM4NDYgMzEuMDI3NCA2Mi4yMzgyIDMwLjc3OTcgNjIuMTQwM0MzMC41MzE5IDYyLjA0MjUgMzAuMjY3IDYxLjk5NTEgMzAuMDAwNyA2Mi4wMDFDMjkuNDc4MSA2Mi4wMTI1IDI4Ljk4MDkgNjIuMjI4MiAyOC42MTUzIDYyLjYwMThDMjguMjQ5OCA2Mi45NzU0IDI4LjA0NTEgNjMuNDc3MyAyOC4wNDQ5IDY0QzI4LjA0NDggNjQuNTIyNyAyOC4yNDkzIDY1LjAyNDYgMjguNjE0NiA2NS4zOTg0QzI4Ljk4IDY1Ljc3MjIgMjkuNDc3MiA2NS45ODgyIDI5Ljk5OTcgNjZaIiBmaWxsPSJibGFjayIvPg0KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zMCAzNC4yVjM5SDQxLjRDNDEuNDc4OCAzOSA0MS41NTY4IDM4Ljk4NDUgNDEuNjI5NiAzOC45NTQzQzQxLjcwMjQgMzguOTI0MiA0MS43Njg1IDM4Ljg4IDQxLjgyNDMgMzguODI0M0M0MS44OCAzOC43Njg1IDQxLjkyNDIgMzguNzAyNCA0MS45NTQzIDM4LjYyOTZDNDEuOTg0NSAzOC41NTY4IDQyIDM4LjQ3ODggNDIgMzguNFYyNC42QzQyIDI0LjUyMTIgNDEuOTg0NSAyNC40NDMyIDQxLjk1NDMgMjQuMzcwNEM0MS45MjQyIDI0LjI5NzYgNDEuODggMjQuMjMxNSA0MS44MjQzIDI0LjE3NTdDNDEuNzY4NSAyNC4xMiA0MS43MDI0IDI0LjA3NTggNDEuNjI5NiAyNC4wNDU3QzQxLjU1NjggMjQuMDE1NSA0MS40Nzg4IDI0IDQxLjQgMjRIMzYuNDQ2TDM2LjI4OCAyNkg0MFYyN0gzNi4yMUwzNi4wNTEgMjlINDBWMzBIMzUuOTcyTDM1LjU5OSAzNC43MTVDMzUuNTk2NiAzNC43NTQ5IDM1LjU4NjMgMzQuNzkzOSAzNS41Njg3IDM0LjgyOTlDMzUuNTUxMiAzNC44NjU4IDM1LjUyNjcgMzQuODk3OCAzNS40OTY2IDM0LjkyNDJDMzUuNDY2NiAzNC45NTA2IDM1LjQzMTcgMzQuOTcwOCAzNS4zOTM4IDM0Ljk4MzdDMzUuMzU1OSAzNC45OTY1IDM1LjMxNTkgMzUuMDAxNyAzNS4yNzYgMzQuOTk5QzM1LjE5OTYgMzQuOTkxNSAzNS4xMjg5IDM0Ljk1NTUgMzUuMDc3OCAzNC44OTgzQzM1LjAyNjYgMzQuODQxMSAzNC45OTg5IDM0Ljc2NjcgMzUgMzQuNjlWMTguNEMzNSAxOC4yOTM5IDM0Ljk1NzkgMTguMTkyMiAzNC44ODI4IDE4LjExNzJDMzQuODA3OCAxOC4wNDIxIDM0LjcwNjEgMTggMzQuNiAxOEgzNFYxNy40QzM0IDE3LjI5MzkgMzMuOTU3OSAxNy4xOTIyIDMzLjg4MjggMTcuMTE3MkMzMy44MDc4IDE3LjA0MjEgMzMuNzA2MSAxNyAzMy42IDE3SDIzLjRDMjMuMjkzOSAxNyAyMy4xOTIyIDE3LjA0MjEgMjMuMTE3MiAxNy4xMTcyQzIzLjA0MjEgMTcuMTkyMiAyMyAxNy4yOTM5IDIzIDE3LjRWMThIMjIuNEMyMi4yOTM5IDE4IDIyLjE5MjIgMTguMDQyMSAyMi4xMTcyIDE4LjExNzJDMjIuMDQyMSAxOC4xOTIyIDIyIDE4LjI5MzkgMjIgMTguNFYzOC40QzIyIDM4LjU1OTEgMjIuMDYzMiAzOC43MTE3IDIyLjE3NTcgMzguODI0M0MyMi4yODgzIDM4LjkzNjggMjIuNDQwOSAzOSAyMi42IDM5SDI3VjM0LjJDMjcgMzQuMDkgMjcuMDkgMzQgMjcuMiAzNEgyOS44QzI5LjkxIDM0IDMwIDM0LjA5IDMwIDM0LjJaTTI1LjUgMzFWMjVIMjcuNVYzMUgyNS41Wk0yOS41IDI1VjMxSDMxLjVWMjVIMjkuNVpNMjUuNSAyM1YyMEgyNy41VjIzSDI1LjVaTTI5LjUgMjBWMjNIMzEuNVYyMEgyOS41Wk0zNyAzM1YzMkg0MFYzM0gzN1oiIGZpbGw9IndoaXRlIi8+DQo8cGF0aCBkPSJNMzYuNTI1NCAyM0wzNi42MDQ0IDIySDM5LjU5OTRDMzkuODE5NCAyMiAzOS45OTk0IDIyLjE4IDM5Ljk5OTQgMjIuNFYyM0gzNi41MjU0WiIgZmlsbD0id2hpdGUiLz4NCjwvZz4NCjxkZWZzPg0KPGZpbHRlciBpZD0iZmlsdGVyMF9mXzUwN181NjMzIiB4PSIxIiB5PSItMSIgd2lkdGg9IjU4IiBoZWlnaHQ9IjY0IiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+DQo8ZmVGbG9vZCBmbG9vZC1vcGFjaXR5PSIwIiByZXN1bHQ9IkJhY2tncm91bmRJbWFnZUZpeCIvPg0KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0ic2hhcGUiLz4NCjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjMiIHJlc3VsdD0iZWZmZWN0MV9mb3JlZ3JvdW5kQmx1cl81MDdfNTYzMyIvPg0KPC9maWx0ZXI+DQo8Y2xpcFBhdGggaWQ9ImNsaXAwXzUwN181NjMzIj4NCjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI2OCIgZmlsbD0id2hpdGUiLz4NCjwvY2xpcFBhdGg+DQo8L2RlZnM+DQo8L3N2Zz4NCg==',
                iconImageSize: [60, 68],
                iconImageOffset: [-30, -68]
            });

            mapInstance.geoObjects.add(placemark);
        });
    }

    async function initializeMaps() {
        const mapContainers = document.querySelectorAll('.yandex-map');
        for (const [index, mapContainer] of mapContainers.entries()) {
            mapContainer.id = `yandex-map-${index}`;
            await initMap(mapContainer);
        }
    }

    initializeMaps();
});


if (document.querySelector('.books')) {

    const sliders = document.querySelectorAll('[data-slider="swiper-books"]');

    if (sliders.length) {
        sliders.forEach(slider => {
            const swiperThumbs = new Swiper(slider.querySelector('.swiper-thumb'), {
                spaceBetween: 8,
                slidesPerGroup: 1,
                freeMode: true,
                watchSlidesProgress: true,

                breakpoints: {
                    0: {
                        slidesPerView: 3,
                    },
                    767.98: {
                        slidesPerView: 4,
                    },
                    1639.98: {
                        slidesPerView: 5,
                    },
                },
            });

            const swiperMain = new Swiper(slider.querySelector('.swiper-main'), {
                spaceBetween: 8,
                allowTouchMove: false,

                effect: 'fade',
                fadeEffect: {
                    crossFade: true,
                },

                thumbs: {
                    swiper: swiperThumbs,
                },

                navigation: {
                    nextEl: slider.querySelector('.swiper-button-next'),
                    prevEl: slider.querySelector('.swiper-button-prev'),
                },
            });
        });
    }

}


if (document.querySelector('.articles')) {
    let tabs = document.querySelectorAll('.articles__tab');
    tabs.forEach(function (tab) {
        tab.addEventListener('click', function () {
            tabs.forEach(function (t) {
                t.classList.remove('active-articles-tab');
            });
            tab.classList.add('active-articles-tab');
            let tabName = tab.getAttribute('data-tab');
            let tabContents = document.querySelectorAll(".articles__tab-content");
            tabContents.forEach(function (content) {
                content.classList.remove('active-articles-content');
            });
            document.getElementById(tabName).classList.add('active-articles-content');
        });
    });

}