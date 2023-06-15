
export const getLocalStorage = (key: string) => {
    'use client'
    const value = localStorage.getItem(key)
    return value!
}

export const setLocalStorage = (key: string, data: any = null) => {
    'use client'
    const value = JSON.stringify(data, null, 2)
    
    return localStorage.setItem(key, value)
}

export function checkTokenLocalStorage(key = 'username') {
    const valueLocalStorage = getLocalStorage(key)

    return !!valueLocalStorage
}