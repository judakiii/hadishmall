import { useReducer } from 'react';
import { createContext, useContext, useState } from 'react';
const Appcontext = createContext();
export function AppProvider({ children }) {
	const [itemOfburgerLand, setItemofBurgerland] = useState([]);
	const [itemOfanatolia, setItemofAnatolia] = useState([]);
	const [itemOfchia, setItemofChia] = useState([]);
	const [itemOfchickenCounter, setItemofChickencounter] = useState([]);
	const [itemOfmaya, setItemofMaya] = useState([]);
	const [itemOfmizban, setItemofMizban] = useState([]);
	const [itemOfperprok, setItemofPerprok] = useState([]);
	const [itemOfsaj, setItemofSaj] = useState([]);

	const AddtoCartburgerland = (Name) => {
		setItemofBurgerland((prevState) => [...prevState, Name]);
	};
	const DeltoCartburgerland = (index) => {
		setItemofBurgerland((prevState) => [
			...prevState.slice(0, index),
			...prevState.slice(index + 1),
		]);
	};
	const AddtoCartanatolia = (Name) => {
		setItemofAnatolia((prevState) => [...prevState, Name]);
	};
	const DeltoCartanatolia = (index) => {
		setItemofAnatolia((prevState) => [
			...prevState.slice(0, index),
			...prevState.slice(index + 1),
		]);
	};
	const AddtoCartchia = (Name) => {
		setItemofChia((prevState) => [...prevState, Name]);
	};
	const DeltoCartchia = (index) => {
		setItemofChia((prevState) => [
			...prevState.slice(0, index),
			...prevState.slice(index + 1),
		]);
	};
	const AddtoCartchickenCounter = (Name) => {
		setItemofChickencounter((prevState) => [...prevState, Name]);
	};
	const DeltoCartchickenCounter = (index) => {
		setItemofChickencounter((prevState) => [
			...prevState.slice(0, index),
			...prevState.slice(index + 1),
		]);
	};
	const AddtoCartmaya = (Name) => {
		setItemofMaya((prevState) => [...prevState, Name]);
	};
	const DeltoCartmaya = (index) => {
		setItemofMaya((prevState) => [
			...prevState.slice(0, index),
			...prevState.slice(index + 1),
		]);
	};
	const AddtoCartmizban = (Name) => {
		setItemofMizban((prevState) => [...prevState, Name]);
	};
	const DeltoCartmizban = (index) => {
		setItemofMizban((prevState) => [
			...prevState.slice(0, index),
			...prevState.slice(index + 1),
		]);
	};
	const AddtoCartperprok = (Name) => {
		setItemofPerprok((prevState) => [...prevState, Name]);
	};
	const DeltoCartperprok = (index) => {
		setItemofPerprok((prevState) => [
			...prevState.slice(0, index),
			...prevState.slice(index + 1),
		]);
	};
	const AddtoCartsaj = (Name) => {
		setItemofSaj((prevState) => [...prevState, Name]);
	};
	const DeltoCartsaj = (index) => {
		setItemofSaj((prevState) => [
			...prevState.slice(0, index),
			...prevState.slice(index + 1),
		]);
	};
	return (
		<Appcontext.Provider
			value={{
				itemOfburgerLand,
				AddtoCartburgerland,
				DeltoCartburgerland,
				itemOfanatolia,
				AddtoCartanatolia,
				DeltoCartanatolia,
				itemOfchia,
				AddtoCartchia,
				DeltoCartchia,
				itemOfchickenCounter,
				AddtoCartchickenCounter,
				DeltoCartchickenCounter,
				itemOfmaya,
				AddtoCartmaya,
				DeltoCartmaya,
				itemOfmizban,
				AddtoCartmizban,
				DeltoCartmizban,
				itemOfperprok,
				AddtoCartperprok,
				DeltoCartperprok,
				itemOfsaj,
				AddtoCartsaj,
				DeltoCartsaj,
			}}
		>
			{children}
		</Appcontext.Provider>
	);
}
export default Appcontext;
