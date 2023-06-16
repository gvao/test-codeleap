import { ChangeEventHandler, MouseEvent, MouseEventHandler } from "react";

export type PostsContextProps = {
    children: React.ReactNode
}

export type Post = {
    id: number,
    title: string,
    content?: string,
    username: string,
    created_datetime: string,
}

export type ReturnUsePostsContext = {
    posts: Post[],
    isButtonValid: boolean,
    onChangeInput: ChangeEventHandler<HTMLInputElement>,
    newPost: () => void,
}

