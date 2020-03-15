import React from 'react';
import { Link } from 'react-router-dom';
import classes from './ListItem.module.css';
import Button from '../../../UI/Buttons/Button';

const ListItem = props => {
	return (
		<div className={classes.ListItem}>
			<img src={props.image} alt={props.title} />
			<div className={classes.Detail}>
				<h4>{props.title}</h4>
				<Button type="demo">
					<Link to={props.link}>Live Demo</Link>
				</Button>
			</div>
		</div>
	);
};

export default ListItem;
