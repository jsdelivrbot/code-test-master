import React from 'react'
import expect from 'expect'
import { shallow, mount } from 'enzyme'
import Search-Bar from '../components/search-bar'
const wrapper = shallow(<Search-Bar />)
describe('Search-Bar Component', () => {
  it('renders input', () => {
    expect(wrapper.find('input').value()).toEqual('Search')
  })
})
