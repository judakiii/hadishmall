import React, { useEffect, useContext } from "react";
import Appcontext from "../Appcontext";
import burgerLand from "../icons/burgerLand.png";
import anatolia from "../icons/anatolia.png";
import chickenCounter from "../icons/chickenCounter.png";
import saj from "../icons/saj.png";
import mizban from "../icons/mizban.png";
import maya from "../icons/maya.png";
import chia from "../icons/chia.png";
import perprok from "../icons/perperook.png";
import * as $ from "jquery";
import jquery from "jquery";
const Checkout = () => {
	const {
		itemOfburgerLand,
		DeltoCartburgerland,
		itemOfanatolia,
		DeltoCartanatolia,
		itemOfchia,
		DeltoCartchia,
		itemOfchickenCounter,
		DeltoCartchickenCounter,
		itemOfmaya,
		DeltoCartmaya,
		itemOfmizban,
		DeltoCartmizban,
		itemOfperprok,
		DeltoCartperprok,
		itemOfsaj,
		DeltoCartsaj,
	} = useContext(Appcontext);
	let sumBurgerland = 0,
		sumAnatolia = 0,
		sumChia = 0,
		sumChickencounter = 0,
		sumMaya = 0,
		sumMizban = 0,
		sumPerprok = 0,
		sumSaj = 0;
	var storeBurgerLand = [],
		storeAnatolia = [],
		storeChia = [],
		storeChickencounter = [],
		storeMaya = [],
		storeMizban = [],
		storePerprok = [],
		storeSaj = [];
	const BurgerLandlist = (list) => {
		storeBurgerLand = list.reduce((unique, o) => {
			if (!unique.some((obj) => obj.Name === o.Name)) {
				unique.push(o);
			}
			return unique;
		}, []);
	};
	const Anatolialist = (list) => {
		storeAnatolia = list.reduce((unique, o) => {
			if (!unique.some((obj) => obj.Name === o.Name)) {
				unique.push(o);
			}
			return unique;
		}, []);
	};
	const Chialist = (list) => {
		storeChia = list.reduce((unique, o) => {
			if (!unique.some((obj) => obj.Name === o.Name)) {
				unique.push(o);
			}
			return unique;
		}, []);
	};
	const ChickenCounterlist = (list) => {
		storeChickencounter = list.reduce((unique, o) => {
			if (!unique.some((obj) => obj.Name === o.Name)) {
				unique.push(o);
			}
			return unique;
		}, []);
	};
	const Mayalist = (list) => {
		storeMaya = list.reduce((unique, o) => {
			if (!unique.some((obj) => obj.Name === o.Name)) {
				unique.push(o);
			}
			return unique;
		}, []);
	};
	const Mizbanlist = (list) => {
		storeMizban = list.reduce((unique, o) => {
			if (!unique.some((obj) => obj.Name === o.Name)) {
				unique.push(o);
			}
			return unique;
		}, []);
	};
	const Perproklist = (list) => {
		storePerprok = list.reduce((unique, o) => {
			if (!unique.some((obj) => obj.Name === o.Name)) {
				unique.push(o);
			}
			return unique;
		}, []);
	};
	const Sajlist = (list) => {
		storeSaj = list.reduce((unique, o) => {
			if (!unique.some((obj) => obj.Name === o.Name)) {
				unique.push(o);
			}
			return unique;
		}, []);
	};
	const SummeryList = (list, storeList) => {
		let num = 0;
		for (let i = 0; i < storeList.length; i++) {
			num = 0;
			for (let y = 0; y < list.length; y++) {
				if (storeList[i].Name === list[y].Name) {
					num = num + 1;
				}
			}
			storeList[i].Count = num;
			storeList[i].TotalPrice = storeList[i].Count * storeList[i].Price;
		}
	};
	BurgerLandlist(itemOfburgerLand);
	Anatolialist(itemOfanatolia);
	Chialist(itemOfchia);
	ChickenCounterlist(itemOfchickenCounter);
	Mayalist(itemOfmaya);
	Mizbanlist(itemOfmizban);
	Perproklist(itemOfperprok);
	Sajlist(itemOfsaj);
	SummeryList(itemOfburgerLand, storeBurgerLand);
	SummeryList(itemOfanatolia, storeAnatolia);
	SummeryList(itemOfchia, storeChia);
	SummeryList(itemOfchickenCounter, storeChickencounter);
	SummeryList(itemOfmaya, storeMaya);
	SummeryList(itemOfmizban, storeMizban);
	SummeryList(itemOfperprok, storePerprok);
	SummeryList(itemOfsaj, storeSaj);
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
			<div className="w-100 d-flex flex-column align-items-center justify-content-start mb-5 pb-3">
				<span className="w-100 d-flex flex-row justify-content-start text-white py-5 px-3 fs-2rem">
					<i className="bi bi-list-task px-2"></i>
					<span>سبد خرید</span>
				</span>
				<div
					className="d-flex flex-column justify-content-start align-items-start px-2 py-3 border col-10"
					style={{
						backgroundColor: "#424245",
						minHeight: "7rem",
						borderRadius: "1rem",
					}}
				>
					<div
						className="d-flex flex-row justify-content-center align-items-center"
						style={{ width: "4.5rem" }}
					>
						<img src={burgerLand} className="w-100 h-100" alt="" />
					</div>
					{storeBurgerLand.map((items, index) => {
						return (
							<>
								<div className="d-none">
									{(sumBurgerland += items.TotalPrice)}
								</div>
								<div className="w-100 text-white py-2 d-flex flex-column justify-content-start border-down-color">
									<div className="w-100 text-white py-2 d-flex flex-row justify-content-between">
										<h5 className="text-start d-flex flex-row">
											- {items.Name} <h5 className="pr-2">{items.Count}x</h5>
										</h5>
										<div className="d-flex flex-row align-items-center pr-2">
											<h5 className="px-1 text-nowrap">
												{items.TotalPrice.toLocaleString()}
											</h5>{" "}
											<h5>T</h5>
										</div>
									</div>
									<div className="w-100 text-white d-flex flex-row justify-content-between align-items-start">
										<div className="d-flex flex-row">
											<i className="bi bi-plus-circle"></i>
											<div className="d-flex flex-row px-1 mx-1">16</div>
											<i className="bi bi-dash-circle"></i>
										</div>
										<i
											className="bi bi-trash3 text-danger"
											onClick={() => DeltoCartburgerland(index)}
										></i>
									</div>
								</div>

								{storeBurgerLand.length === index + 1 ? (
									<>
										<div className="w-100 text-white py-2 d-flex flex-row justify-content-between">
											<h4>مجموع :</h4>
											<span>
												<span className="d-flex flex-row align-items-center">
													<h4 className="px-1 text-nowrap">
														{sumBurgerland.toLocaleString()}
													</h4>{" "}
													<h5>T</h5>
												</span>
											</span>
										</div>
									</>
								) : (
									""
								)}
							</>
						);
					})}
				</div>
				<div
					className="d-flex flex-column justify-content-start align-items-start px-2 py-3 border col-10 mt-4"
					style={{
						backgroundColor: "#424245",
						minHeight: "7rem",
						borderRadius: "1rem",
					}}
				>
					<div
						className="d-flex flex-row justify-content-center align-items-center"
						style={{ width: "4.5rem" }}
					>
						<img src={anatolia} className="w-100 h-100" alt="" />
					</div>
					{storeAnatolia.map((items, index) => {
						return (
							<>
								<div className="d-none">
									{(sumAnatolia += items.TotalPrice)}
								</div>
								<div className="w-100 text-white py-2 d-flex flex-column justify-content-start border-down-color">
									<div className="w-100 text-white py-2 d-flex flex-row justify-content-between">
										<h5 className="text-start d-flex flex-row">
											- {items.Name} <h5 className="pr-2">{items.Count}x</h5>
										</h5>
										<div className="d-flex flex-row align-items-center pr-2">
											<h5 className="px-1 text-nowrap">
												{items.TotalPrice.toLocaleString()}
											</h5>{" "}
											<h5>T</h5>
										</div>
									</div>
									<div className="w-100 text-white d-flex flex-row justify-content-between align-items-start">
										<div className="d-flex flex-row">
											<i className="bi bi-plus-circle"></i>
											<div className="d-flex flex-row px-1 mx-1">16</div>
											<i className="bi bi-dash-circle"></i>
										</div>
										<i
											className="bi bi-trash3 text-danger"
											onClick={() => DeltoCartanatolia(index)}
										></i>
									</div>
								</div>

								{storeAnatolia.length === index + 1 ? (
									<>
										<div className="w-100 text-white py-2 d-flex flex-row justify-content-between">
											<h4>مجموع :</h4>
											<span>
												<span className="d-flex flex-row align-items-center">
													<h4 className="px-1 text-nowrap">
														{sumAnatolia.toLocaleString()}
													</h4>{" "}
													<h5>T</h5>
												</span>
											</span>
										</div>
									</>
								) : (
									""
								)}
							</>
						);
					})}
				</div>
				<div
					className="d-flex flex-column justify-content-start align-items-start px-2 py-3 border col-10 mt-4"
					style={{
						backgroundColor: "#424245",
						minHeight: "7rem",
						borderRadius: "1rem",
					}}
				>
					<div
						className="d-flex flex-row justify-content-center align-items-center"
						style={{ width: "4.5rem" }}
					>
						<img src={chia} className="w-100 h-100" alt="" />
					</div>
					{storeChia.map((items, index) => {
						return (
							<>
								<div className="d-none">{(sumChia += items.TotalPrice)}</div>
								<div className="w-100 text-white py-2 d-flex flex-column justify-content-start border-down-color">
									<div className="w-100 text-white py-2 d-flex flex-row justify-content-between">
										<h5 className="text-start d-flex flex-row">
											- {items.Name} <h5 className="pr-2">{items.Count}x</h5>
										</h5>
										<div className="d-flex flex-row align-items-center pr-2">
											<h5 className="px-1 text-nowrap">
												{items.TotalPrice.toLocaleString()}
											</h5>{" "}
											<h5>T</h5>
										</div>
									</div>
									<div className="w-100 text-white d-flex flex-row justify-content-between align-items-start">
										<div className="d-flex flex-row">
											<i className="bi bi-plus-circle"></i>
											<div className="d-flex flex-row px-1 mx-1">16</div>
											<i className="bi bi-dash-circle"></i>
										</div>
										<i
											className="bi bi-trash3 text-danger"
											onClick={() => DeltoCartchia(index)}
										></i>
									</div>
								</div>

								{storeChia.length === index + 1 ? (
									<>
										<div className="w-100 text-white py-2 d-flex flex-row justify-content-between">
											<h4>مجموع :</h4>
											<span>
												<span className="d-flex flex-row align-items-center">
													<h4 className="px-1 text-nowrap">
														{sumChia.toLocaleString()}
													</h4>{" "}
													<h5>T</h5>
												</span>
											</span>
										</div>
									</>
								) : (
									""
								)}
							</>
						);
					})}
				</div>

				<div
					className="d-flex flex-column justify-content-start align-items-start px-2 py-3 border col-10 mt-4"
					style={{
						backgroundColor: "#424245",
						minHeight: "7rem",
						borderRadius: "1rem",
					}}
				>
					<div
						className="d-flex flex-row justify-content-center align-items-center"
						style={{ width: "4.5rem" }}
					>
						<img src={chickenCounter} className="w-100 h-100" alt="" />
					</div>
					{storeChickencounter.map((items, index) => {
						return (
							<>
								<div className="d-none">
									{(sumChickencounter += items.TotalPrice)}
								</div>
								<div className="w-100 text-white py-2 d-flex flex-column justify-content-start border-down-color">
									<div className="w-100 text-white py-2 d-flex flex-row justify-content-between">
										<h5 className="text-start d-flex flex-row">
											- {items.Name} <h5 className="pr-2">{items.Count}x</h5>
										</h5>
										<div className="d-flex flex-row align-items-center pr-2">
											<h5 className="px-1 text-nowrap">
												{items.TotalPrice.toLocaleString()}
											</h5>{" "}
											<h5>T</h5>
										</div>
									</div>
									<div className="w-100 text-white d-flex flex-row justify-content-between align-items-start">
										<div className="d-flex flex-row">
											<i className="bi bi-plus-circle"></i>
											<div className="d-flex flex-row px-1 mx-1">16</div>
											<i className="bi bi-dash-circle"></i>
										</div>
										<i
											className="bi bi-trash3 text-danger"
											onClick={() => DeltoCartchickenCounter(index)}
										></i>
									</div>
								</div>

								{storeChickencounter.length === index + 1 ? (
									<>
										<div className="w-100 text-white py-2 d-flex flex-row justify-content-between">
											<h4>مجموع :</h4>
											<span>
												<span className="d-flex flex-row align-items-center">
													<h4 className="px-1 text-nowrap">
														{sumChickencounter.toLocaleString()}
													</h4>{" "}
													<h5>T</h5>
												</span>
											</span>
										</div>
									</>
								) : (
									""
								)}
							</>
						);
					})}
				</div>

				<div
					className="d-flex flex-column justify-content-start align-items-start px-2 py-3 border col-10 mt-4"
					style={{
						backgroundColor: "#424245",
						minHeight: "7rem",
						borderRadius: "1rem",
					}}
				>
					<div
						className="d-flex flex-row justify-content-center align-items-center"
						style={{ width: "4.5rem" }}
					>
						<img src={maya} className="w-100 h-100" alt="" />
					</div>
					{storeMaya.map((items, index) => {
						return (
							<>
								<div className="d-none">{(sumMaya += items.TotalPrice)}</div>
								<div className="w-100 text-white py-2 d-flex flex-column justify-content-start border-down-color">
									<div className="w-100 text-white py-2 d-flex flex-row justify-content-between">
										<h5 className="text-start d-flex flex-row">
											- {items.Name} <h5 className="pr-2">{items.Count}x</h5>
										</h5>
										<div className="d-flex flex-row align-items-center pr-2">
											<h5 className="px-1 text-nowrap">
												{items.TotalPrice.toLocaleString()}
											</h5>{" "}
											<h5>T</h5>
										</div>
									</div>
									<div className="w-100 text-white d-flex flex-row justify-content-between align-items-start">
										<div className="d-flex flex-row">
											<i className="bi bi-plus-circle"></i>
											<div className="d-flex flex-row px-1 mx-1">16</div>
											<i className="bi bi-dash-circle"></i>
										</div>
										<i
											className="bi bi-trash3 text-danger"
											onClick={() => DeltoCartmaya(index)}
										></i>
									</div>
								</div>

								{storeMaya.length === index + 1 ? (
									<>
										<div className="w-100 text-white py-2 d-flex flex-row justify-content-between">
											<h4>مجموع :</h4>
											<span>
												<span className="d-flex flex-row align-items-center">
													<h4 className="px-1 text-nowrap">
														{sumMaya.toLocaleString()}
													</h4>{" "}
													<h5>T</h5>
												</span>
											</span>
										</div>
									</>
								) : (
									""
								)}
							</>
						);
					})}
				</div>

				<div
					className="d-flex flex-column justify-content-start align-items-start px-2 py-3 border col-10 mt-4"
					style={{
						backgroundColor: "#424245",
						minHeight: "7rem",
						borderRadius: "1rem",
					}}
				>
					<div
						className="d-flex flex-row justify-content-center align-items-center"
						style={{ width: "4.5rem" }}
					>
						<img src={mizban} className="w-100 h-100" alt="" />
					</div>

					{storeMizban.map((items, index) => {
						return (
							<>
								<div className="d-none">{(sumMizban += items.TotalPrice)}</div>
								<div className="w-100 text-white py-2 d-flex flex-column justify-content-start border-down-color">
									<div className="w-100 text-white py-2 d-flex flex-row justify-content-between">
										<h5 className="text-start d-flex flex-row">
											- {items.Name} <h5 className="pr-2">{items.Count}x</h5>
										</h5>
										<div className="d-flex flex-row align-items-center pr-2">
											<h5 className="px-1 text-nowrap">
												{items.TotalPrice.toLocaleString()}
											</h5>{" "}
											<h5>T</h5>
										</div>
									</div>
									<div className="w-100 text-white d-flex flex-row justify-content-between align-items-start">
										<div className="d-flex flex-row">
											<i className="bi bi-plus-circle"></i>
											<div className="d-flex flex-row px-1 mx-1">16</div>
											<i className="bi bi-dash-circle"></i>
										</div>
										<i
											className="bi bi-trash3 text-danger"
											onClick={() => DeltoCartmizban(index)}
										></i>
									</div>
								</div>

								{storeMizban.length === index + 1 ? (
									<>
										<div className="w-100 text-white py-2 d-flex flex-row justify-content-between">
											<h4>مجموع :</h4>
											<span>
												<span className="d-flex flex-row align-items-center">
													<h4 className="px-1 text-nowrap">
														{sumMizban.toLocaleString()}
													</h4>{" "}
													<h5>T</h5>
												</span>
											</span>
										</div>
									</>
								) : (
									""
								)}
							</>
						);
					})}
				</div>

				<div
					className="d-flex flex-column justify-content-start align-items-start px-2 py-3 border col-10 mt-4"
					style={{
						backgroundColor: "#424245",
						minHeight: "7rem",
						borderRadius: "1rem",
					}}
				>
					<div
						className="d-flex flex-row justify-content-center align-items-center"
						style={{ width: "4.5rem" }}
					>
						<img src={perprok} className="w-100 h-100" alt="" />
					</div>
					{storePerprok.map((items, index) => {
						return (
							<>
								<div className="d-none">{(sumPerprok += items.TotalPrice)}</div>
								<div className="w-100 text-white py-2 d-flex flex-column justify-content-start border-down-color">
									<div className="w-100 text-white py-2 d-flex flex-row justify-content-between">
										<h5 className="text-start d-flex flex-row">
											- {items.Name} <h5 className="pr-2">{items.Count}x</h5>
										</h5>
										<div className="d-flex flex-row align-items-center pr-2">
											<h5 className="px-1 text-nowrap">
												{items.TotalPrice.toLocaleString()}
											</h5>{" "}
											<h5>T</h5>
										</div>
									</div>
									<div className="w-100 text-white d-flex flex-row justify-content-between align-items-start">
										<div className="d-flex flex-row">
											<i className="bi bi-plus-circle"></i>
											<div className="d-flex flex-row px-1 mx-1">16</div>
											<i className="bi bi-dash-circle"></i>
										</div>
										<i
											className="bi bi-trash3 text-danger"
											onClick={() => DeltoCartperprok(index)}
										></i>
									</div>
								</div>

								{storePerprok.length === index + 1 ? (
									<>
										<div className="w-100 text-white py-2 d-flex flex-row justify-content-between">
											<h4>مجموع :</h4>
											<span>
												<span className="d-flex flex-row align-items-center">
													<h4 className="px-1 text-nowrap">
														{sumPerprok.toLocaleString()}
													</h4>{" "}
													<h5>T</h5>
												</span>
											</span>
										</div>
									</>
								) : (
									""
								)}
							</>
						);
					})}
				</div>
				<div
					className="d-flex flex-column justify-content-start align-items-start px-2 py-3 border col-10 mt-4 mb-5"
					style={{
						backgroundColor: "#424245",
						minHeight: "7rem",
						borderRadius: "1rem",
					}}
				>
					<div
						className="d-flex flex-row justify-content-center align-items-center"
						style={{ width: "4.5rem" }}
					>
						<img src={saj} className="w-100 h-100" alt="" />
					</div>
					{storeSaj.map((items, index) => {
						return (
							<>
								<div className="d-none">{(sumSaj += items.TotalPrice)}</div>
								<div className="w-100 text-white py-2 d-flex flex-column justify-content-start border-down-color">
									<div className="w-100 text-white py-2 d-flex flex-row justify-content-between">
										<h5 className="text-start">- {items.Name}</h5>
										<div className="d-flex flex-row align-items-center pr-2">
											<h5 className="px-1 text-nowrap">
												{items.TotalPrice.toLocaleString()}
											</h5>{" "}
											<h5>T</h5>
										</div>
									</div>
									<div className="w-100 text-white d-flex flex-row justify-content-between align-items-start">
										<div className="d-flex flex-row">
											<i className="bi bi-plus-circle"></i>
											<div className="d-flex flex-row px-1 mx-1">16</div>
											<i className="bi bi-dash-circle"></i>
										</div>
										<i
											className="bi bi-trash3 text-danger"
											onClick={() => DeltoCartsaj(index)}
										></i>
									</div>
								</div>

								{storeSaj.length === index + 1 ? (
									<>
										<div className="w-100 text-white py-2 d-flex flex-row justify-content-between">
											<h4>مجموع :</h4>
											<span>
												<span className="d-flex flex-row align-items-center">
													<h4 className="px-1 text-nowrap">
														{sumSaj.toLocaleString()}
													</h4>{" "}
													<h5>T</h5>
												</span>
											</span>
										</div>
									</>
								) : (
									""
								)}
							</>
						);
					})}
				</div>
			</div>
		</>
	);
};
export default Checkout;
