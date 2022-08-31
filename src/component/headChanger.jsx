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
					<div className='h-100 d-flex flex-row align-items-center justify-content-center pl-3'>
						<div
							className='d-flex flex-row justify-content-center align-items-center'
							style={{ width: '5rem' }}
						>
							<img src={props.image} className='w-100 h-100' alt='' />
						</div>
						{/* <h2
							className={`mb-0 ${
								props.titleName === 'هدیش مال'
									? 'textColorespeciall'
									: 'text-white'
							}`}
						>
							{props.titleName}
						</h2> */}
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
