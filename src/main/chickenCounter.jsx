import React, { useEffect } from "react";
import FoodCards from "../component/foodCards";
import HeaderChanger from "../component/headChanger";
import HeadMenu from "../component/headMenu";
import TitleFood from "../component/titleFood";
import chickenCounter from "../icons/chickenCounter.png";
import BacktoHome from "../component/backTohome";
import Footer from "../component/footerInfo";
import { Appetizer, Drink, FriedChicken, Salad } from "../DATA/chickenCounter";
import * as $ from "jquery";
import "./mainPage.css";
import jquery from "jquery";
const ChickenCounter = () => {
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
				id="top"
				className={`w-100 d-flex flex-row flex-wrap justify-content-center align-items-start bg-main-dark`}
			>
				<HeaderChanger titleName="چیکن کانتر" image={chickenCounter} />
				<HeadMenu
					friedChicken="T"
					sandwich="T"
					salad="T"
					appetizer="T"
					drink="T"
				/>
				<TitleFood id="sandwich" titleName="ساندویچ" />
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
								nameOfRestaurant={"chickenCounter"}
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
								nameOfRestaurant={"chickenCounter"}
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
								nameOfRestaurant={"chickenCounter"}
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
								nameOfRestaurant={"chickenCounter"}
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
								nameOfRestaurant={"chickenCounter"}
							/>
						</>
					);
				})}
				<Footer />
			</div>
		</>
	);
};
export default ChickenCounter;
