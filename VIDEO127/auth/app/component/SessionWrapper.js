"use client"
import { SessionProvider } from "next-auth/react";
import { Children } from "react";
 const SessionWrapper = ({children})=>{
    return (
        <SessionProvider>{children} </SessionProvider>
    )
}

export default SessionWrapper;