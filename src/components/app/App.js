import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppHeader from "../appHeader/AppHeader";
import { MainPage, ComicsPage, NoMatchPage, SingleComicPage } from '../pages';

const App = () => {

	return (
		<Router>
			<div className="app">
				<AppHeader/>
				<main>
					<Routes>
						<Route path="/" element={<MainPage/>}/>
						<Route path="/comics" element={<ComicsPage/>}/>
						<Route path="/comics/:id" element={<SingleComicPage/>}/>
						<Route path="*" element={<NoMatchPage/>}/>
					</Routes>
				</main>
			</div>
		</Router>
	)  	
}

export default App;