import React from 'react'
import { shallow, mount, render } from 'enzyme'
import { expect } from 'chai'
import sinon from 'sinon'

import Abcjs from 'src/'

describe('Abcjs', () => {

  it('shallow renders <Abcjs /> with default parameters', () => {
    const wrapper = shallow(<Abcjs />)
    const id = wrapper.find('div').at(1).prop('id')
    expect(wrapper.html())
      .to.equal(`<div style="width:100%"><div id="${id}" style="width:100%"></div></div>`)
  })

  it('mounts <Abcjs /> with a simple abcNotation', () => {
    sinon.spy(Abcjs.prototype, 'render')
    sinon.spy(Abcjs.prototype, 'componentDidMount')
    sinon.spy(Abcjs.prototype, 'componentWillReceiveProps')
    const wrapper = mount(<Abcjs abcNotation={'X:1\nT:Test\nM:4/4\nK:G\nAggg'} />)
    expect(Abcjs.prototype.render.calledOnce)
      .to.equal(true)
    expect(Abcjs.prototype.componentDidMount.calledOnce)
      .to.equal(true)
    wrapper.setProps({ renderParams: { viewportHorizontal: true } })
    expect(Abcjs.prototype.componentWillReceiveProps.calledOnce)
      .to.equal(true)
  })

})
