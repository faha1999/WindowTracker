import React from 'react';
import WindowTracker from './WindowTracker';
import './css/style.min.css';

export default function App() {
  const [show, setShow] = React.useState(true);

  function toggle() {
    setShow((prevShow) => !prevShow);
  }

  return (
    <div className="container">
      <button onClick={toggle}>Toggle WindowTracker</button>
      {show && <WindowTracker />}
    </div>
  );
}
