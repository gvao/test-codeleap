import styles from "./styles.module.css"

import { Input } from "@/common/input"
import { Button } from "@/common/button"
import { CardPost } from "@/common/cards"

export const ProfilePage = () => {

    return (
        <section className={styles.wrap} >

            <header className={styles.header}>
                <h1>CodeLeap Network</h1>
            </header>

            <main className={styles.main}>
                <form className={styles.card} >

                    <div className={styles.container}>
                        <h2>What’s on your mind?</h2>

                        <Input
                            label='Title'
                            placeholder="hello world"
                        />

                        <Input
                            label='Content'
                            placeholder="content here"
                        />

                        <Button isValid >Create</Button>
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

