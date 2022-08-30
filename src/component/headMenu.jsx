import React from 'react';
import pizza from '../icons/pizza.png';
import burger from '../icons/burger.png';
import sandwich from '../icons/sandwich.png';
import doner from '../icons/doner.png';
import spaghetti from '../icons/spaghetti.png';
import kebab from '../icons/kebab.png';
import steak from '../icons/steak.png';
import salad from '../icons/salad.png';
import drink from '../icons/drink.png';
import fish from '../icons/fish.png';
import taco from '../icons/taco.png';
import friedChicken from '../icons/friedChicken.png';
import soup from '../icons/soup.png';
import child from '../icons/child.png';
import appetizer from '../icons/appetizer.png';
import pideh from '../icons/pideh.png';
import persianFood from '../icons/persia.png';
import mexico from '../icons/mexico.png';
import breadKebab from '../icons/breadKebab.png';
import cheloKebab from '../icons/cheloKebab.png';
import khorak from '../icons/khorak.png';
import khoresht from '../icons/khoresht.png';
import cheloKhoresht from '../icons/cheloKhoresht.png';
import beity from '../icons/beity.png';
import lahamjon from '../icons/lahamjon.png';
import desser from '../icons/desser.png';
import '../main/mainPage.css';
const HeadMenu = (props) => {
	return (
		<>
			<header className='w-100 h-7rem header d-flex flex-row justify-content-start align-items-center scroll-x mb-4'>
				{props.pizza === 'T' ? (
					<>
						<a
							href='#pizza'
							className='bar glassmorphism d-flex flex-column justify-content-center align-items-center mx-2'
						>
							<div className='insideOfbar'>
								<img src={pizza} className='w-50 h-50' />
								<p className='mt-1'>پیتزا</p>
							</div>
						</a>
					</>
				) : null}
				{props.pideh === 'T' ? (
					<>
						<a
							href='#pideh'
							className='bar glassmorphism d-flex flex-column justify-content-center align-items-center mx-2'
						>
							<div className='insideOfbar'>
								<img src={pideh} className='w-50 h-50' />
								<p className='mt-1'>پیده</p>
							</div>
						</a>
					</>
				) : null}
				{props.beity === 'T' ? (
					<>
						<a
							href='#beity'
							className='bar glassmorphism d-flex flex-column justify-content-center align-items-center mx-2'
						>
							<div className='insideOfbar'>
								<img src={beity} className='w-50 h-50' />
								<p className='mt-1'>بیتی</p>
							</div>
						</a>
					</>
				) : null}
				{props.lahamjon === 'T' ? (
					<>
						<a
							href='#lahamjon'
							className='bar glassmorphism d-flex flex-column justify-content-center align-items-center mx-2'
						>
							<div className='insideOfbar'>
								<img src={lahamjon} className='w-50 h-50' />
								<p className='mt-1'>لهمجون</p>
							</div>
						</a>
					</>
				) : null}
				{props.burger === 'T' ? (
					<>
						<a
							href='#burger'
							className='bar glassmorphism d-flex flex-column justify-content-center align-items-center mx-2'
						>
							<div className='insideOfbar'>
								<img src={burger} className='w-50 h-50' />
								<p className='mt-1'>برگر</p>
							</div>
						</a>
					</>
				) : null}
				{props.sandwich === 'T' ? (
					<>
						<a
							href='#sandwich'
							className='bar glassmorphism d-flex flex-column justify-content-center align-items-center mx-2'
						>
							<div className='insideOfbar'>
								<img src={sandwich} className='w-50 h-50' />
								<p className='mt-1'>ساندویچ</p>
							</div>
						</a>
					</>
				) : null}
				{props.doner === 'T' ? (
					<>
						<a
							href='#doner'
							className='bar glassmorphism d-flex flex-column justify-content-center align-items-center mx-2'
						>
							<div className='insideOfbar'>
								<img src={doner} className='w-50 h-50' />
								<p className='mt-1'>دونر</p>
							</div>
						</a>
					</>
				) : null}
				{props.taco === 'T' ? (
					<>
						<a
							href='#taco'
							className='bar glassmorphism d-flex flex-column justify-content-center align-items-center mx-2'
						>
							<div className='insideOfbar'>
								<img src={taco} className='w-50 h-50' />
								<p className='mt-1'>تاکو</p>
							</div>
						</a>
					</>
				) : null}
				{props.mexicanFood === 'T' ? (
					<>
						<a
							href='#mexicanFood'
							className='bar glassmorphism d-flex flex-column justify-content-center align-items-center mx-2'
						>
							<div className='insideOfbar'>
								<img src={mexico} className='w-50 h-50' />
								<p className='mt-1'>غذای مکزیکی</p>
							</div>
						</a>
					</>
				) : null}
				{props.spaghetti === 'T' ? (
					<>
						<a
							href='#spaghetti'
							className='bar glassmorphism d-flex flex-column justify-content-center align-items-center mx-2'
						>
							<div className='insideOfbar'>
								<img src={spaghetti} className='w-50 h-50' />
								<p className='mt-1'>پاستا</p>
							</div>
						</a>
					</>
				) : null}
				{props.friedChicken === 'T' ? (
					<>
						<a
							href='#friedChicken'
							className='bar glassmorphism d-flex flex-column justify-content-center align-items-center mx-2'
						>
							<div className='insideOfbar'>
								<img src={friedChicken} className='w-50 h-50' />
								<p className='mt-1'>سوخاری</p>
							</div>
						</a>
					</>
				) : null}
				{props.kebab === 'T' ? (
					<>
						<a
							href='#kebab'
							className='bar glassmorphism d-flex flex-column justify-content-center align-items-center mx-2'
						>
							<div className='insideOfbar'>
								<img src={kebab} className='w-50 h-50' />
								<p className='mt-1'>کباب</p>
							</div>
						</a>
					</>
				) : null}
				{props.breadKebab === 'T' ? (
					<>
						<a
							href='#breadKebab'
							className='bar glassmorphism d-flex flex-column justify-content-center align-items-center mx-2'
						>
							<div className='insideOfbar'>
								<img src={breadKebab} className='w-50 h-50' />
								<p className='mt-1'>کباب نون</p>
							</div>
						</a>
					</>
				) : null}
				{props.cheloKebab === 'T' ? (
					<>
						<a
							href='#cheloKebab'
							className='bar glassmorphism d-flex flex-column justify-content-center align-items-center mx-2'
						>
							<div className='insideOfbar'>
								<img src={cheloKebab} className='w-50 h-50' />
								<p className='mt-1'>چلو کباب</p>
							</div>
						</a>
					</>
				) : null}
				{props.cheloKhoresht === 'T' ? (
					<>
						<a
							href='#cheloKhoresht'
							className='bar glassmorphism d-flex flex-column justify-content-center align-items-center mx-2'
						>
							<div className='insideOfbar'>
								<img src={cheloKhoresht} className='w-50 h-50' />
								<p className='mt-1'>چلو خورشت</p>
							</div>
						</a>
					</>
				) : null}
				{props.khorak === 'T' ? (
					<>
						<a
							href='#khorak'
							className='bar glassmorphism d-flex flex-column justify-content-center align-items-center mx-2'
						>
							<div className='insideOfbar'>
								<img src={khorak} className='w-50 h-50' />
								<p className='mt-1'>خوراک</p>
							</div>
						</a>
					</>
				) : null}
				{props.khoresht === 'T' ? (
					<>
						<a
							href='#khoresht'
							className='bar glassmorphism d-flex flex-column justify-content-center align-items-center mx-2'
						>
							<div className='insideOfbar'>
								<img src={khoresht} className='w-50 h-50' />
								<p className='mt-1'>خورشت</p>
							</div>
						</a>
					</>
				) : null}
				{props.persianFood === 'T' ? (
					<>
						<a
							href='#persianFood'
							className='bar glassmorphism d-flex flex-column justify-content-center align-items-center mx-2'
						>
							<div className='insideOfbar'>
								<img src={persianFood} className='w-50 h-50' />
								<p className='mt-1'>ایرانی</p>
							</div>
						</a>
					</>
				) : null}
				{props.steak === 'T' ? (
					<>
						<a
							href='#steak'
							className='bar glassmorphism d-flex flex-column justify-content-center align-items-center mx-2'
						>
							<div className='insideOfbar'>
								<img src={steak} className='w-50 h-50' />
								<p className='mt-1'>استیک</p>
							</div>
						</a>
					</>
				) : null}
				{props.seaFood === 'T' ? (
					<>
						<a
							href='#seaFood'
							className='bar glassmorphism d-flex flex-column justify-content-center align-items-center mx-2'
						>
							<div className='insideOfbar'>
								<img src={fish} className='w-50 h-50' />
								<p className='mt-1'>غذای دریایی</p>
							</div>
						</a>
					</>
				) : null}
				{props.child === 'T' ? (
					<>
						<a
							href='#child'
							className='bar glassmorphism d-flex flex-column justify-content-center align-items-center mx-2'
						>
							<div className='insideOfbar'>
								<img src={child} className='w-50 h-50' />
								<p className='mt-1'>کودک</p>
							</div>
						</a>
					</>
				) : null}
				{props.salad === 'T' ? (
					<>
						<a
							href='#salad'
							className='bar glassmorphism d-flex flex-column justify-content-center align-items-center mx-2'
						>
							<div className='insideOfbar'>
								<img src={salad} className='w-50 h-50' />
								<p className='mt-1'>سالاد</p>
							</div>
						</a>
					</>
				) : null}
				{props.soup === 'T' ? (
					<>
						<a
							href='#soup'
							className='bar glassmorphism d-flex flex-column justify-content-center align-items-center mx-2'
						>
							<div className='insideOfbar'>
								<img src={soup} className='w-50 h-50' />
								<p className='mt-1'>سوپ</p>
							</div>
						</a>
					</>
				) : null}
				{props.desser === 'T' ? (
					<>
						<a
							href='#desser'
							className='bar glassmorphism d-flex flex-column justify-content-center align-items-center mx-2'
						>
							<div className='insideOfbar'>
								<img src={desser} className='w-50 h-50' />
								<p className='mt-1'>دسر</p>
							</div>
						</a>
					</>
				) : null}
				{props.appetizer === 'T' ? (
					<>
						<a
							href='#appetizer'
							className='bar glassmorphism d-flex flex-column justify-content-center align-items-center mx-2'
						>
							<div className='insideOfbar'>
								<img src={appetizer} className='w-50 h-50' />
								<p className='mt-1'>پیش غذا</p>
							</div>
						</a>
					</>
				) : null}
				{props.drink === 'T' ? (
					<>
						<a
							href='#drink'
							className='bar glassmorphism d-flex flex-column justify-content-center align-items-center mx-2'
						>
							<div className='insideOfbar'>
								<img src={drink} className='w-50 h-50' />
								<p className='mt-1'>نوشیدنی</p>
							</div>
						</a>
					</>
				) : null}
			</header>
		</>
	);
};
export default HeadMenu;
