import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
// fonctional component's good but claa component the best
class App extends Component {
  constructor() {
    super();
    this.state = {
      prenom: 'Mamadou',
      nom: 'NDIAYE'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.prenom} />
        <p>
          Start editing to see some magic happen :) Angular is cool , react also
        </p>
        <p style={{ color: 'blue' }}>
          hello {this.state.prenom} {this.state.nom}{' '}
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
