import React, { useState } from 'react'

const Form = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitForm = () => {
        console.log(firstName, lastName, email, password);
    }

  return (
    <form action="" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="">Enter Your First Name</label> <br />
        <input type="text" value = {firstName} onChange={(e) => setFirstName(e.target.value)}/> <br />

        <label htmlFor="">Enter Your Last Name</label> <br />
        <input type="text" value = {lastName} onChange={(e) => setLastName(e.target.value)} /> <br />

        <label htmlFor="">Enter Your email</label> <br />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/> <br />

        <label htmlFor="">Enter Your Password</label> <br />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /> <br />

        <button onClick={submitForm}>Submit Form</button>
    </form>
  )
}

export default Form