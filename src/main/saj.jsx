import React, { useEffect } from "react";
import FoodCards from "../component/foodCards";
import HeaderChanger from "../component/headChanger";
import HeadMenu from "../component/headMenu";
import TitleFood from "../component/titleFood";
import saj from "../icons/saj.png";
import BacktoHome from "../component/backTohome";
import {
	Appetizer,
	Child,
	Drink,
	Pasta,
	Pizza,
	Salad,
	Seafood,
	Steak,
} from "../DATA/saj";
import * as $ from "jquery";
import "./mainPage.css";
import jquery from "jquery";
const Saj = () => {
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
				<HeaderChanger image={saj} />
				<HeadMenu
					pizza="T"
					pasta="T"
					steak="T"
					seaFood="T"
					child="T"
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
								nameOfRestaurant={"saj"}
							/>
						</>
					);
				})}
				<TitleFood id="pasta" titleName="پاستا" />
				{Pasta.map((items) => {
					return (
						<>
							<FoodCards
								Photo={items.photo}
								Name={items.name}
								Details={items.details}
								Price={items.price}
								Count={items.count}
								TotalPrice={items.totalPrice}
								nameOfRestaurant={"saj"}
							/>
						</>
					);
				})}
				<TitleFood id="steak" titleName="استیک" />
				{Steak.map((items) => {
					return (
						<>
							<FoodCards
								Photo={items.photo}
								Name={items.name}
								Details={items.details}
								Price={items.price}
								Count={items.count}
								TotalPrice={items.totalPrice}
								nameOfRestaurant={"saj"}
							/>
						</>
					);
				})}
				<TitleFood id="seaFood" titleName="غذای دریایی" />
				{Seafood.map((items) => {
					return (
						<>
							<FoodCards
								Photo={items.photo}
								Name={items.name}
								Details={items.details}
								Price={items.price}
								Count={items.count}
								TotalPrice={items.totalPrice}
								nameOfRestaurant={"saj"}
							/>
						</>
					);
				})}
				<TitleFood id="child" titleName="کودک" />
				{Child.map((items) => {
					return (
						<>
							<FoodCards
								Photo={items.photo}
								Name={items.name}
								Details={items.details}
								Price={items.price}
								Count={items.count}
								TotalPrice={items.totalPrice}
								nameOfRestaurant={"saj"}
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
								nameOfRestaurant={"saj"}
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
								nameOfRestaurant={"saj"}
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
								nameOfRestaurant={"saj"}
							/>
						</>
					);
				})}
			</div>
		</>
	);
};
export default Saj;
