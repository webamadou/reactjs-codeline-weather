import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import { Link } from "react-router-dom";

class FrontPage extends Component {
  state = {
    cities: [
      { name: "Istanbul", woeid: null, weather: null },
      { name: "Berlin", woeid: null, weather: null },
      { name: "London", woeid: null, weather: null },
      { name: "Helsinki", woeid: null, weather: null },
      { name: "Dublin", woeid: null, weather: null },
      { name: "Vancouver", woeid: null, weather: null }
    ]
  };

  constructor() {
    super();
    const { cities } = this.state;
    cities.map(city => this.get_woeid(city));
  }

  get_woeid = name => {
    axios
      .get(
        `http://localhost/lab.dev/weather.php?command=search&keyword=${
          name.name
        }`
      )
      .then(response => {
        const { woeid } = response.data[0];
        const cities = [...this.state.cities];
        let index = cities.indexOf(name);
        cities[index].woeid = woeid;
        this.getWeather(cities[index]);
        return;
      });
  };

  getWeather(city) {
    axios
      .get(
        `http://localhost/lab.dev/weather.php?command=location&woeid=${
          city.woeid
        }`
      )
      .then(response => {
        const { consolidated_weather } = response.data;

        const cities = [...this.state.cities];
        let index = cities.indexOf(city);
        cities[index].weather = consolidated_weather;
        this.setState({ cities });
        return;
      });
  }

  renderWeather = city => {
    if (city != null) {
      city.map(wc => <div className="weather-app">voila le resultat</div>);
    }
  };

  render() {
    const { cities } = this.state;
    return (
      <div className="container-fluid">
        <div className="row">
          {cities.map(city => (
            <div className="col-4 card" key={cities.indexOf(city)}>
              <div className="card-body custom-card">
                <h3 className="card-title">{city.name}</h3>
                <span>{city.woeid}</span>
                <ul className="list-group">
                  {city.weather != null ? (
                    city.weather.map(wc => (
                      <li
                        className="list-group-item weather-review"
                        key={wc.id}
                      >
                        {wc.the_temp.toFixed(1)} - {wc.weather_state_name}
                        <Link to={/city/ + city.woeid}>More details</Link>
                      </li>
                    ))
                  ) : (
                    <li>loading ...</li>
                  )}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default FrontPage;
