import { Link, NavLink, useLocation } from 'react-router-dom';

import './appHeader.scss';

const AppHeader = () => {
	const {pathname} = useLocation();
	console.log();

	return (
		<header className="app__header">
			<h1 className="app__title">
				<Link to="/">
					<span>Marvel</span> information portal
				</Link>
			</h1>
			<nav className="app__menu">
				<ul>
					<li><NavLink end className={({isActive}) => isActive || pathname.includes('characters') ? 'active' : null} to="/">Characters</NavLink></li>
					/
					<li><NavLink className={({isActive}) => isActive ? 'active' : null} to="/comics">Comics</NavLink></li>
				</ul>
			</nav>
		</header>
	)
}

export default AppHeader;