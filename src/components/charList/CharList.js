import MarvelService from '../../services/MarvelService';
import CharListItem from '../charListItem/charListItem';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';
import { Component } from 'react';

import './charList.scss';

class CharList extends Component {

	state = {
		charList: [],
		loading: true,
		error: false,
	}
	
	marvelService = new MarvelService();
	
	onCharLoaded = (charList) => {
		this.setState({
			charList,
			loading: false,
			error: false,
		})
	}

	onError = () => {
		this.setState({
			loading: false,
			error: true,
		})
	}

	createListItems = () => {
		this.marvelService
			.getAllCharacters()
			.then(this.onCharLoaded)
			.catch(this.onError)
	}

	componentDidMount() {
		this.createListItems();
	}

	render() {
		const {charList, loading, error} = this.state;
		const elements = charList.map(char => {
			const {id, thumbnail, ...charProps} = char;
			const imgStyle = thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg' ? {'objectFit': 'contain'} : null;

			return (
				<CharListItem key={id} imgStyle={imgStyle} thumbnail={thumbnail} {...charProps}/>
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
				<button className="button button__main button__long">
						<div className="inner">load more</div>
				</button>
			</div>
		)
	}	
}

export default CharList;