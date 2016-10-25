import React from 'react';
import request from 'superagent';

class MemberForm extends React.Component {
  constructor() {
    super();
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      zipcode: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    const target = e.target;
    const name = target.getAttribute('name');
    const value = target.value;
    const updated = {};
    updated[name] = value;
    this.setState(updated);
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log('button clicked');
    this.handlePostToDb();
    this.setState({
      first_name:'',
      last_name: '',
      email: '',
      zipcode: '',
    });
  }

  handlePostToDb() {
    request.post('/api/members')
           .send({
              first_name: this.state.first_name,
              last_name: this.state.last_name,
              email: this.state.email,
              zipcode: this.state.zipcode,
           })
           .then(() => {
              console.log('Member was submitted');
           });
  }

  render() {
    return (
      <div id="signup-form">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="first_name"
            value={this.state.first_name}
            placeholder="First name"
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            name="last_name"
            value={this.state.last_name}
            placeholder="Last name"
            onChange={this.handleInputChange}
          />
          <input
            name="email"
            type="text"
            value={this.state.email}
            placeholder="Email Address"
            onChange={this.handleInputChange}
          />
          <input
            name="zipcode"
            type="text"
            value={this.state.zipcode}
            placeholder="Enter your zip code"
            onChange={this.handleInputChange}
          />
          <input
            name="form_submit"
            type="submit"
            value="SUBMIT!"
          />
        </form>
      </div>
    );
  }
}

export default MemberForm;
