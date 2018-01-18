# react-abcjs

[![Travis][build-badge]][build]
[![Coveralls][coveralls-badge]][coveralls]
[![Commitizen friendly][commitizen-badge]][commitizen]
[![npm package][npm-badge]][npm]
[![npm downloads][npm-downloads-badge]][npm-downloads]
[![License][license-badge]][license]

A React component that uses the awesome [abc2js](https://github.com/paulrosen/abcjs) to render music notation written using the [ABC notation](http://abcnotation.com).

### Usage

```js
<Abcjs
  abcNotation={'X:1\nT:Example\nM:4/4\nC:Trad.\nK:G\n|:Gccc dedB|dedB dedB|c2ec B2dB|c2A2 A2BA|'}
  parserParams={{}}
  engraverParams={{ responsive: 'resize' }}
  renderParams={{ viewportHorizontal: true }}
/>
```

[build-badge]: https://img.shields.io/travis/rigobauer/react-abcjs/master.svg?style=flat-square
[build]: https://travis-ci.org/rigobauer/react-abcjs

[coveralls-badge]: https://img.shields.io/coveralls/rigobauer/react-abcjs/master.svg?style=flat-square
[coveralls]: https://coveralls.io/github/rigobauer/react-abcjs

[commitizen-badge]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square
[commitizen]: http://commitizen.github.io/cz-cli/

[npm-badge]: https://img.shields.io/npm/v/react-abcjs.svg?style=flat-square
[npm]: https://www.npmjs.org/package/react-abcjs

[npm-downloads-badge]: https://img.shields.io/npm/dm/react-abcjs.svg?style=flat-square
[npm-downloads]: https://npm-stat.com/charts.html?package=react-abcjs

[license-badge]: https://img.shields.io/npm/l/react-abcjs.svg?style=flat-square
[license]: https://opensource.org/licenses/MIT