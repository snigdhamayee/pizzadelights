import React from 'react';
import { Link } from 'react-router-dom';
import Landings from './Components/Landing';

const App = () => {
  return (
    <div>
      <div className="component-wrapper" style={{ marginBottom: '90px' }}>
        <Landings/>
      </div>
    </div>
  );
};

export default App;

