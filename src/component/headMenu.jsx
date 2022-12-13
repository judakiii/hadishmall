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
	const Items = [
		{
			field: props.pizza,
			href: '#pizza',
			img: pizza,
			name: 'پیتزا',
		},
		{
			field: props.pideh,
			href: '#pideh',
			img: pideh,
			name: 'پیده',
		},
		{
			field: props.beity,
			href: '#beity',
			img: beity,
			name: 'بیتی',
		},
		{
			field: props.lahamjon,
			href: '#lahamjon',
			img: lahamjon,
			name: 'لهمجون',
		},
		{
			field: props.burger,
			href: '#burger',
			img: burger,
			name: 'برگر',
		},
		{
			field: props.sandwich,
			href: '#sandwich',
			img: sandwich,
			name: 'ساندویچ',
		},
		{
			field: props.doner,
			href: '#doner',
			img: doner,
			name: 'دونر',
		},
		{
			field: props.taco,
			href: '#taco',
			img: taco,
			name: 'تاکو',
		},
		{
			field: props.mexicanFood,
			href: '#mexicanFood',
			img: mexico,
			name: 'مکزیکی',
		},
		{
			field: props.spaghetti,
			href: '#spaghetti',
			img: spaghetti,
			name: 'پاستا',
		},
		{
			field: props.friedChicken,
			href: '#friedChicken',
			img: friedChicken,
			name: 'سوخاری',
		},
		{
			field: props.kebab,
			href: '#kebab',
			img: kebab,
			name: 'کباب',
		},
		{
			field: props.breadKebab,
			href: '#breadKebab',
			img: breadKebab,
			name: 'نون کباب',
		},
		{
			field: props.cheloKebab,
			href: '#cheloKebab',
			img: cheloKebab,
			name: 'چلو کباب',
		},
		{
			field: props.cheloKhoresht,
			href: '#cheloKhoresht',
			img: cheloKhoresht,
			name: 'چلو خورشت',
		},
		{
			field: props.khorak,
			href: '#khorak',
			img: khorak,
			name: 'خوراک',
		},
		{
			field: props.khoresht,
			href: '#khoresht',
			img: khoresht,
			name: 'خورشت',
		},
		{
			field: props.persianFood,
			href: '#persianFood',
			img: persianFood,
			name: 'ایرانی',
		},
		{
			field: props.steak,
			href: '#steak',
			img: steak,
			name: 'استیک',
		},
		{
			field: props.seaFood,
			href: '#seaFood',
			img: fish,
			name: 'دریایی',
		},
		{
			field: props.child,
			href: '#child',
			img: child,
			name: 'کودک',
		},
		{
			field: props.salad,
			href: '#salad',
			img: salad,
			name: 'سالاد',
		},
		{
			field: props.soup,
			href: '#soup',
			img: soup,
			name: 'سوپ',
		},
		{
			field: props.desser,
			href: '#desser',
			img: desser,
			name: 'دسر',
		},
		{
			field: props.appetizer,
			href: '#appetizer',
			img: appetizer,
			name: 'پیش غذا',
		},
		{
			field: props.drink,
			href: '#drink',
			img: drink,
			name: 'نوشیدنی',
		},
	];
	return (
		<>
			<header className='w-100 h-7rem header d-flex flex-row justify-content-start align-items-center scroll-x mb-4 hideScroll'>
				{Items.map((item) => {
					return (
						<>
							{item.field === 'T' ? (
								<>
									<a
										href={item.href}
										className='bar glassmorphism d-flex flex-column justify-content-center align-items-center mx-2'
									>
										<div className='width-height-5rem d-flex flex-column justify-content-center align-items-center'>
											<img src={item.img} className='w-50 h-50' alt='' />
											<p className='mt-1'>{item.name}</p>
										</div>
									</a>
								</>
							) : null}
						</>
					);
				})}
			</header>
		</>
	);
};
export default HeadMenu;
