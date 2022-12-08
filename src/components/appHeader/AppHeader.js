import { Link, NavLink, useLocation } from 'react-router-dom';

import './appHeader.scss';

const AppHeader = () => {
	const {pathname} = useLocation();

	return (
		<header className="app__header">
			<h1 className="app__title">
				<Link to="/marvel-test-project">
					<span>Marvel</span> information portal
				</Link>
			</h1>
			<nav className="app__menu">
				<ul>
					<li><NavLink end className={({isActive}) => isActive || pathname.includes('characters') ? 'active' : null} to="/marvel-test-project">Characters</NavLink></li>
					/
					<li><NavLink className={({isActive}) => isActive ? 'active' : null} to="/marvel-test-project/comics">Comics</NavLink></li>
				</ul>
			</nav>
		</header>
	)
}

export default AppHeader;