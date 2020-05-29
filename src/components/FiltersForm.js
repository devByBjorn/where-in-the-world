import React from 'react'


const FiltersForm = ({ onChangeInput, onChangeSelect }) => {
  const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania', 'World']

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        placeholder="Search..."
        onChange={onChangeInput} />

      <select
        name="region"
        onChange={onChangeSelect}
      >
        <option value="World" defaultValue>Filter by region</option>
        {regions.map((region) => (
          <option
            key={region}
            value={region}
          >{region}</option>
        ))}
      </select>
    </form>
  )
}

export default FiltersForm
