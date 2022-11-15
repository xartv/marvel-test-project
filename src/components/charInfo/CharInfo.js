import useMarvelService from '../../services/MarvelService';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';
import Skeleton from '../skeleton/Skeleton';
import FindChar from "../findChar/FindChar";

import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import './charInfo.scss';

const CharInfo = (props) => {

	const [char, setChar] = useState(null);

	const {loading, error, getCharacter, clearError} = useMarvelService();

	useEffect(() => {
		updateChar();
		// eslint-disable-next-line
	}, [props.charId]);

	const onCharLoaded = (char) => {
		setChar(char);
	}

	const updateChar = () => {
		if(!props.charId) {
			return;
		}

		clearError();
		getCharacter(props.charId)
			.then(onCharLoaded)
	};

	const content = !(error || loading || !char) ? <Content char={char}/> : null;
	const spinner = loading ? <Spinner/> : null;
	const errorMessage = error ? <ErrorMessage/> : null;
	const skeleton = !(error || loading || char) ? <Skeleton/> : null;

	return (
		<div className='char__wrapper'>
			<div className="char__info">
				{content}
				{spinner}
				{errorMessage}
				{skeleton}
			</div>
			<FindChar/>
		</div>
	)
}

const Content = ({char}) => {
	const {name, description, thumbnail, homepage, wiki} = char;
	let {comics} = char;

	if (comics.length > 10) {
		comics = comics.splice(0, 10);
	}

	let elements = comics.map((item, id) => {
			return (
				<li key={id} className="char__comics-item">
					{item.name}
				</li>
			)
	})

	elements = elements.length === 0 ? <div>There's no comics with this character</div> : elements; 

	const imgStyle = thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg' ? {'objectFit': 'contain'} : null;

	return (
		<>
			<div className="char__basics">
							<img style={imgStyle} src={thumbnail} alt={name}/>
							<div>
									<div className="char__info-name">{name}</div>
									<div className="char__btns">
											<a href={homepage} className="button button__main">
													<div className="inner">homepage</div>
											</a>
											<a href={wiki} className="button button__secondary">
													<div className="inner">Wiki</div>
											</a>
									</div>
							</div>
					</div>
					<div className="char__descr">
							{description}
					</div>
					<div className="char__comics">Comics:</div>
					<ul className="char__comics-list">
							{elements}
					</ul>
		</>
	)
}

CharInfo.propTypes = {
	charId: PropTypes.number,
}

export default CharInfo;