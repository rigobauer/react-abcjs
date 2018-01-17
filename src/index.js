import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import abcjsObj from 'abcjs'


class Abcjs extends PureComponent {

  renderAbcNotation(abcNotation, parserParams, engraverParams, renderParams) {
    const res = abcjsObj.renderAbc(
      'abcjs-result',
      abcNotation,
      parserParams,
      engraverParams,
      renderParams
    )
  }

  componentDidMount() {
    const { abcNotation, parserParams, engraverParams, renderParams } = this.props
    this.renderAbcNotation(abcNotation, parserParams, engraverParams, renderParams)
  }

  componentWillReceiveProps(nextProps) {
    const { abcNotation, parserParams, engraverParams, renderParams } = nextProps
    this.renderAbcNotation(abcNotation, parserParams, engraverParams, renderParams)
  }
  
  render() {
    return (
      <div style={{ width: '100%' }} >
        <div id="abcjs-result" style={{ width: '100%' }} />
      </div>
    )
  }

}

Abcjs.propTypes = {
  abcNotation: PropTypes.string,
  parserParams: PropTypes.object,
  engraverParams: PropTypes.object,
  renderParams: PropTypes.object
}

Abcjs.defaultProps = {
  abcNotation: '',
  parserParams: {},
  engraverParams: { responsive: 'resize' },
  renderParams: { viewportHorizontal: true }
}

export default Abcjs