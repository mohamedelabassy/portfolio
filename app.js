/* Mohamed Elabasy — portfolio interactions: theme, scroll reveal, stat count-up, project views. */
(function () {
    'use strict';

    var projects = [
        {
            number: 1, name: 'Abber', eyebrow: 'Dream interpretation · chat and live sessions',
            description: 'Connects users with a select network of reputable interpreters through text and voice chat and live sessions, delivering confidential, Quran-and-Sunnah-based interpretations instead of automated dictionary answers.',
            stores: [
                { label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=co.abber_dev.abber_app' },
                { label: 'App Store', href: 'https://apps.apple.com/sa/app/%D8%B9%D8%A8%D8%B1-%D9%84%D8%AA%D9%81%D8%B3%D9%8A%D8%B1-%D8%A7%D9%84%D8%A3%D8%AD%D9%84%D8%A7%D9%85/id6461119454' }
            ],
            accent: '#2b3a8f', slug: 'abber',
            shots: ['photos/abber-1.jpg', 'photos/abber-2.jpg', 'photos/abber-3.jpg', 'photos/abber-4.jpg'],
            alts: ['Abber onboarding screen introducing the interpreters', 'Abber screen for choosing an interpreter with clear pricing', 'Abber chat list with interpreter conversations', 'Abber screen for sending a dream for interpretation']
        },
        {
            number: 2, name: 'Hattrick', eyebrow: 'Football talent platform',
            description: 'Connects players, scouts, agents, clubs, and academies in one community, where players build profiles, showcase skills and videos, and join challenges to get discovered.',
            stores: [
                { label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=com.smartvision.hattrick' },
                { label: 'App Store', href: 'https://apps.apple.com/us/app/hatrick/id6619497571' }
            ],
            accent: '#0f9c7c', slug: 'hattrick',
            shots: ['photos/hattrick-1.jpg', 'photos/hattrick-2.jpg', 'photos/hattrick-3.jpg', 'photos/hattrick-4.jpg'],
            alts: ['Hattrick welcome screen for players and talent', 'Hattrick player registration flow', 'Hattrick registration details form', 'Hattrick feed with player videos and challenges']
        },
        {
            number: 3, name: 'Marmar', eyebrow: 'Discounts and offers',
            description: 'Helps users discover and benefit from offers and discounts at stores and shops, with QR scanning to redeem each deal on the spot.',
            stores: [
                { label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=com.smartvision.marmar' },
                { label: 'App Store', href: 'https://apps.apple.com/us/app/marmar-%D9%85%D8%B1%D9%85%D8%B1/id6443762483' }
            ],
            accent: '#6d4fc2', slug: 'marmar',
            shots: ['photos/marmar-1.jpg', 'photos/marmar-2.jpg', 'photos/marmar-3.jpg', 'photos/marmar-4.jpg'],
            alts: ['Marmar list of favorite offers', 'Marmar sign-in screen', 'Marmar new account registration', 'Marmar home screen with discount categories']
        },
        {
            number: 4, name: 'Crashes Fix', eyebrow: 'Maintenance and repair services',
            description: 'Covers air conditioning, plumbing, electricity, and other malfunctions, connecting individuals and companies with a qualified, specialized team for fast and efficient repairs.',
            stores: [
                { label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=com.smartvision.crashes_fix' },
                { label: 'App Store', href: 'https://apps.apple.com/us/app/crashes-fix/id6778005881' }
            ],
            accent: '#d95f43', slug: 'crashes_fix',
            shots: ['photos/crashes_fix-1.jpg', 'photos/crashes_fix-2.jpg', 'photos/crashes_fix-3.jpg', 'photos/crashes_fix-4.jpg'],
            alts: ['Crashes Fix screen describing the maintenance service', 'Crashes Fix services list with prices', 'Crashes Fix chat with the service team', 'Crashes Fix account and profile screen']
        },
        {
            number: 5, name: 'Takamol Platform', eyebrow: 'Charity and community services',
            description: 'An integrated digital platform that connects beneficiaries, volunteers, and partners to deliver services and support securely, with a dedicated dashboard for each account type, real-time request tracking, and direct communication between all parties.',
            stores: [
                { label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=com.smartvision.tkamol_platform' },
                { label: 'App Store', href: 'https://apps.apple.com/us/app/%D8%AC%D9%85%D8%B9%D9%8A%D8%A9-%D8%AA%D9%83%D8%A7%D9%85%D9%84/id6480185206' }
            ],
            accent: '#2a9d8f', slug: 'takamol',
            shots: ['photos/takamol-1.jpg', 'photos/takamol-2.jpg', 'photos/takamol-3.jpg', 'photos/takamol-4.jpg'],
            alts: ['Takamol dashboard with statistics chart', 'Takamol admin dashboard with service numbers', 'Takamol account screen with sign-in options', 'Takamol menu for managing services and requests']
        },
        {
            number: 6, name: 'Al-Senaia Al-Motakamela', eyebrow: 'Marketplace for Saudi Arabia and the Gulf',
            description: 'A marketplace for buying and selling cars, real estate, appliances and furniture, and livestock, with auctions, fast ad publishing, and direct communication with advertisers.',
            stores: [
                { label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=com.smart_vision.industrial' },
                { label: 'App Store', href: 'https://apps.apple.com/us/app/%D8%A7%D9%84%D8%B5%D9%86%D8%A7%D8%B9%D9%8A%D8%A9-%D8%A7%D9%84%D9%85%D8%AA%D9%83%D8%A7%D9%85%D9%84%D8%A9/id1576107971' }
            ],
            accent: '#dd7a1f', slug: 'senaia',
            shots: ['photos/senaia-1.jpg', 'photos/senaia-2.jpg', 'photos/senaia-3.jpg', 'photos/senaia-4.jpg'],
            alts: ['Al-Senaia home screen with selling categories', 'Al-Senaia category listings with photos', 'Al-Senaia ad publishing flow', 'Al-Senaia product details for a listed item']
        },
        {
            number: 7, name: 'Superheroes Land', eyebrow: 'Nursery app for parents',
            description: 'Displays the services provided by the nursery and lets parents register their child and follow up on daily reports and photos.',
            stores: [
                { label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=com.smartvision.nurseryapp' },
                { label: 'App Store', href: 'https://apps.apple.com/us/app/superheroes-land/id1591932436' }
            ],
            accent: '#3d5a99', slug: 'superheroes',
            shots: ['photos/superheroes-1.jpg', 'photos/superheroes-2.jpg', 'photos/superheroes-3.jpg', 'photos/superheroes-4.jpg'],
            alts: ['Superheroes Land nursery services and registration screen', 'Superheroes Land child registration form', 'Superheroes Land event registration screen', 'Superheroes Land parent account screen']
        },
        {
            number: 8, name: 'Pakraqba', eyebrow: 'Real estate in Saudi Arabia and Pakistan',
            description: 'Offers land, apartment, and villa listings for sale or rent, with maps, a residential area guide, real estate news, a community forum, agent communication, auctions, and multi-currency support.',
            stores: [
                { label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=com.smartvision.pakraqba' }
            ],
            accent: '#12927f', slug: 'pakraqba',
            shots: ['photos/pakraqba-1.jpg', 'photos/pakraqba-2.jpg', 'photos/pakraqba-3.jpg', 'photos/pakraqba-4.jpg'],
            alts: ['Pakraqba auction details for a property', 'Pakraqba auction bidding screen', 'Pakraqba mortgage finance calculator', 'Pakraqba personal account screen']
        }
    ];

    var doc = document;
    var html = doc.documentElement;

    /* Theme */
    var switchBtn = doc.getElementById('pf-theme-switch');
    var switchLabel = doc.getElementById('pf-theme-label');
    function systemDark() { return window.matchMedia('(prefers-color-scheme: dark)').matches; }
    function storedTheme() {
        try { return localStorage.getItem('pf-theme'); } catch (e) { return null; }
    }
    var params = new URLSearchParams(window.location.search);
    var forced = params.get('theme');
    function currentDark() {
        var t = forced || storedTheme();
        if (t === 'dark') return true;
        if (t === 'light') return false;
        return systemDark();
    }
    function applyTheme() {
        var dark = currentDark();
        html.classList.toggle('pf-dark', dark);
        switchBtn.setAttribute('aria-checked', dark ? 'true' : 'false');
        switchLabel.textContent = dark ? 'Dark' : 'Light';
    }
    switchBtn.addEventListener('click', function () {
        var next = currentDark() ? 'light' : 'dark';
        forced = null;
        try { localStorage.setItem('pf-theme', next); } catch (e) {}
        applyTheme();
    });
    try {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function () {
            if (!storedTheme() && !forced) applyTheme();
        });
    } catch (e) {}
    applyTheme();

    /* Project cards */
    var listEl = doc.getElementById('pf-projects');
    projects.forEach(function (p, i) {
        var card = doc.createElement('article');
        card.className = 'pf-card pf-anim';
        card.setAttribute('role', 'button');
        card.setAttribute('tabindex', '0');
        card.setAttribute('aria-label', 'Open ' + p.name);
        card.style.setProperty('--pf-accent', p.accent);
        card.style.transitionDelay = ((i % 2) * 90) + 'ms';
        card.innerHTML =
            '<div class="pf-project-head">' +
                '<span class="pf-num">' + p.number + '</span>' +
                '<div class="pf-project-title">' +
                    '<h3 class="pf-name"></h3>' +
                    '<span class="pf-eyebrow"></span>' +
                '</div>' +
                '<span class="pf-open" aria-hidden="true">View app <span class="pf-open-arrow">&rarr;</span></span>' +
            '</div>' +
            '<p class="pf-desc"></p>' +
            '<div class="pf-card-shots" aria-hidden="true">' +
                '<img class="pf-card-shot pf-shot-a" alt="" loading="lazy">' +
                '<img class="pf-card-shot pf-shot-b" alt="" loading="lazy">' +
                '<img class="pf-card-shot pf-shot-c" alt="" loading="lazy">' +
            '</div>';
        card.querySelector('.pf-name').textContent = p.name;
        card.querySelector('.pf-eyebrow').textContent = p.eyebrow;
        card.querySelector('.pf-desc').textContent = p.description;
        var imgs = card.querySelectorAll('.pf-card-shot');
        imgs[0].src = p.shots[0];
        imgs[1].src = p.shots[1];
        imgs[2].src = p.shots[2];
        function open() { openProject(p); }
        card.addEventListener('click', open);
        card.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); }
        });
        listEl.appendChild(card);
    });

    /* Project detail view */
    var mainEl = doc.getElementById('pf-main');
    var detailHost = doc.getElementById('pf-detail');
    var openP = null;

    function openProject(p, instant) {
        openP = p;
        var view = doc.createElement('div');
        view.className = instant ? 'pf-view pf-phase-solid' : 'pf-view pf-phase-pre';
        view.setAttribute('role', 'dialog');
        view.setAttribute('aria-modal', 'true');
        view.setAttribute('aria-label', p.name);
        view.style.setProperty('--pf-accent', p.accent);
        var storesHtml = p.stores.map(function (s) {
            return '<a class="pf-store-btn" target="_blank" rel="noopener"></a>';
        }).join('');
        view.innerHTML =
            '<div class="pf-view-inner">' +
                '<button type="button" class="pf-back"><span class="pf-back-arrow" aria-hidden="true">&larr;</span> All apps</button>' +
                '<div class="pf-view-head">' +
                    '<span class="pf-num">' + p.number + '</span>' +
                    '<div class="pf-project-title">' +
                        '<h2 class="pf-name pf-view-name"></h2>' +
                        '<span class="pf-eyebrow"></span>' +
                    '</div>' +
                '</div>' +
                '<p class="pf-desc pf-view-desc"></p>' +
                '<div class="pf-view-stores">' + storesHtml + '</div>' +
                '<div class="pf-view-shots">' +
                    p.shots.map(function (src, i) {
                        return '<img class="pf-view-shot" style="transition-delay:' + (260 + i * 110) + 'ms">';
                    }).join('') +
                '</div>' +
            '</div>';
        view.querySelector('.pf-view-name').textContent = p.name;
        view.querySelector('.pf-view-head .pf-eyebrow').textContent = p.eyebrow;
        view.querySelector('.pf-view-desc').textContent = p.description;
        Array.prototype.forEach.call(view.querySelectorAll('.pf-store-btn'), function (a, i) {
            a.textContent = p.stores[i].label;
            a.href = p.stores[i].href;
        });
        Array.prototype.forEach.call(view.querySelectorAll('.pf-view-shot'), function (img, i) {
            img.src = p.shots[i];
            img.alt = p.alts[i];
        });
        view.querySelector('.pf-back').addEventListener('click', closeProject);
        detailHost.innerHTML = '';
        detailHost.appendChild(view);
        detailHost.hidden = false;
        mainEl.hidden = true;
        window.scrollTo(0, 0);
        if (!instant) {
            setTimeout(function () { view.classList.add('pf-phase-in'); }, 40);
            setTimeout(function () {
                view.classList.remove('pf-phase-pre');
                view.classList.remove('pf-phase-in');
                view.classList.add('pf-phase-solid');
            }, 1100);
        }
        view.querySelector('.pf-back').focus();
    }

    function closeProject() {
        openP = null;
        detailHost.hidden = true;
        detailHost.innerHTML = '';
        mainEl.hidden = false;
        doc.getElementById('work').scrollIntoView({ block: 'start' });
    }

    doc.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && openP) closeProject();
    });

    /* Deep link: ?view=abber opens that app's detail view. */
    var wanted = params.get('view');
    if (wanted) {
        projects.forEach(function (p) {
            if (p.slug === wanted) openProject(p, true);
        });
    }

    /* Stat count-up */
    var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    Array.prototype.forEach.call(doc.querySelectorAll('.pf-stat-value'), function (el, idx) {
        var target = parseInt(el.getAttribute('data-target'), 10);
        var suffix = el.getAttribute('data-suffix') || '';
        if (reducedMotion) { el.textContent = target + suffix; return; }
        el.textContent = '0' + suffix;
        var delay = 150 + idx * 150;
        setTimeout(function () {
            var start = performance.now();
            var duration = 1000;
            function tick(t) {
                var p = Math.min(1, (t - start) / duration);
                var eased = 1 - Math.pow(1 - p, 3);
                el.textContent = Math.round(target * eased) + suffix;
                if (p < 1) requestAnimationFrame(tick);
            }
            requestAnimationFrame(tick);
        }, delay);
    });

    /* Scroll reveal */
    var els = Array.prototype.slice.call(doc.querySelectorAll('.pf-anim'));
    if (!('IntersectionObserver' in window) || reducedMotion) {
        els.forEach(function (el) { el.classList.add('pf-in'); });
    } else {
        html.classList.add('pf-armed');
        var io = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('pf-in');
                    io.unobserve(entry.target);
                }
            });
        }, { threshold: 0.08, rootMargin: '0px 0px -24px 0px' });
        els.forEach(function (el) { io.observe(el); });
    }
})();
