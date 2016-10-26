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
    this.httpHandleDelete = this.httpHandleDelete.bind(this);
  }

  componentDidMount() {
    this.httpGetZipcode();
  }

  httpGetZipcode() {
    request.get('/api/members')
           .then((response) => {
              let memberData = response.body;
              console.log(memberData)
              let members = [];
              if(memberData) {
                members = Object.keys(memberData).map((id) => {
                  const indvMemberData = memberData[id];
                  return {
                    id: indvMemberData.id,
                    zipcode: indvMemberData.zipcode,
                  };
                });
              }
              this.setState({ members });
           });
  }

  httpHandleDelete(id) {
    request.del(`/api/members/${id}`)
           .then(() => {
            this.getZipcode();
           });
  }

  render() {
    return (
      <div>
        <MemberForm />
        <ZipCodeDisplay
          members={this.state.members}
          httpHandleDelete={this.httpHandleDelete}
        />
      </div>
    );
  }
}

export default App;


//will run get all request for zip code from database, pass down array of zip codes to zipcode display, this will run
