// @flow
import readJSON from "read-package-json"
import fetch from "node-fetch"

/** The result from a type host */
class TypeResult {
  status: boolean
  message: string
  dep: string

  constructor(dep: string, status: boolean, message: string) {
    this.dep = dep
    this.status = status
    this.message = message
  }
}

/** A class to run through all of the dependencies in a package.json and echo out if they exist */

export default class Reader {
  path: string
  constructor(path: string) { this.path = path }

  /** Get dependencies from the path */
  async getDeps() : Promise<string[]> {
    return new Promise((resolve: any, reject: any) => {
      readJSON("package.json", console.error, false, (error: Error, data: any) => {
        if (error) {
          console.error(`There was an error reading the file: ${error.message}`)
          reject(error)
          return
        }

        const deps = Object.keys(data.dependencies)
        const devDeps = Object.keys(data.devDependencies)
        resolve([...deps, ...devDeps])
      })
    })
  }

  /** Grab the public webpage for the @type'd version of the npm dep  */
  async checkDefinitelyTyped(dependency: string): Promise<TypeResult> {
    return fetch(`https://www.npmjs.com/package/@types/${dependency}`)
      .then((response: fetch.Response): TypeResult => {
        return new TypeResult(dependency, response.ok, dependency)
      })
  }

  /** Entry point to the commandline API */
  async run(): Promise<bool> {
    let deps = await this.getDeps()
    console.log(`Starting search for ${deps.length} deps.`)

    let successes:TypeResult[] = []
    for (let dep of deps) {
      let typings = await this.checkDefinitelyTyped(dep)
      if (typings.status) {
        console.log(`found Typings for ${dep}`)
        successes.push(typings)
      }
    }

    if (successes) {
      let names = successes.map((result: TypeResult) => { return "@types/" + result.dep })
      console.log("You can install the following types:")
      console.log(`$ npm install ${names.join(" ")} --save --only=dev`)
    } else {
      console.log("Could not find any types")
    }
    return true
  }
}
