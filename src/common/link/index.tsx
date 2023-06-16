import NextLink from 'next/link'
import { AnchorHTMLAttributes } from 'react'

type LinkProps = { href: string } & AnchorHTMLAttributes<HTMLAnchorElement>

export const Link = ({ children, href, ...props }: LinkProps) => {
    return (
        <NextLink href={href} {...props} >
            {children}
        </NextLink>
    )
}