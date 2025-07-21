import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useForm } from 'react-hook-form'


function App() {

  let { register, handleSubmit, reset } = useForm();
  let [value, setValue] = useState({});

  function submitHandler(data) {
    console.log(data);
    reset();
    setValue(data);
  }

  return (
    <>
      <div className="mx-auto w-full h-[350px] border p-5 mt-50">
        <form action="" className='flex gap-10' onSubmit={handleSubmit(submitHandler)}>
          <input type="text" {...register('username')} placeholder='Enter the Name' className='border p-3 rounded' />
          <input type="email" {...register('email')} placeholder='Enter the Email' className='border p-3 rounded' />
          <input {...register("age")} placeholder="Age" type="number" />
          <br /><br />

          <select {...register("gender")}>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <br /><br />

          <label>
            <input type="checkbox" {...register("subscribe")} />
            Subscribe to newsletter
          </label>
          <br /><br />
          <button className='bg-black px-4  text-white py-2 rounded cursor-pointer '>Submit</button>
        </form>
        <div className='mt-10' >
          <h3 className='text-2xl'>Submitted Data:</h3>
          <p>Username: {value.username || " "}</p>
          <p>Email: {value.email || " "}</p>
           <p>Age: {value.age || " "}</p>
            <p>gender: {value.gender || " "}</p>
             <p>subscribe: {value.subscribe || " "}</p>
        </div>
      </div>
    </>
  )
}

export default App
