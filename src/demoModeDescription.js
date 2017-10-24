const inlineCodeDelimiter = '`'
const codeDelimiter = '```'

const description = `# Tessereact

Presentational snapshot testing for React components.

Tessereact is [Testshot](https://github.com/toptal/testshot) fork which supports CSS snapshots
and screenshot diffs based on resolutions you choose.

![Screenshot](https://github.com/tessereact/tessereact/blob/master/docs/images/failing_scenario.png?raw=true)

[Check usage guide for more screenshots](docs/usage.md).

## Demo & Examples

### Basic example

To build the basic example locally, run:

${codeDelimiter}
yarn install
yarn dev
yarn dev-server
${codeDelimiter}

Then open [${inlineCodeDelimiter}localhost:5001${inlineCodeDelimiter}](http://localhost:5001) in a browser.

### Webpack example

${codeDelimiter}
cd webpack-example
yarn install
yarn start-tessereact
${codeDelimiter}

## Installation

${codeDelimiter}
yarn add -D https://github.com/tessereact/tessereact.git
${codeDelimiter}

See [Webpack integration guide](docs/webpack-integration.md)
or [create-react-app integration guide](docs/create-react-app-integration.md)
for the subsequent installation instructions.

## Basic Usage

For the complete usage guide take a look [here](docs/usage.md).

${codeDelimiter}js
import React from 'react'
import {context, scenario} from 'tessereact'
import Text from '.'

context('Text', () => {
  scenario('Default', () => (
    <Text>Text</Text>
  ))

  scenario('Purple', () => (
    <Text color='purple'>Purple text</Text>
  ), {css: true, screenshot: true})
})
${codeDelimiter}

## CI Support

Tessereact provides built-in CI support. Start Tessereact with enviroment variable ${inlineCodeDelimiter}CI=true${inlineCodeDelimiter}.

${codeDelimiter}
env CI=true yarn start-tessereact
${codeDelimiter}

## Authors

- [Lesha Koss](https://github.com/LeshaKoss)
- [Eduard Tsech](https://github.com/edtsech)

## Contributors

[Tessereact contributors](https://github.com/tessereact/tessereact/graphs/contributors)

Special thanks to Testshot contributors:
  - [Aleksandar Djuric](https://dribbble.com/mnmalt)
  - [Nadya Tsech](https://twitter.com/n_tsech)
  - [Sasha Koss](https://github.com/kossnocorp)
`

export default description