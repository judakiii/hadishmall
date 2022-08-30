import React from 'react';
import '../main/mainPage.css';
const ResturantCards = (props) => {
	return (
		<>
			<div className='w-100 h-100 d-flex flex-row justify-content-between align-items-start glassmorphism mb-2'>
				<div className='w-60 h-100 text-end pt-3 pr-3 d-flex flex-column justify-content-start align-items-start'>
					<span className='title-font'>{props.Name}</span>
					<br />
					<div className='d-flex flex-row flex-wrap justify-content-start w-100 pt-3'>
						<p className='grayColor fs-0-85rem d-flex flex-column align-items-start ml-2 p-0'>
							{props.item1}
						</p>
						<p className='grayColor fs-0-85rem d-flex flex-column align-items-start ml-2'>
							{props.item2}
						</p>
						{props.massage !== 'items less than 3' ? (
							<>
								<p className='grayColor fs-0-85rem d-flex flex-column align-items-start ml-2 p-0'>
									{props.item3}
								</p>
							</>
						) : null}
						<p className='grayColor fs-0-85rem d-flex flex-column align-items-start ml-2 p-0'>
							...
						</p>
					</div>
				</div>
				<div className='w-38 h-100 d-flex flex-row justify-content-end align-items-center'>
					<div
						className='d-flex flex-row justify-content-center align-items-center'
						style={{ width: '6.5rem' }}
					>
						<img src={props.photo} className='w-100 h-100' />
					</div>
				</div>
			</div>
		</>
	);
};
export default ResturantCards;
