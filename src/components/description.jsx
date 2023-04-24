import React from 'react'

function Description({data}) {
  return (
    <>
      <div className='description'>
        <div>
          <h4>feel like</h4>
          {data.main ? <p>{Math.round(data.main.feels_like)}°C</p> : null}
          </div>
        <div>
          <h4>wind</h4>
          {data.wind ? <p>{data.wind.speed} MPH</p> : null}
        </div>
        <div>
          <h4>Humidity</h4>
          {data.main ? <p>{data.main.humidity}%</p> : null}
        </div>
      </div>
    </>
  )
}

export default Description