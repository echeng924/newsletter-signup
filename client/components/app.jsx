import React from 'react';
import MemberForm from './memberForm.jsx';
import ZipCodeDisplay from './zipCodeDisplay.jsx';
import request from 'superagent';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      members: [],
    };
  }

  componentDidMount() {
    this.getZipcode();
  }

  getZipcode() {
    request.get('/api/members')
           .then((response) => {
              let memberData = response.body;
              let members = [];
              if(memberData) {
                members = Object.keys(memberData).map((id) => {
                  const indvMemberData = memberData[id];
                  return {
                    zipcode: indvMemberData.zipcode,
                  };
                });
              }
              this.setState({ members });
           });
  }

  render() {
    return (
      <div>
        <MemberForm />
        <ZipCodeDisplay members={this.state.members} />
      </div>
    );
  }
}

export default App;


//will run get all request for zip code from database, pass down array of zip codes to zipcode display, this will run
