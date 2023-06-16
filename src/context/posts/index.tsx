'use client'

import { ChangeEventHandler, createContext, useContext, useEffect, useState } from "react";
import { PostsContextProps, Post, ReturnUsePostsContext } from "./types"
import { careersGet, careersPost } from "@/services/codeleap";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/common/button";
import { Popup } from "@/common/popup";
import Styles from "./styles.module.css"
import { Input } from "@/common/input";
import { useAuthContext } from "../auth";

let InitialValue: Post[] | undefined = []

const PostsContext = createContext<ReturnUsePostsContext | undefined>(undefined)
export const usePostsContext = (): ReturnUsePostsContext => {
    const context = useContext(PostsContext)
    if (!context) throw new Error("usePostsContext must be used within a PostsContextProvider");

    return context
}

export default function PostContextProvider({ children }: PostsContextProps) {
    const [infosPost, setInfosPost] = useState({})
    const [posts, setPosts] = useState<Post[]>(InitialValue || [])

    const {
        push,
    } = useRouter()
    const searchParams = useSearchParams()

    const { username } = useAuthContext()

    const popup = searchParams.get('popup')
    const id = searchParams.get('id_post')

    useEffect(() => {

        (async () => {
            const response = await careersGet()

            if (!response?.ok) return

            const { results } = await response?.json()
            setPosts(results)
            InitialValue = results
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

    const newPost = async () => {
        const response = await careersPost('', {...infosPost, username})

        if(!response.ok) return 
        const json = await response.json()

        console.log(json)
        setPosts(statePost => ([ json, ...statePost ]))
    }
    
    const isButtonValid = validButton(infosPost)

    return (
        <PostsContext.Provider value={{
            posts,
            onChangeInput,
            isButtonValid,
            newPost,
        }}>
            {children}

            {popup === 'delete' && (
                <PopupDelete
                    title="Are you sure you want to delete this item?"
                    callBack={text => {
                        if (text === "") return

                        if (text !== 'cancel') {
                            // delete post
                            console.log('delete post')
                        } else {
                            console.log('cancel delete post')
                        }

                        push('?')
                    }}
                />
            )}

            {popup === 'edit' && (
                <PopupEdit
                    title="Edit item"
                    callBack={text => {
                        if (text === "") return

                        if (text === 'salve') {
                            console.log('edit post')
                            //fetch update api
                        } 

                        push('?')
                    }}
                />
            )}

        </PostsContext.Provider>
    )
}

type PopupProps = {
    title: string,
    callBack: (text: string) => void,
}

const PopupDelete = ({ title, callBack }: PopupProps) => {

    const [elementClicked, setElementClicked] = useState('')

    callBack(elementClicked)

    return (
        <Popup>
            <p className={Styles.title} >{title}</p>

            <div className={Styles['button-area']} >
                <Button onClick={() => setElementClicked('cancel')} isValid type="submit" fill={'none'} id="popup_cancel" >
                    cancel
                </Button>
                <Button onClick={() => setElementClicked('delete')} isValid type="submit" fill={'red'} id="popup_delete" >
                    Save
                </Button>
            </div>

        </Popup>
    )
}

const PopupEdit = ({ title, callBack }: PopupProps) => {

    const [elementClicked, setElementClicked] = useState('')

    callBack(elementClicked)

    return (
        <Popup>
            <p className={Styles.title} >{title}</p>

            <form action="">
                <Input label="Title" placeholder="Hello world" />
                <Input label="Content" placeholder="Content here" />
            </form>

            <div className={Styles['button-area']} >
                <Button onClick={() => setElementClicked('cancel')} isValid type="submit" fill={'none'} id="popup_cancel" >
                    cancel
                </Button>
                <Button onClick={() => setElementClicked('save')} isValid type="submit" fill={'green'} id="popup_save" >
                    Save
                </Button>
            </div>
        </Popup>
    )
}