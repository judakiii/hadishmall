import React, { useEffect } from "react";
import FoodCards from "../component/foodCards";
import HeaderChanger from "../component/headChanger";
import HeadMenu from "../component/headMenu";
import TitleFood from "../component/titleFood";
import perprok from "../icons/perperook.png";
import BacktoHome from "../component/backTohome";
import Footer from "../component/footerInfo";
import {
	Appetizer,
	Burger,
	Drink,
	FriedChicken,
	Pizza,
	Salad,
	Sandwich,
} from "../DATA/perprok";
import * as $ from "jquery";
import "./mainPage.css";
import jquery from "jquery";
const Perprok = () => {
	useEffect(() => {
		jquery("document").ready(() => {
			window.scroll({
				top: 0,
				behavior: "smooth",
			});
		});
	}, []);
	return (
		<>
			<div
				className={`w-100 d-flex flex-row flex-wrap justify-content-center align-items-start bg-main-dark`}
			>
				<HeaderChanger titleName="پرپروک" image={perprok} />
				<HeadMenu
					pizza="T"
					burger="T"
					sandwich="T"
					friedChicken="T"
					salad="T"
					appetizer="T"
					drink="T"
				/>
				<TitleFood id="pizza" titleName="پیتزا" />
				{Pizza.map((items) => {
					return (
						<>
							<FoodCards
								Photo={items.photo}
								Name={items.name}
								Details={items.details}
								Price={items.price}
								Count={items.count}
								TotalPrice={items.totalPrice}
								nameOfRestaurant={"perprok"}
							/>
						</>
					);
				})}
				<TitleFood id="burger" titleName="برگر" />
				{Burger.map((items) => {
					return (
						<>
							<FoodCards
								Photo={items.photo}
								Name={items.name}
								Details={items.details}
								Price={items.price}
								Count={items.count}
								TotalPrice={items.totalPrice}
								nameOfRestaurant={"perprok"}
							/>
						</>
					);
				})}
				<TitleFood id="sandwich" titleName="ساندویچ" />
				{Sandwich.map((items) => {
					return (
						<>
							<FoodCards
								Photo={items.photo}
								Name={items.name}
								Details={items.details}
								Price={items.price}
								Count={items.count}
								TotalPrice={items.totalPrice}
								nameOfRestaurant={"perprok"}
							/>
						</>
					);
				})}
				<TitleFood id="friedChicken" titleName="سوخاری" />
				{FriedChicken.map((items) => {
					return (
						<>
							<FoodCards
								Photo={items.photo}
								Name={items.name}
								Details={items.details}
								Price={items.price}
								Count={items.count}
								TotalPrice={items.totalPrice}
								nameOfRestaurant={"perprok"}
							/>
						</>
					);
				})}
				<TitleFood id="salad" titleName="سالاد" />
				{Salad.map((items) => {
					return (
						<>
							<FoodCards
								Photo={items.photo}
								Name={items.name}
								Details={items.details}
								Price={items.price}
								Count={items.count}
								TotalPrice={items.totalPrice}
								nameOfRestaurant={"perprok"}
							/>
						</>
					);
				})}
				<TitleFood id="appetizer" titleName="پیش غذا" />
				{Appetizer.map((items) => {
					return (
						<>
							<FoodCards
								Photo={items.photo}
								Name={items.name}
								Details={items.details}
								Price={items.price}
								Count={items.count}
								TotalPrice={items.totalPrice}
								nameOfRestaurant={"perprok"}
							/>
						</>
					);
				})}
				<TitleFood id="drink" titleName="نوشیدنی" />
				{Drink.map((items) => {
					return (
						<>
							<FoodCards
								Photo={items.photo}
								Name={items.name}
								Details={items.details}
								Price={items.price}
								Count={items.count}
								TotalPrice={items.totalPrice}
								nameOfRestaurant={"perprok"}
							/>
						</>
					);
				})}
				<Footer />
			</div>
		</>
	);
};
export default Perprok;
