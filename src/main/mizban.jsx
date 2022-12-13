import React, { useEffect } from "react";
import FoodCards from "../component/foodCards";
import HeadMenu from "../component/headMenu";
import TitleFood from "../component/titleFood";
import HeaderChanger from "../component/headChanger";
import mizban from "../icons/mizban.png";
import BacktoHome from "../component/backTohome";
import Footer from "../component/footerInfo";
import {
	Appetizer,
	CheloKebab,
	CheloKhoresht,
	Drink,
	KebabBread,
	Khorak,
	Khoresht,
	Pelo,
} from "../DATA/mizban";
import * as $ from "jquery";
import "./mainPage.css";
import jquery from "jquery";
const Mizban = () => {
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
				<HeaderChanger titleName="میزبان" image={mizban} />
				<HeadMenu
					// kebab='T'
					breadKebab="T"
					cheloKebab="T"
					khorak="T"
					khoresht="T"
					cheloKhoresht="T"
					persianFood="T"
					appetizer="T"
					drink="T"
				/>
				<TitleFood id="breadKebab" titleName="نون کباب" />
				{KebabBread.map((items) => {
					return (
						<>
							<FoodCards
								Photo={items.photo}
								Name={items.name}
								Details={items.details}
								Price={items.price}
								Count={items.count}
								TotalPrice={items.totalPrice}
								nameOfRestaurant={"mizban"}
							/>
						</>
					);
				})}
				<TitleFood id="cheloKebab" titleName="چلو کباب" />
				{CheloKebab.map((items) => {
					return (
						<>
							<FoodCards
								Photo={items.photo}
								Name={items.name}
								Details={items.details}
								Price={items.price}
								Count={items.count}
								TotalPrice={items.totalPrice}
								nameOfRestaurant={"mizban"}
							/>
						</>
					);
				})}
				<TitleFood id="cheloKhoresht" titleName="چلو خورشت" />
				{CheloKhoresht.map((items) => {
					return (
						<>
							<FoodCards
								Photo={items.photo}
								Name={items.name}
								Details={items.details}
								Price={items.price}
								Count={items.count}
								TotalPrice={items.totalPrice}
								nameOfRestaurant={"mizban"}
							/>
						</>
					);
				})}
				<TitleFood id="khorak" titleName="خوراک" />
				{Khorak.map((items) => {
					return (
						<>
							<FoodCards
								Photo={items.photo}
								Name={items.name}
								Details={items.details}
								Price={items.price}
								Count={items.count}
								TotalPrice={items.totalPrice}
								nameOfRestaurant={"mizban"}
							/>
						</>
					);
				})}
				<TitleFood id="khoresht" titleName="خورشت" />
				{Khoresht.map((items) => {
					return (
						<>
							<FoodCards
								Photo={items.photo}
								Name={items.name}
								Details={items.details}
								Price={items.price}
								Count={items.count}
								TotalPrice={items.totalPrice}
								nameOfRestaurant={"mizban"}
							/>
						</>
					);
				})}
				<TitleFood id="persianFood" titleName="غذای ایرانی" />
				{Pelo.map((items) => {
					return (
						<>
							<FoodCards
								Photo={items.photo}
								Name={items.name}
								Details={items.details}
								Price={items.price}
								Count={items.count}
								TotalPrice={items.totalPrice}
								nameOfRestaurant={"mizban"}
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
								nameOfRestaurant={"mizban"}
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
								nameOfRestaurant={"mizban"}
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
