import MarvelService from '../../services/MarvelService';
import CharListItem from '../charListItem/charListItem';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';

import { Component } from 'react';
import PropTypes from 'prop-types';

import './charList.scss';

class CharList extends Component {

	state = {
		charList: [],
		loading: true,
		error: false,
		offset: 100,
		newListLoading: false,
		endList: false, 
	}

	myRef = [];
	
	marvelService = new MarvelService();

	componentDidMount() {
		this.onRequest();
		console.log(this.myRef);
	}
	
	setRef = (elem) => {
		this.myRef.push(elem);
	}

	onCharListLoaded = (newCharList) => {
		if (newCharList.length < 9) {
			this.setState({
				endList: true,
			})
		}

		this.setState( ({offset, charList}) => ({
			charList: [...charList, ...newCharList],
			loading: false,
			error: false,
			newListLoading: false,
			offset: offset + 9,
		}))
	}

	onError = () => {
		this.setState({
			loading: false,
			error: true,
		})
	}

	onNewListLoading = () => {
		this.setState({
			newListLoading: true,
		})
	}

	onRequest = (offset) => {
		this.onNewListLoading();
		this.marvelService
			.getAllCharacters(offset)
			.then(this.onCharListLoaded)
			.catch(this.onError)
	}

	onFocus = (e) => {
		this.myRef.forEach(item => {
			item.classList.remove('char__item_selected');
		})
		e.target.classList.add('char__item_selected');
	}

	render() {
		const {charList, loading, error, offset, newListLoading, endList} = this.state;
		const {onCharSelected} = this.props;
		const elements = charList.map(char => {
			const {id, thumbnail, ...charProps} = char;
			const imgStyle = thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg' ? {'objectFit': 'contain'} : null;

			return (
				<CharListItem 
					key={id} 
					onSetRef={this.setRef} 
					onCharSelected={() => onCharSelected(id)} 
					imgStyle={imgStyle} 
					thumbnail={thumbnail}
					onFocus={(e) => {
						this.onFocus(e);
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
					onClick={() => this.onRequest(offset)}
					disabled={newListLoading}
					style={{display: endList ? 'none' : 'block'}}>
						<div className="inner">load more</div>
				</button>
			</div>
		)
	}	
}

CharList.propTypes = {
	onCharSelected: PropTypes.func.isRequired,
}

export default CharList;