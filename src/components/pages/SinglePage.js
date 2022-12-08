import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import useMarvelService from '../../services/MarvelService';
import setContent from '../../utils/setContent';

import AppBanner from '../appBanner/AppBanner';

import './singlePage.scss';

const SinglePage = (props) => {
	const { id } = useParams();
	const [single, setSingle] = useState('');
	const { getComic, getCharacter, process, setProcess } = useMarvelService();

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
				.then(() => setProcess('confirmed'));
		}
		if (props.char) {
			getCharacter(id)
				.then(onCharLoaded)
				.then(() => setProcess('confirmed'));
		}
	}
	
	return (
		<>
			<AppBanner/>
			{props.comic ? setContent(process, ComicContent, single) : props.char ? setContent(process, CharContent, single) : null}
		</>
	)
}

const ComicContent = ({data}) => {
	const {name, description, thumbnail, price, pageCount, language} = data;
	return (
		<div className="single">
			<Helmet>
				<meta
					name="description"
					content={`${name} comics book`}
					/>
				<title>{name}</title>
			</Helmet>
			<img src={thumbnail} alt={name} className="single__img"/>
			<div className="single__info">
				<h2 className="single__name">{name}</h2>
				<p className="single__descr">{description}</p>
				<p className="single__descr">{pageCount} pages</p>
				<p className="single__descr">language: {language}</p>
				<div className="single__price">{price} $</div>
			</div>
			<Link to="/marvel-test-project/comics" className="single__back">Back to all</Link>
		</div>
	)
}

const CharContent = ({data}) => {
	const {name, description, thumbnail} = data;
	return (
		<div className="single">
			<Helmet>
				<meta
					name="description"
					content={`${name} single page`}
					/>
				<title>{name}</title>
			</Helmet>
			<img src={thumbnail} alt={name} className="single__img"/>
			<div className="single__info">
				<h2 className="single__name">{name}</h2>
				<p className="single__descr">{description}</p>
			</div>
			<Link to="/marvel-test-project" className="single__back">Back main page</Link>
		</div>
	)
}

export default SinglePage;