import { ChangeEventHandler, FormEvent, FormEventHandler } from "react"

export type ReturnUseAuthContext = {
    username: string,
    onInput: ChangeEventHandler<HTMLInputElement> | undefined,
    onSubmit: FormEventHandler<HTMLFormElement> | undefined
    // isAuthenticated: boolean,
}

export type AuthContextProviderProps = {
    children: React.ReactNode
}