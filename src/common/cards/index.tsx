import styles from "./styles.module.css"

type CardPostProps = {
    title: string,
    content?: string,
    username: string,
    created_datetime: string,
}

export const CardPost = ({ title, content, username, created_datetime }: CardPostProps) => {
    return (
        <article className={styles.card}>
            <header className={styles.header}>
                <h2>{title}</h2>

                <div className={styles.action}>
                    <img src="/edit.png" alt="edit post" />
                    <img src="/delete-forever.png" alt="delete post" />
                </div>
            </header>

            <div className={styles.container}>
                <header className={styles["infos-post"]}>
                    <span className={styles["profile-name"]}>{`@${username}`}</span>
                    <span>{created_datetime}</span>
                </header>

                <p>{content}</p>
            </div>
        </article>
    )
}

// export const CardPost = ({ title, content, username, created_datetime }: CardPostProps) => {

//     return (
//         <>
//         <article className= { styles.card } >

//             <header className={ styles.header }>
//                 <h2>{ title } </h2>

//                 < div className = { styles.action } >
//                     <img src="/edit.png" alt = "edit post" />
//                     <img src="/delete-forever.png" alt = "delete post" />
//                 </div>
//             < /header>

//             < div className = { styles.container } >
//                 <header className={ styles["infos-post"] } >
//                     <span className={ styles["profile-name"] } > @{ username } < /span>
//                     < span > 25 min ago < /span>
//                 < /header>

//                 < p > { content } < /p>
//             < /div>
//         </article>
//         </>
//     )
// }