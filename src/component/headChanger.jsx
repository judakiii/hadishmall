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
					<div className='w-100 h-100 d-flex flex-row align-items-center justify-content-start pl-3'>
						<div
							className={`d-flex flex-row justify-content-center align-items-center ${
								props.titleName === 'joodco' ? 'w-3rem' : 'w-5-5rem'
							}`}
						>
							<img src={props.image} className='w-100 h-100' alt='' />
						</div>
						<span
							className={`${
								props.titleName === 'joodco' ? 'd-inline' : 'd-none'
							} text-nowrap fs-1-5rem pr-3`}
						>
							دیجی منو
						</span>
					</div>
				</div>
			</div>
		</>
	);
};
export default HeaderChanger;
