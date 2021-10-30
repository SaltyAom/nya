import chalk from 'chalk'
import { existsSync } from 'fs'

const { cwd } = process

export const composePath = (suffix = '') => {
    let outDir = cwd()

    if (suffix) {
        outDir += '/' + suffix.replace(/^\//, '').replace(/\/$/, '')

        return outDir
    }

    if (existsSync(`${outDir}/src`)) outDir = `${outDir}/src`
    outDir += '/nyan'

    return outDir
}

export const composeArgs = (args: string[]) => {
    const argv: string[] = []
    const options = {
        outDir: '',
        help: ''
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
            console.log(chalk.red.bold(`${arg} is not valid options`))
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

interface ArgWithPath {
    arg: string
    path?: string
}

export const composeArgsWithPath = (args: string[]) => {
    const argsWithPaths: ArgWithPath[] = []

    for (let i = 0; i < args.length; ) {
        const arg = args[i]
        const next = args[i + 1] || ""

        if (next.startsWith('.')) {
            i += 2
            argsWithPaths.push({
                arg,
                path: next
            })
        } else {
            i++
            argsWithPaths.push({
                arg
            })
        }
    }

    return argsWithPaths
}
