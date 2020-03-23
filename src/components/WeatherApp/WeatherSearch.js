import React, { useRef, useEffect } from 'react';
import Button from '../UI/Buttons/Button';
import classes from './WeatherSearch.module.css';
import gsap from 'gsap';

const tl = gsap.timeline();

const WeatherSearch = props => {
	const weatherSearchRef = useRef(null);

	useEffect(() => {
		tl.from('div img', {
			scale: 1.5,
			duration: 1.5
		})
			.to('h2', {
				opacity: 1,
				duration: 1,
				delay: -0.6
			})
			.to('form', {
				opacity: 1,
				duration: 1,
				delay: -0.4
			})
			.from('form', {
				y: '100px',
				duration: 1,
				delay: -1.4
			});
	}, []);

	return (
		<section className={classes.WeatherSearchSection}>
			<div className={classes.ImageBox}>
				<img src="./assets/images/weather/main-bg.png" alt="A Sky full of stars" />
			</div>
			<h2>Welcome to GeoWeather</h2>
			<form
				className={classes.WeatherSearchForm}
				onSubmit={event => {
					event.preventDefault();
					props.search(weatherSearchRef.current.value);
					weatherSearchRef.current.value = '';
				}}
			>
				<input
					type="search"
					name="search"
					id="search"
					inputMode="search"
					placeholder="Search for a city"
					className={classes.WeatherSearch}
					ref={weatherSearchRef}
				/>
				<Button type="search">Go!</Button>
				{props.error && <p>Please enter a city to search for</p>}
			</form>
		</section>
	);
};

export default WeatherSearch;
