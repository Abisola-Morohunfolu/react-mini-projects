import React, { useRef, useEffect, useState } from 'react';
import Button from '../UI/Buttons/Button';
import classes from './WeatherSearch.module.css';
import gsap from 'gsap';

const tl = gsap.timeline();

const WeatherSearch = props => {
	const weatherSearchRef = useRef(null);

	const [error, setError] = useState(null);

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

	const submitForm = query => {
		if (query === '' || query === ' ') {
			return setError(
				<p style={{ color: '#fff', fontWeight: 'bold', flex: '0 0 100%', marginTop: '2rem' }}>
					Please enter location to search for
				</p>
			);
		}
		setError(null);
		props.search(query);
	};

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
					weatherSearchRef.current.blur();
					// props.search(weatherSearchRef.current.value);
					submitForm(weatherSearchRef.current.value);
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
				{error}
			</form>
		</section>
	);
};

export default WeatherSearch;
