/* ==========================================================================
   MAVS MOBILE DETAILING - Main JavaScript
   ========================================================================== */

(function () {
    'use strict';

    // --- Navigation scroll effect ---
    const nav = document.getElementById('nav');
    let lastScroll = 0;

    function handleScroll() {
        const scrollY = window.scrollY;
        if (scrollY > 40) {
            nav.classList.add('nav--scrolled');
        } else {
            nav.classList.remove('nav--scrolled');
        }
        lastScroll = scrollY;
    }

    window.addEventListener('scroll', handleScroll, { passive: true });

    // --- Mobile nav toggle ---
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', function () {
            navToggle.classList.toggle('active');
            navLinks.classList.toggle('open');
            document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
        });

        // Close menu on link click
        navLinks.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                navToggle.classList.remove('active');
                navLinks.classList.remove('open');
                document.body.style.overflow = '';
            });
        });
    }

    // --- Smooth scroll for anchor links ---
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            var target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                var navHeight = nav ? nav.offsetHeight : 0;
                var targetPos = target.getBoundingClientRect().top + window.scrollY - navHeight;
                window.scrollTo({
                    top: targetPos,
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- FAQ accordion ---
    var faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(function (item) {
        var btn = item.querySelector('.faq-question');
        if (btn) {
            btn.addEventListener('click', function () {
                var isActive = item.classList.contains('active');

                // Close all
                faqItems.forEach(function (other) {
                    other.classList.remove('active');
                    var otherBtn = other.querySelector('.faq-question');
                    if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
                });

                // Toggle current
                if (!isActive) {
                    item.classList.add('active');
                    btn.setAttribute('aria-expanded', 'true');
                }
            });
        }
    });

    // --- Service area tags - click to scroll to contact ---
    var areaTags = document.querySelectorAll('.area-tag');
    areaTags.forEach(function (tag) {
        tag.style.cursor = 'pointer';
        tag.addEventListener('click', function () {
            var contactSection = document.getElementById('contact');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // --- Scroll reveal (fade-up) with glassmorphism effects ---
    function initScrollReveal() {
        var elements = document.querySelectorAll(
            '.service-card, .price-card, .discount-card, .process-step, .area-tag, .faq-item, .contact-info, .contact-form-wrap'
        );

        elements.forEach(function (el) {
            el.classList.add('fade-up');
        });

        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    // Stagger animation for siblings
                    var parent = entry.target.parentElement;
                    var siblings = parent ? Array.from(parent.children).filter(function (c) {
                        return c.classList.contains('fade-up');
                    }) : [];
                    var index = siblings.indexOf(entry.target);
                    var delay = index >= 0 ? index * 80 : 0;

                    setTimeout(function () {
                        entry.target.classList.add('visible');

                        // Add stacking effect for service cards
                        if (entry.target.classList.contains('service-card')) {
                            entry.target.classList.add('stacked');
                        }
                    }, delay);

                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -40px 0px'
        });

        elements.forEach(function (el) {
            observer.observe(el);
        });
    }

    // --- Glass shine effect on scroll ---
    function initGlassShineEffect() {
        var glassCards = document.querySelectorAll('.service-card, .price-card, .discount-card');

        glassCards.forEach(function (card) {
            // Create shine element
            var shine = document.createElement('div');
            shine.className = 'glass-shine';
            card.appendChild(shine);
        });
    }

    // --- Pricing card pulse effect ---
    function initPricingEffects() {
        var featuredCard = document.querySelector('.price-card--featured');
        var premiumCard = document.querySelector('.price-card--premium');

        // Add subtle pulse to featured card when in view
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    setTimeout(function () {
                        entry.target.style.animation = 'glassFloat 3s ease-in-out infinite';
                    }, 400);
                }
            });
        }, {
            threshold: 0.3
        });

        if (featuredCard) observer.observe(featuredCard);
        if (premiumCard) observer.observe(premiumCard);
    }

    // --- Smooth parallax for hero glass ---
    function initHeroParallax() {
        var heroContent = document.querySelector('.hero-content');

        if (!heroContent) return;

        window.addEventListener('scroll', function () {
            var scrolled = window.scrollY;
            var rate = scrolled * 0.3;

            if (scrolled < window.innerHeight) {
                heroContent.style.transform = 'translateY(' + rate + 'px)';
            }
        }, { passive: true });
    }

    // --- Contact form handling ---
    var contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            var submitBtn = contactForm.querySelector('button[type="submit"]');
            var originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;

            // Gather form data
            var formData = new FormData(contactForm);
            var data = {};
            formData.forEach(function (value, key) {
                data[key] = value;
            });

            // For now, show success (replace with actual form endpoint)
            var action = contactForm.getAttribute('action');
            if (action && action.indexOf('FORM_ID') === -1) {
                // Real endpoint configured
                fetch(action, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                .then(function (response) {
                    if (response.ok) {
                        showFormSuccess(contactForm, submitBtn);
                    } else {
                        showFormError(submitBtn, originalText);
                    }
                })
                .catch(function () {
                    showFormError(submitBtn, originalText);
                });
            } else {
                // No real endpoint - show success message for demo
                setTimeout(function () {
                    showFormSuccess(contactForm, submitBtn);
                }, 800);
            }
        });
    }

    function showFormSuccess(form, btn) {
        form.innerHTML = '<div style="text-align:center;padding:40px 0;">' +
            '<i class="fas fa-check-circle" style="font-size:2.5rem;color:var(--red);margin-bottom:16px;display:block;"></i>' +
            '<h3 style="font-family:var(--font-heading);font-weight:700;font-size:1.4rem;color:var(--white);margin-bottom:8px;text-transform:uppercase;">Quote Request Sent</h3>' +
            '<p style="color:var(--gray-400);font-size:0.95rem;">We\'ll get back to you shortly. Thanks for choosing Mavs Mobile Detailing.</p>' +
            '</div>';
    }

    function showFormError(btn, originalText) {
        btn.textContent = 'Error - Try Again';
        btn.style.background = '#666';
        btn.disabled = false;
        setTimeout(function () {
            btn.textContent = originalText;
            btn.style.background = '';
        }, 3000);
    }

    // --- Initialize ---
    document.addEventListener('DOMContentLoaded', function () {
        initScrollReveal();
        initGlassShineEffect();
        initPricingEffects();
        initHeroParallax();
    });

    // Fire immediately if DOM already loaded
    if (document.readyState === 'interactive' || document.readyState === 'complete') {
        initScrollReveal();
        initGlassShineEffect();
        initPricingEffects();
        initHeroParallax();
    }

})();
