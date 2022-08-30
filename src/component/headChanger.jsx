import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import '../main/mainPage.css';
const HeaderChanger = (props) => {
	return (
		<>
			<div
				className='w-100 d-flex flex-row h-8rem'
				style={{ paddingLeft: '15px', paddingRight: '15px' }}
			>
				<div className='col-12 d-flex flex-row align-items-center justify-content-between h-100'>
					<div className='h-100 d-flex flex-column align-items-center justify-content-center'>
						<h2 className='dd mb-0'>هدیش مال</h2>
					</div>
					<Link
						to={'/mainPage'}
						className='col-2 px-0 d-flex flex-row justify-content-end'
					>
						<i className='bi bi-menu-app text-white fs-1-5rem'></i>
					</Link>
				</div>
			</div>
		</>
	);
};
export default HeaderChanger;
