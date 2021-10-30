import fs from 'fs'

import degit from 'degit'
import task from 'tasuku'
import chalk from 'chalk'
import boxen from 'boxen'

import { composeArgsWithPath } from './compose'
import { search } from './search'
import { getNyan } from './utils'

const { cwd } = process

const generate = async (names: string[], outDir: string) => {
    const available = await getNyan()
    const modules = composeArgsWithPath(names)

    const invalid = modules.find(({ arg }) => !available.includes(arg))
    if (invalid) {
        const possibleNyans = await search(invalid.arg)

        console.log(`${chalk.green(invalid.arg)} is not in nyan.`)

        if (possibleNyans)
            console.log(
                'Maybe you mean',
                possibleNyans.map((nyan) => chalk.green(nyan)).join(', '),
                '?'
            )

        process.exit(0)
    }

    const tasks = modules.map(({ arg: name, path = name }) => {
        const group = path !== name ? `${path} ${chalk.dim(`(${name})`)}` : name

        return task(
            `Generating ${group}`,
            async ({ setTitle, setWarning, setError }) => {
                const dist = `${outDir}/${path}`

                if (fs.existsSync(dist))
                    return setWarning(
                        `Skip ${path} because it's already exists`
                    )

                try {
                    await degit(
                        `https://github.com/SaltyAom/nyan/src/nyan/${name}`
                    ).clone(dist)
                    setTitle(`Generated ${group}`)
                } catch (error) {
                    setError(
                        `Something went wrong during generating ${group}. Check your internet connection`
                    )
                }
            }
        )
    })

    await Promise.all(tasks)

    console.log(
        boxen(
            `${chalk.greenBright(
                'Generated all modules at'
            )} ${chalk.yellow.bold(outDir.replace(cwd(), ''))}`,
            {
                padding: 1,
                margin: 1,
                borderStyle: 'bold',
                borderColor: 'greenBright'
            }
        )
    )
}

export default generate
