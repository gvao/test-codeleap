import styles from '../styles/home.module.css'

import { Signup } from "../components/signup"

export default function Home() {
  return (
    <section className={styles.container}>

      <Signup />

    </section>
  )
}