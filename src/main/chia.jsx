import React, { useState } from 'react';
import FoodCards from '../component/foodCards';
import HeaderChanger from '../component/headChanger';
import TitleFood from '../component/titleFood';
import HeadMenu from '../component/headMenu';
import chia from '../icons/chia.png';
import { Appetizer, Drinks, Salad, Soup } from '../DATA/chia';
import './mainPage.css';
const Chia = () => {
	const [start, setStart] = useState(true);
	setTimeout(() => {
		setStart(false);
	}, 1);
	return (
		<>
			<div
				id='top'
				className={`w-100 d-flex flex-row flex-wrap justify-content-center align-items-start bg-color ${
					start === true ? 'position-fixed' : ''
				}`}
			>
				<HeaderChanger titleName='چیا' image={chia} />
				<HeadMenu salad='T' soup='T' appetizer='T' drink='T' />
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
				<TitleFood id='soup' titleName='سوپ' />
				{Soup.map((items) => {
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
				{Drinks.map((items) => {
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
export default Chia;