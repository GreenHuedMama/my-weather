import React from "react";
import GoodDate from "./GoodDate";

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
            <h1>{props.info.city}</h1>
                <ul>
                    <li><GoodDate date={props.info.date} /></li>
                    <li className="text-capitalize">{props.info.description}</li>
                </ul>
                <div className="row mt-3">
                    <div className="col-6">
                        <div className="clearfix"> 
                            <img src={props.info.iconUrl} alt={props.info.description} className="float-left" />
                            <div className="float-left">
                                <span className="temperature">{Math.round(props.info.temp)}</span>
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
                            Humidity: {props.info.humidity}%
                        </li>
                        <li>
                            Wind: {props.info.wind} km/h
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}