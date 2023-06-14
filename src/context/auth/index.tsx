'use client'

import { ChangeEventHandler, FormEvent, createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { careersGet, careersPost } from "@/services/codeleap";
import { AuthContextProviderProps, ReturnUseAuthContext } from "./types"

const AuthContext = createContext<ReturnUseAuthContext | undefined>(undefined)
export const useAuthContext = (): ReturnUseAuthContext => {
    const context = useContext(AuthContext)
    if (!context) throw new Error("usePostsContext must be used within a PostsContextProvider");

    return context
}

export default function AuthContextProvider({ children }: AuthContextProviderProps) {
    const router = useRouter();

    const [username, setUsername] = useState<string>('');
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)

    useEffect(() => {
        const usernameLocalStorage = localStorage.getItem('username') || ''

        if (!usernameLocalStorage) router.push(`/profile/signup`)

        setUsername(usernameLocalStorage)
    }, [])

    const onInput: ChangeEventHandler<HTMLInputElement> = ({ target: { value } }) => setUsername(value)

    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        if (!username) return alert('Insert required')

        const response = await careersGet(`?username=${username}`)
        const data = await response?.json()

        if (data?.count === 0) {

            const request = await careersPost('', {
                username,
                title: 'my First post',
                content: 'my First content post here'
            })

            if (!request.ok) return
        }


        localStorage.setItem('username', username)
        setIsAuthenticated(true)
        router.push(`/`)
    }

    return (
        <AuthContext.Provider value={{
            username,
            onInput,
            onSubmit,
            isAuthenticated,
        }}>
            {children}
        </AuthContext.Provider>
    )
}