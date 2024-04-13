"use client"
import React from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'

const AppBar = () => {
    const session = useSession();
  return (
    <div>
        <button onClick={()=>signIn()}>
            Signin
        </button>
        <button onClick={()=>signOut()}>
            Signout
        </button>
        {JSON.stringify(session)};
    </div>
  )
}

export default AppBar