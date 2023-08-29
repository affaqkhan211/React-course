import React from 'react'

const Students = ({student}) => {
    console.log(student);
  return (
    <>
        <h1>Student Name = {student.name}</h1>
        <h3>Student Id  = {student.id}</h3>
        <p>Student Marks = {student.marks}</p>
    </>
  )
}

export default Students