
'use client'

export const getLocalStorage = (key: string) => {
    const value = window?.localStorage.getItem(key)
    return value!
}

export const setLocalStorage = (key: string, data: any = null) => {
    const value = JSON.stringify(data, null, 2)
    return localStorage.setItem(key, value)
}

export function checkTokenLocalStorage(key = 'username') {
    if (typeof window === 'undefined') return 
    
    const valueLocalStorage = getLocalStorage(key)
    return !!valueLocalStorage
}