import Image from 'next/image'

import { useAuthContext } from "@/context/auth"
import styles from "./styles.module.css"
import { ButtonAction } from "@/common/button"
import { MouseEventHandler } from "react"

type CardPostProps = {
    title: string,
    content?: string,
    username: string,
    created_datetime: string,
}

export const CardPost = ({ title, content, username: usernameProp, created_datetime }: CardPostProps) => {

    const {
        username,
    } = useAuthContext()

    const actionConfirme: MouseEventHandler<HTMLButtonElement> = ({ target }) => {
        console.log(target)
    }

    const isUsernameMatch = username === usernameProp

    return (
        <article className={styles.card}>
            <header className={styles.header}>
                <h2>{title}</h2>

                {isUsernameMatch && (
                    <div className={styles.action}>
                        <ButtonAction
                            onClick={actionConfirme}
                        >
                            <Image width={30} height={30} src="/edit.png" alt="edit post" />
                        </ButtonAction>

                        <ButtonAction
                            onClick={actionConfirme}
                        >
                            <Image width={30} height={30} src="/delete-forever.png" alt="delete post" />
                        </ButtonAction>
                    </div>
                )}
            </header>

            <div className={styles.container}>
                <header className={styles["infos-post"]}>
                    <span className={styles["profile-name"]}>{`@${usernameProp}`}</span>
                    <span>{created_datetime}</span>
                </header>

                <p>{content}</p>
            </div>
        </article>
    )
}