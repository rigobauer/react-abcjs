module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'ReactAbcjs',
      externals: {
        react: 'React'
      }
    }
  },
  karma: {
    testContext: 'tests.webpack.js'
  }
}
