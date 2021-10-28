import type { FunctionComponent } from 'react'

export interface HoverTabProps {
    href: string
    className?: string
}

export type HoverTabComponent = FunctionComponent<HoverTabProps>
