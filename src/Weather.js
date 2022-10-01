import React from "react";
import "./Weather.css";

export default function Weather() {
    return (
        <div className="Weather">
            <form>
                <div className="row">
                    <div className="col-9"> 
                        <input type="search" placeholder="Enter a city.." classNamer="form-control" />
                    </div>
                    <div className="col-3">
                        <input type="submit" value="Search" className="btn btn-primary" />
                    </div>
                </div>
            </form>
            <h1>New York</h1>
            <ul>
                <li>Saturday 05:43</li>
                <li>Cloudy</li>
            </ul>
            <div className="row">
                <div className="col-6">
                    <img src="https://ssl.gstatic.com/onebox/weather/48/rain_light.png" alt="Cloudy" />
                6°C
                </div>
                <div className="col-6">
                    <ul>
                        <li>
                            Precipitation: 15%
                        </li>
                        <li>
                            Humidity: 80%
                        </li>
                        <li>
                            Wind: 5 km/h
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}