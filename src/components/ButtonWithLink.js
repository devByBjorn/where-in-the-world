import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
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

const LinkStyled = styled(Link).attrs(props => ({
  padding: props.padding || '1rem',
}))`
  color: ${({ theme }) => theme.text};
  display: block;
  padding: ${props => props.padding};
  text-decoration: none;
  width: 100%;
`

const DivAsButton = styled.div.attrs(props => ({
  borderRadius: props.borderRadius || '2px',
  margin: props.margin || '5px',
  width: props.width || 'auto',
}))`
  background: ${({ theme }) => theme.elementBg};
  border-radius: ${props => props.borderRadius};
  -moz-box-shadow: ${({ theme }) => theme.boxShadow};
  -webkit-box-shadow: ${({ theme }) => theme.boxShadow};
  box-shadow: ${({ theme }) => theme.boxShadow};
  display: inline-block;
  margin: ${props => props.margin};
  text-align: center;
  transition: all .2s ease;
  width: ${props => props.width};

  &:hover {
    cursor: pointer;
    background: ${({ theme }) => theme.colors.standOut};
  }

  &:span {
    padding-left: 5rem;
  }
`

