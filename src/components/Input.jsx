import React from 'react'

const Input = ({label, value, onChange, pattern, ...rest}) => {

    const handleOnChange = e => {
        onChange(e.target.value);
    }

  return (
      <div>
          <label>{label}</label>
        <input value={value} onChange={handleOnChange} {...rest} />
      </div>
  )
}

export default Input