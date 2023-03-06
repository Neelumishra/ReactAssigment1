import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';
import {First} from './first.jsx';
import {Second} from './second.jsx';
import { Third } from './third';
import { Fourth } from './fourth';


function App() {
  return (
    <Fragment>
      <h1>I am heading one...from first component</h1>
      <h2>I am heading two...from second component</h2>
      <h3>I am heading three...from third component</h3>
      <button>Click me!!</button>
      {/* <First/>
      <Second/>
      <Third/>
      <Fourth/> */}
    </Fragment>
  );
}

export default App;
