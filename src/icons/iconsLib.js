
import { library, icon } from '@fortawesome/fontawesome-svg-core'
import { faSun, faMoon } from '@fortawesome/free-regular-svg-icons'

library.add(faSun, faMoon)

const sun = icon(faSun)
const moon = icon(faMoon)

export { sun, moon }