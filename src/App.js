import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import LyricsSearchApp from './components/LyricsSearch/LyricsSearchApp';
import CalculatorApp from './components/Calculator/CalculatorApp';

function App() {
	return (
		<div className="App">
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/lyrics-search" component={LyricsSearchApp} />
				<Route exact path="/calculator" component={CalculatorApp} />
			</Switch>
		</div>
	);
}

export default App;
