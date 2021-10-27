#!/usr/bin/env node
import generate from './generate'
import { composeArgs, composePath } from './compose'

const {
    argv: [_, __, command, ...args]
} = process

const main = async () => {
    let {
        argv,
        options: { outDir }
    } = composeArgs(args)

    outDir = composePath(outDir)

    switch (command) {
        case 'n':
        case 'new':
            generate(argv, outDir)
            break

        default:
            break
    }
}

main()
