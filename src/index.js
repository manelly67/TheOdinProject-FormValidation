import _ from 'lodash';
import './style.css';
import printForm from './print.js';

function component() {
  const mainDiv = document.createElement('div');

  printForm(mainDiv);

  return mainDiv;
}

document.body.appendChild(component());