import React from 'react'

function ForeCast({data}) {

    const icon = `/weather_icons/${(data.weather)?(data.weather[0].icon):"01d"}.png`
    return (
        <>
        <div className='foreCast'>
            <img className='icon'  src={icon} alt="icon" />
            {data.weather ? <h2>{data.weather[0].description} </h2> : null}
            {data.main ? <h1>{Math.round(data.main.temp)}°C</h1> : null}
            </div>
        </>
    )
}
export default ForeCast
