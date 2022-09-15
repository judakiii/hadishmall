import React, { useState, useContext } from 'react';
import FoodCards from '../component/foodCards';
import HeadMenu from '../component/headMenu';
import TitleFood from '../component/titleFood';
import HeaderChanger from '../component/headChanger';
import burgerLand from '../icons/burgerLand.png';
import Appcontext from '../Appcontext';
import Footer from '../component/footerInfo';
import {
	Pizza,
	Burger,
	Sandwich,
	FriedChicken,
	Child,
	Salad,
	Appetizer,
	Drink,
} from '../DATA/burgerLand';
import './mainPage.css';
const BurgerLand = () => {
	const [start, setStart] = useState(true);
	setTimeout(() => {
		setStart(false);
	}, 1);
	return (
		<>
			<div
				id='top'
				className={`w-100 d-flex flex-row flex-wrap justify-content-center align-items-start bg-main-dark ${
					start === true ? 'position-fixed' : ''
				}`}
			>
				<HeaderChanger titleName='برگرلند' image={burgerLand} />
				<HeadMenu
					pizza='T'
					burger='T'
					sandwich='T'
					friedChicken='T'
					salad='T'
					child='T'
					appetizer='T'
					drink='T'
				/>
				<TitleFood id='pizza' titleName='پیتزا' />
				{Pizza.map((items, index) => {
					return (
						<>
							<FoodCards
								Photo={items.photo}
								Name={items.name}
								Details={items.details}
								Price={items.price}
								nameOfRestaurant={'burgerLand'}
							/>
						</>
					);
				})}
				<TitleFood id='burger' titleName='برگر' />
				{Burger.map((items) => {
					return (
						<>
							<FoodCards
								Photo={items.photo}
								Name={items.name}
								Details={items.details}
								Price={items.price}
								nameOfRestaurant={'burgerLand'}
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
								nameOfRestaurant={'burgerLand'}
							/>
						</>
					);
				})}
				<TitleFood id='friedChicken' titleName='سوخاری' />
				{FriedChicken.map((items) => {
					return (
						<>
							<FoodCards
								Photo={items.photo}
								Name={items.name}
								Details={items.details}
								Price={items.price}
								nameOfRestaurant={'burgerLand'}
							/>
						</>
					);
				})}
				<TitleFood id='child' titleName='کودک' />
				{Child.map((items) => {
					return (
						<>
							<FoodCards
								Photo={items.photo}
								Name={items.name}
								Details={items.details}
								Price={items.price}
								nameOfRestaurant={'burgerLand'}
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
								nameOfRestaurant={'burgerLand'}
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
								nameOfRestaurant={'burgerLand'}
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
								nameOfRestaurant={'burgerLand'}
							/>
						</>
					);
				})}
				<Footer />
			</div>
		</>
	);
};
export default BurgerLand;
