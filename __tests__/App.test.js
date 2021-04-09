import React from 'react'
import { mount } from 'enzyme'
import App from '../App/App'

test('App renders correctly', () => {
  const wrapper = mount(<App />)

  expect(wrapper).toMatchSnapshot()
})