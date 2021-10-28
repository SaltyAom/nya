import Link from 'next/link'
import { useRouter } from 'next/router'

import { sidebarMenu } from '../../config'

import type { SidebarMenuComponent } from './types'

const { text, padding, active, className: extraClassName = '' } = sidebarMenu

const SidebarMenu: SidebarMenuComponent = ({
    href,
    children,
    className = '',
    close
}) => {
    const { asPath } = useRouter()

    return (
        <Link href={href}>
            <a
                className={`flex items-center ${text} ${padding} ${
                    asPath === href ? active : ''
                } ${extraClassName} ${className}`}
                role="link"
                tabIndex={0}
                onClick={close}
                onKeyDown={close}
            >
                {children}
            </a>
        </Link>
    )
}

export default SidebarMenu
