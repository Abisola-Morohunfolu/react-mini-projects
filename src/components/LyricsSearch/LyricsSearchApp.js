import React, { Component } from 'react';
import SearchBar from './LyricsSearchComponents/SearchBar';
import SearchResults from './LyricsSearchComponents/searchResults';
import { apiUrl } from './baseUrl';
import DisplayLyrics from './LyricsSearchComponents/DisplayLyrics';

class LyricsSearchApp extends Component {
	state = {
		searchInput: '',
		searchResults: null,
		lyrics: null,
		errorMessage: null
	};

	searchTerm = async term => {
		try {
			const searchRequest = await fetch(`${apiUrl}/suggest/${term}`);
			if (searchRequest.ok) {
				const searchResponse = await searchRequest.json();
				const data = searchResponse.data;
				this.setState({
					searchResults: [...data],
					errorMessage: null,
					lyrics: null
				});
			} else {
				const error = new Error('Some went wrong');
				throw error;
			}
		} catch (error) {
			this.setState({
				errorMessage: 'Something went wrong... Try Again.'
			});
		}
	};

	getLyrics = async (artist, title) => {
		try {
			const lyricsRequest = await fetch(`${apiUrl}/v1/${artist}/${title}`);
			if (lyricsRequest.ok) {
				const response = await lyricsRequest.json();
				const lyrics = response.lyrics;
				this.setState({
					lyrics: {
						artist: artist,
						title: title,
						lyrics: lyrics
					},
					searchResults: null,
					errorMessage: null
				});
			} else {
				const error = new Error('Some went wrong');
				throw error;
			}
		} catch (error) {
			this.setState({
				errorMessage: 'Lyric not available',
				searchResults: null
			});
		}
	};

	searchHandler = value => {
		if (value === '') {
			this.setState({
				errorMessage: 'Please enter a word',
				searchResults: null,
				lyrics: null
			});
			return;
		}
		this.searchTerm(value);
	};

	render() {
		return (
			<div>
				<SearchBar search={this.searchHandler} />
				{this.state.errorMessage && <p>{this.state.errorMessage}</p>}
				{this.state.searchResults && (
					<SearchResults results={this.state.searchResults} getLyric={this.getLyrics} />
				)}
				{this.state.lyrics === null ? null : (
					<DisplayLyrics
						artist={this.state.lyrics.artist}
						title={this.state.lyrics.title}
						lyrics={this.state.lyrics.lyrics}
					/>
				)}
			</div>
		);
	}
}

export default LyricsSearchApp;
