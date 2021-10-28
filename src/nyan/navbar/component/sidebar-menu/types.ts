import type { FunctionComponent } from 'react'

export interface SidebarMenuProps {
    href: string
    className?: string
    close: () => void
}

export type SidebarMenuComponent = FunctionComponent<SidebarMenuProps>
