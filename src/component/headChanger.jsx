import React from 'react';
import '../main/mainPage.css';
const HeaderChanger = (props) => {
	return (
		<>
			<div
				className='w-100 d-flex flex-row h-10rem'
				style={{ paddingLeft: '15px', paddingRight: '15px' }}
			>
				<div className='col-12 d-flex flex-row align-items-center justify-content-between h-100'>
					<div className='h-100 d-flex flex-row align-items-center justify-content-center pl-3'>
						<div
							className='d-flex flex-row justify-content-center align-items-center'
							style={{ width: '5.5rem' }}
						>
							<img src={props.image} className='w-100 h-100' alt='' />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default HeaderChanger;
