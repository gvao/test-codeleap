
import {InputHTMLAttributes, useId } from "react"
import style from "./input.module.css"

type InputProps = {
    label?: string,
    placeholder?: string,
} & InputHTMLAttributes<HTMLInputElement>

export const Input = ({ label, placeholder = 'John doe', ...props }: InputProps) => {
    'use client'
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