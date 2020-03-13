import React, { useRef, useEffect, useState } from 'react';
import PlaylistItems from './PlaylistItems';
import classes from './styles/MusicPlayerApp.module.css';
import MusicPlayer from './MusicPlayer';
import { songs } from './musicData';

const MusicPlayerApp = props => {
	const audioRef = useRef(null);
	const progressBarRef = useRef(null);
	const barRef = useRef(null);

	const [playingState, setPlayingState] = useState({
		music: 'stop'
	});

	const playAudio = () => {
		// audioRef.current.currentTime = 0;
		audioRef.current.play();
		setPlayingState({
			music: 'play'
		});
	};

	const stopAudio = () => {
		audioRef.current.pause();
		audioRef.current.currentTime = 0;
		setPlayingState({
			music: 'stop'
		});
	};

	const pauseAudio = () => {
		audioRef.current.pause();
		setPlayingState({
			music: 'pause'
		});
	};

	const skipForward = () => {
		let current = audioRef.current.currentTime;
		current = current + 10;
		audioRef.current.currentTime = current;
	};

	const skipBackward = () => {
		let current = audioRef.current.currentTime;
		if (current < 10) return (audioRef.current.currentTime = 0);
		current = current - 10;
		audioRef.current.currentTime = current;
	};

	const [musicState, setMusicState] = useState({
		songs: [...songs],
		currentSong: null
	});

	//move to next song
	const nextSong = () => {
		let nextId;
		const current = { ...musicState.currentSong };

		if (current.id <= 0 || current.id < 4) {
			nextId = current.id + 1;
			console.log(nextId);
		} else if (current.id === 4) {
			nextId = 0;
			console.log(nextId);
		}

		selectSong(nextId);
	};

	useEffect(() => {
		if (musicState.currentSong === null) return;
		const audio = audioRef.current;
		const bar = barRef.current;
		const progressBar = progressBarRef.current;

		const showProgress = event => {
			const { duration, currentTime } = event.srcElement;
			const progressPercent = (currentTime / duration) * 100;
			bar.style.width = `${progressPercent}%`;
		};

		function setProgress(event) {
			const width = this.clientWidth;
			const clientX = event.offsetX;
			const duration = audio.duration;

			audio.currentTime = (clientX / width) * duration;
		}

		audio.addEventListener('timeupdate', showProgress);
		audio.addEventListener('ended', nextSong);
		progressBar.addEventListener('click', setProgress);

		return () => {
			audio.removeEventListener('timeupdate', showProgress);
			progressBar.removeEventListener('click', setProgress);
			audio.removeEventListener('ended', nextSong);
		};
	});

	//load a new song
	useEffect(() => {
		if (musicState.currentSong === null) return;
		audioRef.current.load();

		//play audio after a new song was selected
		playAudio();
	}, [musicState.currentSong]);

	//select songs
	const selectSong = id => {
		const tempState = [...musicState.songs];
		const selectedSong = tempState.filter(el => el.id === id)[0];
		setMusicState({
			songs: [...tempState],
			currentSong: selectedSong
		});
	};

	return (
		<div className={classes.Container}>
			<MusicPlayer
				audio={audioRef}
				bar={barRef}
				stop={stopAudio}
				play={playAudio}
				progress={progressBarRef}
				current={musicState.currentSong}
				pause={pauseAudio}
				playState={playingState.music}
				forward={skipForward}
				backward={skipBackward}
			/>
			<PlaylistItems
				songs={musicState.songs}
				select={selectSong}
				active={musicState.currentSong !== null ? musicState.currentSong.id : null}
			/>

			<p className={classes.Attribution}>
				All Songs from{' '}
				<a href="https://www.bensound.com/" target="_blank" rel="noopener noreferrer">
					Bensound.com
				</a>
			</p>
		</div>
	);
};

export default MusicPlayerApp;
