import React, { useState } from 'react';
import { toast, Bounce, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  const [firstName, setFirstName] = useState('')
  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [error, seterror] = useState()

  const submitHandler=(elem)=>{
    elem.preventDefault()

    if(Password.length<8){
      seterror("Password must be 8 characters long")
    return;
    }

    if(!/[/!@#$%^&*]/.test(Password)){
      seterror("Password Must Containes a Special Character")
      return;
    }

    if(Password!==confirm){
      seterror("Password and Confirm Password Must be Same")
      return;
    }

    toast.success('Login Successful!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
    
    setFirstName('')
    setConfirm('')
    setEmail('')
    setPassword('')
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-white px-4">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-md p-8">
        <form
          onSubmit={(elem) => submitHandler(elem)}
          className="flex flex-col gap-5"
        >
          <h2 className="text-2xl font-semibold text-gray-700 text-center">Login Page</h2>

          <input
            className="w-full border border-gray-300 px-4 py-2 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            type="text"
            autoComplete='off'
            required
            placeholder="Please Enter Your Name"
            value={firstName}
            onChange={(elem) => setFirstName(elem.target.value)}
          />

          <input
            className="w-full border border-gray-300 px-4 py-2 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            autoComplete='off'
            type="email"
            required
            placeholder="Please Enter Your Email"
            value={Email}
            onChange={(elem) => setEmail(elem.target.value)}
          />

          <input
            className="w-full border border-gray-300 px-4 py-2 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            autoComplete='off'
            type="password"
            required
            placeholder="Please Enter Your Password"
            value={Password}
            onChange={(elem) => setPassword(elem.target.value)}
          />

          <input
            className="w-full border border-gray-300 px-4 py-2 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            autoComplete='off'
            type="password"
            required
            placeholder="Please Confirm Your Password"
            value={confirm}
            onChange={(elem) => setConfirm(elem.target.value)}
          />

          {error && (
            <p className="bg-red-100 text-red-700 text-sm px-4 py-2 rounded-md text-center">
              {error}
            </p>
          )}

          <input
            className="w-full bg-indigo-600 hover:bg-indigo-700 transition text-white font-medium py-2 rounded-md cursor-pointer"
            type="submit"
            value="Submit"
          />

          <p className="text-xs text-gray-500 text-center">
            Terms & Conditions Apply
          </p>
        </form>
      </div>
        <ToastContainer>
          
        </ToastContainer>
    </div>
  );
}

export default App;

