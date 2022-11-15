import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useMarvelService from '../../services/MarvelService';

import './singlePage.scss';

const SinglePage = (props) => {
	const { id } = useParams();
	const [single, setSingle] = useState('');
	const { getComic, getCharacter } = useMarvelService();

	useEffect(() => {
		onRequest(id);
		// eslint-disable-next-line
	}, [id])

	const onComicLoaded = (comic) => {
		setSingle(comic);
	}

	const onCharLoaded = (char) => {
		setSingle(char);
	}

	const onRequest = (id) => {
		if (props.comic) {
			getComic(id)
				.then(onComicLoaded)
		}
		if (props.char) {
			getCharacter(id)
				.then(onCharLoaded)
		}
	}
	
	const comicContent = props.comic ? <ComicContent comic={single}/> : null;
	const charContent = props.char ? <CharContent char={single}/> : null;
	
	return (
		<>
			{comicContent}
			{charContent}
		</>
	)
}

const ComicContent = ({comic}) => {
	const {name, description, thumbnail, price, pageCount, language} = comic;
	return (
		<div className="single">
		<img src={thumbnail} alt={name} className="single__img"/>
		<div className="single__info">
			<h2 className="single__name">{name}</h2>
			<p className="single__descr">{description}</p>
			<p className="single__descr">{pageCount} pages</p>
			<p className="single__descr">language: {language}</p>
			<div className="single__price">{price} $</div>
		</div>
		<Link to="../comics" className="single__back">Back to all</Link>
	</div>
	)
}

const CharContent = ({char}) => {
	const {name, description, thumbnail} = char;
	return (
		<div className="single">
		<img src={thumbnail} alt={name} className="single__img"/>
		<div className="single__info">
			<h2 className="single__name">{name}</h2>
			<p className="single__descr">{description}</p>
		</div>
		<Link to="/" className="single__back">Back main page</Link>
	</div>
	)
}

export default SinglePage;