import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ResturantCards from '../component/resturantCards';
import burgerLand from '../icons/burgerLand.png';
import anatolia from '../icons/anatolia.png';
import chickenCounter from '../icons/chickenCounter.png';
import saj from '../icons/saj.png';
import mizban from '../icons/mizban.png';
import maya from '../icons/maya.png';
import chia from '../icons/chia.png';
import perprok from '../icons/perperook.png';
import hadish from '../icons/hadishLogo.png';
import joodco from '../icons/joodco.png';
import HeaderChanger from '../component/headChanger';
import Footer from '../component/footerInfo';
import './mainPage.css';

const ResturantPage = () => {
	const [start, setStart] = useState(true);
	setTimeout(() => {
		setStart(false);
	}, 6500);
	return (
		<>
			<div className='w-100 d-flex flex-row flex-wrap justify-content-lg-start justify-content-center bg-color'>
				<HeaderChanger />
				<Link
					to={'/resturantPage/burgerLand'}
					className={
						'col-lg-4 col-sm-6  col-11 px-2 h-8-5rem mb-2 comeBoxanimation'
					}
				>
					<ResturantCards
						photo={burgerLand}
						Name={<>برگر لند</>}
						item1={<>برگر</>}
						item2={<>ساندویج</>}
						item3={<>پیتزا</>}
					/>
				</Link>
				<Link
					to={'/resturantPage/chickenCounter'}
					className={
						'col-lg-4 col-sm-6  col-11 px-2 h-8-5rem mb-2 mt-sm-0 mt-2 comeBoxanimation'
					}
					style={{ animationDelay: '0.25s' }}
				>
					<ResturantCards
						photo={chickenCounter}
						Name={<>چیکن کانتر</>}
						item1={<>سوخاری</>}
						item2={<>ساندویج</>}
						massage={'items less than 3'}
					/>
				</Link>
				<Link
					to={'/resturantPage/perprok'}
					className={
						'col-lg-4 col-sm-6  col-11 px-2 h-8-5rem mb-2 mt-md-0 mt-2 comeBoxanimation'
					}
					style={{ animationDelay: '0.5s' }}
				>
					<ResturantCards
						photo={perprok}
						Name={<>پرپروک</>}
						item1={<>پیتزا</>}
						item2={<>ساندویج</>}
						item3={<>سوخاری</>}
					/>
				</Link>
				<Link
					to={'/resturantPage/anatolia'}
					className={
						'col-lg-4 col-sm-6  col-11 px-2 h-8-5rem my-2 comeBoxanimation'
					}
					style={{ animationDelay: '0.75s' }}
				>
					<ResturantCards
						photo={anatolia}
						Name={<>آناتولیا</>}
						item1={<>دونر</>}
						item2={<>کباب</>}
						item3={<>ساندویج</>}
					/>
				</Link>
				<Link
					to={'/resturantPage/saj'}
					className={
						'col-lg-4 col-sm-6  col-11 px-2 h-8-5rem my-2 comeBoxanimation'
					}
					style={{ animationDelay: '1s' }}
				>
					<ResturantCards
						photo={saj}
						Name={<>ساج</>}
						details={<>... , استیک , پاستا , غذای دریایی</>}
						item1={<>استیک</>}
						item2={<>غذای دریایی</>}
						item3={<>پاستا</>}
					/>
				</Link>

				<Link
					to={'/resturantPage/mizban'}
					className={
						'col-lg-4 col-sm-6  col-11 px-2 h-8-5rem my-2 comeBoxanimation'
					}
					style={{ animationDelay: '1.25s' }}
				>
					<ResturantCards
						photo={mizban}
						Name={<>میزبان</>}
						item1={<>کباب</>}
						item2={<>غذای ایرانی</>}
						item3={<>خوراک</>}
					/>
				</Link>
				<Link
					to={'/resturantPage/maya'}
					className={
						'col-lg-4 col-sm-6  col-11 px-2 h-8-5rem mt-2 comeBoxanimation'
					}
					style={{ animationDelay: '1.5s' }}
				>
					<ResturantCards
						photo={maya}
						Name={<>مایا</>}
						item1={<>تاکو</>}
						item2={<>استیک</>}
						item3={<>پیتزا</>}
					/>
				</Link>
				<Link
					to={'/resturantPage/chia'}
					className={
						'col-lg-4 col-sm-6  col-11 px-2 h-8-5rem mt-sm-2 mt-3 mb-sm-0 mb-3 comeBoxanimation'
					}
					style={{ animationDelay: '1.75s' }}
				>
					<ResturantCards
						photo={chia}
						Name={<>چیا</>}
						item1={<>سالاد</>}
						item2={<>شربت</>}
						massage={'items less than 3'}
					/>
				</Link>
				<Footer />
			</div>
			{start === true ? (
				<>
					<div
						className='w-100 d-flex flex-column justify-content-center align-items-center glassmorphism rounded-0 position-absolute fadeMe'
						style={{ height: '100vh' }}
					>
						<span className='fs-2rem mb-5'>خوش آمدید</span>
						<div className=' d-flex flex-row justify-content-start align-items-center'>
							<div className='widthOfwelcomeLogo d-flex flex-row justify-content-center align-items-center border-left border-white'>
								<img src={hadish} className='w-100 h-100' alt='' />
							</div>
							<div className='widthOfwelcomeLogo d-flex flex-row justify-content-center align-items-center'>
								<img src={joodco} className='w-100 h-100' alt='' />
							</div>
						</div>
					</div>
				</>
			) : (
				''
			)}
		</>
	);
};
export default ResturantPage;
