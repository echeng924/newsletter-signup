import React from 'react';
import MemberForm from './memberForm.jsx';
import ZipCodeDisplay from './zipCodeDisplay.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <MemberForm />
        <ZipCodeDisplay />
      </div>
    );
  }
}

export default App;
