import Fuse from 'fuse.js'

import { getNyan } from './utils'

export const search = async (keyword: string) =>
    new Fuse(await getNyan()).search(keyword).map(({ item }) => item)
