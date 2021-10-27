import React from 'react';
import './App.css';
import { CopyCat } from './CopyCat';

export class CopyCatContainer extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <CopyCat/>
        </header>
      </div>
      
    )
  }
}

