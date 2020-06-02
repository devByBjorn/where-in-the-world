import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import IconFA from './IconFA'
import { arrowDown } from '../icons/iconsLib'

//TODO 
// Make duplicate CSS below to className?
// Serach icon in placeholder for search input

const FlexForm = styled.form`
  display: flex;
  justify-content: space-between;
  margin: 5rem 0;
  padding-top: ${({ theme }) => theme.padding.standardPadding};
  width: 100%;

  @media (max-width: 720px) {
    flex-direction: column;
  }
`

const FormInput = styled.input`
  -moz-box-shadow: ${({ theme }) => theme.boxShadow};
  -webkit-box-shadow: ${({ theme }) => theme.boxShadow};
  box-shadow: ${({ theme }) => theme.boxShadow};
  background: ${({ theme }) => theme.elementBg};
  border: transparent;
  border-radius: 2px;
  color: ${({ theme }) => theme.text};
  max-width: 90vw;
  padding: ${({ theme }) => theme.padding.largePadding};
  -webkit-text-fill-color: ${({ theme }) => theme.text};
  opacity: 1;
  width: 50rem;

  &:focus {
    color: ${({ theme }) => theme.text};
    outline: none;
  }
`

const FormSelectContainer = styled.div`
  position:relative;
`
const FormSelect = styled.div`
  -moz-box-shadow: ${({ theme }) => theme.boxShadow};
  -webkit-box-shadow: ${({ theme }) => theme.boxShadow};
  box-shadow: ${({ theme }) => theme.boxShadow};
  background: ${({ theme }) => theme.elementBg};
  border: transparent;
  border-radius: 2px;
  color: ${({ theme }) => theme.text};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.padding.largePadding};
  width: 17rem;

  @media (max-width: 720px) {
    margin-top: 2rem;
  }
`
const FormOptionsWrap = styled.div`
  -moz-box-shadow: ${({ theme }) => theme.boxShadow};
  -webkit-box-shadow: ${({ theme }) => theme.boxShadow};
  box-shadow: ${({ theme }) => theme.boxShadow};
  background: ${({ theme }) => theme.elementBg};
  color: ${({ theme }) => theme.text};
  padding: ${({ theme }) => theme.padding.standardPadding};
  position: absolute;
  left: 0;
  top: 5.5rem;
  width: 17rem;
  z-index: 999;

  &:hover {
    cursor: pointer;
  }
`

const FormOptionItem = styled.span`
  display: block;
  padding: ${({ theme }) => theme.padding.smallPadding};

  &:hover {
    cursor: pointer;
    font-weight: 600;
  }
`

const FiltersForm = ({ onChangeInput, onChangeSelect }) => {
  const [options, setOptions] = useState('none')

  const regions = [
    'Africa', 'Americas', 'Asia',
    'Europe', 'Oceania', 'World'
  ]

  const displayOptions = () =>
    options === 'none'
      ? setOptions('block')
      : setOptions('none')

  return (
    <FlexForm onSubmit={(e) => e.preventDefault()}>
      <FormInput
        type="text"
        placeholder="Search for a country"
        onChange={onChangeInput} />
      <FormSelectContainer>
        <FormSelect
          onClick={displayOptions}
          name="region"
        > Filter by regions <IconFA icon={arrowDown} />
        </FormSelect>

        <FormOptionsWrap style={{ display: options }}>
          {regions.map((region) => (
            <FormOptionItem
              value={region}
              onClick={onChangeSelect}
              key={region}
            >{region}</FormOptionItem>
          ))}
        </FormOptionsWrap>
      </FormSelectContainer>
    </FlexForm>
  )
}

export default FiltersForm
