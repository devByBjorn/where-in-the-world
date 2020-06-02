
import { library, icon } from '@fortawesome/fontawesome-svg-core'
import { faSun, faMoon, faArrowAltCircleDown, faShareSquare, } from '@fortawesome/free-regular-svg-icons'

library.add(faSun, faMoon)

const sun = icon(faSun)
const moon = icon(faMoon)
const arrowDown = icon(faArrowAltCircleDown)
const search = icon(faShareSquare)

export { sun, moon, arrowDown, search }