import React from 'react'

const TextField = ({ label, ...props }) => {
  console.log(props)
  return (
    <>
      <label>{label}</label>
      <br />
      <input
        name={props.name}
        value={props.value}
        onChange={e =>
          props.onChange({ name: e.target.name, value: e.target.value })
        }
      />
      <br />
    </>
  )
}

export default TextField
