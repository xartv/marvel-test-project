import useMarvelService from '../../services/MarvelService';
import { useState, useEffect } from 'react';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

import './comicsList.scss';

const ComicsList = () => {

	const [comicsList, setComicsList] = useState([]);
	const [offset, setOffset] = useState(100);
	const [newListLoading, setNewListLoading] = useState(false);
	const [endList, setEndList] = useState(false);
	const {loading, error, clearError, getAllComics} = useMarvelService();

	useEffect(() => {
		onRequest(offset, true)
	}, [])

	const onRequest = (offset, initial) => {
		clearError();
		initial ? setNewListLoading(false) : setNewListLoading(true); // если initial true, то это означает, что у нас первичная загрузка
		getAllComics(offset)
			.then(onComicsListLoaded)
	}

	const onComicsListLoaded = (newComicsList) => {
		if (newComicsList.length < 8) {
			setEndList(true);
		}

		setComicsList([...comicsList, ...newComicsList]);
		setNewListLoading(false);
		setOffset(offset => offset + 8);
	}
	
	const elements = comicsList.map((comics, i) => {
		const {id, name, thumbnail, url} = comics;
		let {price} = comics;
		const imgStyle = thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg' ? {'objectFit': 'contain'} : null;
		price = price === 0 ? 'Not available' : `${price}$`;

		return (
			<li key={id} className="comics__item">
				<a href={url}>
						<img style={imgStyle} src={thumbnail} alt="ultimate war" className="comics__item-img"/>
						<div className="comics__item-name">{name}</div>
						<div className="comics__item-price">{price}</div>
				</a>
			</li>
		)
	})

	const spinner = loading && !newListLoading ? <Spinner/> : null;
	const errorMessage = error ? <ErrorMessage/> : null;

	return (
			<div className="comics__list">
				{spinner}
				{errorMessage}
					<ul className="comics__grid">
							{elements}
					</ul>
					<button 
						disabled={newListLoading ? true : false}
						className="button button__main button__long"
						onClick={() => onRequest(offset)}
						style={{display: endList ? 'none' : 'block'}}>
							<div className="inner">load more</div>
					</button>
			</div>
	)
}

export default ComicsList;