'use client'
import React from 'react'

const Nav = () => {

    const pageHandler = (p: number) => window.scrollTo({ top: window.innerHeight * p, behavior: "smooth" });

    return (
        <nav className='fixed top-0 grid grid-cols-6 gap-[0.625rem] px-6 pt-8 pb-4 w-full h-16 bg-black z-999'>
            <div>Night Moves</div>
            <button className=' text-white text-center self-center underline underline-offset-[.5rem] cursor-pointer' onClick={() => pageHandler(1)}>Tough to Get Home at Night</button>
            <button className=' text-white text-center self-center underline underline-offset-[.5rem] cursor-pointer' onClick={() => pageHandler(2)}>From Nightlife Hub to Home</button>
            <button className=' text-white text-center self-center underline underline-offset-[.5rem] cursor-pointer' onClick={() => pageHandler(3)}>Night Subway vs Night Taxi </button>
            <button className=' text-white text-center self-center underline underline-offset-[.5rem] cursor-pointer'onClick={() => pageHandler(4)}>Data Analysis</button>
        </nav>
    )
}

export default Nav