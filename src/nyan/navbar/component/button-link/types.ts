import type { FunctionComponent } from 'react'

export interface ButtonLinkProps {
    href: string
    className?: string
}

export type ButtonLinkComponent = FunctionComponent<ButtonLinkProps>
