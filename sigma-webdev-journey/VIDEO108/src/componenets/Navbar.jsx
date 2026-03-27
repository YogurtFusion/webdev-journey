import React, { useEffect } from 'react'

function Navbar({ color,  }) {
    // everythime runs when page renders 

    useEffect(() => {
        alert("I'll run every time anyting renders")
    })

    useEffect(() => {
        alert("color was changed")
    }, [color])

    useEffect(() => {
        alert("Heyy welcome to our website ")
    }, [])


    useEffect(() => {
        alert(" I'll run at  every first render")
    }, [])

    useEffect(() => {
        alert("I'm a expample of unomunting")

        return () => {
            alert("ok unmounting sucessful ")
        }

    }, [])


    return (
        <div>
            I'm a nav bar of color {color} boom!!!..
        </div>
    )
}

export default Navbar
