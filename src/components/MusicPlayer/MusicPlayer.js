import React from 'react';
import classes from './styles/MusicPlayer.module.css';

const musicPlayer = props => {
	if (props.current === null) return <p>Nothing to Play</p>;
	return (
		<section className={classes.MusicPlayer}>
			<div className={classes.Image}>
				<img src={props.current.cover} alt={props.current.title} />
			</div>
			<div className={classes.Player}>
				<div className={classes.Info}>
					<h4 className={classes.Title}>{props.current.title}</h4>
					<p className={classes.Artist}>{props.current.artist}</p>
				</div>
				<div className={classes.Progress} ref={props.progress}>
					<span className={classes.Bar} ref={props.bar}></span>
				</div>
				<div className={classes.Buttons}>
					<button onClick={props.play}>Play</button>
					<button>pause</button>
					<button onClick={props.stop}>stop</button>
				</div>
			</div>
			<audio ref={props.audio}>
				<source src={props.current.file} type="audio/mp3" />
				Your Browser is not supported
			</audio>
		</section>
	);
};

export default musicPlayer;
