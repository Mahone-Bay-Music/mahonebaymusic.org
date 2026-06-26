const GRAPH_API_VERSION = "v25.0";
const CACHE_TTL_SECONDS = 60 * 60;
const INSTAGRAM_USERNAME = "mahonebaymusic";
const INSTAGRAM_WEB_APP_ID = "936619743392459";

function jsonResponse(body, status = 200, extraHeaders = {}) {
    return new Response(JSON.stringify(body), {
        status,
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            "Cache-Control": `public, max-age=300, s-maxage=${CACHE_TTL_SECONDS}`,
            ...extraHeaders
        }
    });
}

async function fetchJson(url) {
    const response = await fetch(url, {
        headers: {
            "Accept": "application/json",
            "User-Agent": "Mozilla/5.0"
        }
    });
    const body = await response.json().catch(() => ({}));
    if (!response.ok) {
        const message = body?.error?.message || `Request failed with status ${response.status}`;
        throw new Error(message);
    }
    return body;
}

async function getLatestInstagramEmbed(env) {
    const username = env.INSTAGRAM_USERNAME || INSTAGRAM_USERNAME;
    const mediaUrl = new URL("https://www.instagram.com/api/v1/users/web_profile_info/");
    mediaUrl.searchParams.set("username", username);

    const mediaBody = await fetch(mediaUrl, {
        headers: {
            "Accept": "application/json",
            "User-Agent": "Mozilla/5.0",
            "x-ig-app-id": INSTAGRAM_WEB_APP_ID
        }
    }).then(async (response) => {
        const body = await response.json().catch(() => ({}));
        if (!response.ok) {
            const message = body?.message || `Request failed with status ${response.status}`;
            throw new Error(message);
        }
        return body;
    });
    const latest = mediaBody?.data?.user?.edge_owner_to_timeline_media?.edges?.[0]?.node;

    if (!latest?.shortcode) {
        throw new Error("No Instagram media shortcode was returned.");
    }

    const permalink = `https://www.instagram.com/p/${latest.shortcode}/`;
    const embedUrl = new URL(`https://graph.facebook.com/${GRAPH_API_VERSION}/instagram_oembed`);
    embedUrl.searchParams.set("url", permalink);
    embedUrl.searchParams.set("omitscript", "true");
    embedUrl.searchParams.set("maxwidth", "540");

    const embedBody = await fetchJson(embedUrl);

    if (!embedBody?.html) {
        throw new Error("No Instagram embed HTML was returned.");
    }

    return {
        html: embedBody.html,
        permalink,
        timestamp: latest.taken_at_timestamp ? new Date(latest.taken_at_timestamp * 1000).toISOString() : null
    };
}

export async function onRequestGet({ request, env, waitUntil }) {
    const cache = caches.default;
    const cacheKey = new Request(new URL(request.url).origin + "/api/instagram-latest", request);
    const cached = await cache.match(cacheKey);

    if (cached) {
        return cached;
    }

    try {
        const body = await getLatestInstagramEmbed(env);
        const response = jsonResponse(body);
        waitUntil(cache.put(cacheKey, response.clone()));
        return response;
    } catch (error) {
        return jsonResponse(
            {
                error: "Instagram feed is unavailable.",
                detail: error.message
            },
            502,
            {
                "Cache-Control": "public, max-age=60, s-maxage=60"
            }
        );
    }
}
