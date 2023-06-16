import styles from "./styles.module.css"
import { ButtonProps } from "./types"

export const Button = ({ fill, children, type, isValid = false, ...props }: ButtonProps) => {

    return (

        <button
            className={`
                ${styles.button} 
                ${!isValid && styles.invalid} 
                ${fill && styles[`fill-${fill}`]}
            `}
            type={isValid ? type : 'button'}
            {...props}
        >
            {children}
        </button>

    )
}