import MarvelService from '../../services/MarvelService';
import CharListItem from '../charListItem/charListItem';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';

import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import './charList.scss';

const CharList = (props) => {

	const [charList, setCharList] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [offset, setOffset] = useState(100);
	const [newListLoading, setNewListLoading] = useState(false);
	const [endList, setEndList] = useState(false);

	const myRef = useRef([]);
	
	const marvelService = new MarvelService();

	useEffect(() => {
		onRequest();
	}, []);
	
	//setRef = (elem) => {
	//	this.myRef.push(elem);
	//}

	const onCharListLoaded = (newCharList) => {
		if (newCharList.length < 9) {
			setEndList(true)
		}

		setCharList(charList => [...charList, ...newCharList]);
		setLoading(false);
		setError(false);
		setNewListLoading(false);
		setOffset(offset => offset + 9);
	}

	const onError = () => {
		setLoading(false);
		setError(true);
	}

	const onNewListLoading = () => {
		setNewListLoading(true);
	}

	const onRequest = (offset) => {
		onNewListLoading();
		marvelService
			.getAllCharacters(offset)
			.then(onCharListLoaded)
			.catch(onError)
	}

	const onFocus = (e) => {
		myRef.current.forEach(item => {
			item.classList.remove('char__item_selected');
		})
		e.target.classList.add('char__item_selected');
	}

	
	
	const {onCharSelected} = props;
	const elements = charList.map((char, i) => {
		const {id, thumbnail, ...charProps} = char;
		const imgStyle = thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg' ? {'objectFit': 'contain'} : null;

		return (
			<CharListItem 
				key={id} 
				onSetRef={(el) => myRef.current[i] = el} 
				onCharSelected={() => onCharSelected(id)} 
				imgStyle={imgStyle} 
				thumbnail={thumbnail}
				onFocus={(e) => {
					onFocus(e);
					onCharSelected(id);
				}} 
				{...charProps}/>
		)
	})

	const spinner = loading ? <Spinner/> : null;
	const errorMessage = error ? <ErrorMessage/> : null;
	const content = !(loading || error) ? elements : null

	return(
		<div className="char__list">
			{errorMessage}
			{spinner}
			<ul className="char__grid">
				{content}
			</ul>
			<button 
				className="button button__main button__long" 
				onClick={() => onRequest(offset)}
				disabled={newListLoading}
				style={{display: endList ? 'none' : 'block'}}>
					<div className="inner">load more</div>
			</button>
		</div>
	)	
}

CharList.propTypes = {
	onCharSelected: PropTypes.func.isRequired,
}

export default CharList;