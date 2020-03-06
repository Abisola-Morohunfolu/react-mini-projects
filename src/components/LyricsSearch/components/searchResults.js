import React from 'react';
import SingleResult from '../../../components/LyricsSearch/components/singleResult';

import classes from '../../../components/LyricsSearch/styles/SearchResults.module.css';

const searchResults = props => {
	// if (props === null) return;
	return (
		<section className={classes.Container}>
			{props.results === null
				? null
				: props.results.map(result => (
						<SingleResult
							artist={result.artist.name}
							title={result.title}
							img={result.album.cover}
							key={result.id}
							getLyric={props.getLyric}
						/>
				  ))}
		</section>
	);
};

export default searchResults;
