import React from 'react';
import SearchBar from '../styles/SearchBar.module.css';

const searchBar = () => {
	return (
		<form className={SearchBar.Form}>
			<label htmlFor="lyrics-search" className={SearchBar.Label}>
				Search for songs, artist
			</label>
			<input
				type="text"
				placeholder="Search for songs, artist"
				name="lyrics-search"
				inputMode="search"
				className={SearchBar.Input}
			/>
			<button type="submit" className={SearchBar.Button}>
				Search
			</button>
		</form>
	);
};

export default searchBar;
