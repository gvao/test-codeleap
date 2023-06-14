
const urlBase = 'https://dev.codeleap.co.uk/careers/'

export const careersGet = (path = '') => fetcher(urlBase + path)

export const careersPost = (path = "", body = {}, options = {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
}): Promise<Response> => fetch(urlBase + path, { ...options, body: JSON.stringify(body) })


async function fetcher(
    url: string,
    options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
    },
    body = {},
) {
    try {
        const response = await fetch(url, { ...options, body: options.method === 'GET' ? null : JSON.stringify(body) })

        if (!response.ok) throw new Error('Error connection')

        return response
    } catch (err) {
        console.error(err)
    }
}