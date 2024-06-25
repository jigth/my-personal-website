import { join } from 'path';
import { AppFileReader } from "../../../src/shared/utils/app-file-reader";

export default defineEventHandler(async (event) => {
  const filename = getRouterParam(event, 'filename') as string

  const path = join('blog', 'posts', `${filename}.md`)
  
  const data = await AppFileReader.readFile(path)

  return {
    data
  }

})