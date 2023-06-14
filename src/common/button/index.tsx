import styles from "./styles.module.css"

type ButtonProps = {
    isValid?: boolean,
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

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