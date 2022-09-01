import React from 'react';
import { Link } from 'react-router-dom';
const BacktoHome = () => {
	return (
		<>
			<a
				href='#top'
				className='px-0 d-flex flex-row justify-content-center align-items-center backTotop rounded-circle'
			>
				<i className='bi bi-chevron-up text-white fs-1-5rem'></i>
			</a>
			<Link
				to={'/home'}
				className='px-0 d-flex flex-row justify-content-center align-items-center backTohome rounded-circle'
			>
				<i className='bi bi-house text-white fs-1-5rem'></i>
			</Link>
		</>
	);
};
export default BacktoHome;
