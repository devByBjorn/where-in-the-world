import React from 'react'
import ReactDOM from 'react-dom'
import { render, cleanup } from '@testing-library/react'
import "@testing-library/jest-dom"
import renderer from 'react-test-renderer'
import ToggleTheme from '../../components/ToggleTheme'




afterEach(cleanup)

it('renders without crashing', () => {
  let theme

  const toggle = () =>
    theme === 'light'
      ? theme = 'dark'
      : theme = 'light'

  const div = document.createElement('div')
  ReactDOM.render(
    <ToggleTheme
      theme="light"
      toggle={toggle} />, div)
})
