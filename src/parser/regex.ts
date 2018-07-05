import { getMatches } from './util'

const tokeniser = /export (default|class|interface|let|var|const|enum|type|function)[ \n]+([^=\n\t (]+)/g

const regexTokeniser = (file: string) => {
  const matches = getMatches(file, tokeniser)
  const imports = matches.map(([_, type, name]) => ({ type, name }))
  console.log(imports)
}

export default regexTokeniser
