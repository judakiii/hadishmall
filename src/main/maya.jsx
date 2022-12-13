import React, { useEffect } from "react";
import FoodCards from "../component/foodCards";
import HeadMenu from "../component/headMenu";
import HeaderChanger from "../component/headChanger";
import TitleFood from "../component/titleFood";
import maya from "../icons/maya.png";
import BacktoHome from "../component/backTohome";
import Footer from "../component/footerInfo";
import {
	Appetizer,
	Drink,
	MexicanFood,
	Pizza,
	Salad,
	Sandwich,
	Steak,
} from "../DATA/maya";
import * as $ from "jquery";
import "./mainPage.css";
import jquery from "jquery";
const Maya = () => {
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
				<HeaderChanger titleName="مایا" image={maya} />
				<HeadMenu
					pizza="T"
					sandwich="T"
					steak="T"
					mexicanFood="T"
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
								nameOfRestaurant={"maya"}
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
								nameOfRestaurant={"maya"}
							/>
						</>
					);
				})}
				<TitleFood id="mexicanFood" titleName="مکزیکی" />
				{MexicanFood.map((items) => {
					return (
						<>
							<FoodCards
								Photo={items.photo}
								Name={items.name}
								Details={items.details}
								Price={items.price}
								Count={items.count}
								TotalPrice={items.totalPrice}
								nameOfRestaurant={"maya"}
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
								nameOfRestaurant={"maya"}
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
								nameOfRestaurant={"maya"}
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
								nameOfRestaurant={"maya"}
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
								nameOfRestaurant={"maya"}
							/>
						</>
					);
				})}
				<Footer />
			</div>
		</>
	);
};
export default Maya;
