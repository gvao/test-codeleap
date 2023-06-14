'use client'

import styles from "./styles.module.css"

import { Input } from "@/common/input"
import { Button } from "@/common/button"
import { CardPost } from "@/common/cards"
import { ChangeEventHandler, useState } from "react"

export const ProfilePage = () => {

    const [infosPost, setInfosPost] = useState({})

    const onChangeInput: ChangeEventHandler<HTMLInputElement> =
        ({ target: { id, value } }) => setInfosPost({ ...infosPost, [id]: value })

    const validButton = (infosPost = {}) => {
        const inputsFilled = Object.values(infosPost)
            .filter(value => value !== '')
        const isAllInputsFilled = inputsFilled.length >= 2
        return isAllInputsFilled
    }

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

                        <Button isValid={validButton(infosPost)} >Create</Button>
                    </div>

                </form>

                <CardPost
                    title="My First Post at CodeLeap Network!"
                    content="Curabitur suscipit suscipit tellus. Phasellus consectetuer vestibulum elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas egestas arcu quis ligula mattis placerat. Duis vel nibh at velit scelerisque suscipit.

                    Duis lobortis massa imperdiet quam. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Fusce a quam. Nullam vel sem. Nullam cursus lacinia erat."
                    username="Yuri Galvão"
                    created_datetime={'dsdbndl'}
                />


                <CardPost
                    title="My second Post at CodeLeap Network!"
                    content="Curabitur suscipit suscipit tellus. Phasellus consectetuer vestibulum elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas egestas arcu quis ligula mattis placerat. Duis vel nibh at velit scelerisque suscipit.

                    Duis lobortis massa imperdiet quam. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Fusce a quam. Nullam vel sem. Nullam cursus lacinia erat."
                    username="Erica lima"
                    created_datetime={""}
                />

            </main>

        </section>
    )
}

