import React from 'react';
import ReactDOM from 'react-dom';
import MainPage from './components/MainPage';

ReactDOM.render(
  <MainPage data={require('./data/data.json')}/>,
  document.getElementById('root')
);
