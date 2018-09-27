import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

class App extends Component {
  state = {
    reports: [],
    name: ""
  };
  componentDidMount() {
    for (let i = 0; i < this.cities.length; i++) {
      axios
        .get(
          `http://localhost/lab.dev/weather.php?command=search&keyword=${
            this.cities[i]
          }`
        )
        .then(response => {
          this.cities.push("lala");
        });
    }
  }
  get_woeid = name => {
    axios
      .get(
        `http://localhost/lab.dev/weather.php?command=search&keyword=${name}`
      )
      .then(response => {
        this.setState({ name: "lalala" });
        return;
      });
  };

  render() {
    return (
      <div className="App">
        <p className="App-intro" />
        <table>
          <tbody>{}</tbody>
        </table>
      </div>
    );
  }
}
export default App;







state = {
    cities: {
      Istanbul: { woeid: null, weither: null },
      Berlin: { woeid: null, weither: null },
      London: { woeid: null, weither: null },
      Helsinki: { woeid: null, weither: null },
      Dublin: { woeid: null, weither: null },
      Vancouver: { woeid: null, weither: null }
    }
  };



            <h3>
              {fullData.title} - {fullData.parent.title}
            </h3>
            <div>
            <b>Sun rise:</b>{fullData.sun_rise} <b>Sun set:</b> {fullData.sun_set}</div>

=======================================
parent:
  latt_long: "51.164181,10.454150"
  location_type: "Country"
  title: "Germany"
  woeid: 23424829
---------------------------------------
sun_rise: "2018-09-25T06:57:07.369129+02:00"
sun_set: "2018-09-25T18:58:13.744121+02:00"
time: "2018-09-25T18:19:36.148635+02:00"
timezone: "Europe/Berlin"
timezone_name: "LMT"
title: "Berlin"
woeid: 638242
=======================================

    air_pressure: 1027.7849999999999
    applicable_date: "2018-09-25"
    created: "2018-09-24T21:20:02.653224Z"
    humidity: 82
    id: 5502415734308864
    max_temp: 20.2075
    min_temp: 15.5975
    predictability: 75
    the_temp: 16.98
    visibility: 7.329694583631591
    weather_state_abbr: "lr"
    weather_state_name: "Light Rain"
    wind_direction: 16.374082763888925
    wind_direction_compass: "NNE"
    wind_speed: 15.18743882500199