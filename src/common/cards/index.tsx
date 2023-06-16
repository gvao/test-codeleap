import styles from "./styles.module.css"

import Image from 'next/image'

import { useAuthContext } from "@/context/auth"
import { Link } from "@/common/link"
import { CardPostProps } from './types'

export const CardPost = ({ id, title, content, username: usernameProp, created_datetime }: CardPostProps) => {

    const {
        username,
    } = useAuthContext()

    const isUsernameMatch = username === usernameProp

    return (
        <article className={styles.card}>
            <header className={styles.header}>
                <h2>{title}</h2>

                {isUsernameMatch && (
                    <div className={styles.action}>
                        <Link href={`?popup=edit&id_post=${id}`}>
                            <Image width={30} height={30} src="/edit.png" alt="edit post" />
                        </Link>

                        <Link href={`?popup=delete&id_post=${id}`}>
                            <Image width={30} height={30} src="/delete-forever.png" alt="delete post" />
                        </Link>
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