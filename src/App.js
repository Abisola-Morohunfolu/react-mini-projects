import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import LyricsSearchApp from './components/LyricsSearch/LyricsSearchApp';

function App() {
	return (
		<div className="App">
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/lyrics-search" component={LyricsSearchApp} />
			</Switch>
		</div>
	);
}

export default App;
