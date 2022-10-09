import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
    function handleResponse(response) {
        console.log(response.data);
    }

    let apiKey = "59ee4591990d1ea0e068edfbc69866c6";
    let longitude = props.coordinate.longitude;
    let latitude = props.coordinate.lat;
    let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);

    return (
        <div className="WeatherForecast">
            <div className="row">
                <div className="col">
                    <div className="forecast-day">Thu</div> 
                    <WeatherIcon code="01d" size={36}/> 
                    <div className="forecast-temps">
                        <span className="maxTemp">19°</span>
                        <span className="minTemp">10°</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
