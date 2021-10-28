import Link from 'next/link'

const ListHeading = () => {
    return (
        <header className="flex flex-col items-start w-full max-w-[640px] mx-auto my-16 px-4 py-8 md:py-16 gap-8">
            <section className="flex flex-col gap-2">
                <h6 className="font-md font-medium text-gray-500">
                    Fly me to the moon
                </h6>
                <h1 className="text-4xl md:text-5xl font-semibold text-gray-800 !leading-tight">
                    Looking your next computer?
                </h1>
            </section>
            <ul className="flex flex-col gap-3 pl-6">
                <li className="list-disc text-xl text-gray-500">100% Quality Check</li>
                <li className="list-disc text-xl text-gray-500">Full Coverage</li>
                <li className="list-disc text-xl text-gray-500">Life-time warranty</li>
            </ul>
            <section className="flex flex-col md:flex-row max-w-[420px] w-full gap-4">
                <Link href="/">
                    <a className="flex flex-row flex-1 justify-center text-lg md:text-xl font-medium text-white bg-black py-3 rounded">
                        Sign up
                    </a>
                </Link>
                <Link href="/">
                    <a className="flex flex-row flex-1 justify-center text-lg md:text-xl font-medium text-black border border-gray-300 py-3 rounded">
                        Overview
                    </a>
                </Link>
            </section>
        </header>
    )
}

export default ListHeading
