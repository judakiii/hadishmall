import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Appcontext from "../Appcontext";
const BacktoHome = (props) => {
	const {
		itemOfburgerLand,
		itemOfanatolia,
		itemOfchia,
		itemOfchickenCounter,
		itemOfmaya,
		itemOfmizban,
		itemOfperprok,
		itemOfsaj,
	} = useContext(Appcontext);
	const [click, setClick] = useState(2);
	const sumFunc = () => {
		return (
			itemOfburgerLand.length +
			itemOfanatolia.length +
			itemOfchia.length +
			itemOfchickenCounter.length +
			itemOfmaya.length +
			itemOfmizban.length +
			itemOfperprok.length +
			itemOfsaj.length
		);
	};
	return (
		<>
			<div
				className="d-flex flex-row w-100 justify-content-between align-items-center px-4"
				style={{
					position: "fixed",
					bottom: 0,
					height: "4rem",
					backgroundColor: "black",
					zIndex: 1,
				}}
			>
				<a
					href="#top"
					className={`px-0 d-flex flex-row justify-content-center align-items-center width-height-3-5rem buttons-select-footer rounded-circle ${
						click === 1 ? "circle-button-select-footer " : ""
					}`}
					onClick={() => setClick(1)}
				>
					<i className="bi bi-chevron-up text-white fs-1-5rem"></i>
				</a>
				<div
					className={`px-0 d-flex flex-row justify-content-center align-items-center width-height-4-5rem buttons-select-footer rounded-circle ${
						click === 2 ? "circle-button-select-footer " : ""
					}`}
					onClick={() => setClick(2)}
				>
					<Link
						to={"/home"}
						className="px-0 d-flex flex-row justify-content-center align-items-center rounded-circle"
					>
						<i className="bi bi-house text-white fs-1-75rem"></i>
					</Link>
				</div>
				<Link
					to={"/checkout"}
					className={`px-0 d-flex flex-row justify-content-center align-items-center width-height-4rem buttons-select-footer rounded-circle ${
						click === 3 ? "circle-button-select-footer " : ""
					}`}
					onClick={() => setClick(3)}
				>
					<i className="bi bi-bag text-white fs-1-5rem"></i>
					<div
						className="d-flex flex-row justify-content-center align-items-center text-white bg-danger rounded-circle position-absolute"
						style={{
							width: "1.5rem",
							height: "1.5rem",
							bottom: "2.7rem",
							left: "0rem",
						}}
					>
						{sumFunc()}
					</div>
				</Link>
			</div>
		</>
	);
};
export default BacktoHome;
