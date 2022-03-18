import React from 'react';
import {KkBadge} from 'kk-component-library-react';

function App() {
  return (
    <>
      <h1>
      Consuming kk-component-library-react
      </h1>
      <KkBadge type='info'>Info</KkBadge>
      <KkBadge type='error'>Error</KkBadge>
      <KkBadge type='success'>Success</KkBadge>
      <KkBadge type='warning'>Warning</KkBadge>
    </>
  );
}

export default App;
