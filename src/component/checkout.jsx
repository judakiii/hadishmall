import React from 'react';
import { useContext } from 'react';
import Appcontext from '../Appcontext';
import burgerLand from '../icons/burgerLand.png';
import anatolia from '../icons/anatolia.png';
import chickenCounter from '../icons/chickenCounter.png';
import saj from '../icons/saj.png';
import mizban from '../icons/mizban.png';
import maya from '../icons/maya.png';
import chia from '../icons/chia.png';
import perprok from '../icons/perperook.png';
const Checkout = () => {
	const {
		itemOfburgerLand,
		itemOfanatolia,
		itemOfchia,
		itemOfchickenCounter,
		itemOfmaya,
		itemOfmizban,
		itemOfperprok,
		itemOfsaj,
	} = useContext(Appcontext);
	let sumBurgerland = 0,
		sumAnatolia = 0,
		sumChia = 0,
		sumChickencounter = 0,
		sumMaya = 0,
		sumMizban = 0,
		sumPerprok = 0,
		sumSaj = 0;
	return (
		<>
			<div className='w-100 d-flex flex-column align-items-center justify-content-start mb-5 pb-3'>
				<span className='w-100 d-flex flex-row justify-content-start text-white py-5 px-3 fs-2rem'>
					<i className='bi bi-list-task px-2'></i>
					<span>سبد خرید</span>
				</span>
				<div
					className='d-flex flex-column justify-content-start align-items-start px-2 py-3 border col-10'
					style={{
						backgroundColor: '#424245',
						minHeight: '5rem',
						borderRadius: '1rem',
					}}
				>
					<div
						className='d-flex flex-row justify-content-center align-items-center'
						style={{ width: '4.5rem' }}
					>
						<img src={burgerLand} className='w-100 h-100' alt='' />
					</div>
					{itemOfburgerLand.map((items, index) => {
						return (
							<>
								<div className='d-none'>{(sumBurgerland += items.Price)}</div>
								<div className='w-100 text-white py-2 d-flex flex-row justify-content-between border-down-color'>
									<h5 className='text-start'>{items.Name}</h5>
									<span className='d-flex flex-row align-items-center pr-2'>
										<h5 className='px-1 text-nowrap'>
											{items.Price.toLocaleString()}
										</h5>{' '}
										<h5>T</h5>
									</span>
								</div>
								{itemOfburgerLand.length === index + 1 ? (
									<>
										<div className='w-100 text-white py-2 d-flex flex-row justify-content-between'>
											<h4>مجموع :</h4>
											<span>
												<span className='d-flex flex-row align-items-center'>
													<h4 className='px-1 text-nowrap'>
														{sumBurgerland.toLocaleString()}
													</h4>{' '}
													<h5>T</h5>
												</span>
											</span>
										</div>
									</>
								) : (
									''
								)}
							</>
						);
					})}
				</div>
				<div
					className='d-flex flex-column justify-content-start align-items-start px-2 py-3 border col-10 mt-4'
					style={{
						backgroundColor: '#424245',
						minHeight: '5rem',
						borderRadius: '1rem',
					}}
				>
					<div
						className='d-flex flex-row justify-content-center align-items-center'
						style={{ width: '4.5rem' }}
					>
						<img src={anatolia} className='w-100 h-100' alt='' />
					</div>
					{itemOfanatolia.map((items, index) => {
						return (
							<>
								<div className='d-none'>{(sumAnatolia += items.Price)}</div>
								<div className='w-100 text-white py-2 d-flex flex-row justify-content-between border-down-color'>
									<h5 className='text-start'>{items.Name}</h5>
									<span className='d-flex flex-row align-items-center pr-2'>
										<h5 className='px-1 text-nowrap'>
											{items.Price.toLocaleString()}
										</h5>{' '}
										<h5>T</h5>
									</span>
								</div>
								{itemOfanatolia.length === index + 1 ? (
									<>
										<div className='w-100 text-white py-2 d-flex flex-row justify-content-between'>
											<h4>مجموع :</h4>
											<span>
												<span className='d-flex flex-row align-items-center'>
													<h4 className='px-1 text-nowrap'>
														{sumAnatolia.toLocaleString()}
													</h4>{' '}
													<h5>T</h5>
												</span>
											</span>
										</div>
									</>
								) : (
									''
								)}
							</>
						);
					})}
				</div>
				<div
					className='d-flex flex-column justify-content-start align-items-start px-2 py-3 border col-10 mt-4'
					style={{
						backgroundColor: '#424245',
						minHeight: '5rem',
						borderRadius: '1rem',
					}}
				>
					<div
						className='d-flex flex-row justify-content-center align-items-center'
						style={{ width: '4.5rem' }}
					>
						<img src={chia} className='w-100 h-100' alt='' />
					</div>
					{itemOfchia.map((items, index) => {
						return (
							<>
								<div className='d-none'>{(sumChia += items.Price)}</div>
								<div className='w-100 text-white py-2 d-flex flex-row justify-content-between border-down-color'>
									<h5 className='text-start'>{items.Name}</h5>
									<span className='d-flex flex-row align-items-center pr-2'>
										<h5 className='px-1 text-nowrap'>
											{items.Price.toLocaleString()}
										</h5>{' '}
										<h5>T</h5>
									</span>
								</div>
								{itemOfchia.length === index + 1 ? (
									<>
										<div className='w-100 text-white py-2 d-flex flex-row justify-content-between'>
											<h4>مجموع :</h4>
											<span>
												<span className='d-flex flex-row align-items-center'>
													<h4 className='px-1 text-nowrap'>
														{sumChia.toLocaleString()}
													</h4>{' '}
													<h5>T</h5>
												</span>
											</span>
										</div>
									</>
								) : (
									''
								)}
							</>
						);
					})}
				</div>
				<div
					className='d-flex flex-column justify-content-start align-items-start px-2 py-3 border col-10 mt-4'
					style={{
						backgroundColor: '#424245',
						minHeight: '5rem',
						borderRadius: '1rem',
					}}
				>
					<div
						className='d-flex flex-row justify-content-center align-items-center'
						style={{ width: '4.5rem' }}
					>
						<img src={chickenCounter} className='w-100 h-100' alt='' />
					</div>
					{itemOfchickenCounter.map((items, index) => {
						return (
							<>
								<div className='d-none'>
									{(sumChickencounter += items.Price)}
								</div>
								<div className='w-100 text-white py-2 d-flex flex-row justify-content-between border-down-color'>
									<h5 className='text-start'>{items.Name}</h5>
									<span className='d-flex flex-row align-items-center pr-2'>
										<h5 className='px-1 text-nowrap'>
											{items.Price.toLocaleString()}
										</h5>{' '}
										<h5>T</h5>
									</span>
								</div>
								{itemOfchickenCounter.length === index + 1 ? (
									<>
										<div className='w-100 text-white py-2 d-flex flex-row justify-content-between'>
											<h4>مجموع :</h4>
											<span>
												<span className='d-flex flex-row align-items-center'>
													<h4 className='px-1 text-nowrap'>
														{sumChickencounter.toLocaleString()}
													</h4>{' '}
													<h5>T</h5>
												</span>
											</span>
										</div>
									</>
								) : (
									''
								)}
							</>
						);
					})}
				</div>
				<div
					className='d-flex flex-column justify-content-start align-items-start px-2 py-3 border col-10 mt-4'
					style={{
						backgroundColor: '#424245',
						minHeight: '5rem',
						borderRadius: '1rem',
					}}
				>
					<div
						className='d-flex flex-row justify-content-center align-items-center'
						style={{ width: '4.5rem' }}
					>
						<img src={maya} className='w-100 h-100' alt='' />
					</div>
					{itemOfmaya.map((items, index) => {
						return (
							<>
								<div className='d-none'>{(sumMaya += items.Price)}</div>
								<div className='w-100 text-white py-2 d-flex flex-row justify-content-between border-down-color'>
									<h5 className='text-start'>{items.Name}</h5>
									<span className='d-flex flex-row align-items-center pr-2'>
										<h5 className='px-1 text-nowrap'>
											{items.Price.toLocaleString()}
										</h5>{' '}
										<h5>T</h5>
									</span>
								</div>
								{itemOfmaya.length === index + 1 ? (
									<>
										<div className='w-100 text-white py-2 d-flex flex-row justify-content-between'>
											<h4>مجموع :</h4>
											<span>
												<span className='d-flex flex-row align-items-center'>
													<h4 className='px-1 text-nowrap'>
														{sumMaya.toLocaleString()}
													</h4>{' '}
													<h5>T</h5>
												</span>
											</span>
										</div>
									</>
								) : (
									''
								)}
							</>
						);
					})}
				</div>
				<div
					className='d-flex flex-column justify-content-start align-items-start px-2 py-3 border col-10 mt-4'
					style={{
						backgroundColor: '#424245',
						minHeight: '5rem',
						borderRadius: '1rem',
					}}
				>
					<div
						className='d-flex flex-row justify-content-center align-items-center'
						style={{ width: '4.5rem' }}
					>
						<img src={mizban} className='w-100 h-100' alt='' />
					</div>
					{itemOfmizban.map((items, index) => {
						return (
							<>
								<div className='d-none'>{(sumMizban += items.Price)}</div>
								<div className='w-100 text-white py-2 d-flex flex-row justify-content-between border-down-color'>
									<h5 className='text-start'>{items.Name}</h5>
									<span className='d-flex flex-row align-items-center pr-2'>
										<h5 className='px-1 text-nowrap'>
											{items.Price.toLocaleString()}
										</h5>{' '}
										<h5>T</h5>
									</span>
								</div>
								{itemOfmizban.length === index + 1 ? (
									<>
										<div className='w-100 text-white py-2 d-flex flex-row justify-content-between'>
											<h4>مجموع :</h4>
											<span>
												<span className='d-flex flex-row align-items-center'>
													<h4 className='px-1 text-nowrap'>
														{sumMizban.toLocaleString()}
													</h4>{' '}
													<h5>T</h5>
												</span>
											</span>
										</div>
									</>
								) : (
									''
								)}
							</>
						);
					})}
				</div>
				<div
					className='d-flex flex-column justify-content-start align-items-start px-2 py-3 border col-10 mt-4'
					style={{
						backgroundColor: '#424245',
						minHeight: '5rem',
						borderRadius: '1rem',
					}}
				>
					<div
						className='d-flex flex-row justify-content-center align-items-center'
						style={{ width: '4.5rem' }}
					>
						<img src={perprok} className='w-100 h-100' alt='' />
					</div>
					{itemOfperprok.map((items, index) => {
						return (
							<>
								<div className='d-none'>{(sumPerprok += items.Price)}</div>
								<div className='w-100 text-white py-2 d-flex flex-row justify-content-between border-down-color'>
									<h5 className='text-start'>{items.Name}</h5>
									<span className='d-flex flex-row align-items-center pr-2'>
										<h5 className='px-1 text-nowrap'>
											{items.Price.toLocaleString()}
										</h5>{' '}
										<h5>T</h5>
									</span>
								</div>
								{itemOfperprok.length === index + 1 ? (
									<>
										<div className='w-100 text-white py-2 d-flex flex-row justify-content-between'>
											<h4>مجموع :</h4>
											<span>
												<span className='d-flex flex-row align-items-center'>
													<h4 className='px-1 text-nowrap'>
														{sumPerprok.toLocaleString()}
													</h4>{' '}
													<h5>T</h5>
												</span>
											</span>
										</div>
									</>
								) : (
									''
								)}
							</>
						);
					})}
				</div>
				<div
					className='d-flex flex-column justify-content-start align-items-start px-2 py-3 border col-10 mt-4 mb-5'
					style={{
						backgroundColor: '#424245',
						minHeight: '5rem',
						borderRadius: '1rem',
					}}
				>
					<div
						className='d-flex flex-row justify-content-center align-items-center'
						style={{ width: '4.5rem' }}
					>
						<img src={saj} className='w-100 h-100' alt='' />
					</div>
					{itemOfsaj.map((items, index) => {
						return (
							<>
								<div className='d-none'>{(sumSaj += items.Price)}</div>
								<div className='w-100 text-white py-2 d-flex flex-row justify-content-between border-down-color'>
									<h5 className='text-start'>{items.Name}</h5>
									<span className='d-flex flex-row align-items-center pr-2'>
										<h5 className='px-1 text-nowrap'>
											{items.Price.toLocaleString()}
										</h5>{' '}
										<h5>T</h5>
									</span>
								</div>
								{itemOfsaj.length === index + 1 ? (
									<>
										<div className='w-100 text-white py-2 d-flex flex-row justify-content-between'>
											<h4>مجموع :</h4>
											<span>
												<span className='d-flex flex-row align-items-center'>
													<h4 className='px-1 text-nowrap'>
														{sumSaj.toLocaleString()}
													</h4>{' '}
													<h5>T</h5>
												</span>
											</span>
										</div>
									</>
								) : (
									''
								)}
							</>
						);
					})}
				</div>
			</div>
		</>
	);
};
export default Checkout;
