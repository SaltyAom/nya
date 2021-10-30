import chalk from "chalk"

const manual = () => {
    const manual = `
    Nya - Generate common React component pattern.

    Usage: nya [command] [...args] [flags]

    Displays help informations.

    Commands:
        n, new          New component from nyan ${`(${chalk.dim("https://github.com/saltyAom/nyan")})`}
        s, search       Search component from nyan ${`(${chalk.dim("https://raw.githubusercontent.com/SaltyAom/nyan/main/nyan")})`}
        h, help         Display help informations / manual

    Options (flags):
        --outDir       Output directory of generated components
        --help         Display help informations / manual
    `

    console.log(manual)
}

export default manual