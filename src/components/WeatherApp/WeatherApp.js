import React, { useState, useEffect } from 'react';
import WeatherSearch from './WeatherSearch';
import WeatherInfo from './WeatherInfo';
import classes from './WeatherApp.module.css';
import { apiURL, apiKey } from './util';
import gsap from 'gsap';

let tl = gsap.timeline();

const WeatherApp = () => {
	const [weatherInfo, setWeatherInfo] = useState({
		searchInput: '',
		weatherData: null,
		isLoading: false,
		error: null
	});

	useEffect(() => {
		if (weatherInfo.isLoading) {
			tl.to('.WeatherSearch_WeatherSearchSection__1NHTN', {
				css: { height: '30vh' },
				duration: 1,
				delay: -1
			});
		}

		if (weatherInfo.weatherData) {
			gsap.from('.WeatherInfo_WeatherInfoHeading__384ES span', {
				y: 100,
				ease: 'power4.out',
				skewY: 7,
				duration: 1,
				delay: 0.5,
				stagger: {
					amount: 0.2
				}
			});
		}
	}, [weatherInfo.isLoading, weatherInfo.weatherData]);

	const fetchWeatherData = async query => {
		try {
			setWeatherInfo({
				...weatherInfo,
				isLoading: true
			});
			fetch(`https://cors-anywhere.herokuapp.com/${apiURL}${query}${apiKey}`)
				.then(response => {
					if (response.ok) {
						setWeatherInfo({
							...weatherInfo,
							isLoading: true,
							weatherData: null,
							error: null
						});
						return response.json();
					} else {
						const errMessage = new Error('Not found');
						throw errMessage;
					}
				})
				.then(data => {
					setWeatherInfo({
						...weatherInfo,
						isLoading: false,
						error: null,
						searchInput: '',
						weatherData: data.data
					});
				})
				.catch(error => {
					setWeatherInfo({
						...weatherInfo,
						weatherData: null,
						error: error,
						isLoading: false
					});
				});
		} catch (error) {
			setWeatherInfo({
				...weatherInfo,
				weatherData: null,
				error: error,
				isLoading: false
			});
		}
	};

	return (
		<div className={classes.WeatherApp}>
			<WeatherSearch search={fetchWeatherData} />
			<WeatherInfo
				loading={weatherInfo.isLoading}
				data={weatherInfo.weatherData === null ? null : weatherInfo.weatherData[0]}
				error={weatherInfo.error}
			/>
		</div>
	);
};

export default WeatherApp;
