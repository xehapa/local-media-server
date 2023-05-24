import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

export const getAssets = async (pathToFile) => {
    const file = await readFile(join(`assets/${pathToFile}`), (err, data) => {
        if (err) throw err;
        return data;
    })

    return file
}
