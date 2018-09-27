import React, { Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import Moment from "react-moment";

class City extends Component {
  state = {
    woeid: this.props.match.params.woeid,
    fullData: {},
    weather: []
  };
  componentDidMount() {
    axios
      .get(
        `http://localhost/lab.dev/weather.php?command=location&woeid=${
          this.state.woeid
        }`
      )
      .then(response => {
        const { consolidated_weather } = response.data;
        this.setState({ fullData: response.data });
        this.setState({ weather: consolidated_weather });
        return consolidated_weather;
      });
  }

  render() {
    const { fullData, weather } = this.state;
    return (
      <div>
        <div>
          {Object.keys(fullData).length > 0 ? (
            <div>
              <h2>
                {fullData.title} - {fullData.parent.title}
              </h2>
              <div>
                <b>Sun rise:</b>
                <Moment format="HH:mm:ss">{fullData.sun_rise}</Moment> -
                <b>Sun set:</b>
                <Moment format="HH:mm:ss">{fullData.sun_set}</Moment>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        {this.state.weather != null
          ? this.state.weather.map(wc => (
              <div key={this.state.weather.indexOf(wc)}>
                {Math.floor(wc.the_temp)}°
              </div>
            ))
          : "loading..."}
      </div>
    );
  }
}

export default City;
