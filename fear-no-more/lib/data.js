import fs from 'fs'
import path from 'path'

const postsDirectory = path.join(process.cwd(), 'listingsData')

export function getData () {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory)
  const allData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.json$/, '')

    // Read file as string
    const fullPath = path.join(postsDirectory, fileName)

    // const fileContents = fs.readFileSync(fullPath, 'utf8')
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    // parse data to readable format
    const parsedData = JSON.parse(fileContents);

    // Combine the data with the id
    return {
      parsedData
    }
  })
  // Sort posts by date
  return allData;
}
