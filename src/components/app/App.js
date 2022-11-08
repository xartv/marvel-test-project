import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppHeader from "../appHeader/AppHeader";
import Spinner from '../spinner/Spinner';

const MainPage = lazy(() => import('../pages/MainPage'));
const ComicsPage = lazy(() => import('../pages/ComicsPage'));
const NoMatch = lazy(() => import('../pages/404'));
const SingleComicPage = lazy(() => import('../pages/SingleComicPage'));

const App = () => {

	return (
		<Router>
			<div className="app">
				<AppHeader/>
				<main>
					<Suspense fallback={<Spinner/>}>
						<Routes>
							<Route path="/" element={<MainPage/>}/>
							<Route path="/comics" element={<ComicsPage/>}/>
							<Route path="/comics/:id" element={<SingleComicPage/>}/>
							<Route path="*" element={<NoMatch/>}/>
						</Routes>
					</Suspense>
				</main>
			</div>
		</Router>
	)  	
}

export default App;