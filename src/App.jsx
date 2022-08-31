import React, { useEffect, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Mizban from './main/mizban';
import BurgerLand from './main/burgerLand';
import Anatolia from './main/anatolia';
import ChickenCounter from './main/chickenCounter';
import Chia from './main/chia';
import Perprok from './main/perprok';
import Saj from './main/saj';
import Maya from './main/maya';
import ResturantPage2 from './main/resturantPage2';
import './App.css';
const Mainpage = React.lazy(() => import('./main/resturantPage'));
const App = () => {
	useEffect(() => (document.title = 'Hadish Mall '), []);
	return (
		<>
			<Suspense fallback={<span>Loading...</span>}>
				<div
					className='w-100 d-flex flex-column justify-content-start align-items-start bg-color'
					style={{ minHeight: '100vh' }}
				>
					<Router>
						<Routes>
							<Route index element={<Mainpage />} />
							<Route exact path='*' element={<Mainpage />} />
							<Route exact path='/resturantPage' element={<Mainpage />} />
							<Route exact path='/mainPage' element={<ResturantPage2 />} />
							<Route exact path='/resturantPage/mizban' element={<Mizban />} />
							<Route
								exact
								path='/resturantPage/burgerLand'
								element={<BurgerLand />}
							/>
							<Route
								exact
								path='/resturantPage/anatolia'
								element={<Anatolia />}
							/>
							<Route
								exact
								path='/resturantPage/chickenCounter'
								element={<ChickenCounter />}
							/>
							<Route exact path='/resturantPage/chia' element={<Chia />} />
							<Route
								exact
								path='/resturantPage/perprok'
								element={<Perprok />}
							/>
							<Route exact path='/resturantPage/saj' element={<Saj />} />
							<Route exact path='/resturantPage/maya' element={<Maya />} />
						</Routes>
					</Router>
				</div>
			</Suspense>
		</>
	);
};
export default App;
