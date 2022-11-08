import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useMarvelService from '../../services/MarvelService';

import './singleComicPage.scss';

const SingleComicPage = () => {
	const { id } = useParams();
	const [comic, setComic] = useState('');
	const { getComic } = useMarvelService();

	useEffect(() => {
		onRequest(id);
		// eslint-disable-next-line
	}, [id])

	const onComicLoaded = (comic) => {
		setComic(comic);
		console.log(comic);
	}

	const onRequest = (id) => {
		getComic(id)
			.then(onComicLoaded)
	}
	
	const {name, description, thumbnail, price, pageCount, language} = comic;

	return (
		<div className="single-comic">
				<img src={thumbnail} alt="x-men" className="single-comic__img"/>
				<div className="single-comic__info">
						<h2 className="single-comic__name">{name}</h2>
						<p className="single-comic__descr">{description}</p>
						<p className="single-comic__descr">{pageCount} pages</p>
						<p className="single-comic__descr">language: {language}</p>
						<div className="single-comic__price">{price} $</div>
				</div>
				<Link to="../comics" className="single-comic__back">Back to all</Link>
		</div>
	)
}

export default SingleComicPage;