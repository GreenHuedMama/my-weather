import React from "react";
import GoodDate from "./GoodDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

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
                            <div className="float-left">
                                <WeatherIcon code={props.info.icon} />
                            </div>
                            <div className="float-left">
                                <WeatherTemperature celsius={props.info.temp} />
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