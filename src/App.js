import React, { useState } from "react";
import "./styles/custom.css";
import "./styles/App.css";
import Api from "./api/api";
import Loading from "./components/loading";
import CityInput from "./components/cityInput";
import ForeCast from "./components/foreCast";
import Description from "./components/description";
import Footer from "./components/footer";

const App = () => {
  const [data, setData] = useState([]);
  const [location, setLocation] = useState("tel aviv");
  return (
    <>
      <div className="app">
        {!data.main && <Loading />}
        <Api setData={setData} location={location} />
        <div className="container">
          <header className="row">
            <CityInput data={data} setLocation={setLocation} />
          </header>
          <main>
            <ForeCast data={data} />
            <Description data={data} />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
};
export default App;
