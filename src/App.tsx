import {Suspense, useState} from 'react';
import './styles/style.scss'
import {Link, Route, Routes} from 'react-router-dom';
import {About} from "./pages/about";
import {Auth} from "./pages/auth";
import {classNames} from "./helpers/classNames/classNames";
import {useTheme} from "./theme/useTheme";

export const App = () => {
	const [count, setCount] = useState(0);
	const {theme, toggleTheme} = useTheme()
	
	return (
		<>
			<div className={classNames('app', {}, [theme])}>
				<h1>{count}</h1>
				<br/>
				<button onClick={() => setCount(prev => prev + 1)}>Increment</button>
				<button onClick={toggleTheme}>Переключить тему</button>
			</div>
			<Link to={'/about'}>About</Link>
			<br />
			<Link to={'/auth'}>Auth</Link>
			<Suspense fallback={'Загрузка'}>
				<Routes>
					<Route path={'/about'} element={<About />} />
					<Route path={'/auth'} element={<Auth />}/>
				</Routes>
			</Suspense>
		</>
	);
};