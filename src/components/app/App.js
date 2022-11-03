import { useState } from "react";

import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import AppBanner from "../appBanner/AppBanner";
import ComicsList from "../comicsList/ComicsList";
import useMarvelService from "../../services/MarvelService";

import decoration from '../../resources/img/vision.png';

const App = () => {

	const [charSelected, setCharSelected] = useState(null);

	const onCharSelected = (id) => {
		setCharSelected(id);
	}

	return (
		<div className="app">
			<AppHeader/>
			<main>
				<AppBanner/>
				<ComicsList/>
				{/*<ErrorBoundary>
					<RandomChar/>
				</ErrorBoundary>
				<div className="char__content">
					<ErrorBoundary>
						<CharList onCharSelected={onCharSelected}/>
					</ErrorBoundary>
					<ErrorBoundary>
						<CharInfo charId={charSelected}/>
					</ErrorBoundary>
				</div>
				<img className="bg-decoration" src={decoration} alt="vision"/>*/}
			</main>
		</div>
	)  
}

export default App;