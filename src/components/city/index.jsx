import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Moment from "react-moment";

class City extends Component {
  render() {
    const { data } = this.props;
    const sunrise = data.data.sys.sunrise;
    const sunset = data.data.sys.sunset;
    return (
      <div className="row ">
        <div className="col-xs-4">
          <div className="card" style={{ width: "18rem", marginRight: 15 }}>
            <div className="card-body">
              <h1 className="card-title">{data.data.name}</h1>
              <p className="card-text">{data.data.sys.country}</p>
            </div>
          </div>
        </div>
        <div className="col-xs-8" style={{ paddingLeft: 15, paddingRight: 15 }}>
          <div className="row">
            <h1 className="col-xs-6">
              {data.data.main.temp}
              °c
            </h1>
            <h1 className="col-xs-6 mx-2">
              {data.data.weather[0].main}
              <img
                src={`http://openweathermap.org/img/w/${
                  data.data.weather[0].icon
                }.png`}
                alt="weather"
              />
            </h1>
            <div className="col-xs-12">
              <strong>{data.data.weather[0].description}</strong>
            </div>
          </div>
          <div className="col-xs-12">
            <ul className="list-group">
              <li className="list-group-item">
                Wind: {data.data.wind.deg} miles/hour
              </li>
              <li className="list-group-item">
                Cloud: {data.data.clouds.all} %
              </li>
              <li className="list-group-item">
                Presure: {data.data.main.pressure} hPa
              </li>
              <li className="list-group-item">
                Visibility: {data.data.visibility} m
              </li>
              <li>---</li>
              <li className="list-group-item">
                Sunrise:{" "}
                <Moment unix format="HH:MM:SS">
                  {sunrise}
                </Moment>
              </li>
              <li className="list-group-item">
                Sunset:{" "}
                <Moment unix format="HH:MM:SS">
                  {sunset}
                </Moment>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default City;
