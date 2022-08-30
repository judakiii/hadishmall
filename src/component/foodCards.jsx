import React from 'react';
import noImage from '../icons/hadish.jpg';
import money from '../icons/money.png';
import '../main/mainPage.css';
const FoodCards = (props) => {
	return (
		<>
			<div className='w-18rem h-27rem d-flex flex-column justify-content-start align-items-start borderOfcards mb-4 boxShadow part-color mx-2'>
				<div className='w-100 h-55 d-flex flex-row justify-content-center align-items-center'>
					<div className='w-100 h-100 d-flex flex-row justify-content-center align-items-center'>
						<img src={noImage} className='w-100 h-100 borderOfphoto' />
					</div>
				</div>
				<div className='w-94 h-100 text-start mr-2 ml-2 d-flex flex-column justify-content-center align-items-start pl-1 pr-1'>
					<div className='fs-1-5rem whiteColor h-2rem pt-2'>
						{/* <img src={props.icon} className={'w-15 h-100'} /> */}
						<p id='titleFood' className='text-right'>
							{props.Name}
						</p>
					</div>
					<div className='fs-0-75rem text-start h-7rem d-flex flex-column justify-content-center align-items-start'>
						<p className='text-right grayColor'>{props.Details}</p>
					</div>
					<div className='d-flex flex-row justify-content-start fs-1-2rem whiteColor w-100 h-2rem moneyBox'>
						<img src={money} className={'col-2 px-0 h-100'} />
						<span
							className='px-2 d-flex flex-row justify-content-start align-items-center pb-2'
							style={{ fontSize: '1.75rem' }}
						>
							:
						</span>
						<p className='d-inline'>230,000</p>
					</div>
				</div>
			</div>
		</>
	);
};
export default FoodCards;
