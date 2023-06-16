'use client'
import Styles from "./styles.module.css"
import { PostsContextProps, Post, ReturnUsePostsContext } from "./types"

import { ChangeEventHandler, createContext, useContext, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { careersDelete, careersGet, careersPath, careersPost } from "@/services/codeleap";

import { useAuthContext } from "../auth";

import { Button } from "@/common/button";
import { Popup } from "@/common/popup";
import { Input } from "@/common/input";


const PostsContext = createContext<ReturnUsePostsContext | undefined>(undefined)
export const usePostsContext = (): ReturnUsePostsContext => {
    const context = useContext(PostsContext)
    if (!context) throw new Error("usePostsContext must be used within a PostsContextProvider");

    return context
}

const usePosts = () => {
    const { username } = useAuthContext()

    const {
        push,
    } = useRouter()

    const [infosPost, setInfosPost] = useState({ username })
    const [posts, setPosts] = useState<Post[]>([])


    const searchParams = useSearchParams()
    const { popup, idPost } = (searchParams => {
        const popup = searchParams.get('popup')
        const idPost = searchParams.get('id_post') || ''

        return {
            popup, idPost
        }
    })(searchParams)


    const onChangeInput: ChangeEventHandler<HTMLInputElement> =
        ({ target: { id, value } }) => setInfosPost({ ...infosPost, [id]: value })

    const validButton = (infosPost = {}) => {
        const inputsFilled = Object.values(infosPost)
            .filter(value => value !== '')
        const isAllInputsFilled = inputsFilled.length >= 2
        return isAllInputsFilled
    }

    const newPost = async () => {
        const response = await careersPost('', { ...infosPost, username })

        if (!response.ok) return
        const json = await response.json()

        console.log(json)
        setPosts(statePost => ([json, ...statePost]))
    }

    const closePopup = () => push('?')

    const editPost = async () => {
        const response = await careersPath(idPost!, infosPost)
        const json = await response.json()

        if (!response.ok) return 

        console.log('edit post')
        closePopup()
    }

    const deletePost = async () => {
        const response = await careersDelete(idPost!)
        console.log('delete post', response.status)

        if(response.ok) {
            setPosts(state => state.filter(post => post.id !== Number(idPost)))
        } else {
            alert('Post not deleted')
        }

        closePopup()
    }

    const isButtonValid = validButton(infosPost)

    console.log(`[use Post context]`, infosPost)

    return {
        push,
        posts, setPosts,
        infosPost, setInfosPost,
        username,
        onChangeInput,
        isButtonValid,
        newPost,
        popup,
        idPost,

        closePopup,
        editPost,
        deletePost,
    }
}

const PopupDelete = () => {
    const { deletePost, closePopup } = usePosts()

    // const callBack = async (text: string) => {
    //     if (text === "") return

    //     if (text === 'delete') {
    //         const response = await careersDelete(idPost!)

    //         console.log(`delete status`, response.status)
    //     }

    //     push('?')
    // }

    const handlerDeletePost = () => {
        deletePost()
    }

    return (
        <Popup>
            <p className={Styles.title} >Are you sure you want to delete this item?</p>

            <div className={Styles['button-area']} >

                <Button onClick={closePopup} isValid type="submit" fill={'none'} id="popup_cancel">Cancel</Button>
                <Button onClick={handlerDeletePost} isValid type="submit" fill={'red'} id="popup_delete">Delete</Button>

            </div>

        </Popup>
    )
}

const PopupEdit = () => {
    const {
        onChangeInput,
        closePopup,
        editPost,
    } = usePosts()

    const saveEdit = () => editPost()

    return (
        <Popup>
            <p className={Styles.title} >Edit item</p>

            <form onSubmit={event => event.preventDefault()}>

                <Input label="Title" placeholder="Hello world" onChange={onChangeInput} id="title" />
                <Input label="Content" placeholder="Content here" onChange={onChangeInput} id="content" />

                <div className={Styles['button-area']} >
                    <Button onClick={closePopup} isValid type="button" fill={'none'} id="popup_cancel" >
                        cancel
                    </Button>
                    <Button onClick={saveEdit} isValid type="button" fill={'green'} id="popup_save" >
                        Save
                    </Button>
                </div>
            </form>

        </Popup>
    )
}

export default function PostContextProvider({ children }: PostsContextProps) {

    const {
        setPosts,
        posts,
        onChangeInput,
        isButtonValid,
        newPost,
        popup,
    } = usePosts()

    useEffect(() => {

        (async () => {
            const response = await careersGet()

            if (!response?.ok) return

            const { results } = await response?.json()
            setPosts(results)
        })()

    }, [])


    return (
        <PostsContext.Provider value={{
            posts,
            onChangeInput,
            isButtonValid,
            newPost,
        }}>
            {children}

            {popup === 'delete' && <PopupDelete />}

            {popup === 'edit' && <PopupEdit />}

        </PostsContext.Provider>
    )
}
