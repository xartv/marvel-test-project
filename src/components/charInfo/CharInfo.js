import MarvelService from '../../services/MarvelService';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';
import Skeleton from '../skeleton/Skeleton';

import { Component } from 'react';
import PropTypes from 'prop-types';

import './charInfo.scss';

class CharInfo extends Component {

	state = {
		char: null,
		loading: false,
		error: false,
	}

	marvelSevice = new MarvelService();

	componentDidUpdate(prevProps) {
		if(this.props.charId !== prevProps.charId) {
			this.updateChar();
		}
	}

	componentDidMount() {
		this.updateChar();
	}

	onCharLoaded = (char) => {
		this.setState({
			char, 
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

	onCharLoading = () => {
		this.setState(({loading: true}));
	}

	updateChar = () => {
		const {charId} = this.props;

		if(!charId) {
			return;
		}

		this.onCharLoading();

		this.marvelSevice
			.getCharacter(charId)
			.then(this.onCharLoaded)
			.catch(this.onError)
	};

	render() {
		const {char, loading, error} = this.state;

		const content = !(error || loading || !char) ? <Content char={char}/> : null;
		const spinner = loading ? <Spinner/> : null;
		const errorMessage = error ? <ErrorMessage/> : null;
		const skeleton = !(error || loading || char) ? <Skeleton/> : null;

		return (
			<div className="char__info">
				{content}
				{spinner}
				{errorMessage}
				{skeleton}
			</div>
	)
	}
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