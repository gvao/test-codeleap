import styles from "./styles.module.css"
import { ButtonProps } from "./types"


export const Button = ({ children, type, isValid = false, ...props }: ButtonProps) => (
    <div
        className={styles.wrap}
    >

        <button
            className={`${styles.button} ${!isValid && styles.invalid}`}
            {...props}
            type={isValid ? type : 'button'}
        >
            {children}
        </button>

    </div>
)

export const ButtonAction = ({ children, ...props }: ButtonProps)=> (
    <button className={styles["button-action"]} {...props} >
        { children }
    </button>
)