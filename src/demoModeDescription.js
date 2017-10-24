const inlineCodeDelimiter = '`'
const codeDelimiter = '```'

const description = `[**Tessereact**](https://github.com/tessereact/tessereact) — presentational snapshot testing for React components.

Tessereact is [Testshot](https://github.com/toptal/testshot) fork which supports CSS snapshots
and screenshot diffs based on resolutions you choose.

## This demo

This is an example project for integration of [Tessereact](https://github.com/tessereact/tessereact)
with [create-react-app](https://github.com/facebookincubator/create-react-app).

Snapshots for this demo are made with the components provided by
[react-bootstrap](https://react-bootstrap.github.io).

See [this document](https://github.com/tessereact/tessereact/blob/master/docs/create-react-app-integration.md)
for instructions how to replicate this demo.
See the source code and run it yourself [here](https://github.com/tessereact/tessereact-demo).

This page uses a special version of Tessereact which has pregenerated CSS and screenshots.
Reload to reset accepted scenarios.

## Installation

${codeDelimiter}
yarn add -D tessereact
${codeDelimiter}

See [Webpack integration guide](https://github.com/tessereact/tessereact/blob/master/docs/webpack-integration.md)
or [create-react-app integration guide](https://github.com/tessereact/tessereact/blob/master/docs/create-react-app-integration.md)
for the subsequent installation instructions.

## Basic Usage

For the complete usage guide take a look [here](https://github.com/tessereact/tessereact/blob/master/docs/usage.md).

${codeDelimiter} js
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
