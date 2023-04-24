import axios from 'axios';
import { useEffect } from 'react';
const Api = ({ setData, location }) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=5e2a6dff2f070b7cc434af93e5e4d950`;
    
    useEffect(() => {
        axios
            .get(url)
            .then((res) => {
                setData(res.data);
                console.log(res.data);
            })
            .then(() => {
                document.getElementById("alert").style.display = "none"

            })

            .catch((Error) => {
                console.log(Error);
                document.getElementById("alert").style.display = "block"
                document.getElementById("alert").innerHTML =
                    "ERORE! There is no such city in the database or maybe something wrong, please try again!";
            })
    }, [location, url])
}

export default Api;