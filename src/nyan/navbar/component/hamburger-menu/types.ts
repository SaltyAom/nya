import type {
    ButtonHTMLAttributes,
    FunctionComponent,
    ReactElement
} from 'react'

// eslint-disable-next-line no-unused-vars
type Menu = (close: () => void) => ReactElement

// eslint-disable-next-line no-unused-vars
type Menus = (close: () => void) => ReactElement[]

export interface HamburgerMenuProps
    extends ButtonHTMLAttributes<HTMLButtonElement> {
    header?: Menu
    menus: Menus
    footer?: Menus
}

export type HamburgerMenuComponent = FunctionComponent<HamburgerMenuProps>
