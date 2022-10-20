import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';

import MarvelService from './services/MarvelService';

import './style/style.scss';

const newMarvel = new MarvelService();

newMarvel.getAllCharacters()
	.then(res => res.data.results.forEach(item => console.log(item.name) ));

newMarvel.getCharacter(1011196)
	.then(res => console.log(`Single character - ${res.data.results[0].name}`));
	

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

