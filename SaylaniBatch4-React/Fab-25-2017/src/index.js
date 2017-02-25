import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
const data = {
  name: "Majid",
  age : 12
}
ReactDOM.render(
  <App data={data} />,
  document.getElementById('root')
);
