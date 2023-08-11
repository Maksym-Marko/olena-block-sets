(function ($) {
    $(function () {

        /**
         * Required modules.
         */
        if (typeof gsap === 'undefined') {
            console.warn('Please, enable GSAP module.');
        }

        if (typeof ScrollTrigger === 'undefined') {
            console.warn('Please, enable ScrollTrigger module.');
        }

        if (typeof Lenis === 'undefined') {
            console.warn('Please, enable Lenis module.');
        }

        /**
         * Enable ScrollTrigger to GSAP.
         */
        if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
            gsap.registerPlugin(ScrollTrigger);
        }

        /**
         * Smooth scrolling.
         */
        window.olenaLenis = window.olenaLenis || {

            init: function () {

                if (typeof Lenis === 'undefined') return;

                const lenis = new Lenis();

                function raf(time) {
                    lenis.raf(time)
                    requestAnimationFrame(raf)
                }

                requestAnimationFrame(raf)
            }

        };

        olenaLenis.init();

        /**
         * Scroll to Section.
         */
        window.olenaScrollToSection = window.olenaScrollToSection || {

            elements: 'a[href^="#"]',

            bindClick: function (element, section) {

                element.on('click', function (e) {

                    e.preventDefault();

                    $('html, body').animate({
                        scrollTop: section.offset().top
                    }, 1000);

                });

            },

            prepareElements: function () {

                if ($(this.elements).length === 0) return;

                const _this = this;

                $(this.elements).each(function () {
                    const section = $(this).attr('href');
                    if (section !== '#') {
                        if ($(section).length !== 0) {
                            _this.bindClick($(this), $(section));
                        }
                    }

                });
            },

            init: function () {
                this.prepareElements();
            }

        };

        olenaScrollToSection.init();

        /**
         * Content Slider.
         */
        window.olenaContentSlider = window.olenaContentSlider || {

            container: '.wp-block-olena-content-slider',

            bindSlider: function () {

                if ($(this.container).length === 0) return;

                const _this = this;

                $(this.container).each(function () {

                    const data = $(this).data();

                    const autoplay = data.autoplay === 0 ? false : true;;
                    const autoplayTimeout = data.autoplaySpeed === 0 ? 5000 : data.autoplaySpeed + '000';
                    const nav = data.nav === 0 ? false : true;
                    const dots = data.dots === 0 ? false : true;
                    const loop = data.loop === 0 ? false : true;

                    $(this).owlCarousel({
                        loop: loop,
                        margin: 10,
                        items: 1,
                        autoplay: autoplay,
                        nav: nav,
                        dots: dots,
                        autoplayTimeout: autoplayTimeout,
                        autoHeight: true
                    });

                });

            },

            init: function () {

                this.bindSlider();

            }

        };

        olenaContentSlider.init();

        /**
         * Animated Section Vertical.
         */
        window.olenaSectionAnimatedVertical = window.olenaSectionAnimatedVertical || {
            container: '.wp-block-olena-animated-section-vertical',
            slide: '.is-style-animation-pointer',
            nav: '.is-style-animation-descriptor',
            activeClass: 'active-nav',
            sectionHeightAttr: 'data-section-height',
            startPositionAttr: 'data-start-position',
            interval: 10,
            timeOut: null,
            slideIndex: -1,

            gsap: function (container) {

                if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

                const sectionHeight = '+=' + container.getAttribute(this.sectionHeightAttr);

                const startPosition = container.getAttribute(this.startPositionAttr);

                let media = gsap.matchMedia();

                const _this = this;

                const nav = (null == container ? void 0 : container.querySelectorAll(_this.nav)) || [];

                const slides = (null == container ? void 0 : container.querySelectorAll(_this.slide)) || [];

                media.add("(min-width: 991.5px)", function () {

                    let timeLine = gsap.timeline({
                        scrollTrigger: {
                            trigger: container,
                            start: startPosition,
                            end: sectionHeight,
                            pin: true,
                            pinReparent: false,
                            anticipatePin: 1,
                            scrub: true,
                            invalidateOnRefresh: true,
                            snap: {
                                snapTo: "labels",
                                duration: .3,
                                delay: 0,
                                ease: "none"
                            },
                            onUpdate: function (e) {
                                _this.handleImageState(container, e);
                            }
                        }
                    });

                    nav.forEach((function (t, o) {

                        if (0 !== o) {

                            timeLine.fromTo(slides[o - 1], { opacity: 1, y: 0 }, { opacity: 0, y: -50, duration: .5 });

                            timeLine.fromTo(slides[o], { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: .5 });

                            timeLine.addLabel("".concat(o))

                        } else {

                            timeLine.addLabel("0")

                        }

                    }));

                });
            },

            handleImageState: function (container, scrollTrigger) {

                if (typeof scrollTrigger.progress === 'undefined') return;

                const _this = this;

                clearTimeout(_this.timeOut);

                _this.timeOut = setTimeout(function () {

                    const slides = container.querySelectorAll(_this.slide);

                    const navs = container.querySelectorAll(_this.nav);

                    const description = container.querySelectorAll(_this.nav + ' p');

                    slides.forEach(function (el, index) {

                        let slideOpacity = el.style.opacity;

                        if (_this.slideIndex !== index) {

                            if (slideOpacity >= 0.8) {

                                navs.forEach(function (_el) {
                                    _el.classList.remove(_this.activeClass);
                                });

                                description.forEach(function (p) {
                                    $(p).hide('slow')
                                });

                                $(description[index]).show('slow');

                                $(navs[index]).addClass(_this.activeClass);

                                _this.slideIndex = index;

                            }

                        }
                    });

                }, _this.interval);

            },

            prepareContainers: function () {

                const containers = document.querySelectorAll(this.container);

                if (containers.length === 0) return;

                const _this = this;

                containers.forEach(function (container) {
                    _this.gsap(container);
                });

            },

            init: function () {
                this.prepareContainers();
            }
        }

        olenaSectionAnimatedVertical.init();

        /**
         * Animated Section Horizontal.
         */
        window.olenaSectionAnimatedHorizontal = window.olenaSectionAnimatedHorizontal || {

            container: '.wp-block-olena-animated-section-horizontal',
            slider: '.mx-animated-horizontal-slider',
            startPositionAttr: 'data-start-position',

            setWidth: function (container) {

                const elementWidth = container.clientWidth;

                const slider = container.querySelector(this.slider);

                const slides = slider.children;

                for (let i = 0; i < slides.length; i++) {
                    slides[i].style.width = elementWidth + 'px';
                }

            },

            gsap: function (container) {

                this.setWidth(container);

                if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

                const startPosition = container.getAttribute(this.startPositionAttr);
                const slider = container.querySelector(this.slider);
                const slides = slider.children;

                const timeLine = gsap.timeline();

                timeLine.to(slider, {
                    x: function () {
                        return '-' + (slider.offsetWidth - (slider.offsetWidth / slides.length)) + 'px'
                    },
                    ease: "none",
                    scrollTrigger: {
                        trigger: container,
                        start: startPosition,
                        end: function () {
                            return "+=".concat(slider.offsetWidth/(slides.length/2))
                        },
                        pin: true,
                        pinReparent: false,
                        anticipatePin: 1,
                        scrub: 1,
                        snap: {
                            snapTo: 1 / (slides.length - 1),
                            duration: .1,
                            delay: 0,
                            ease: "none"
                        },
                        invalidateOnRefresh: true
                    }
                });

            },

            prepareContainers: function () {

                const containers = document.querySelectorAll(this.container);

                if (containers.length === 0) return;

                const _this = this;

                containers.forEach(function (container) {
                    _this.gsap(container);
                });

            },

            init: function () {

                this.prepareContainers();

            }

        };

        olenaSectionAnimatedHorizontal.init();

        /**
         * Freeze an element when a page is scrolled.
         */
        window.olenaFreezeElement = window.olenaFreezeElement || {

            elements: '.is-style-freeze-on-scroll',
            preActiveClass: 'mx-element-pre-freezed',
            activeClass: 'mx-element-freezed',
            scrollTop: 200,
            intervalBody: null,
            interval: 100,

            bindFreeze: function () {

                const _this = this;

                clearTimeout(this.intervalBody);

                this.intervalBody = setTimeout(function () {

                    $(_this.elements).each(function () {

                        if ($(window).scrollTop() >= _this.scrollTop) {
                            if (!$(this).hasClass(_this.activeClass)) {
                                $(this)
                                    .addClass(_this.preActiveClass)
                                    .addClass(_this.activeClass)
                                    .removeClass(_this.preActiveClass);
                            }
                        } else {
                            if ($(this).hasClass(_this.activeClass)) {
                                $(this)
                                    .addClass(_this.preActiveClass)
                                    .removeClass(_this.activeClass)
                                    .removeClass(_this.preActiveClass);
                            }
                        }

                    });

                }, this.interval);

            },

            onScroll: function () {
                const _this = this;
                $(window).on('scroll', function () {
                    _this.bindFreeze();
                });
            },

            initState: function () {

                if (document.querySelectorAll(this.elements).length === 0) return;

                this.bindFreeze();
                this.onScroll();

            },

            init: function () {

                this.initState();

            }

        };

        olenaFreezeElement.init();

        /**
         * Animation Box.
         */
        window.olenaAnimatedBox = window.olenaAnimatedBox || {

            zoomInElements: '[data-animation-type="zoomIn"]',
            fadeInRightElements: '[data-animation-type="fadeInRight"]',
            fadeInLeftElements: '[data-animation-type="fadeInLeft"]',
            fadeInUpElements: '[data-animation-type="fadeInUp"]',

            zoomIn: function () {

                if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

                const _this = this;

                const zoomIn = document.querySelectorAll(_this.zoomInElements);

                if (zoomIn.length === 0) return;

                zoomIn.forEach(function (el, i) {

                    gsap.from(el, {
                        scale: '.4',
                        scrollTrigger: {
                            trigger: el,
                            start: 'top bottom',
                            end: 'top 60%',
                            scrub: 1
                        }
                    });

                });

            },

            fadeInRight: function () {

                if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

                const _this = this;

                const fadeInRight = document.querySelectorAll(_this.fadeInRightElements);

                if (fadeInRight.length === 0) return;

                fadeInRight.forEach(function (el, i) {

                    gsap.from(el, {
                        x: '100%',
                        scrollTrigger: {
                            trigger: el,
                            start: 'top bottom',
                            end: 'top 60%',
                            scrub: 1
                        }
                    });

                });

            },

            fadeInLeft: function () {

                if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

                const _this = this;

                const fadeInLeft = document.querySelectorAll(_this.fadeInLeftElements);

                if (fadeInLeft.length === 0) return;

                fadeInLeft.forEach(function (el, i) {

                    gsap.from(el, {
                        x: '-100%',
                        scrollTrigger: {
                            trigger: el,
                            start: 'top bottom',
                            end: 'top 60%',
                            scrub: 1
                        }
                    });

                });

            },

            fadeInUp: function () {

                if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

                const _this = this;

                const fadeInUp = document.querySelectorAll(_this.fadeInUpElements);

                if (fadeInUp.length === 0) return;

                fadeInUp.forEach(function (el, i) {

                    gsap.from(el, {
                        y: '50%',
                        scrollTrigger: {
                            trigger: el,
                            start: 'top bottom',
                            end: 'top 60%',
                            scrub: 1
                        }
                    });

                });

            },

            init: function () {

                this.zoomIn();
                this.fadeInRight()
                this.fadeInLeft();
                this.fadeInUp();

            }

        };

        olenaAnimatedBox.init();

        /**
         * Price switcher
         */
        window.olenaPriceSwitcher = window.olenaPriceSwitcher || {

            container: '.is-style-price-switcher',
            element: '#pricing .wp-block-navigation-item__content',
            activatedClass: 'price-switcher-activated',
            activeClass: 'price-switcher-active',
            containerSwitcherPositionClass: 'price-switcher-position-',
            sections: '.sb-pricing-list',
            sectionActiveClass: 'sb-pricing-list-active',

            removeClass: function (element, classNameRoot) {

                $(element).removeClass(function (index, classNames) {
                    let current_classes = classNames.split(" "),
                        classes_to_remove = [];

                    $.each(current_classes, function (index, class_name) {
                        const regExp = new RegExp(`${classNameRoot}.*`);
                        if (regExp.test(class_name)) {
                            classes_to_remove.push(class_name);
                        }
                    });

                    return classes_to_remove.join(" ");

                });

            },

            switcherPosition: function (index) {

                this.removeClass(this.container, this.containerSwitcherPositionClass);

                $(this.container).addClass(this.containerSwitcherPositionClass + index);

            },

            bindClick: function () {

                const _this = this;

                $(this.element).on('click', function (e) {

                    e.preventDefault();

                    const page = $('html, body')

                    page.stop();

                    // anchors
                    const sectionId = $(this).attr('href');

                    if ($(sectionId).length === 1) {

                        if (!$(sectionId).hasClass(_this.sectionActiveClass)) {

                            // switcher position
                            $(_this.container).addClass(_this.activatedClass);
                            $(_this.element).removeClass(_this.activeClass);
                            $(this).addClass(_this.activeClass);
                            _this.switcherPosition($(this).parent().index());

                            // change sections active class
                            $(_this.sections)
                                .removeClass(_this.sectionActiveClass)
                                .hide('fast');

                            $(sectionId)
                                .addClass(_this.sectionActiveClass)
                                .show('fast');

                        }
                    }

                });
            },

            initState: function () {

                $(this.sections).hide();

                $(`${this.sections}.${this.sectionActiveClass}`).show();

            },

            init: function () {
                if ($(this.container).length === 0) return;

                // init state
                this.initState();

                // bind click
                this.bindClick();
            }

        };

        olenaPriceSwitcher.init();

        /**
         * Modal Window
         */
        window.olenaModalWindow = window.olenaModalWindow || {

            /**
             * modal window       - #modal-window
             * open modal window  - a[href="#open-modal-window"]
             * close modal window - a[href="#close-modal-window"]
            */

            modalContainer: '.mx-modal-window',

            bindClose: function (modal) {

                const id = $(modal).attr('id');

                if (typeof id === 'undefined') return;

                const closeElement = $(`a[href="#close-${id}"]`);

                if (closeElement.length === 0) return;

                closeElement.on('click', function (e) {
                    e.preventDefault();
                    const page = $('html, body');
                    page.stop();

                    $(modal).hide('fast');
                });
            },

            bindOpen: function (modal) {

                const id = $(modal).attr('id');

                if (typeof id === 'undefined') return;

                const openElement = $(`a[href="#open-${id}"]`);

                if (openElement.length === 0) return;

                openElement.on('click', function (e) {
                    e.preventDefault();
                    const page = $('html, body');
                    page.stop();

                    $(modal).show('fast');
                });
            },

            bindActions: function (modal) {

                this.bindOpen(modal);
                this.bindClose(modal);

            },

            initState: function () {
                const _this = this;

                $(this.modalContainer).each(function (index, modal) {
                    _this.bindActions(modal);
                });

            },

            init: function () {

                this.initState();

            }

        };

        olenaModalWindow.init();

    });
})(jQuery);
