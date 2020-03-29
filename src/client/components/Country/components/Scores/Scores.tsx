import React, { useEffect, useState } from 'react';
import { getSweConfirmed, getSweDeaths } from '../../../../api';
import { getDayMinus } from '../../../../utils';

const Scores = () => {
  const [confirmed, setConfirmed] = useState([]);
  const [deaths, setDeaths] = useState([]);

  useEffect(() => {
    getSweDeaths().then(setDeaths);
    getSweConfirmed().then(setConfirmed);
  }, []);

  const Box = ({ children }) => (
    <div className="box">{children}</div>
  );

  const yesterday = getDayMinus(1);
  const totalsDailyDeaths = deaths[deaths.length - 2];
  const totalsDeaths = deaths[deaths.length - 1];
  const totalsDaily = confirmed[confirmed.length - 2];
  const totals = confirmed[confirmed.length - 1];

  const totalScores = [
    <div className="country__totals">
      <h2>New Cases Today</h2>
      <strong className="country__score">{ totalsDaily?.Today }</strong>
      <p className="country__sub-score">
        Yesterday:
        {' '}
        { totals && totalsDaily[yesterday.toString()] }
      </p>
    </div>,
    <div className="country__totals">
      <h2>Total Confirmed</h2>
      <strong className="country__score">{ totals?.Today }</strong>
    </div>,
    <div className="country__totals">
      <h2>Deaths Today</h2>
      <strong className="country__score">{ totalsDailyDeaths?.Today }</strong>
      <p className="country__sub-score">
        Yesterday:
        {' '}
        { totalsDeaths && totalsDailyDeaths[yesterday.toString()] }
      </p>
    </div>,
    <div className="country__totals">
      <h2>Total Deaths</h2>
      <strong className="country__score">{ totalsDeaths?.Today }</strong>
    </div>,
  ];

  return (
    <>
      {totalScores.map((item, i) => (
        <Box key={i}>{ item }</Box>
      ))}
    </>
  );
};

export default Scores;