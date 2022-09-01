import React, { useState } from 'react';
import FoodCards from '../component/foodCards';
import HeadMenu from '../component/headMenu';
import TitleFood from '../component/titleFood';
import HeaderChanger from '../component/headChanger';
import mizban from '../icons/mizban.png';
import BacktoHome from '../component/backTohome';
import Footer from '../component/footerInfo';
import {
	Appetizer,
	CheloKebab,
	CheloKhoresht,
	Drink,
	KebabBread,
	Khorak,
	Khoresht,
	Pelo,
} from '../DATA/mizban';
import './mainPage.css';
const Mizban = () => {
	const [start, setStart] = useState(true);
	setTimeout(() => {
		setStart(false);
	}, 1);
	return (
		<>
			<div
				className={`w-100 d-flex flex-row flex-wrap justify-content-center align-items-start bg-color  ${
					start === true ? 'position-fixed' : ''
				}`}
			>
				<BacktoHome />
				<HeaderChanger titleName='میزبان' image={mizban} />
				<HeadMenu
					// kebab='T'
					breadKebab='T'
					cheloKebab='T'
					khorak='T'
					khoresht='T'
					cheloKhoresht='T'
					persianFood='T'
					appetizer='T'
					drink='T'
				/>
				<TitleFood id='breadKebab' titleName='نون کباب' />
				{KebabBread.map((items) => {
					return (
						<>
							<FoodCards
								Photo={items.photo}
								Name={items.name}
								Details={items.details}
								Price={items.price}
							/>
						</>
					);
				})}
				<TitleFood id='cheloKebab' titleName='چلو کباب' />
				{CheloKebab.map((items) => {
					return (
						<>
							<FoodCards
								Photo={items.photo}
								Name={items.name}
								Details={items.details}
								Price={items.price}
							/>
						</>
					);
				})}
				<TitleFood id='cheloKhoresht' titleName='چلو خورشت' />
				{CheloKhoresht.map((items) => {
					return (
						<>
							<FoodCards
								Photo={items.photo}
								Name={items.name}
								Details={items.details}
								Price={items.price}
							/>
						</>
					);
				})}
				<TitleFood id='khorak' titleName='خوراک' />
				{Khorak.map((items) => {
					return (
						<>
							<FoodCards
								Photo={items.photo}
								Name={items.name}
								Details={items.details}
								Price={items.price}
							/>
						</>
					);
				})}
				<TitleFood id='khoresht' titleName='خورشت' />
				{Khoresht.map((items) => {
					return (
						<>
							<FoodCards
								Photo={items.photo}
								Name={items.name}
								Details={items.details}
								Price={items.price}
							/>
						</>
					);
				})}
				<TitleFood id='persianFood' titleName='غذای ایرانی' />
				{Pelo.map((items) => {
					return (
						<>
							<FoodCards
								Photo={items.photo}
								Name={items.name}
								Details={items.details}
								Price={items.price}
							/>
						</>
					);
				})}
				<TitleFood id='appetizer' titleName='پیش غذا' />
				{Appetizer.map((items) => {
					return (
						<>
							<FoodCards
								Photo={items.photo}
								Name={items.name}
								Details={items.details}
								Price={items.price}
							/>
						</>
					);
				})}
				<TitleFood id='drink' titleName='نوشیدنی' />
				{Drink.map((items) => {
					return (
						<>
							<FoodCards
								Photo={items.photo}
								Name={items.name}
								Details={items.details}
								Price={items.price}
							/>
						</>
					);
				})}
				<Footer />
			</div>
		</>
	);
};
export default Mizban;
