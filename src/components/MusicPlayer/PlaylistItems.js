import React from 'react';
import PlaylistItem from './PlaylistItem';
import classes from './styles/PlaylistItems.module.css';

const playlistItems = props => {
	return (
		<ul className={classes.PlaylistItems}>
			{props.songs.map(song => {
				return (
					<PlaylistItem
						title={song.title}
						artist={song.artist}
						image={song.cover}
						play={() => props.select(song.id)}
						key={song.id}
					/>
				);
			})}
		</ul>
	);
};

export default playlistItems;
