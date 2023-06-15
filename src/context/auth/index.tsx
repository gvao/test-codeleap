'use client'

import { ChangeEventHandler, FormEvent, createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { careersGet, careersPost } from "@/services/codeleap";
import { AuthContextProviderProps, ReturnUseAuthContext } from "./types"
import { getLocalStorage } from "@/functions/localstorage";

const AuthContext = createContext<ReturnUseAuthContext | undefined>(undefined)
export const useAuthContext = (): ReturnUseAuthContext => {
    const context = useContext(AuthContext)
    if (!context) throw new Error("usePostsContext must be used within a PostsContextProvider");

    return context
}

export default function AuthContextProvider({ children }: AuthContextProviderProps) {
    const router = useRouter();
    const [username, setUsername] = useState<string>('');

    useEffect(() => {
        const valueLocalstorage = getLocalStorage('username')

        if (!!valueLocalstorage) setUsername(valueLocalstorage)
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
        router.push(`/`)
    }

    return (
        <AuthContext.Provider value={{
            username,
            onInput,
            onSubmit,
        }}>
            {children}
        </AuthContext.Provider>
    )
}