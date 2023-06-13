import styles from "./styles.module.css"

import { Input } from "@/common/input";
import { Button } from "@/common/button";

export const Signup = () => (
    <div className={styles.wrap} >
  
      <h2 className={styles.title} >Welcome to CodeLeap network!</h2>
  
      <form>
        <Input label="Please enter your username" />
        <Button type="submit">enter</Button>
      </form>
  
    </div>
  )