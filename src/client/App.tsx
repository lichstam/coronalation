import React, { useState, useEffect } from 'react';
import CoronaCharts from './components/CoronaCharts';
import DeathCharts from './components/DeathCharts';
import { getDeaths, getConfirmed, getPopulation } from './api';

const App = () => {
  const [confirmed, setConfirmed] = useState([]);
  const [population, setPopulation] = useState([]);
  const [deaths, setDeaths] = useState([]);

  useEffect(() => {
    getConfirmed().then(setConfirmed);
    getDeaths().then(setDeaths);
    getPopulation().then(setPopulation);
  }, []);

  return (
    <div className="app">
      <h1>Coronavirus Development in Various Countries</h1>
      <div className="app__wrapper">
        <CoronaCharts confirmed={confirmed} />
      </div>
      <h1>Coronavirus Deaths</h1>
      <div className="app__wrapper">
        <DeathCharts deaths={deaths} population={population} />
      </div>
      <p>Source: Johns Hopkins, https://github.com/CSSEGISandData/COVID-19</p>
    </div>
  );
};

export default App;
