import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import "jest-enzyme"
import dotenv from 'dotenv'
import '@babel/polyfill'

Enzyme.configure({
  adapter: new Adapter()
})

dotenv.config({
  path: '.env.test'
})
