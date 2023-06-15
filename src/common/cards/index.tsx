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
        console.log(target.alt)
    }

    return (
        <article className={styles.card}>
            <header className={styles.header}>
                <h2>{title}</h2>

                {username === usernameProp && (
                    <div className={styles.action}>
                        <ButtonAction
                            onClick={actionConfirme}
                        >
                            <img src="/edit.png" alt="edit post" />
                        </ButtonAction>

                        <ButtonAction
                            onClick={actionConfirme}
                        >
                            <img src="/delete-forever.png" alt="delete post" />
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