import type { ButtonHTMLAttributes, FunctionComponent } from 'react'

export interface ProfileIconProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    src: string
}

export type ProfileIconComponent = FunctionComponent<ProfileIconProps>
