

export default class MarvelService {
	_apiBase = 'https://gateway.marvel.com:443/v1/public/';
	_apiKey = 'apikey=21aa5af94424603715dc10109257132d';

	getResource = async (url) => {
		let res = await fetch(url);
	
		if (!res.ok) {
			throw new Error(`Could not fetch ${url}, status: ${res.status}`);
		}
	
		return await res.json();
	}

	getAllCharacters = async () => {
		const res = await this.getResource(`${this._apiBase}characters?limit=9&offset=210&${this._apiKey}`);
		return res.data.results.map(this._transformCharacter); // можно не писать item => this._transformCharacter(item), приходящий аргумент итак попадет в коллбэк
	}
	
	getCharacter = async (id) => {
		const res = await this.getResource(`${this._apiBase}characters/${id}?limit=9&offset=210&${this._apiKey}`);
		return this._transformCharacter(res.data.results[0]);
	}

	_transformCharacter = (char) => {
		let descr = char.description;
		if (!descr) {
			descr = "Ooops..there's no info about this character"
		} else if (descr.length > 210) {
			descr = `${descr.slice(0, 207)}...`;
		}
		
		return {
			name: char.name,
			description: descr,
			thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
			homepage: char.urls[0].url,
			wiki: char.urls[1].url,
			id: char.id,
			comics: char.comics.items,
		}		
	}
}

