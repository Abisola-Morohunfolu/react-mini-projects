import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import LyricsSearchApp from './components/LyricsSearch/LyricsSearchApp';

function App() {
	return (
		<div className="App">
			<h1>Hello from App</h1>
			<Switch>
				<Route exact path="/lyrics-search" component={LyricsSearchApp} />
			</Switch>
		</div>
	);
}

export default App;
