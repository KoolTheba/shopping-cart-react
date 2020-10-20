import React from 'react'
import App from './index'
import { shallow } from 'enzyme'

describe('App component', () => {
  it('renders <App /> component correctly', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App')).toHaveLength(1)
    expect(wrapper).toMatchSnapshot()
  });
});
