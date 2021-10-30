#!/usr/bin/env node
import chalk from 'chalk'

import generate from './generate'
import { composeArgs, composePath } from './compose'
import { search } from './search'
import { getNyan } from './utils'
import manual from './help'

const {
    argv: [_, __, command, ...args]
} = process

const main = async () => {
    let {
        argv,
        options,
        options: { help, outDir }
    } = composeArgs(args)

    outDir = composePath(outDir)
    
    if(!command || help)
        return manual()

    switch (command) {
        case 'n':
        case 'new':
            generate(argv, outDir)
            break

        case 's':
        case 'search':
            ;(argv[0] ? await search(argv[0]) : (await getNyan()).sort()).map(
                (found) => console.log(`- ${found} ${chalk.dim(`(https://github.com/SaltyAom/nyan/tree/main/src/nyan/${found})`)}`)
            )
            break

        case 'h':
        case 'help':
            manual()
            break

        default:
            console.log(`${chalk.green(command)} command not found`)
            break
    }
}

main()
