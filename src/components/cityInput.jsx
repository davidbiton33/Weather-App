import React, { useState } from "react";

const CityInput = ({data,setLocation}) => {

  const [getloc, setGetloc] = useState("")
  const date = new Date();
  return (

    <div className="col-12">
      <input
        onChange={(e) => {
          setGetloc(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.keyCode === 13) {
            setLocation(getloc)
          }
        }}
        type="text"
        placeholder="Search location"
      />
      <p className="d-none" id="alert"></p>
      
      <div className="city">
        
        <h3>{data.name}  <i>/ {data.sys ? data.sys.country : null}</i></h3>
      </div>
      <p> {date.toDateString()} </p>

    </div>
  )

}
export default CityInput;