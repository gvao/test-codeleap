'use client'

import { ChangeEventHandler, createContext, useContext, useEffect, useState } from "react";
import { PostsContextProps, Post, ReturnUsePostsContext } from "./types"
import { careersGet } from "@/services/codeleap";

let InitialValue: Post[] | undefined = [
    {
        "id": 63962,
        "username": "Joohn",
        "created_datetime": "2023-06-14T18:39:12.098560Z",
        "title": "eee",
        "content": "ee"
    },
    {
        "id": 63957,
        "username": "yyy",
        "created_datetime": "2023-06-14T17:19:05.284553Z",
        "title": "My First Post at CodeLeap Network!",
        "content": "Curabitur suscipit suscipit tellus. Phasellus consectetuer vestibulum elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas egestas arcu quis ligula mattis placerat. Duis vel nibh at velit scelerisque suscipit.  Duis lobortis massa imperdiet quam. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Fusce a quam. Nullam vel sem. Nullam cursus lacinia erat."
    },
    {
        "id": 63956,
        "username": "arr",
        "created_datetime": "2023-06-14T14:52:58.756939Z",
        "title": "d",
        "content": "d"
    },
    {
        "id": 63951,
        "username": "Lucas",
        "created_datetime": "2023-06-14T13:47:29.680000Z",
        "title": "Rio",
        "content": "Rio anananana"
    },
    {
        "id": 63948,
        "username": "kenzo",
        "created_datetime": "2023-06-14T12:33:42.476544Z",
        "title": "dqwdqw",
        "content": "dwqdwqdwq"
    },
    {
        "id": 63947,
        "username": "kenzo",
        "created_datetime": "2023-06-14T12:32:04.234668Z",
        "title": "qwqdqw",
        "content": "dqwdwqdwqdqwdwq"
    },
    {
        "id": 63944,
        "username": "aaaa",
        "created_datetime": "2023-06-14T01:41:50.748920Z",
        "title": "aa",
        "content": "aaaaa"
    },
    {
        "id": 63943,
        "username": "aaaaaasa",
        "created_datetime": "2023-06-14T01:41:23.514752Z",
        "title": "dsadasdasd",
        "content": "dasdsadsadas"
    },
    {
        "id": 63941,
        "username": "Yuri",
        "created_datetime": "2023-06-14T00:53:52.983062Z",
        "title": "aiubiusbs",
        "content": "aiubiusbs"
    },
    {
        "id": 63934,
        "username": "yuri",
        "created_datetime": "2023-06-13T20:50:48.715223Z",
        "title": "aiubiusbs",
        "content": "aiubiusbs"
    }
]

const PostsContext = createContext<ReturnUsePostsContext | undefined>(undefined)
export const usePostsContext = (): ReturnUsePostsContext => {
    const context = useContext(PostsContext)
    if (!context) throw new Error("usePostsContext must be used within a PostsContextProvider");
    
    return context
}

export default function PostContextProvider(
    { children }: PostsContextProps
) {
    const [infosPost, setInfosPost] = useState({})
    const [posts, setPosts] = useState<Post[]>(InitialValue || [])

    useEffect(() => {

        (async () => {
            // const response = await careersGet()

            // if (!response?.ok) return

            // const { results } = await response?.json()
            // setPosts(results)
            // InitialValue = results
        })()

    }, [])

    const onChangeInput: ChangeEventHandler<HTMLInputElement> =
        ({ target: { id, value } }) => setInfosPost({ ...infosPost, [id]: value })

    const validButton = (infosPost = {}) => {
        const inputsFilled = Object.values(infosPost)
            .filter(value => value !== '')
        const isAllInputsFilled = inputsFilled.length >= 2
        return isAllInputsFilled
    }

    const isButtonValid = validButton(infosPost)

    return (
        <PostsContext.Provider value={{
            posts,
            onChangeInput,
            isButtonValid,
        }}>
            {children}
        </PostsContext.Provider>
    )
}