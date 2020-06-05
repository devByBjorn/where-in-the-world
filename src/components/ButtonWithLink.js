import React, { Fragment } from 'react'
import { DivAsButton, LinkStyled } from './ButtonWithLinksStyled'
import IconFA from './IconFA'

const ButtonWithLink = ({
  borderRadius,
  margin,
  padding,
  paddingText,
  width,
  linkText,
  to,
  icon,
}) => {
  return (
    <DivAsButton
      borderRadius={borderRadius}
      margin={margin}
      padding={padding}
      width={width}
    >
      <LinkStyled
        padding={padding}
        to={to}
      >{icon ?
        <Fragment>
          <IconFA icon={icon} />
          <span style={{ padding: paddingText }}> {linkText}</span>
        </Fragment>
        : linkText}</LinkStyled>
    </DivAsButton>
  )
}

export default ButtonWithLink



