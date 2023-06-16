
const urlBase = 'https://dev.codeleap.co.uk/careers/'

export const careersGet = (path = '') => fetcher(urlBase + path)

export const careersPost = (path = "", body = {}, options = {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
}) => fetcher(urlBase + path, body, { ...options })

export const careersPath = (id = "", body = {}, options = {
    method: "PATH",
    headers: {
        "Content-Type": "application/json"
    },
}) => fetcher(`${urlBase}${id}`, body,  { ...options })

export const careersDelete = (id = "", body = {}, options = {
    method: "DELETE",
    headers: {
        "Content-Type": "application/json"
    },
}) => fetcher(`${urlBase}${id}`, body,  { ...options })

async function fetcher(
    url: string,
    body?:object | null,
    options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
    },
): Promise<Response> {
    try {
        const response = await fetch(url, { ...options, body: options.method === 'GET' ? null : JSON.stringify(body) })

        if (!response.ok) throw new Error('Error connection')

        return response
    } catch (err) {
        console.error(err)
        throw err
    }
}