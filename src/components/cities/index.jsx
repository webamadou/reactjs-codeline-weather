import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

const ListCities = cityWeather => {
  const { data } = cityWeather;
  const details = data.data.data;
  return (
    <div className="col-lg-4 col-md-6">
      <div className="card h-100">
        <div className="card-body">
          <h4 className="card-title">
            <a href="/">{data !== undefined && data.name}</a>
          </h4>
          <h5>{details !== undefined && details.main.temp} C</h5>
          <h5>
            {details !== undefined && (
              <div>
                <img
                  src={`http://openweathermap.org/img/w/${
                    details.weather[0].icon
                  }.png`}
                  alt="weather"
                />
                <strong>{details.weather[0].description}</strong>
              </div>
            )}
          </h5>
          <p className="card-text" />
        </div>
        <div className="card-footer">
          <Link className="btn btn-primary" to={`/city/${data.name}`}>
            See more
          </Link>
        </div>
      </div>
    </div>
  );
};

const Cities = props => {
  return <ListCities data={props.data} />;
};

export default Cities;
