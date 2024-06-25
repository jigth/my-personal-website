import * as path from 'node:path'
import * as fs from 'node:fs'

export class AppFileReader {
    static async readFile (name: string): Promise<string> {
        const filePath = path.join(process.cwd(), 'public', name)

        try {
            const data = await fs.promises.readFile(filePath, 'utf-8')
            return data
        } catch (err: any) {
            const msg = 'Error reading filepath.'
            console.log(msg, err.message)
            return msg
        }

    }
}