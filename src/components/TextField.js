import React from 'react'

const TextField = ({ label, ...props }) => {
  console.log(props)
  return (
    <>
      <label>{label}</label>
      <br />
      <input
        name={props.name}
        onChange={e =>
          props.onChange({ name: e.target.name, value: e.target.value })
        }
      />
      <br />
    </>
  )
}

export default TextField
