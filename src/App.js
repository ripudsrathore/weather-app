
import './App.css';
import SearchField from "react-search-field";
import FeatherIcon from 'feather-icons-react';
import axios from "axios";
import { useEffect, useState } from 'react';

function App() {

  const [city,setcity] = useState('');
  const [temp,settemp] = useState(0);
  const [Humidity,sethumidity] = useState(0);
  const [search,setsearch] = useState('jaipur');
  const [pressure,setpressure] = useState(0);
  const [wind,setwind] = useState(0);
  
  useEffect(()=>{
    console.log("I am inside useEffect");
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=c593f6fa856f4ced6e2e008b42b2cd18`).then((res)=>{
 console.log("res",res);



 settemp(res.data.main.temp);
          setpressure(res.data.main.pressure);
           sethumidity(res.data.main.humidity);
         setwind(res.data.wind.speed);
        setcity(res.data.name);

    })
  },[search]);

  return (
    
    <div className="weather-info-box">
        <div className="weather-header">
           <h1>Weather App</h1>
        </div>
        <div className="weather-search">
                  <SearchField
                    placeholder="Search..."
                  onSearchClick	={(value)=>{
                    setsearch(value);
                  }}
                   searchText={search}
                  classNames="weather-input"
                 />
        </div>
            <div className="cloud-icon">
          <FeatherIcon icon="cloud-rain" color="midnightblue" size="60"/>
        </div>

        <div className="weather-city">
          <h1> {city} </h1>
              </div>
        <div class="weather-row">
            <div class="weather-column">
               <FeatherIcon icon="sun" color="midnightblue"/>
                <p>Temp: {(temp - 273.15).toFixed(2)} "C</p>
                     </div>
            <div class="weather-column">
              <FeatherIcon icon="command" color="midnightblue"/>
                <p>Pressure: {pressure}</p>
          </div>
        </div>
      <div class="weather-row">
           <div class="weather-column">
          <FeatherIcon icon="cloud" color="midnightblue"/>
            <p>Humidity: {Humidity}</p>
         </div>
        <div class="weather-column">
            <FeatherIcon icon="wind" color="midnightblue"/>
          <p>Wind: {wind}</p>
      </div>
        </div>
    </div>
  );
}

export default App;
