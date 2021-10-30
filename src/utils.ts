import fetch from 'node-fetch'

let cache: string[]

export const getNyan = async () => {
    if (cache) return cache

    const source = await fetch(
        'https://raw.githubusercontent.com/SaltyAom/nyan/main/nyan'
    ).then((res) => res.text())

    const available = source.replace(' ', '').split('\n')
    cache = available

    return available
}
