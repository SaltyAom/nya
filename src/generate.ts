import fs from 'fs'

import fetch from 'node-fetch'
import degit from 'degit'
import task from 'tasuku'
import chalk from 'chalk'
import boxen from 'boxen'

const { cwd } = process

const generate = async (names: string[], outDir: string) => {
    const source = await fetch(
        'https://raw.githubusercontent.com/SaltyAom/nyan/main/nyan'
    ).then((res) => res.text())
    const available = source.replace(' ', '').split('\n')

    const invalid = names.find((name) => !available.includes(name))
    if (invalid) return console.log(`${invalid} is not in nyan`)

    const tasks = names.map((name) =>
        task(
            `Generating ${name}`,
            async ({ setTitle, setWarning, setError }) => {
                const dist = `${outDir}/${name}`

                if (fs.existsSync(dist))
                    return setWarning(
                        `Skip ${name} because it's already exists`
                    )

                try {
                    await degit(
                        `https://github.com/SaltyAom/nyan/src/nyan/${name}`
                    ).clone(dist)
                    setTitle(`Generated ${name}`)
                } catch (error) {
                    setError(
                        `Something went wrong during generating ${name}. Check your internet connection`
                    )
                }
            }
        )
    )

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
