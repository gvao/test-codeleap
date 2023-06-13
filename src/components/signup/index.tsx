import { Input } from "@/common/input";
import styles from "./styles.module.css"


export const Signup = () => (
    <div className={styles.wrap} >
  
      <h2 className={styles.title} >Welcome to CodeLeap network!</h2>
  
      <form>
        <Input label="Please enter your username" />
        <button type="submit">enter</button>
      </form>
  
    </div>
  )