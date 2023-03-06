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
      <First/>
      <Second/>
      <Third/>
      <Fourth/>
    </Fragment>
  );
}

export default App;
