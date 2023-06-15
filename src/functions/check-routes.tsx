import ROUTES_APP from '@/constantes/routes-app'

export const checkPageIsPublic = (pathname: string) => {
    const publicRoutes = Object.values(ROUTES_APP.public)
    
    return !!publicRoutes.includes(pathname)
}