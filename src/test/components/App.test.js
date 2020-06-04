import React from "react"
import ReactDOM from "react-dom"
import { shallow } from 'enzyme'
import App from '../../components/App'

test('should render App component', () => {
  const wrapper = shallow(<App />)
  expect(wrapper).toMatchSnapshot()
})

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
})
