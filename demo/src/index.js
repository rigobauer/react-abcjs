import React, { Component } from 'react'
import { render } from 'react-dom'

import Abcjs from '../../src'

class Demo extends Component {
  state = {
    abcNotation: 'X:1\nT:Test\nM:4/4\nC:Trad.\nK:G\n|:GABc dedB',
    parserParams: {},
    engraverParams: { responsive: 'resize' },
    renderParams: { viewportHorizontal: true }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        abcNotation:
          'X:1\nT:Test\nM:4/4\nC:Trad.\nK:G\n|:GcAB dedB|dedB dedB|c2ec B2dB|c2A2 A2BA|'
      })
    }, 5000)
  }

  render() {
    const {
      abcNotation,
      parserParams,
      engraverParams,
      renderParams
    } = this.state

    return (
      <div style={{ border: '1px solid black', padding: '100px' }}>
        <Abcjs
          abcNotation={abcNotation}
          parserParams={parserParams}
          engraverParams={engraverParams}
          renderParams={renderParams}
        />
      </div>
    )
  }
}

render(<Demo />, document.querySelector('#demo'))
