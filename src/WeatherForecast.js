import React, { useState, useEffect } from "react";
import "./WeatherForecast.css"; 
import axios from "axios";
import WeatherCastDay from "./WeatherCastDay";

export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    useEffect(() => {
       setLoaded(false);
    }, [props.coordinate]);
        
    function handleResponse(response) {
        setForecast(response.data.daily);
        setLoaded(true);
    }

    if (loaded) {
        return (
            <div className="WeatherForecast">
                <div className="row">
                    {forecast.map(function (dailyForecast, index) {
                        if (index < 5) {
                            return (
                            <div className="col" key={index}>
                                <WeatherCastDay data={dailyForecast} />
                            </div>
                            );
                        }
                    })}
                </div>
            </div>
        );
    } else {
        let apiKey = "91e4be9d3f0ce62462b88df7804804ae";
        let longitude = props.coordinate.longitude;
        let latitude = props.coordinate.lat;
        let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

        axios.get(apiUrl).then(handleResponse);

        return null;
    }
}

    
