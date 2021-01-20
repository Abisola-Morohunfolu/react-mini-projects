import React from 'react';
import { appsData } from '../../../appsData';
import ListItem from './ListItem/ListItem';
import classes from './AppList.module.css';

const AppList = () => {
	return (
		<section className={classes.Wrapper}>
			{appsData.map((app) => {
				return (
					<ListItem
						key={app.id}
						link={app.route}
						image={app.img}
						title={app.name}
						description={app.description}
					/>
				);
			})}
		</section>
	);
};

export default AppList;
