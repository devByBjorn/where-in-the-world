import React from 'react'
import MoreInfo from './MoreInfo'

const MoreInfoPage = ({ match }) => (
  <MoreInfo
    currentCountry={match.params.name}
  />
)

export default MoreInfoPage