import React from 'react';
import SearchResult from '../styles/SingleResult.module.css';
import Search from '../styles/SearchBar.module.css';

const singleResult = props => {
	const { artist, title, img, getLyric } = props;
	return (
		<div className={SearchResult.Result}>
			<img src={img} alt={artist} />
			<div className={SearchResult.Detail}>
				<h3>{artist}</h3>
				<p>{title}</p>
			</div>
			<button className={Search.Button} onClick={() => getLyric(artist, title)}>
				Get Lyric
			</button>
		</div>
	);
};

export default singleResult;
