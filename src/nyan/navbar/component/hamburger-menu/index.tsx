import { useState } from 'react'

import { hamburgerMenu, mobileNavigation } from '../../config'

import type { HamburgerMenuComponent } from './types'

const { display, color, size, margin } = hamburgerMenu
const { bg, size: sheetSize, padding, gap } = mobileNavigation

const HamburgerMenu: HamburgerMenuComponent = ({
    className = '',
    menus,
    header = null,
    footer = null,
    ...props
}) => {
    const [isOpening, updateOpening] = useState(false)

    const open = () => {
        updateOpening(true)
    }

    const close = () => {
        updateOpening(false)
    }

    return (
        <>
            <button
                className={`${display} ${color} ${margin} ${className}`}
                type="button"
                onClick={open}
                {...props}
            >
                <svg
                    className={size}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
            </button>
            {isOpening && (
                <>
                    <div
                        role="button"
                        tabIndex={0}
                        className="top-0 left-0 fixed z-40 w-full h-screen bg-[rgba(0,0,0,.5)]"
                        onClick={close}
                        onKeyDown={close}
                        aria-label="Close menu"
                    />
                    <aside
                        className={`fixed z-50 top-0 left-0 flex flex-col justify-between ${padding} ${bg} ${gap} ${sheetSize}`}
                    >
                        {header && header(close)}
                        <section className={`flex flex-col flex-1 ${gap}`}>
                            {menus(close)}
                        </section>
                        {footer && (
                            <section className={`flex flex-col ${gap}`}>
                                {footer(close)}
                            </section>
                        )}
                    </aside>
                </>
            )}
        </>
    )
}

export default HamburgerMenu
