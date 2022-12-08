import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import AppHeader from "../appHeader/AppHeader";
import Spinner from '../spinner/Spinner';

const MainPage = lazy(() => import('../pages/MainPage'));
const ComicsPage = lazy(() => import('../pages/ComicsPage'));
const NoMatch = lazy(() => import('../pages/404'));
const SinglePage = lazy(() => import('../pages/SinglePage'));

const App = () => {

	return (
		<Router>
			<div className="app">
				<AppHeader/>
				<main>
					<Suspense fallback={<Spinner/>}>
						<Routes>
							<Route path="/marvel-test-project" element={<MainPage/>}/>
							<Route path="/marvel-test-project/comics" element={<ComicsPage/>}/>
							<Route path="/marvel-test-project/comics/:id" element={<SinglePage comic={true}/>}/>
							<Route path="/marvel-test-project/characters/:id" element={<SinglePage char={true}/>}/>
							<Route path="*" element={<NoMatch/>}/>
						</Routes>
					</Suspense>
				</main>
			</div>
		</Router>
	)  	
}

export default App;