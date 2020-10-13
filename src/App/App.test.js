import React from 'react'
import App from './App'
import { shallow } from 'enzyme'

describe('<App />', () => {
  it('renders <App /> component correctly', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App')).toHaveLength(1)
  });
});
