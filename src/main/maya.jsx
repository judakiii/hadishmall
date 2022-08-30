import React from 'react';
import FoodCards from '../component/foodCards';
import HeadMenu from '../component/headMenu';
import HeaderChanger from '../component/headChanger';
import TitleFood from '../component/titleFood';
import {
	Appetizer,
	Drink,
	MexicanFood,
	Pizza,
	Salad,
	Sandwich,
	Steak,
} from '../DATA/maya';
import './mainPage.css';
const Maya = () => {
	return (
		<>
			<div
				id='top'
				className='w-100 d-flex flex-row flex-wrap justify-content-center align-items-start bg-color'
			>
				<HeaderChanger />
				<HeadMenu
					pizza='T'
					sandwich='T'
					steak='T'
					mexicanFood='T'
					salad='T'
					appetizer='T'
					drink='T'
				/>
				<TitleFood id='pizza' titleName='پیتزا' />
				{Pizza.map((items) => {
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
				<TitleFood id='sandwich' titleName='ساندویچ' />
				{Sandwich.map((items) => {
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
				<TitleFood id='mexicanFood' titleName='مکزیکی' />
				{MexicanFood.map((items) => {
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
				<TitleFood id='steak' titleName='استیک' />
				{Steak.map((items) => {
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
				{Salad.map((items) => {
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
			</div>
		</>
	);
};
export default Maya;
