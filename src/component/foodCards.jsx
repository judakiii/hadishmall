import React, { useContext } from 'react';
import noImage from '../icons/hadish.jpg';
import money from '../icons/money.png';
import Appcontext from '../Appcontext';
import '../main/mainPage.css';
const FoodCards = ({ Photo, Name, Details, Price, nameOfRestaurant }) => {
	// const { onItemDelete } = useContext(Appcontext);
	const {
		AddtoCartburgerland,
		AddtoCartanatolia,
		AddtoCartchia,
		AddtoCartchickenCounter,
		AddtoCartmaya,
		AddtoCartmizban,
		AddtoCartperprok,
		AddtoCartsaj,
	} = useContext(Appcontext);
	return (
		<>
			<div className='w-18rem h-30rem d-flex flex-column justify-content-start align-items-start borderOfcards mb-4 boxShadow part-color mx-2'>
				<div className='w-100 h-55 d-flex flex-row justify-content-center align-items-center'>
					<div className='w-100 h-100 d-flex flex-row justify-content-center align-items-center'>
						<img src={noImage} className='w-100 h-100 borderOfphoto' alt='' />
					</div>
				</div>
				<div className='w-94 h-100 text-start mr-2 ml-2 d-flex flex-column justify-content-between align-items-start pl-1 pr-1'>
					<div className='fs-1-5rem text-white pt-2'>
						<p id='titleFood' className='text-right'>
							{Name}
						</p>
					</div>
					<div className='fs-0-75rem text-start d-flex flex-column justify-content-center align-items-start'>
						<p className='text-right Text-gray'>{Details}</p>
					</div>
					<div className='d-flex flex-row justify-content-between fs-1-2rem text-white w-100 h-2rem mb-3'>
						<div className='col-7 d-flex flex-row justify-content-start fs-1-2rem text-white px-0'>
							<img src={money} className={'col-3 px-0 h-100'} alt='' />
							<span
								className='px-2 d-flex flex-row justify-content-start align-items-center pb-2'
								style={{ fontSize: '1.75rem' }}
							>
								:
							</span>
							<p className='d-inline'>{Price.toLocaleString()}</p>
						</div>
						<div className='d-flex flex-row justify-content-end align-items-center col-5 px-0'>
							{nameOfRestaurant === 'burgerLand' ? (
								<>
									<i
										className='bi bi-bag-plus fs-1-5rem pr-2'
										onClick={() => AddtoCartburgerland({ Name, Price })}
									></i>
								</>
							) : nameOfRestaurant === 'anatolia' ? (
								<>
									<i
										className='bi bi-bag-plus fs-1-5rem pr-2'
										onClick={() => AddtoCartanatolia({ Name, Price })}
									></i>
								</>
							) : nameOfRestaurant === 'chia' ? (
								<>
									<i
										className='bi bi-bag-plus fs-1-5rem pr-2'
										onClick={() => AddtoCartchia({ Name, Price })}
									></i>
								</>
							) : nameOfRestaurant === 'chickenCounter' ? (
								<>
									<i
										className='bi bi-bag-plus fs-1-5rem pr-2'
										onClick={() => AddtoCartchickenCounter({ Name, Price })}
									></i>
								</>
							) : nameOfRestaurant === 'maya' ? (
								<>
									<i
										className='bi bi-bag-plus fs-1-5rem pr-2'
										onClick={() => AddtoCartmaya({ Name, Price })}
									></i>
								</>
							) : nameOfRestaurant === 'mizban' ? (
								<>
									<i
										className='bi bi-bag-plus fs-1-5rem pr-2'
										onClick={() => AddtoCartmizban({ Name, Price })}
									></i>
								</>
							) : nameOfRestaurant === 'perprok' ? (
								<>
									<i
										className='bi bi-bag-plus fs-1-5rem pr-2'
										onClick={() => AddtoCartperprok({ Name, Price })}
									></i>
								</>
							) : nameOfRestaurant === 'saj' ? (
								<>
									<i
										className='bi bi-bag-plus fs-1-5rem pr-2'
										onClick={() => AddtoCartsaj({ Name, Price })}
									></i>
								</>
							) : (
								''
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default FoodCards;
