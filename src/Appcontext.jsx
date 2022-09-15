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
	const AddtoCartanatolia = (Name) => {
		setItemofAnatolia((prevState) => [...prevState, Name]);
	};
	const AddtoCartchia = (Name) => {
		setItemofChia((prevState) => [...prevState, Name]);
	};
	const AddtoCartchickenCounter = (Name) => {
		setItemofChickencounter((prevState) => [...prevState, Name]);
	};
	const AddtoCartmaya = (Name) => {
		setItemofMaya((prevState) => [...prevState, Name]);
	};
	const AddtoCartmizban = (Name) => {
		setItemofMizban((prevState) => [...prevState, Name]);
	};
	const AddtoCartperprok = (Name) => {
		setItemofPerprok((prevState) => [...prevState, Name]);
	};
	const AddtoCartsaj = (Name) => {
		setItemofSaj((prevState) => [...prevState, Name]);
	};
	// const deltoCart = (Name) => {};
	// const onItemDelete = (event) => {
	// 	item.filter((item) => item === event);
	// };
	return (
		<Appcontext.Provider
			value={{
				itemOfburgerLand,
				AddtoCartburgerland,
				itemOfanatolia,
				AddtoCartanatolia,
				itemOfchia,
				AddtoCartchia,
				itemOfchickenCounter,
				AddtoCartchickenCounter,
				itemOfmaya,
				AddtoCartmaya,
				itemOfmizban,
				AddtoCartmizban,
				itemOfperprok,
				AddtoCartperprok,
				itemOfsaj,
				AddtoCartsaj,
			}}
		>
			{children}
		</Appcontext.Provider>
	);
}
export default Appcontext;
