import React from 'react';
import classes from './styles/PlaylistItem.module.css';

const playlistItem = props => {
	return (
		<li className={classes.PlaylistItem} onClick={props.play}>
			<img src={props.image} alt={props.title} />
			<p>
				{props.title} <em>- {props.artist}</em>
			</p>
		</li>
	);
};

export default playlistItem;
