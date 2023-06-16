'use client'

import styles from "./styles.module.css"

import { Input } from "@/common/input"
import { Button } from "@/common/button"
import { CardPost } from "@/common/cards"
import { usePostsContext } from "@/context/posts"

export const ProfilePage = () => {

    const { posts, onChangeInput, isButtonValid } = usePostsContext()

    return (
        <section className={styles.wrap} >

            <header className={styles.header}>
                <h1>CodeLeap Network</h1>
            </header>

            <main className={styles.main}>

                <form className={styles.card} onSubmit={event => event.preventDefault()} >

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

                        <Button isValid={isButtonValid} >Create</Button>
                    </div>
                </form>

                {posts.map((post) => {
                    const datePost = new Date(post.created_datetime)
                    const timeAgo = getDiffDates(datePost)

                    return (
                        <CardPost
                            key={post.id}
                            id={post.id}
                            title={post.title}
                            content={post.content}
                            username={post.username}
                            created_datetime={timeAgo || ''}
                        />
                    )
                })}

            </main>

        </section>
    )
}

function getDiffDates(dateStart: Date, dateEnd = new Date()) {
    const datePost = dateStart.getTime()
    const now = dateEnd.getTime()

    const diff = datePost - now

    const date = new Date(diff)
    const int = new Intl.RelativeTimeFormat("pt-BR", {
        style: "short",
        localeMatcher: "lookup",
        numeric: "auto",
    })

    const seconds = Math.round(diff / 1000)
    const minutes = Math.round(seconds / 60)
    const hours = Math.round(minutes / 60)
    const days = Math.round(hours / 24)

    let typeSuggestion: 'seconds' | 'minutes' | 'hours' | 'days';
    let data = {
        seconds,
        minutes,
        hours,
        days,
    }

    if (seconds >= -60) {
        typeSuggestion = 'seconds'
        return int.format(data[typeSuggestion], typeSuggestion)
    }
    else if (minutes >= -60) {
        typeSuggestion = 'minutes'
        return int.format(data[typeSuggestion], typeSuggestion)
    }
    else if (hours >= -24) {
        typeSuggestion = 'hours'
        return int.format(data[typeSuggestion], typeSuggestion)
    }
    
    typeSuggestion = 'days'
    return int.format(data[typeSuggestion], typeSuggestion)
}