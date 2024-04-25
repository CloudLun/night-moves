import React from 'react'

const LandingPage = () => {
    return (
        <div className='flex flex-col items-center w-full h-full'>
            <div className='flex-1 flex flex-col justify-center items-center max-w-[31rem] h-full'>
                <title></title>
                <div className='my-8 text-center'>
                    <p>Navigating Post-party Mobility Challenges in NYC</p>
                    <p>A DATA VIZ THESIS </p>
                    <p>by</p>
                    <p>HaoChe Hung</p>
                </div>
                <p className='text-[1rem] text-white'>
                    Navigating New York City after dark presents a challenge, especially for the city&apos;s vibrant youth who revel in its nightlife. As nightlife hotspots and affordable residential areas diverge from the city center, relying on central public transit like the subway becomes impractical. Nighttime taxi rides emerge as the primary alternative for post-party journeys.
                    This thesis proposes a navigational board to analyze night taxi ridership, mapping routes from nightlife clusters to young residential areas. By assessing demand, cost, and time, this tool aids the NYC Office of Nightlife in prioritizing transit improvements. It empowers the younger generation to navigate nocturnal limitations, easing nighttime mobility struggles in the city.
                </p>
            </div>
        </div>
    )
}

export default LandingPage