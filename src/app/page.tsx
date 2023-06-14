'use client'

import { ProfilePage } from "@/components/profile/"
import { useAuthContext } from "@/context/auth"
import PostContextProvider from "@/context/posts"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

type ProfileProps = {
    params: object,
}

export default function Profile({ params, ...props }: ProfileProps) {
    const {
        isAuthenticated,
    } = useAuthContext()

    const router = useRouter()

    useEffect(() => {

        if (!isAuthenticated) router.push('/profile/signup')

    }, [])

    return (
        <>
            {isAuthenticated && (
                <PostContextProvider>
                    <ProfilePage />
                </PostContextProvider>

            )}
        </>
    )
}