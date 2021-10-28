import Link from 'next/link'

const CenterHeading = () => {
    return (
        <header className="flex flex-col items-center w-full max-w-[640px] mx-auto my-16 px-4 py-8 md:py-16 gap-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-800">Fly me to the moon</h1>
            <p className="text-lg text-gray-500 text-center">Let me play among the stars. Let me see what spring is like on A-Jupiter and Mars. In other words, hold my hand.</p>
            <section className="flex flex-col md:flex-row max-w-[420px] w-full gap-4 my-4">
                <Link href="/">
                    <a className="flex flex-row flex-1 justify-center text-lg md:text-xl font-medium text-white bg-black py-3 md:py-4 rounded">Sign up</a>
                </Link>
                <Link href="/">
                    <a className="flex flex-row flex-1 justify-center text-lg md:text-xl font-medium text-black border border-gray-300 py-3 md:py-4 rounded">Overview</a>
                </Link>
            </section>
        </header>
    )
}

export default CenterHeading
