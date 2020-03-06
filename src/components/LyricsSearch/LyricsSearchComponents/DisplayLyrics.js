import React from 'react';

const DisplayLyrics = props => {
	// if(props.)
	return (
		<div>
			<h2>
				<strong>{props.artist}</strong> - <em>{props.title}</em>
			</h2>
			{props.lyrics.split('\n').map((item, i) => {
				return <p key={i}>{item}</p>;
			})}
		</div>
	);
};

export default DisplayLyrics;
