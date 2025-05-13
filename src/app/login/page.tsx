"use client";

import React from 'react';
import Link from 'next/link';
// import {userRouter} from "next/navigation";
import { useRouter } from 'next/navigation';
import {axios} from "axios";
import { sign } from 'crypto';


export default function LoginPage() {

    const [user , setUser] = React.useState({  password: '' , email: '' });

    const onLogin = async ()=>{

    }


  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1>Login</h1>
      <form>

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
        onClick={onLogin}
        type="button" className='bg-blue-500 text-white px-4 py-2 rounded'>Login here</button>
        <br />
        <Link href="/signup" className='text-blue-500'>New User</Link>
        
      </form>
    </div>
  );
}