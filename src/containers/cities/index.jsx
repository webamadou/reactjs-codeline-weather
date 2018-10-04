import React, { Component } from "react";
import Cities from "../../components/cities";
import axios from "axios";

class CitiesContainer extends Component {
  state = {
    fetching: false,
    cities: [
      { name: "Istanbul", data: [] },
      { name: "Berlin", data: [] },
      { name: "London", data: [] },
      { name: "Helsinki", data: [] },
      { name: "Dublin", data: [] },
      { name: "Vancouver", data: [] }
    ]
  };

  componentDidMount() {
    this.setState({ fetching: true });
    this.state.cities.map(city =>
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${
            city.name
          }&units=metric&appid=c4b103f88241b4d8a8f402853788e5f7`
        )
        .then(response => {
          const cities = [...this.state.cities];
          const index = cities.indexOf(city);
          cities[index].data = response;
          this.setState({ cities, fetching: false });
        })
    );
  }

  render() {
    const { cities } = this.state;
    return (
      <div className="row">
        {cities.map(city => (
          <Cities data={city} key={cities.indexOf(city)} />
        ))}
      </div>
    );
  }
}

export default CitiesContainer;
