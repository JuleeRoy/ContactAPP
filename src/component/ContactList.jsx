import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "./users/UserSlice";
const ContactList = () => {
   
    

const dispatch = useDispatch();
  const users = useSelector(store => store.users);

  const handleRemoveUser = (id) => {
    dispatch(deleteUser({ id }));
  }


const renderCard = () => {
    return (
      <>
        {users.map((user) => (
          <div className="bg-gray-300 flex items-center justify-between mt-5 p-5 h-20" key={user.id}>
          <div>
            <h4 className="font-bold text-lg text-gray-700">{user.name}</h4>
            <span className="font-normal text-gray-600">{user.lastname}</span>
          </div>
          <div className="flex gap-4">
        <Link to={`edit-user/${user.id}`}>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="rgb(42, 153, 42)" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
          </button>
        </Link>
        <button
          onClick={() => handleRemoveUser(user.id)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="rgb(202, 48, 48)" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
      </div>
        </div>
        ))}
      </>
    );
  };

  return (
    <div className='flex-initial w-[75%] p-4 rounded-lg border border-slate'>
    <Link className="bg-indigo-600 text-white py-2 px-6 my-10 mx-auto rounded hover:bg-indigo-700"
     to="/contact">Add User</Link>
    <div className="">
      {users.length > 0 ? renderCard() : 
      <p className="text-center col-span-2 text-gray-700 font-semibold">No User</p>}
    </div>
  </div>
  )
}

export default ContactList