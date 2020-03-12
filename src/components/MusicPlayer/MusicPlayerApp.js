import React, { useRef, useEffect, useState } from 'react';
import PlaylistItems from './PlaylistItems';
import classes from './styles/MusicPlayerApp.module.css';
import MusicPlayer from './MusicPlayer';
import { songs } from './musicData';

const MusicPlayerApp = props => {
	const audioRef = useRef(null);
	const progressBarRef = useRef(null);
	const barRef = useRef(null);

	const playAudio = () => {
		audioRef.current.currentTime = 0;
		audioRef.current.play();
	};

	const stopAudio = () => {
		audioRef.current.pause();
		audioRef.current.currentTime = 0;
	};

	const [musicState, setMusicState] = useState({
		songs: [...songs],
		currentSong: null
	});

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
		progressBar.addEventListener('click', setProgress);

		return () => {
			audio.removeEventListener('timeupdate', showProgress);
			progressBar.removeEventListener('click', setProgress);
		};
	});

	useEffect(() => {
		if (musicState.currentSong === null) return;
		audioRef.current.load();
		playAudio();
	}, [musicState.currentSong]);

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
			/>
			<PlaylistItems songs={musicState.songs} select={selectSong} />
		</div>
	);
};

export default MusicPlayerApp;
