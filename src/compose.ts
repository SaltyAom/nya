import chalk from 'chalk'
import { existsSync } from 'fs'

const { cwd } = process

export const composePath = (suffix = '') => {
    let outDir = cwd()

    if (existsSync(`${outDir}/src`)) outDir = `${outDir}/src`
    if (suffix) outDir += '/' + suffix.replace(/^\//, '').replace(/\/$/, '')

    return outDir + '/nyan'
}

export const composeArgs = (args: string[]) => {
    const argv: string[] = []
    const options = {
        outDir: ''
    }

    for (let index = 0; index < args.length; ) {
        const arg = args[index]

        if (!arg.startsWith('-')) {
            argv.push(arg)
            index++
            continue
        }

        const option = arg.replace(/^--/, '').replace(/^-/, '')

        if (!Object.getOwnPropertyNames(options).includes(option)) {
            console.log(chalk.red.bold(`${option} is not valid options`))
            process.exit(1)
        }

        options[option as keyof typeof options] = args[index + 1]
        index += 2
    }

    return {
        argv,
        options
    }
}
