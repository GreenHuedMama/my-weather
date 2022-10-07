import React, { useState } from "react";
import GoodDate from "./GoodDate";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ready: false});
    function handleResponse(response) {
        setWeatherData({
            ready: true,
            temp: response.data.main.temp, 
            humidity: response.data.main.humidity,
            date: new Date(response.data.dt * 1000),
            description: response.data.weather[0].description,
            iconUrl: "https://ssl.gstatic.com/onebox/weather/48/rain_light.png",
            wind: response.data.wind.speed,
            city: response.data.name
        });
    }

    if (weatherData.ready) {
        return (
            <div className="Weather">
                <form>
                    <div className="row">
                        <div className="col-9"> 
                            <input type="search" placeholder="Enter a city.." className="form-control" autoFocus="on" />
                        </div>
                        <div className="col-3">
                            <input type="submit" value="Search" className="btn btn-primary w-100" />
                        </div>
                    </div>
                </form>
                <h1>{weatherData.city}</h1>
                <ul>
                    <li><GoodDate date={weatherData.date} /></li>
                    <li className="text-capitalize">{weatherData.description}</li>
                </ul>
                <div className="row mt-3">
                    <div className="col-6">
                        <div className="clearfix"> 
                            <img src={weatherData.iconUrl} alt={weatherData.description} className="float-left" />
                            <div className="float-left">
                                <span className="temperature">{Math.round(weatherData.temp)}</span>
                                <span className="unit">°C</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <ul>
                            <li>
                                Precipitation: 15%
                            </li>
                            <li>
                                Humidity: {weatherData.humidity}%
                            </li>
                            <li>
                                Wind: {weatherData.wind} km/h
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    } else {
        const apiKey = "59ee4591990d1ea0e068edfbc69866c6";
            let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
            axios.get(apiUrl).then(handleResponse);
            
            return "Loading..."
    }

    
}