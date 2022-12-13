import React, { useEffect } from "react";
import FoodCards from "../component/foodCards";
import HeaderChanger from "../component/headChanger";
import TitleFood from "../component/titleFood";
import HeadMenu from "../component/headMenu";
import chia from "../icons/chia.png";
import BacktoHome from "../component/backTohome";
import Footer from "../component/footerInfo";
import { Appetizer, Drinks, Salad, Soup } from "../DATA/chia";
import * as $ from "jquery";
import "./mainPage.css";
import jquery from "jquery";
const Chia = () => {
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
				<HeaderChanger titleName="چیا" image={chia} />
				<HeadMenu salad="T" soup="T" appetizer="T" drink="T" />
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
								nameOfRestaurant={"chia"}
							/>
						</>
					);
				})}
				<TitleFood id="soup" titleName="سوپ" />
				{Soup.map((items) => {
					return (
						<>
							<FoodCards
								Photo={items.photo}
								Name={items.name}
								Details={items.details}
								Price={items.price}
								Count={items.count}
								TotalPrice={items.totalPrice}
								nameOfRestaurant={"chia"}
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
								nameOfRestaurant={"chia"}
							/>
						</>
					);
				})}
				<TitleFood id="drink" titleName="نوشیدنی" />
				{Drinks.map((items) => {
					return (
						<>
							<FoodCards
								Photo={items.photo}
								Name={items.name}
								Details={items.details}
								Price={items.price}
								Count={items.count}
								TotalPrice={items.totalPrice}
								nameOfRestaurant={"chia"}
							/>
						</>
					);
				})}
				<Footer />
			</div>
		</>
	);
};
export default Chia;
