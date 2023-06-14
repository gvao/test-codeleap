'use client'
import {InputHTMLAttributes, useId } from "react"
import style from "./input.module.css"

type InputProps = {
    id?: string,
    label?: string,
    placeholder?: string,
} & InputHTMLAttributes<HTMLInputElement>

export const Input = ({ label, placeholder = 'John doe', id = '',  ...props }: InputProps) => {
    const idRandom = useId()

    if (!id) id = idRandom

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