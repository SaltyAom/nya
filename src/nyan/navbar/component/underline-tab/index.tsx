import Link from 'next/link'
import { useRouter } from 'next/router'

import { underlineTab } from '../../config'

import type { UnderlineTabComponent } from './types'

const { textColor, padding, borderColor, borderWidth, active } = underlineTab

const Tab: UnderlineTabComponent = ({ children, href, className = '' }) => {
    const { asPath } = useRouter()

    return (
        <Link href={href}>
            <a
                className={`flex items-center h-full ${textColor} ${padding} ${borderWidth} border-transparent ${borderColor} ${
                    asPath === href ? active : ''
                } cursor-pointer transition-colors ${className}`}
            >
                {children}
            </a>
        </Link>
    )
}

export default Tab
