import React from 'react';
const TitleFood = (props) => {
	return (
		<>
			<div
				id={props.id}
				className='d-flex flex-row justify-content-between align-items-center col-12 h-7rem text-end mb-4'
			>
				<div className='col-12 d-flex flex-row justify-content-between align-items-center h-100 text-end'>
					<span className='fs-2rem'>{props.titleName}</span>
					<a
						href='#top'
						className='col-2 p-0 d-flex flex-column align-items-end'
					>
						<i className='bi bi-chevron-up pt-2 fs-1-5rem'></i>
					</a>
				</div>
			</div>
		</>
	);
};
export default TitleFood;
