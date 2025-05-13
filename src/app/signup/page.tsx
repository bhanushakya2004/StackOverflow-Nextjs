"use client";

import React from 'react';
import Link from 'next/link';
// import {userRouter} from "next/navigation";
import { useRouter } from 'next/navigation';
import {axios} from "axios";
import { sign } from 'crypto';


export default function SignUpPage() {

    const [user , setUser] = React.useState({ username: '', password: '' , email: '' });

    const onSignup = async ()=>{

    }


  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1>Sign Up</h1>
      <form>
        <label htmlFor='username'>Username:</label>
    
          <input
          id = 'username'
          type="text"
          value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            placeholder='Enter your username'
           />
        
        <br />
        <label htmlFor='email'>Email:</label>
          <input
          id = 'email'
          type="email"
          value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            placeholder='Enter your email'
           />

        <br />
        <label htmlFor='password'>Password:</label>
          <input
          id = 'password'
          type="password"
          value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            placeholder='Enter your password'
           />
        <br />
        <button 
        onClick={onSignup}
        type="button" className='bg-blue-500 text-white px-4 py-2 rounded'>Sign Up</button>
        <br />
        <Link href="/login" className='text-blue-500'>Already have an account? Log in</Link>
        
      </form>
    </div>
  );
}