import MarvelService from '../../services/MarvelService';
import CharListItem from '../charListItem/charListItem';
import { Component } from 'react';

import './charList.scss';

class CharList extends Component {

	state = {
		charList: []
	}
	
	marvelService = new MarvelService();
	
	createListItems = async() => {
		await this.marvelService
						.getAllCharacters()
						.then(res => {
							this.setState({
								charList: res,
							})
						})
	}

	componentDidMount() {
		this.createListItems();
	}

	render() {
		const {charList} = this.state;
		const elements = charList.map(char => {
			const {id, ...charProps} = char;

			return (
				<CharListItem key={id} {...charProps}/>
			)
		})

		return(
			<div className="char__list">
				<ul className="char__grid">
					{elements}
				</ul>
				<button className="button button__main button__long">
						<div className="inner">load more</div>
				</button>
			</div>
		)
	}	
}

export default CharList;