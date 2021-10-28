import Link from 'next/link'

import { nav, navigations, actions } from './config'
import {
    UnderlineTab,
    ButtonLink,
    ProfileIcon,
    HamburgerMenu
} from './component'
import SidebarMenu from './component/sidebar-menu'

const Tab = UnderlineTab
// const Tab = HoverTab

const tabs = [
    ['/?1', 'Content 1'],
    ['/?2', 'Content 2'],
    ['/?3', 'Content 3'],
    ['/?4', 'Content 4']
] as const

// ======================================================
const { height, padding, fontSize, bg, border } = nav
const { padding: navPadding, gap: navGap, display: navDisplay } = navigations
const { gap: actionsGap, display: actionsDisplay } = actions
// ======================================================

const StickyNavbar = () => {
    return (
        <a>
            <nav
                className={`sticky top-0 flex justify-between items-center ${height} w-full ${padding} ${bg} ${border}`}
            >
                <header className="flex items-center h-full">
                    <HamburgerMenu
                        header={(close) => (
                            <header className="flex items-center py-4 px-2 gap-2 border-b text-gray-70">
                                <button
                                    className="text-2xl px-1"
                                    onClick={close}
                                    type="button"
                                >
                                    ╳
                                </button>
                                <h1 className="text-xl">Nyan</h1>
                            </header>
                        )}
                        menus={(close) =>
                            tabs.map(([href, title]) => (
                                <SidebarMenu
                                    key={href}
                                    href={href}
                                    close={close}
                                >
                                    {title}
                                </SidebarMenu>
                            ))
                        }
                        footer={(close) => [
                            <SidebarMenu
                                className="gap-2"
                                href="/"
                                close={close}
                            >
                                <ProfileIcon src="https://avatars.githubusercontent.com/u/35027979?s=400&u=28dbe76d9057768eed7cb2d346203b7c55c153ce&v=4" />
                                SaltyAom
                            </SidebarMenu>
                        ]}
                    />
                    <Link href="/">
                        <a
                            className={`${fontSize} mr-2`}
                            role="heading"
                            aria-level={1}
                        >
                            Nyan
                        </a>
                    </Link>

                    <section
                        className={`${navDisplay} items-center w-full h-full ${navPadding} ${navGap}`}
                    >
                        {tabs.map(([href, title]) => (
                            <Tab key={href} href={href}>
                                {title}
                            </Tab>
                        ))}
                    </section>
                </header>

                <aside
                    className={`${actionsDisplay} ${actionsGap} h-full items-center`}
                >
                    <ButtonLink href="/?signup">Sign up</ButtonLink>
                    <ProfileIcon src="https://avatars.githubusercontent.com/u/35027979?s=400&u=28dbe76d9057768eed7cb2d346203b7c55c153ce&v=4" />
                </aside>
            </nav>
        </a>
    )
}

export default StickyNavbar
