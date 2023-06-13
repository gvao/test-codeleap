"use client"
import styles from "./styles.module.css"

import { Input } from "@/common/input";
import { Button } from "@/common/button";
import { ChangeEventHandler, FormEvent, useState } from "react";

import { careersGet, careersPost } from "../../services/codeleap"
import { useRouter } from "next/navigation";

function useSignup() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const onInput: ChangeEventHandler<HTMLInputElement> = ({ target: { value } }) => setUsername(value)

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!username) return alert('Insert required')

    careersGet(`?username=${username}`)
      .then(res => res?.json())
      .then(res => {
        if ( res?.count > 0 ) return 

        return careersPost('', {
          username,
          title: 'aiubiusbs',
          content: 'aiubiusbs'
        })
      })
      .then(responsePost => {
        if(!responsePost || !responsePost.ok) return

        router.push(`/profile/${username}`)
      })
  }

  return {
    username,
    onInput,
    onSubmit
  }
}

export const Signup = () => {
  const {
    username,
    onInput,
    onSubmit
  } = useSignup()

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
        />
        <Button type="submit" isValid={!!username} >enter</Button>
      </form>

    </div>
  )
}