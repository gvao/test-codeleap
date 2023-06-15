export function checkTokenLocalStorage(key = 'username') {
    if (!localStorage) return

    const valueLocalStorage = localStorage.getItem(key)
    return !!valueLocalStorage
}