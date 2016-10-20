import React from 'react';

class MemberForm extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange() {
    const target = e.target;
    const name = target.getAttribute('name');
    const value = target.value;
    const updated = {};
    updated[name] = value;
    this.setState(updated);
  }
  handleSubmit(e) {
    e.preventDefault();
  }
  render() {
    return (
      <div id="signup-form">
        A form will live here..
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="first_name"
            placeholder = "First name"
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            name="last_name"
            placeholder = "Last name"
            onChange={this.handleInputChange}
          />
          <input
            name="email"
            type="text"
            placeholder = "Email Address"
            onChange={this.handleInputChange}
          />
          <input
            name="zip_code"
            type="text"
            placeholder = "Enter your zip code"
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
