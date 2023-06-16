"use client"

import styles from "./styles.module.css"

import { Input } from "@/common/input";
import { Button } from "@/common/button";

import { useAuthContext } from "@/context/auth";

export const Signup = () => {

  const {
    username,
    onInput,
    onSubmit
  } = useAuthContext()

  return (
    <div className={styles.wrap} >

      <header>
        <h2 className={styles.title} >Welcome to CodeLeap network!</h2>
      </header>

      <form
        onSubmit={onSubmit}
      >
        <Input
          label="Please enter your username"
          onChange={onInput}
          value={username || ''}
          autoFocus
        />

        <div className={styles["signup-button"]}>
          <Button type="submit" isValid={!!username} >enter</Button>
        </div>

      </form>

    </div>
  )
}