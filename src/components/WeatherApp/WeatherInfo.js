import React from 'react';
import classes from './WeatherInfo.module.css';
import Loader from './Loader/Loader';

const weatherInfo = props => {
	if (props.loading === true) {
		return (
			<section className={classes.WeatherInfo}>
				<Loader />
			</section>
		);
	}

	if (props.error !== null) {
		return (
			<section className={classes.WeatherInfo}>
				<h4 className={classes.WeatherInfoHeading}>
					<span>Something went wrong!</span>
				</h4>
			</section>
		);
	}

	if (props.data === null && props.loading === false) {
		return null;
	}

	return (
		<section className={classes.WeatherInfo}>
			<h4 className={classes.WeatherInfoHeading}>
				<span className={classes.Title}>Location</span>
				<span>
					{props.data.city_name}, {props.data.country_code}
				</span>
			</h4>
			<h4 className={classes.WeatherInfoHeading}>
				<span className={classes.Title}>Temperature</span>
				<span>{props.data.temp}&#176; </span>
			</h4>
			<h4 className={classes.WeatherInfoHeading}>
				<span className={classes.Title}>Description</span>
				<span>{props.data.weather.description}</span>
			</h4>
			<div>
				<h4 className={classes.WeatherInfoHeading}>
					<span className={classes.Title}>Wind Direction</span>
					<span> {props.data.wind_cdir_full}</span>
				</h4>
				<h4 className={classes.WeatherInfoHeading}>
					<span className={classes.Title}>Wind Speed</span>
					<span>{props.data.wind_spd}</span>
				</h4>
			</div>
		</section>
	);
};

export default weatherInfo;
