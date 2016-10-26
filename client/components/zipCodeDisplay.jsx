import React, { Component } from 'react';
import WeatherContainer from './weatherContainer.jsx';
import request from 'superagent';

const propTypes = {
  members: React.PropTypes.array,
  httpHandleDelete: React.PropTypes.func,
};

class ZipCodeDisplay extends Component {
  getWeatherData(zipcode) {
    request.get(`/api/weather/${zipcode}`)
  }

  render() {
    const memberData = this.props.members.map((individualMember, idx) => {
      // console.log(individualMember)
      return (
        <div key={idx}>
          <div>
            {individualMember.zipcode}
          </div>
          <button>
            x
          </button>
        </div>
      );
    });

    return (
      <div>
        <h3>See popular places searched!</h3>
        <div>
          {memberData}
        </div>
        <WeatherContainer />
      </div>
    );
  }
}

export default ZipCodeDisplay;

//onClick={this.props.httpHandleDelete(idx)}
//take props from app of zipcode array...pass this through weather api to generate a div with weather information for each zip code

//conditionally apply css based on weather description returned
