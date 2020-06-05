import React, { useState, useEffect } from 'react'
import {
  FlexForm,
  FormInput,
  FormSelect,
  FormSelectContainer,
  FormOptionItem,
  FormOptionsWrap,
} from './filtersFormStyled'
import IconFA from './IconFA'
import { arrowDown } from '../icons/iconsLib'

//TODO 
// Fix duplicate CSS 
// Search icon in placeholder for search input

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

