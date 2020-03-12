import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import LyricsSearchApp from './components/LyricsSearch/LyricsSearchApp';
import CalculatorApp from './components/Calculator/CalculatorApp';
import MusicPlayerApp from './components/MusicPlayer/MusicPlayerApp';

function App() {
	return (
		<div className="App">
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/lyrics-search" component={LyricsSearchApp} />
				<Route exact path="/calculator" component={CalculatorApp} />
				<Route exact path="/music-player" component={MusicPlayerApp} />
			</Switch>
		</div>
	);
}

export default App;
