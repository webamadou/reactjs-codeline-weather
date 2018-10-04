import React, { Component } from "react";
import CityTags from "../../components/city";
import axios from "axios";

class City extends Component {
  state = {
    data: [],
    fetching: false
  };
  componentDidMount() {
    const name = this.props.match.params.name;
    this.setState({ fetching: true });
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&appid=c4b103f88241b4d8a8f402853788e5f7`
      )
      .then(response => {
        console.log(response);

        this.setState({ data: response, fetching: false });
      });
  }

  render() {
    const { data, fetching } = this.state;
    return (
      <div className="container">
        {fetching && data.length === 0 && <div>Loading</div>}
        {!fetching &&
          data.length === 0 && <div>Can't find the weather for this town</div>}
        {data.data !== undefined && <CityTags data={data} />}
      </div>
    );
  }
}

export default City;
