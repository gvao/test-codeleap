'use client'

import { useRouter } from "next/navigation"
import { useEffect } from "react"
import ROUTES_APP from "@/constantes/routes-app"
import { checkTokenLocalStorage } from "@/functions/localstorage"

type ReactElementProps = {
    children: React.ReactNode,
    isPrivate?: boolean,
}

export const PrivatePage = ({ children, ...props }: ReactElementProps) => {
    const { push } = useRouter()
    const isAuthenticated = checkTokenLocalStorage()

    useEffect(() => {
        
        if (!isAuthenticated) push(ROUTES_APP.public.signup)

    }, [isAuthenticated, push])

    return (
        <>
            {isAuthenticated && children}
        </>
    )
}