#!/usr/bin/node
const fetch = require('node-fetch');

function getMovieCharacters(movieId) {
	const url = `https://swapi.dev/api/films/${movieId}/`;
	fetch(url)
		.then(response => {
			if (!response.ok) {
				throw new Error('Failed to fetch movie details');
			}
			return response.json();
		})
		.then(data => {
			const characters = data.characters;
			characters.forEach(characterUrl => {
				fetch(characterUrl)
					.then(response => {
						if (!response.ok) {
							throw new Error(`Failed to fetch character details for URL: ${characterUrl}`);
						}
						return response.json();
					})
					.then(characterData => {
						console.log(characterData.name);
					})
					.catch(error => {
						console.error(error.message);
					});
			});
		})
		.catch(error => {
			console.error(error.message);
		});
}

// Example usage: Print characters of "Return of the Jedi" (movie ID = 3)
getMovieCharacters(3);

