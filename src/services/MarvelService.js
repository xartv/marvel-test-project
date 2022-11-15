import { useHttp } from '../hooks/http.hook';

const useMarvelService = () => {
	const {loading, request, error, clearError, setError} = useHttp(); // вытаскиваем сущности хука в отдельные переменные

	const _apiBase = 'https://gateway.marvel.com:443/v1/public/';
	const _apiKey = 'apikey=21aa5af94424603715dc10109257132d'; 
	const _baseOffset = 100;
	const _issueNumber = 1;
	const _comicsLimit = 8;

	const getAllCharacters = async (offset = _baseOffset) => {
		const res = await request(`${_apiBase}characters?limit=9&offset=${offset}&${_apiKey}`);
		return res.data.results.map(_transformCharacter); // можно не писать item => this._transformCharacter(item), приходящий аргумент итак попадет в коллбэк
	}
	
	const getCharacter = async (id) => {
		const res = await request(`${_apiBase}characters/${id}?limit=9&offset=210&${_apiKey}`);
		return _transformCharacter(res.data.results[0]);
	}

	const findCharacter = async (name) => {

		let res;
		let data;
		try {
			res = await request(`${_apiBase}characters?name=${name}&${_apiKey}`);
			if (res.data.results.length === 0) throw new Error(`There is no "${name}" in database`)
			data = _transformCharacter(res.data.results[0]) 
		} catch(e) {
			setError(e.message)
		}

		return data;
	}

	const getAllComics = async(offset = _baseOffset) => {
		const res = await request(`${_apiBase}comics?issueNumber=${_issueNumber}&orderBy=focDate&limit=${_comicsLimit}&offset=${offset}&${_apiKey}`);
		return res.data.results.map(_transformComics);
	}

	const getComic = async(id) => {
		const res = await request(`${_apiBase}comics/${id}?${_apiKey}`);
		return _transformComics(res.data.results[0]);
	}

	const _transformComics = (comics) => {
		return {
			id: comics.id,
			name: comics.title,
			thumbnail: comics.thumbnail.path + '.' + comics.thumbnail.extension,
			price: comics.prices[0].price,
			url: comics.urls[0].url,
			description: comics.description,
			pageCount: comics.pageCount,
			language: comics.textObjects[0] ? comics.textObjects[0].language : null,
		}
	}

	const _transformCharacter = (char) => {
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

	return {loading, error, getAllCharacters, getCharacter, clearError, getAllComics, getComic, findCharacter, setError} // возвращаем сущности (состояния загрузки и эррора, пройдя через сервис, передадутся после вызова сервиса в компонент)
}

export default useMarvelService;