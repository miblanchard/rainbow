import React from 'react';

import Rainbow from './Components/rainbow';

const App = () => (
  <div className="App">
    <Rainbow flatRainbow={true} />
    <Rainbow />
  </div>
);

export default App;
