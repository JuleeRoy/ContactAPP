


import React from 'react'
import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { v4 as uuidv4 } from 'uuid';
import Button from "./element/Button"
import TextField from "./element/TextFeild"
import { addUser } from "./users/UserSlice"

const Contact = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [values, setValues] = useState({
      name: '',
      lastname: ''
    });
  
    const handleAddUser = () => {
      setValues({ name: '', lastname: '' });
      dispatch(addUser({
        id: uuidv4(),
        name: values.name,
        lastname: values.lastname
      }));
      navigate('/');
    }
  return (
    <div className='flex-initial w-[75%] p-4 rounded-lg border border-slate'>
    <div className="mt-10 max-w-xl mx-auto">
    <TextField
      label="Name"
      value={values.name}
      onChange={(e) => setValues({ ...values, name: e.target.value })}
      inputProps={{ type: 'text', placeholder: 'Jhon ' }}
    />
    <br />
    <TextField
      label="Lastname"
      value={values.lastname}
      onChange={(e) => setValues({ ...values, lastname: e.target.value })}
      inputProps={{ type: 'lastname', placeholder: 'Doe' }}
    />
    <Button onClick={handleAddUser}>Submit</Button>
  </div>
  </div>
  )
}

export default Contact