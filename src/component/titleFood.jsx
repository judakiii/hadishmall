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
				</div>
			</div>
		</>
	);
};
export default TitleFood;
