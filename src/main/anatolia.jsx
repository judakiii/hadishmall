import React from 'react';
import FoodCards from '../component/foodCards';
import HeaderChanger from '../component/headChanger';
import HeadMenu from '../component/headMenu';
import TitleFood from '../component/titleFood';
import {
	Pideh,
	beity,
	loghmeh,
	kebab,
	lahamjon,
	salad,
	appetizer,
	desser,
	drink,
} from '../DATA/anatolia';
import './mainPage.css';
const Anatolia = () => {
	return (
		<>
			<div
				id='top'
				className='w-100 d-flex flex-row flex-wrap justify-content-center align-items-start bg-color'
			>
				<HeaderChanger />
				<HeadMenu
					pideh='T'
					beity='T'
					doner='T'
					kebab='T'
					lahamjon='T'
					appetizer='T'
					desser='T'
					drink='T'
				/>
				<TitleFood id='pideh' titleName='پیده' />
				{Pideh.map((items) => {
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
				<TitleFood id='beity' titleName='بیتی' />
				{beity.map((items) => {
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
				<TitleFood id='lahamjon' titleName='لهمجون' />
				{lahamjon.map((items) => {
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
				<TitleFood id='doner' titleName='دونر' />
				{loghmeh.map((items) => {
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
				<TitleFood id='kebab' titleName='کباب' />
				{kebab.map((items) => {
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
				<TitleFood id='salad' titleName='سالاد' />
				{salad.map((items) => {
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
				<TitleFood id='desser' titleName='دسر' />
				{desser.map((items) => {
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
				{appetizer.map((items) => {
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
				{drink.map((items) => {
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
			</div>
		</>
	);
};
export default Anatolia;
