import React from "react";
import { KkBadge, KkList } from "kk-component-library-react";

function App() {
  const listData = [
    "Consuming",
    "React",
    "Package",
    "Generated",
    "From",
    "Stencil",
    "Component",
    "Library",
  ];
  return (
    <>
      <h1>Consuming kk-component-library-react</h1>
      <KkBadge type="info">Info</KkBadge>
      <KkBadge type="error">Error</KkBadge>
      <KkBadge type="success">Success</KkBadge>
      <KkBadge type="warning">Warning</KkBadge>
      {/* Able to pass complex object as prop */}
      <KkList items={listData} />
    </>
  );
}

export default App;
