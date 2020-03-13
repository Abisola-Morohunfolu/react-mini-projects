import React from 'react';
import classes from './styles/PlaylistItem.module.css';

const playlistItem = props => {
	return (
		<li className={classes.PlaylistItem} onClick={props.play}>
			<img src={props.image} alt={props.title} />
			<p>
				{props.title} <em>- {props.artist}</em>
			</p>
			{props.active && <p className={classes.Playing}>Now Playing</p>}
		</li>
	);
};

export default playlistItem;
