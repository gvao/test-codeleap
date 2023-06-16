'use client'

import styles from "./styles.module.css"

import { Input } from "@/common/input"
import { Button } from "@/common/button"
import { CardPost } from "@/common/cards"
import { usePostsContext } from "@/context/posts"
import { getDiffDates } from "@/utils/date"

export const ProfilePage = () => {

    const { posts } = usePostsContext()

    return (
        <section className={styles.wrap} >

            <header className={styles.header}>
                <h1>CodeLeap Network</h1>
            </header>

            <main className={styles.main}>

                <FormCard />

                <ul className={styles['posts-list']} >
                    {posts.map((post) => {
                        const datePost = new Date(post.created_datetime)
                        const timeAgo = getDiffDates(datePost)

                        return (
                            <li key={post.id} className={styles.card}>
                                <CardPost
                                    id={post.id}
                                    title={post.title}
                                    content={post.content}
                                    username={post.username}
                                    created_datetime={timeAgo || ''}
                                />
                            </li>
                        )
                    })}

                </ul>

            </main>

        </section>
    )
}

const FormCard = () => {
    const { onChangeInput, isButtonValid, newPost } = usePostsContext()

    return (
        <form className={styles.card} onSubmit={event => {
            event.preventDefault()
            newPost()
        }} >

            <div className={styles.container}>
                <h2>What’s on your mind?</h2>

                <Input
                    id='title'
                    label='Title'
                    placeholder="hello world"
                    onChange={onChangeInput}
                />

                <Input
                    id='content'
                    label='Content'
                    placeholder="content here"
                    onChange={onChangeInput}
                />

                <div className={styles['button-form']} >
                    <Button isValid={isButtonValid} >Create</Button>
                </div>

            </div>
        </form>
    )
}