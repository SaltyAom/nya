import Link from 'next/link'

import { buttonLink } from '../../config'

import type { ButtonLinkComponent } from './types'

const { text, bg, padding } = buttonLink

const Tab: ButtonLinkComponent = ({ children, href, className = '' }) => {
    return (
        <Link href={href}>
            <a
                className={`flex items-center ${text} ${bg} ${padding} cursor-pointer rounded ${className}`}
            >
                {children}
            </a>
        </Link>
    )
}

export default Tab
