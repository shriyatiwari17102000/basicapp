import React, { useState } from 'react'
import Todo from './Todo'

const Project = () => {
    const [submit, setSubmit]= useState({
        username: "",
        email: "",
        password: "",
        phone: ""
    })
    const[records, setRecords] = useState([])

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name, value);

        setSubmit({...submit, [name] : value})

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newRecord = {...submit, id: new Date().getTime().toString()}
        setRecords([...records, newRecord]);
        console.log(records)

        setSubmit( {username:"", email:"", password:"", phone:""})
    }
    return (
        <>
            <h1>Form</h1>
            <form className='form' onSubmit={handleSubmit}>

                <div className='innerDiv'>
                    <label htmlFor="username">Username</label>
                    <input type="text" autoComplete="off"  name='username' id='username' value={submit.username} onChange={handleInput} placeholder='write your name here' />
                    <label htmlFor="email">Email</label>
                    <input type="text" autoComplete="off" name='email' id='email' value={submit.email} onChange={handleInput} placeholder='write your email here' />
                    <label htmlFor="password">Passward</label>
                    <input type="password" autoComplete="off" name='password' id='password' value={submit.password} onChange={handleInput} placeholder='write your passward here' />
                    <label htmlFor="phone">Phone Number</label>
                    <input type="number" autoComplete="off" name='phone' id='phone' value={submit.phone} onChange={handleInput} placeholder='write your phone number here' />
                <button className='btn' type="submit">Submit</button>
                </div>
            </form>
            <div className='submitlist'>
                {
                    records.map((curElem) => {
                        return (
                            <div className='inputList'>
                               <div>{`${curElem.username} ${curElem.email}   ${curElem.password}  ${curElem.phone}`}</div>
                                
                            </div>
                        )
                    })
                }
            </div>
            <Todo/>
        </>
    )
}

export default Project
