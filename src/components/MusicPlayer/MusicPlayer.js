import React from 'react';
import classes from './styles/MusicPlayer.module.css';
import { ReactComponent as Play } from '../../assets/images/music/play.svg';
import { ReactComponent as Pause } from '../../assets/images/music/pause.svg';
import { ReactComponent as Next } from '../../assets/images/music/next.svg';
import { ReactComponent as Prev } from '../../assets/images/music/previous.svg';
import { ReactComponent as Stop } from '../../assets/images/music/stop.svg';

const musicPlayer = props => {
	if (props.current === null)
		return <p className={classes.NotPlaying}>Nothing to Play, Select a song to play</p>;

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
					<button onClick={props.backward} disabled={props.playState === 'stop'}>
						<Prev />
					</button>
					<button
						onClick={props.play}
						style={{
							display:
								props.playState === 'pause' || props.playState === 'stop' ? 'inline-block' : 'none'
						}}
						className={classes.Play}
					>
						<Play />
					</button>
					<button
						onClick={props.pause}
						style={{
							display: props.playState === 'play' ? 'inline-block' : 'none'
						}}
						className={classes.Pause}
					>
						<Pause />
					</button>
					<button onClick={props.forward} disabled={props.playState === 'stop'}>
						<Next />
					</button>

					<button
						onClick={props.stop}
						style={{
							display:
								props.playState === 'play' || props.playState === 'pause' ? 'inline-block' : 'none'
						}}
					>
						<Stop />
					</button>
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
