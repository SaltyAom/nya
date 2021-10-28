import Link from 'next/link'
import { useRouter } from 'next/router'

import { hoverTab } from '../../config'

import type { HoverTabComponent } from './types'

const { textColor, bg, padding, active } = hoverTab

const Tab: HoverTabComponent = ({ children, href, className }) => {
    const { asPath } = useRouter()

    return (
        <Link href={href}>
            <a
                className={`flex ${padding} ${textColor} ${bg} ${
                    asPath === href ? active : ''
                } rounded cursor-pointer transition-colors ${className}`}
            >
                {children}
            </a>
        </Link>
    )
}

export default Tab
