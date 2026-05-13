// Base url
const BASE_URL = process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:8000";

class ApiError extends Error {
    constructor(message, status, data) {
        super(message);

        this.name = "ApiError";
        this.status = status;
        this.data = data;
    }
}

/**
 * Universal Next.js Fetch Client
 * Supports:
 * - SSG
 * - ISR
 * - SSR
 * - Cache Tags
 * - Revalidation
 * - Timeout
 * - JSON parsing
 */

async function request(endpoint, options = {}) {
    const {
        method = "GET",
        body,
        headers = {},
        cache,
        revalidate,
        tags,
        timeout = 10000,
        credentials = "include",
    } = options;

    const controller = new AbortController();

    const timeoutId = setTimeout(() => {
        controller.abort();
    }, timeout);

    try {
        const response = await fetch(`${BASE_URL}${endpoint}`, {
            method,

            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                ...headers,
            },

            credentials,

            signal: controller.signal,

            ...(body && {
                body: JSON.stringify(body),
            }),

            ...(cache && { cache }),

            ...(revalidate || tags
                ? {
                    next: {
                        ...(revalidate && { revalidate }),
                        ...(tags && { tags }),
                    },
                }
                : {}),
        });

        const contentType = response.headers.get("content-type");

        const isJson = contentType?.includes("application/json");

        const data = isJson
            ? await response.json()
            : await response.text();

        if (!response.ok) {
            throw new ApiError(
                data?.message || "Something went wrong",
                response.status,
                data
            );
        }

        return data;
    } catch (error) {
        if (error.name === "AbortError") {
            throw new Error("Request timeout");
        }

        throw error;
    } finally {
        clearTimeout(timeoutId);
    }
}

/**
 * API Client Methods
 */

export const api = {
    get: (url, options = {}) =>
        request(url, {
            ...options,
            method: "GET",
        }),

    post: (url, body, options = {}) =>
        request(url, {
            ...options,
            method: "POST",
            body,
        }),

    put: (url, body, options = {}) =>
        request(url, {
            ...options,
            method: "PUT",
            body,
        }),

    patch: (url, body, options = {}) =>
        request(url, {
            ...options,
            method: "PATCH",
            body,
        }),

    delete: (url, options = {}) =>
        request(url, {
            ...options,
            method: "DELETE",
        }),
};

export default api;