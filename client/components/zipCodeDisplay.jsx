import React, { Component } from 'react';
import WeatherContainer from './weatherContainer.jsx';

const propTypes = {
  members: React.PropTypes.array,
}

class ZipCodeDisplay extends Component {
  render() {
      const memberData = this.props.members.map((individualMember, idx) => {
        console.log(individualMember)
        return (
          <div key={idx}>
            {individualMember.zipcode}
          </div>
        )
      })
      return (
        <div>
          <h3>See popular places searched!</h3>
          <div>
            {memberData}
          </div>
          <WeatherContainer />
        </div>
      )
  }
}

export default ZipCodeDisplay;


//take props from app of zipcode array...pass this through weather api to generate a div with weather information for each zip code

//conditionally apply css based on weather description returned
