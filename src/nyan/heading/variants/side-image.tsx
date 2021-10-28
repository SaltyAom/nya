import Link from 'next/link'

const SideImageHeading = () => {
    return (
        <header className="flex flex-col-reverse md:flex-row justify-center items-center w-full max-w-[1080px] min-h-screen mx-auto px-6 py-16 gap-6">
            <section className="flex flex-col flex-[1] gap-8">
                <section className="flex flex-col gap-2">
                    <h6 className="font-md font-medium text-gray-500">
                        Utopiosphere lyric
                    </h6>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-800 !leading-tight">
                        Step through the gate into Utopia
                    </h1>
                </section>
                <p className="text-xl leading-relaxed text-gray-500">
                    The sky is painted in Lunacia Florets slashed open the vein
                    of tears Misfortuna There is no escape, my dear.
                </p>
                <section className="flex flex-col sm:flex-row max-w-[320px] sm:max-w-[420px] w-full gap-4 mx-auto sm:mx-0">
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
            </section>
            <div className="flex flex-1 items-center">
                <img
                    className="object-contain object-center w-full max-w-[560px]"
                    src="https://pbs.twimg.com/media/DtLfZEjWoAE8gfB.jpg"
                    alt="Undraw"
                />
            </div>
        </header>
    )
}

export default SideImageHeading
