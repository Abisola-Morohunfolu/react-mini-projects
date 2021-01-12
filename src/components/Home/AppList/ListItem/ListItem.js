import React from 'react';
import { Link } from 'react-router-dom';
import classes from './ListItem.module.css';
import Button from '../../../UI/Buttons/Button';

const ListItem = (props) => {
	return (
		<div className={classes.ListItem}>
			<img src={props.image} alt={props.title} className={classes.AppImage} />

			<div className={classes.Detail}>
				<Link to={props.link}>
					<h4 className={classes.Title}>{props.title}</h4>
					<p className={classes.Description}>{props.description}</p>
				</Link>
			</div>
		</div>
	);
};

export default ListItem;
