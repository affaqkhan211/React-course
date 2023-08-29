import React from 'react'

const Car = (props) => {
    console.log(props.name);
  return (
    <>
        <h1>My Car name is {props.name}</h1>
    </>
  )
}

export default Car