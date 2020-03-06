import React, { useRef } from 'react';
import Search from '../styles/SearchBar.module.css';

const SearchBar = props => {
	const searchRef = useRef(null);

	return (
		<form
			className={Search.Form}
			onSubmit={event => {
				event.preventDefault();
				props.search(searchRef.current.value);
				searchRef.current.value = '';
			}}
		>
			<label htmlFor="lyrics-search" className={Search.Label}>
				Search for songs, artist
			</label>
			<input
				type="text"
				placeholder="Search for songs, artist"
				name="lyrics-search"
				inputMode="search"
				className={Search.Input}
				ref={searchRef}
			/>
			<button type="submit" className={Search.Button}>
				Search
			</button>
		</form>
	);
};

export default SearchBar;
