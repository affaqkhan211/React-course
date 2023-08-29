import React, { useState } from 'react'

const State = () => {

    const [colors, setColors] = useState("red");

    const changeToBlue = () => {
        setColors("Blue")
    }

    const changeToBlack = () => {
        setColors("Black")
    }

    const changeToWhite = () => {
        setColors("White")
    }

    const changeToYellow = () => {
        setColors("Yellow")
    }
  return (
    <>
        <h1>My favt Color is {colors}</h1>
        <button onClick={changeToBlue}>Blue</button>
        <button onClick={changeToBlack}>Black</button>
        <button onClick={changeToWhite}>White</button>
        <button onClick={changeToYellow}>Yellow</button>
    </>
  )
}

export default State