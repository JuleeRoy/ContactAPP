import React  ,{useState}from 'react'
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import Button from "./element/Button"
import TextField from "./element/TextFeild"
import { editUser } from "./users/UserSlice"


const EditContact = () => {
    const params = useParams();
  const dispatch = useDispatch();
  const users = useSelector(store => store.users);
  const navigate = useNavigate();
  const existingUser = users.filter(user => user.id === params.id);
  const { name, lastname } = existingUser[0];
  const [values, setValues] = useState({
    name,
    lastname
  });
  const handleEditUser = () => {
    setValues({ name: '', lastname: '' });
    dispatch(editUser({
      id: params.id,
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
      inputProps={{ type: 'text', placeholder: 'Jhon Doe' }}
    />
    <br />
    <TextField
      label="lastname"
      value={values.lastname}
      onChange={(e) => setValues({ ...values, lastname: e.target.value })}
      inputProps={{ type: 'lastname', placeholder: 'jhondoe@mail.com' }}
    />
    <Button onClick={handleEditUser}>Edit</Button>
  </div>
  </div>
  )
}

export default EditContact