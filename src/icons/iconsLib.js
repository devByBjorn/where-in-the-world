
import { library, icon } from '@fortawesome/fontawesome-svg-core'
import {
  faSun,
  faMoon,
  faArrowAltCircleUp,
  faArrowAltCircleDown,
  faArrowAltCircleLeft,
  faShareSquare,
  faCaretSquareUp,
} from '@fortawesome/free-regular-svg-icons'

library.add(faSun, faMoon, faCaretSquareUp, faArrowAltCircleUp, faArrowAltCircleDown, faArrowAltCircleLeft, faShareSquare)

const sun = icon(faSun)
const moon = icon(faMoon)
const caretUp = icon(faCaretSquareUp)
const arrowUp = icon(faArrowAltCircleUp)
const arrowDown = icon(faArrowAltCircleDown)
const arrowLeft = icon(faArrowAltCircleLeft)
const search = icon(faShareSquare)

export { sun, moon, arrowDown, search, arrowLeft, arrowUp, caretUp }