const navConfig = [
    { label: "Home", route: "home" },
    { label: "Location", route: "location" },
    { label: "Schedule", route: "schedule" },
    { label: "Social", route: "social" },
    { label: "Our Sponsors", route: "sponsors" },
    { label: "Be a Sponsor", route: "sponsor" },
    { label: "Past Events", route: "events" },
    { label: "About", route: "about" },
    { label: "Contact Us", route: "contact" }
];

const pages = {
    home: {
        title: "Welcome to MBMA",
        intro: "Mahone Bay Music Association is a community non-profit presenting live summer music at the town gazebo.",
        body: "Join us each Wednesday at 7:00 PM, July through September, as MBMA works to re-establish Mahone Bay as a great music destination through free, community-centered performances.",
        banner: "/assets/images/banner.webp",
        bannerFit: "contain",
        image: "/assets/images/concert1.webp",
        imageLink: "sponsor",
        imageNote: "MBMA gazebo and logo.",
        quickLinks: [
            { label: "View Summer 2026", route: "schedule" },
            { label: "Follow MBMA", route: "social" },
            { label: "Support MBMA", route: "sponsor" }
        ],
        cards: [
            ["Summer Series", "Wednesdays at 7:00 PM"],
            ["Season", "July to September"],
            ["Location", "Town Gazebo, 563 Main St, Mahone Bay, NS <a class=\"inline-map-link\" href=\"https://maps.app.goo.gl/uXkBsz17rsQormnZ6\" target=\"_blank\" rel=\"noopener noreferrer\" aria-label=\"Open location in Google Maps\"><svg class=\"inline-map-icon\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\"><path d=\"M15.5,12C18,12 20,14 20,16.5C20,17.38 19.75,18.21 19.31,18.9L22.39,22L21,23.39L17.88,20.32C17.19,20.75 16.37,21 15.5,21C13,21 11,19 11,16.5C11,14 13,12 15.5,12M15.5,14A2.5,2.5 0 0,0 13,16.5A2.5,2.5 0 0,0 15.5,19A2.5,2.5 0 0,0 18,16.5A2.5,2.5 0 0,0 15.5,14M14,6.11L8,4V15.89L9,16.24V16.5C9,17.14 9.09,17.76 9.26,18.34L8,17.9L2.66,19.97L2.5,20A0.5,0.5 0 0,1 2,19.5V4.38C2,4.15 2.15,3.97 2.36,3.9L8,2L14,4.1L19.34,2H19.5A0.5,0.5 0 0,1 20,2.5V11.81C18.83,10.69 17.25,10 15.5,10C15,10 14.5,10.06 14,10.17V6.11Z\" /></svg></a>"],
            ["Mission", "Establish Mahone Bay as a go-to destination for music events in addition to its well-established tourism activities."]
        ]
    },
    about: {
        title: "About MBMA",
        intro: "The <strong>Mahone Bay Music Association</strong> is a not for profit music association that presents and promotes free to the public concerts during the Summer months in the town of Mahone Bay, Nova Scotia.",
        body: "Concerts are held weekly on Wednesday evenings at the Bandstand on Main St and feature local, regional and national Canadian music artists. Our primary mandate is to establish Mahone Bay as a go-to destination for music events in addition to its well-established tourism activities.",
        banner: "/assets/images/banner.webp",
        bannerFit: "contain",
        image: "/assets/images/concert2.webp",
        imageNote: "Gazebo and MBMA logo.",
        cards: [
            ["Founded as", "a community-led initiative"],
            ["Format", "Free weekly summer evening concerts"],
            ["Audience", "Residents, visitors, and families"],
            ["Mission", "Establish Mahone Bay as a go-to destination for music events in addition to its well-established tourism activities."]
        ]
    },
    location: {
        title: "Location",
        intro: "Concerts are held at the gazebo in the center of Mahone Bay.",
        body: "The town gazebo is at <strong>563 Main St, Mahone Bay, NS</strong>.",
        banner: "/assets/placeholders/harbor-banner.svg",
        image: "/assets/images/concert2.webp",
        imageNote: "Gazebo location visual.",
        cards: [
            ["Town", "Mahone Bay, Nova Scotia"],
            ["Address", "563 Main St, Mahone Bay, NS"],
            ["Map", "<a href=\"https://maps.app.goo.gl/uXkBsz17rsQormnZ6\" target=\"_blank\" rel=\"noopener noreferrer\">Open in Google Maps</a>"],
            ["Season", "July to September"],
            ["Time", "Wednesdays at 7:00 PM"]
        ]
    },
    schedule: {
        title: "Summer 2026 Schedule",
        intro: "The 2026 series is planned for from July through September at 7:00 PM each Wednesday.",
        body: "<strong>The schedule for artists performing in 2026 will be announced soon.</strong>",
        banner: "/assets/images/banner.webp",
        bannerFit: "contain",
        image: "/assets/placeholders/summer-stage.svg",
        imageNote: "Placeholder image: stage and audience scene.",
        cards: [
            ["Season Length", "Every Wednesday from July through September."],
            ["Scheduled Time", "Wednesdays 7 PM to 8 PM"],
            ["Updates", "Posted here and on Instagram"]
        ]
    },
    social: {
        title: "Social Channels",
        intro: "Follow MBMA here online for lineup announcements and event information.",
        body: "Follow MBMA on social media for lineup drops, weekly reminders, and weather updates.",
        banner: "/assets/placeholders/harbor-banner.svg",
        image: "/assets/images/concert3.webp",
        imageNote: "",
        cards: [
            ["Instagram", "<a href=\"https://www.instagram.com/mahonebaymusic/\" target=\"_blank\" rel=\"noopener noreferrer\">@mahonebaymusic</a>"],
            ["Facebook", "<a href=\"https://www.facebook.com/mahonebaymusic/\" target=\"_blank\" rel=\"noopener noreferrer\">facebook.com/mahonebaymusic</a>"],
            ["Message", "Join us at the Gazebo every Wednesday 7pm (July - Sept)."]
        ]
    },
    sponsors: {
        title: "Our Sponsors",
        intro: "Sponsors and partners help keep MBMA concerts free and accessible.",
        body: "Please support our sponsors so that they can continue to support our music and our community.",
        sponsorWallTitle: "Thank You Sponsors!"
    },
    sponsor: {
        title: "Become a Sponsor",
        intro: "Entering the 7th season, the Mahone Bay Music Association (MBMA) summer concert series has become a Wednesday night staple, drawing residents and tourists to Mahone Bay for 12 weeks of free, world-class music from July to September.",
        body: "Your partnership doesn't just keep the music playing, it puts your brand front-and-center to our digital followers and a live audience throughout the summer.",
        banner: "/assets/images/cta2026.webp",
        ctaImages: [
            "/assets/images/cta2026.webp",
            "/assets/images/cta2026b.webp"
        ],
        cards: [
            ["Ideal For", "Local businesses and patrons"],
            ["Benefits", "Brand visibility and community impact"],
            ["Contact", "sponsors@mahonebaymusic.org"]
        ]
    },
    events: {
        title: "Past Events",
        intro: "A growing record of performances, programs, and community stories.",
        body: "Browse official MBMA poster artwork by year. Scroll for more. Click to view the gallery.",
        gallery: [
            { year: 2025, src: "/assets/images/archives/mbma-poster-2025.webp" },
            { year: 2024, src: "/assets/images/archives/mbma-poster-2024.webp" },
            { year: 2023, src: "/assets/images/archives/mbma-poster-2023.webp" },
            { year: 2022, src: "/assets/images/archives/mbma-poster-2022.webp" },
            { year: 2021, src: "/assets/images/archives/mbma-poster-2021.webp" }
        ]
    },
    contact: {
        title: "Contact",
        intro: "Feel free to contact us if you are a local Maritime artist, wish to sponsor or volunteer, or with any question regarding the summer music events.",
        body: "",
        banner: "/assets/placeholders/harbor-banner.svg",
        image: "/assets/images/gazebo.webp",
        imageNote: "Gazebo and venue support.",
        cards: [
            ["General", "info@mahonebaymusic.org"],
            ["Volunteer", "volunteer@mahonebaymusic.org"],
            ["Artists", "bookings@mahonebaymusic.org"],
            ["Sponsorships", "sponsors@mahonebaymusic.org"],
            ["Venue Address", "563 Main St, Mahone Bay, NS <a class=\"inline-map-link\" href=\"https://maps.app.goo.gl/uXkBsz17rsQormnZ6\" target=\"_blank\" rel=\"noopener noreferrer\" aria-label=\"Open location in Google Maps\"><svg class=\"inline-map-icon\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" aria-hidden=\"true\" focusable=\"false\"><path d=\"M15.5,12C18,12 20,14 20,16.5C20,17.38 19.75,18.21 19.31,18.9L22.39,22L21,23.39L17.88,20.32C17.19,20.75 16.37,21 15.5,21C13,21 11,19 11,16.5C11,14 13,12 15.5,12M15.5,14A2.5,2.5 0 0,0 13,16.5A2.5,2.5 0 0,0 15.5,19A2.5,2.5 0 0,0 18,16.5A2.5,2.5 0 0,0 15.5,14M14,6.11L8,4V15.89L9,16.24V16.5C9,17.14 9.09,17.76 9.26,18.34L8,17.9L2.66,19.97L2.5,20A0.5,0.5 0 0,1 2,19.5V4.38C2,4.15 2.15,3.97 2.36,3.9L8,2L14,4.1L19.34,2H19.5A0.5,0.5 0 0,1 20,2.5V11.81C18.83,10.69 17.25,10 15.5,10C15,10 14.5,10.06 14,10.17V6.11Z\" /></svg></a>"]
        ]
    }
};

const defaultRoute = "home";
const legacyRouteRedirects = {
    archives: "events",
    "sponsors/our-sponsors": "sponsors",
    "sponsors/become-a-sponsor": "sponsor",
    "about/history": "about",
    "about/contacts": "contact"
};

function currentRoute() {
    const normalized = window.location.pathname.replace(/^\/+|\/+$/g, "");
    return legacyRouteRedirects[normalized] || normalized || defaultRoute;
}

function routePath(route) {
    return route === defaultRoute ? "/" : `/${route}`;
}

function navMarkup() {
    return navConfig
        .map((item) => {
            if (item.children) {
                const firstChild = item.children[0].route;
                const submenu = item.children
                    .map((child) => `<a href="${routePath(child.route)}" data-route="${child.route}">${child.label}</a>`)
                    .join("");
                return `
                    <div class="group">
                        <a class="group-button" href="${routePath(firstChild)}" data-route="${firstChild}">${item.label}<span class="caret" aria-hidden="true"></span></a>
                        <div class="submenu">${submenu}</div>
                    </div>
                `;
            }
            return `<a class="route-link" href="${routePath(item.route)}" data-route="${item.route}">${item.label}</a>`;
        })
        .join("");
}

function renderPage() {
    const route = currentRoute();
    const page = pages[route] || pages[defaultRoute];
    const app = document.getElementById("app");
    const showBanner = route === defaultRoute;

    const cardsMarkup = (page.cards || [])
        .map(([label, value]) => `<li class="info-item"><strong>${label}</strong><span>${value}</span></li>`)
        .join("");
    const quickLinksMarkup = (page.quickLinks || [])
        .map((link) => `<a href="${routePath(link.route)}" data-route="${link.route}">${link.label}</a>`)
        .join("");
    const isArchives = route === "events";
    const isSponsorsPage = route === "sponsors";
    const isSponsorCtaPage = route === "sponsor";
    const sponsorWallMarkup = Array.from({ length: 15 }, (_, idx) => `<div class="sponsor-wall-tile sponsor-wall-tone-${(idx % 6) + 1}">Your Logo Here</div>`).join("");
    const sponsorCtaMarkup = (page.ctaImages || [])
        .map((src, idx) => `<img class="sponsor-cta-image" src="${src}" alt="${page.title} visual ${idx + 1}">`)
        .join("");
    const galleryMarkup = (page.gallery || [])
        .map((item, idx) => `
            <figure class="archive-item">
                <button class="archive-open" type="button" data-archive-index="${idx}">
                    <img src="${item.src}" alt="MBMA poster ${item.year}" loading="lazy">
                </button>
                <figcaption>${item.year}</figcaption>
            </figure>
        `)
        .join("");
    const firstPoster = (page.gallery && page.gallery[0]) || null;
    const lightboxThumbs = (page.gallery || [])
        .map((item, idx) => `
            <button class="archive-thumb ${idx === 0 ? "active" : ""}" type="button" data-archive-index="${idx}">
                <img src="${item.src}" alt="MBMA poster ${item.year}">
            </button>
        `)
        .join("");

    app.innerHTML = `
        ${showBanner ? `
        <section class="hero">
            <img class="hero-banner ${page.bannerFit === "contain" ? "hero-banner-contain" : ""}" src="${page.banner}" alt="MBMA section banner placeholder">
        </section>` : ""}
        <section class="content-panel${isArchives ? " archives-layout" : ""}${isSponsorsPage ? " sponsors-layout" : ""}${isSponsorCtaPage ? " sponsor-cta-layout" : ""}">
            <div>
                <h2>${page.title}</h2>
                <p>${page.intro}</p>
                ${quickLinksMarkup ? `<div class="quick-links">${quickLinksMarkup}</div>` : ""}
                <p>${page.body}</p>
                ${isArchives ? `<section class="archive-gallery">${galleryMarkup}</section>
                <section id="archive-lightbox" class="archive-lightbox" hidden>
                    <div class="archive-lightbox-inner">
                        <button id="archive-lightbox-close" class="archive-close" type="button" aria-label="Close poster viewer">×</button>
                        <div class="archive-lightbox-stage">
                            <button id="archive-lightbox-prev" class="archive-nav archive-prev" type="button" aria-label="Previous poster">‹</button>
                            <img id="archive-lightbox-image" class="archive-lightbox-image" src="${firstPoster ? firstPoster.src : ""}" alt="${firstPoster ? `MBMA poster ${firstPoster.year}` : "Archive poster"}">
                            <button id="archive-lightbox-next" class="archive-nav archive-next" type="button" aria-label="Next poster">›</button>
                        </div>
                        <div class="archive-lightbox-strip">${lightboxThumbs}</div>
                    </div>
                </section>` : isSponsorsPage
                    ? `<section class="sponsor-wall" aria-label="${page.sponsorWallTitle}">
                    <h3>${page.sponsorWallTitle}</h3>
                    <div class="sponsor-wall-grid">${sponsorWallMarkup}</div>
                </section>`
                    : isSponsorCtaPage
                        ? `<ul class="info-list">${cardsMarkup}</ul>
                <section class="sponsor-cta-grid" aria-label="${page.title} images">${sponsorCtaMarkup}</section>`
                    : `<ul class="info-list">${cardsMarkup}</ul>`}
            </div>
            <aside${isArchives || isSponsorsPage || isSponsorCtaPage ? " class=\"hidden\"" : ""}>
                ${page.imageLink
                    ? `<a href="${routePath(page.imageLink)}" data-route="${page.imageLink}" aria-label="Open ${page.title} related page"><img class="side-image" src="${page.image}" alt="${page.title} visual"></a>`
                    : `<img class="side-image" src="${page.image}" alt="${page.title} visual">`}
            </aside>
        </section>
    `;

    document.querySelectorAll("[data-route]").forEach((el) => {
        el.classList.toggle("active", el.getAttribute("data-route") === route);
    });
}

function navigateTo(route, replace = false) {
    const routeToUse = pages[route] ? route : defaultRoute;
    const target = routePath(routeToUse);
    if (replace) {
        window.history.replaceState({}, "", target);
    } else if (window.location.pathname !== target) {
        window.history.pushState({}, "", target);
    }
    renderPage();
}

function init() {
    const nav = document.getElementById("site-nav");
    nav.innerHTML = navMarkup();
    const groups = Array.from(nav.querySelectorAll(".group"));
    const standaloneLinks = Array.from(nav.querySelectorAll(".route-link"));
    const desktopMedia = window.matchMedia("(min-width: 851px)");

    const closeAllSubmenus = () => {
        groups.forEach((group) => group.classList.remove("open"));
    };

    const openSubmenu = (targetGroup) => {
        groups.forEach((group) => {
            group.classList.toggle("open", group === targetGroup);
        });
    };

    groups.forEach((group) => {
        group.addEventListener("mouseenter", () => {
            if (desktopMedia.matches) {
                openSubmenu(group);
            }
        });
        group.addEventListener("focusin", () => {
            if (desktopMedia.matches) {
                openSubmenu(group);
            }
        });
    });

    standaloneLinks.forEach((link) => {
        link.addEventListener("mouseenter", () => {
            if (desktopMedia.matches) {
                closeAllSubmenus();
            }
        });
        link.addEventListener("focusin", () => {
            if (desktopMedia.matches) {
                closeAllSubmenus();
            }
        });
    });

    const toggle = document.getElementById("menu-toggle");
    toggle.addEventListener("click", () => {
        const isOpen = nav.classList.toggle("open");
        toggle.setAttribute("aria-expanded", String(isOpen));
    });

    document.addEventListener("click", (event) => {
        const link = event.target.closest("a[data-route]");
        if (!event.target.closest("#site-nav") && desktopMedia.matches) {
            closeAllSubmenus();
        }
        const setArchiveSelection = (idx) => {
            const modal = document.getElementById("archive-lightbox");
            const mainImg = document.getElementById("archive-lightbox-image");
            if (!modal || !mainImg) {
                return;
            }
            const thumbs = Array.from(modal.querySelectorAll(".archive-thumb"));
            if (!thumbs.length) {
                return;
            }
            const bounded = Math.max(0, Math.min(idx, thumbs.length - 1));
            const chosen = thumbs[bounded];
            const img = chosen ? chosen.querySelector("img") : null;
            if (!img) {
                return;
            }
            mainImg.src = img.src;
            mainImg.alt = img.alt;
            thumbs.forEach((t, i) => t.classList.toggle("active", i === bounded));
            modal.dataset.currentIndex = String(bounded);

            const prevBtn = document.getElementById("archive-lightbox-prev");
            const nextBtn = document.getElementById("archive-lightbox-next");
            if (prevBtn) {
                prevBtn.disabled = bounded === 0;
            }
            if (nextBtn) {
                nextBtn.disabled = bounded === thumbs.length - 1;
            }
        };
        const archiveTrigger = event.target.closest("[data-archive-index]");
        if (archiveTrigger) {
            const modal = document.getElementById("archive-lightbox");
            if (modal) {
                const idx = Number(archiveTrigger.getAttribute("data-archive-index") || 0);
                setArchiveSelection(idx);
                modal.hidden = false;
            }
            return;
        }
        if (event.target.id === "archive-lightbox-prev" || event.target.id === "archive-lightbox-next") {
            const modal = document.getElementById("archive-lightbox");
            if (!modal) {
                return;
            }
            const current = Number(modal.dataset.currentIndex || 0);
            setArchiveSelection(current + (event.target.id === "archive-lightbox-next" ? 1 : -1));
            return;
        }
        if (event.target.id === "archive-lightbox-close" || event.target.id === "archive-lightbox") {
            const modal = document.getElementById("archive-lightbox");
            if (modal) {
                modal.hidden = true;
            }
            return;
        }
        if (!link) {
            return;
        }
        event.preventDefault();
        const route = link.getAttribute("data-route") || defaultRoute;
        navigateTo(route);
        closeAllSubmenus();
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
    });

    window.addEventListener("popstate", () => {
        renderPage();
    });

    const initialRoute = currentRoute();
    if (!pages[initialRoute] || (initialRoute === defaultRoute && window.location.pathname !== "/")) {
        navigateTo(defaultRoute, true);
        return;
    }
    renderPage();
}

init();
