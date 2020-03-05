import React, { useState } from 'react';
import SearchBar from './components/searchBar';
import DisplayLyrics from './components/DisplayLyrics';
import { Switch, Route } from 'react-router-dom';
import SearchResults from './components/searchResults';

const LyricsSearchApp = () => {
	const [showLyrics, setShowLyrics] = useState(true);

	const toggleShowLryics = () => setShowLyrics(!showLyrics);

	let results;
	let displayLyric;
	if (!showLyrics) {
		results = <SearchResults />;
		displayLyric = null;
	} else {
		results = null;
		displayLyric = <DisplayLyrics />;
	}
	return (
		<div>
			<SearchBar />
			{results}
			{displayLyric}
		</div>
	);
};

export default LyricsSearchApp;
