"use client"
import React from 'react'
import { useParams } from 'next/navigation'

const page = () => {
    const params = useParams()
  return (
    <div> <div className="">this is use params bitch and this is params 👉 {params.slug} </div>blogpage
        
    </div>
  )
}

export default page