const ImageHeading = () => {
    return (
        <>
            <div className="relative w-full">
                <header className="relative flex flex-col items-center w-full max-w-[720px] mx-auto mt-8 px-4 pt-12 md:pt-16 gap-4">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-800 text-center !leading-tight">
                        Ga1ahad & Scientific Witchery
                    </h1>
                    <p className="text-xl leading-relaxed text-gray-500 text-center md:px-16">
                        The magical potion of reanimation Bittersweet cranberry
                        flavoured euphoria Rise from bed my darling.
                    </p>
                </header>
                <div className="absolute -bottom-20 w-full h-screen bg-gray-50 z-[-1]" />
            </div>
            <div className="px-4">
                <div className="flex w-full max-w-[840px] mt-8 mb-12 mx-auto overflow-hidden shadow-xl rounded md:rounded-lg bg-gray-200">
                    <img
                        className="w-full"
                        src="https://i.ytimg.com/vi/d-nxW9qBtxQ/maxresdefault.jpg"
                        alt="Ga1ahad and Scientific Witchery"
                    />
                </div>
            </div>
        </>
    )
}

export default ImageHeading
