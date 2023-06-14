import { ChangeEventHandler } from "react";

export type PostsContextProps = {
    children: React.ReactNode
}

export type Post = {
    id: number,
    title: string,
    content: string,
    username: string,
    created_datetime: string,
}

export type ReturnUsePostsContext = {
    posts: Post[];
    onChangeInput: ChangeEventHandler<HTMLInputElement>;
    isButtonValid: boolean;
};