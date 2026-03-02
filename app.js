const navConfig = [
    { label: "Home", route: "home" },
    {
        label: "About",
        children: [
            { label: "Location", route: "location" },
            { label: "History", route: "about/history" },
            { label: "Contacts", route: "about/contacts" }
        ]
    },
    {
        label: "Schedule",
        children: [
            { label: "Summer 2026", route: "schedule/summer-2026" },
            { label: "Past Summers", route: "schedule/past-summers" }
        ]
    },
    { label: "Social", route: "social" },
    {
        label: "Sponsors",
        children: [
            { label: "Our Sponsors", route: "sponsors/our-sponsors" },
            { label: "Become a Sponsor", route: "sponsors/become-a-sponsor" }
        ]
    },
    { label: "Archives", route: "archives" },
    { label: "Contact", route: "contact" }
];

const pages = {
    home: {
        title: "Welcome to MBMA",
        intro: "Mahone Bay Music Association is a community non-profit presenting live summer music at the town gazebo.",
        body: "Join us each Wednesday at 7:00 PM, July through September, as MBMA works to re-establish Mahone Bay as a great music destination through free, community-centered performances.",
        banner: "/assets/images/banner.webp",
        bannerFit: "contain",
        image: "/assets/images/gazebo.webp",
        imageNote: "MBMA gazebo and logo.",
        quickLinks: [
            { label: "View Summer 2026", route: "schedule/summer-2026" },
            { label: "Follow MBMA", route: "social" },
            { label: "Support MBMA", route: "sponsors/become-a-sponsor" }
        ],
        cards: [
            ["Summer Series", "Wednesdays at 7:00 PM"],
            ["Season", "July to September"],
            ["Location", "Town Gazebo, 563 Main St, Mahone Bay, NS"],
            ["Mission", "Re-establish Mahone Bay as a great music destination!"]
        ]
    },
    "about/history": {
        title: "Our Story",
        intro: "MBMA is a community non-profit on a mission to re-establish Mahone Bay as a great music destination.",
      body: "Each summer, volunteers and supporters coordinate a 12-week series of live performances at the gazebo in the town center. The Summer Series currently runs Wednesdays at 7:00 PM from July through September.",
        banner: "/assets/images/banner.webp",
        bannerFit: "contain",
        image: "/assets/images/gazebo.webp",
        imageNote: "Gazebo and MBMA logo.",
        cards: [
            ["Founded", "Community-led revival initiative"],
            ["Format", "Weekly summer evening concerts"],
            ["Audience", "Residents, visitors, and families"],
            ["Mission", "Keep free, community-centered live music active in Mahone Bay."]
        ]
    },
    "about/contacts": {
        title: "Organizing Team",
        intro: "MBMA operates through volunteers, partners, and local supporters.",
        body: "Add official board and volunteer contact details here as they become available. Keep role-based addresses for continuity (for example, bookings@ and sponsorship@).",
        banner: "/assets/placeholders/harbor-banner.svg",
        image: "/assets/images/gazebo.webp",
        imageNote: "MBMA gazebo and logo.",
        cards: [
            ["General", "info@mahonebaymusic.org"],
            ["Booking", "bookings@mahonebaymusic.org"],
            ["Sponsorships", "sponsors@mahonebaymusic.org"]
        ]
    },
    location: {
        title: "Location",
        intro: "Concerts are held at the gazebo in the center of Mahone Bay.",
        body: "The concert location is at 563 Main St, Mahone Bay, NS B0J 2E0. Add accessibility notes, parking details, and rain information here as they are finalized.",
        banner: "/assets/placeholders/harbor-banner.svg",
        image: "/assets/images/gazebo.webp",
        imageNote: "Gazebo location visual.",
        cards: [
            ["Town", "Mahone Bay, Nova Scotia"],
            ["Address", "563 Main St, Mahone Bay, NS B0J 2E0"],
            ["Map", "<a href=\"https://maps.app.goo.gl/uXkBsz17rsQormnZ6\" target=\"_blank\" rel=\"noopener noreferrer\">Open in Google Maps</a>"],
            ["Season", "July to September"],
            ["Time", "Wednesdays at 7:00 PM"]
        ]
    },
    "schedule/summer-2026": {
        title: "Summer 2026 Schedule",
        intro: "The 2026 series is planned for 12 Wednesdays at 7:00 PM from July through September.",
        body: "Publish lineup announcements, artist bios, and weather notices here. Until finalized, this section can show placeholders grouped by month.",
        banner: "/assets/images/banner.webp",
        bannerFit: "contain",
        image: "/assets/placeholders/summer-stage.svg",
        imageNote: "Placeholder image: stage and audience scene.",
        cards: [
            ["Season Length", "12 weekends of events"],
            ["Core Slot", "Wednesday 7:00 PM"],
            ["Updates", "Posted here and on Instagram"]
        ]
    },
    "schedule/past-summers": {
        title: "Past Summers",
        intro: "Archive previous lineups, posters, and notable performances.",
        body: "2025 Concert Series highlights: July 2 to September 17, Wednesdays from 7:00-8:00 PM at Mahone Bay Gazebo, with rain date Sunday September 21.",
        banner: "/assets/images/banner.webp",
        bannerFit: "contain",
        image: "/assets/images/banner.webp",
        imageNote: "Official 2025 Summer Concert Series poster.",
        cards: [
            ["July 2", "Daniel James McFadyen"],
            ["July 9", "Morgan Davis"],
            ["July 16", "Mike Simon"],
            ["July 23", "Dedee Austin"],
            ["July 30", "Norma MacDonald"],
            ["Aug 6", "Carson Downy"],
            ["Aug 13", "Avery Dakin"],
            ["Aug 20", "Moira & Claire"],
            ["Aug 27", "Brigid"],
            ["Sept 3", "The Town Heroes"],
            ["Sept 10", "Freya Milliken"],
            ["Sept 17", "Kane & Potvin"],
            ["Earlier", "Legacy materials in progress"]
        ]
    },
    social: {
        title: "Social Channels",
        intro: "Follow MBMA here online for lineup announcements and event information.",
        body: "Follow MBMA on social media for lineup drops, weekly reminders, and weather updates.",
        banner: "/assets/placeholders/harbor-banner.svg",
        image: "/assets/images/gazebo.webp",
        imageNote: "",
        cards: [
            ["Instagram", "<a href=\"https://www.instagram.com/mahonebaymusic/\" target=\"_blank\" rel=\"noopener noreferrer\">@mahonebaymusic</a>"],
            ["Facebook", "<a href=\"https://www.facebook.com/mahonebaymusic/\" target=\"_blank\" rel=\"noopener noreferrer\">facebook.com/mahonebaymusic</a>"],
            ["Website", "<a href=\"/\">mahonebaymusic.org</a>"],
            ["Message", "Join us at the Gazebo every Wednesday 7pm (July - Sept)."]
        ]
    },
    "sponsors/our-sponsors": {
        title: "Our Sponsors",
        intro: "Sponsors and partners help keep MBMA concerts free and accessible.",
        body: "Use this section to feature sponsor logos, contribution tiers, and gratitude messaging.",
        banner: "/assets/placeholders/sponsor-wall.svg",
        image: "/assets/placeholders/sponsor-wall.svg",
        imageNote: "Placeholder image: sponsor showcase board.",
        cards: [
            ["Presenting", "Placeholder Sponsor"],
            ["Community", "Placeholder Sponsor"],
            ["In-Kind", "Placeholder Partner"]
        ]
    },
    "sponsors/become-a-sponsor": {
        title: "Become a Sponsor",
        intro: "Support local music and community events by sponsoring MBMA.",
        body: "Add sponsorship levels, benefits, deadlines, and a downloadable package once ready.",
        banner: "/assets/placeholders/sponsor-wall.svg",
        image: "/assets/placeholders/sponsor-wall.svg",
        imageNote: "Placeholder image: partnership callout.",
        cards: [
            ["Ideal For", "Local businesses and patrons"],
            ["Benefits", "Brand visibility and community impact"],
            ["Contact", "sponsors@mahonebaymusic.org"]
        ]
    },
    archives: {
        title: "Archives",
        intro: "A growing record of performances, programs, and community stories.",
        body: "This area can host downloadable posters, highlight reels, and stories from past summers.",
        banner: "/assets/placeholders/archives-reel.svg",
        image: "/assets/placeholders/archives-reel.svg",
        imageNote: "Placeholder image: archive preview.",
        cards: [
            ["Photos", "Albums by season"],
            ["Programs", "PDF posters and lineups"],
            ["Stories", "Community memories and milestones"]
        ]
    },
    contact: {
        title: "Contact",
        intro: "Questions, volunteering, and artist inquiries are welcome.",
        body: "Use this section for direct role-based email links and directions to the summer venue.",
        banner: "/assets/placeholders/harbor-banner.svg",
        image: "/assets/images/gazebo.webp",
        imageNote: "Gazebo and venue support.",
        cards: [
            ["General", "info@mahonebaymusic.org"],
            ["Volunteer", "volunteer@mahonebaymusic.org"],
            ["Artists", "bookings@mahonebaymusic.org"],
            ["Venue Address", "563 Main St, Mahone Bay, NS B0J 2E0"],
            ["Google Maps", "<a href=\"https://maps.app.goo.gl/uXkBsz17rsQormnZ6\" target=\"_blank\" rel=\"noopener noreferrer\">Open Location</a>"]
        ]
    }
};

const defaultRoute = "home";

function currentRoute() {
    const normalized = window.location.pathname.replace(/^\/+|\/+$/g, "");
    return normalized || defaultRoute;
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

    const cardsMarkup = page.cards
        .map(([label, value]) => `<li class="info-item"><strong>${label}</strong><span>${value}</span></li>`)
        .join("");
    const quickLinksMarkup = (page.quickLinks || [])
        .map((link) => `<a href="${routePath(link.route)}" data-route="${link.route}">${link.label}</a>`)
        .join("");

    app.innerHTML = `
        ${showBanner ? `
        <section class="hero">
            <img class="hero-banner ${page.bannerFit === "contain" ? "hero-banner-contain" : ""}" src="${page.banner}" alt="MBMA section banner placeholder">
        </section>` : ""}
        <section class="content-panel">
            <div>
                <h2>${page.title}</h2>
                <p>${page.intro}</p>
                ${quickLinksMarkup ? `<div class="quick-links">${quickLinksMarkup}</div>` : ""}
                <p>${page.body}</p>
                <ul class="info-list">${cardsMarkup}</ul>
            </div>
            <aside>
                <img class="side-image" src="${page.image}" alt="${page.title} visual">
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
