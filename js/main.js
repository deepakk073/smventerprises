// S.M.V Enterprises - Premium JavaScript
(function () {
    'use strict';

    // --- Mobile Menu with Animation ---
    var hamburger = document.getElementById('hamburger');
    var nav = document.getElementById('nav');
    var overlay = document.createElement('div');
    overlay.className = 'nav-overlay';
    document.body.appendChild(overlay);

    function openMenu() {
        nav.classList.add('open');
        hamburger.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        nav.querySelectorAll('.nav-link').forEach(function (link, i) {
            link.style.transitionDelay = (i * 0.05) + 's';
            link.style.opacity = '1';
            link.style.transform = 'translateX(0)';
        });
    }
    function closeMenu() {
        nav.classList.remove('open');
        hamburger.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }
    hamburger.addEventListener('click', function () {
        nav.classList.contains('open') ? closeMenu() : openMenu();
    });
    overlay.addEventListener('click', closeMenu);
    document.querySelectorAll('.nav-link').forEach(function (l) {
        l.addEventListener('click', closeMenu);
    });

    // --- Sticky Header with Shadow ---
    var header = document.getElementById('header');
    window.addEventListener('scroll', function () {
        var currentScroll = window.scrollY;
        header.classList.toggle('scrolled', currentScroll > 30);
    }, { passive: true });

    // --- Active Nav on Scroll ---
    var sections = document.querySelectorAll('section[id]');
    var navLinks = document.querySelectorAll('.nav-link');

    function updateActive() {
        var y = window.scrollY + 150;
        sections.forEach(function (s) {
            var top = s.offsetTop, h = s.offsetHeight, id = s.getAttribute('id');
            if (y >= top && y < top + h) {
                navLinks.forEach(function (l) {
                    l.classList.toggle('active', l.getAttribute('href') === '#' + id);
                });
            }
        });
    }
    window.addEventListener('scroll', updateActive, { passive: true });
    updateActive();

    // --- Back to Top with Fade ---
    var btt = document.getElementById('backToTop');
    window.addEventListener('scroll', function () {
        btt.classList.toggle('visible', window.scrollY > 600);
    }, { passive: true });
    btt.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // --- Form -> WhatsApp ---
    function setupForm(id) {
        var form = document.getElementById(id);
        if (!form) return;
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            var fd = new FormData(form);
            var msg = 'Hello S.M.V Enterprises!\n\n';
            msg += 'Name: ' + (fd.get('name') || '') + '\n';
            msg += 'Phone: ' + (fd.get('phone') || '') + '\n';
            if (fd.get('category')) msg += 'Category: ' + fd.get('category') + '\n';
            if (fd.get('email')) msg += 'Email: ' + fd.get('email') + '\n';
            if (fd.get('message')) msg += 'Message: ' + fd.get('message') + '\n';

            var btn = form.querySelector('button[type="submit"]');
            var orig = btn.innerHTML;
            btn.innerHTML = '<i class="fas fa-check-circle"></i> Sending...';
            btn.disabled = true;

            setTimeout(function () {
                window.open('https://wa.me/919297759313?text=' + encodeURIComponent(msg), '_blank');
                btn.innerHTML = '<i class="fas fa-check-double"></i> Message Sent!';
                setTimeout(function () {
                    btn.innerHTML = orig;
                    btn.disabled = false;
                    form.reset();
                }, 2000);
            }, 800);
        });
    }
    setupForm('inquiryForm');
    setupForm('contactForm');

    // --- Advanced Scroll Reveal with Stagger ---
    var revealEls = document.querySelectorAll(
        '.about-highlight, .about-card, .brand-card, .product-card, ' +
        '.service-card, .gallery-card, .testimonial-card, .contact-item, .hero-stat'
    );
    revealEls.forEach(function (el) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(32px)';
        el.style.transition = 'opacity .7s cubic-bezier(.4,0,.2,1), transform .7s cubic-bezier(.4,0,.2,1)';
    });

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry, idx) {
            if (entry.isIntersecting) {
                setTimeout(function () {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, idx * 50);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

    revealEls.forEach(function (el) { observer.observe(el); });

    // --- Counter Animation with Easing ---
    var counters = document.querySelectorAll('.hero-stat strong');
    var counterDone = false;
    function animateCounters() {
        if (counterDone) return;
        counterDone = true;
        counters.forEach(function (el) {
            var text = el.textContent;
            var match = text.match(/(\d+)/);
            if (!match) return;
            var target = parseInt(match[1], 10);
            var suffix = text.replace(match[1], '');
            var duration = 2000;
            var startTime = null;
            function step(timestamp) {
                if (!startTime) startTime = timestamp;
                var progress = Math.min((timestamp - startTime) / duration, 1);
                var eased = 1 - Math.pow(1 - progress, 4);
                el.textContent = Math.floor(eased * target) + suffix;
                if (progress < 1) requestAnimationFrame(step);
            }
            requestAnimationFrame(step);
        });
    }
    var statsObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) animateCounters();
        });
    }, { threshold: 0.5 });
    var statsSection = document.querySelector('.hero-stats');
    if (statsSection) statsObserver.observe(statsSection);

    // --- Parallax Effect on Scroll (Hero Images) ---
    var heroImgs = document.querySelectorAll('.hero-img-main, .hero-img-secondary');
    if (heroImgs.length > 0) {
        window.addEventListener('scroll', function () {
            var scrolled = window.scrollY;
            heroImgs.forEach(function (img, i) {
                var speed = (i + 1) * 0.15;
                var yPos = -(scrolled * speed);
                img.style.transform = 'translateY(' + yPos + 'px)';
            });
        }, { passive: true });
    }

    // --- Smooth Button Ripple Effect ---
    document.querySelectorAll('.btn').forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            var x = e.clientX - e.target.getBoundingClientRect().left;
            var y = e.clientY - e.target.getBoundingClientRect().top;
            var ripple = document.createElement('span');
            ripple.style.cssText = 'position:absolute;width:0;height:0;background:rgba(255,255,255,.5);border-radius:50%;pointer-events:none;';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            this.appendChild(ripple);
            setTimeout(function () {
                ripple.style.width = ripple.style.height = '200px';
                ripple.style.marginLeft = ripple.style.marginTop = '-100px';
                ripple.style.opacity = '0';
                ripple.style.transition = 'all .6s ease-out';
            }, 10);
            setTimeout(function () { ripple.remove(); }, 650);
        });
    });

    // --- 3D Card Tilt Effect ---
    document.querySelectorAll('.product-card, .service-card, .brand-card').forEach(function (card) {
        card.addEventListener('mousemove', function (e) {
            var rect = this.getBoundingClientRect();
            var x = e.clientX - rect.left;
            var y = e.clientY - rect.top;
            var centerX = rect.width / 2;
            var centerY = rect.height / 2;
            var rotateX = ((y - centerY) / centerY) * -5;
            var rotateY = ((x - centerX) / centerX) * 5;
            this.style.transform = 'perspective(1000px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg) translateY(-8px)';
        });
        card.addEventListener('mouseleave', function () {
            this.style.transform = '';
        });
    });

    // --- Lazy Load Images ---
    if ('IntersectionObserver' in window) {
        var lazyImages = document.querySelectorAll('img[data-src]');
        var imageObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    var img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });
        lazyImages.forEach(function (img) { imageObserver.observe(img); });
    }

    // --- Add shine effect on brand logos ---
    document.querySelectorAll('.brand-logo-wrap img, .hero-badge-logo').forEach(function (logo) {
        logo.addEventListener('mouseenter', function () {
            this.style.transition = 'all .4s cubic-bezier(.4,0,.2,1)';
            this.style.filter = 'brightness(0) invert(1) drop-shadow(0 0 20px rgba(255,255,255,.6))';
        });
        logo.addEventListener('mouseleave', function () {
            this.style.filter = '';
        });
    });

    // --- Animated gradient background for hero ---
    var heroSection = document.querySelector('.hero');
    if (heroSection) {
        var hue = 220;
        setInterval(function () {
            hue = (hue + 0.3) % 360;
            heroSection.style.filter = 'hue-rotate(' + (hue - 220) + 'deg)';
        }, 50);
    }

    // --- Add loading animation ---
    window.addEventListener('load', function () {
        document.body.classList.add('loaded');
        document.querySelectorAll('.hero-badge, .hero-title, .hero-subtitle, .hero-desc, .hero-btns, .hero-stats').forEach(function (el, i) {
            el.style.opacity = '0';
            el.style.transform = 'translateY(24px)';
            setTimeout(function () {
                el.style.transition = 'opacity .8s cubic-bezier(.4,0,.2,1), transform .8s cubic-bezier(.4,0,.2,1)';
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }, 100 + (i * 100));
        });
    });

})();
