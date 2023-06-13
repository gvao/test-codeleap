import { useId } from "react"
import style from "./input.module.css"

interface InputProps {
    label?: string,
    placeholder?: string,
}

export const Input = ({ label, placeholder = 'John doe', ...props }: InputProps) => {
    const id = useId()

    return (
        <div className={style.wrap} >

            {label && <label className={style.label} htmlFor={id}>{label}</label>}

            <input
                className={style.input}
                name={id}
                id={id}
                type="text"
                placeholder={placeholder}
                {...props}
            />

        </div>
    )
}