import React, { useState } from "react";
import TableComp from "../TableComp";
import EmailSubcribe from "./EmailSubcribe";

const Modal = ({ data, toggleShow }) => {
	const [showMore, setShowMore] = useState(false);

	// console.log('holelllfdgh', data);
	return (
		<>
			{showMore ? <EmailSubcribe /> : null}

			<div
				style={{
					height: "80vh",
					width: "100%",
					position: "absolute",
					background: "white",
					bottom: 0,
					zIndex: 10,
					overflowY: "scroll",
					paddingBottom: "20px",
				}}>
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						padding: "10px",
					}}>
					<h3>SEO RESULTS</h3>
					<div
						onClick={toggleShow}
						style={{
							cursor: "pointer",
						}}>
						{" "}
						&times; Cancel
					</div>
				</div>
				<div
					style={
						{
							// position: "relative",
						}
					}>
					<TableComp data = {data} />

					<div
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							flexDirection: "column",
						}}>
						<p></p>
						<button
							onClick={() => {
								setShowMore(true);
							}}
							style={{
								height: "40px",
								width: "150px",
								backgroundColor: "#3887FE",
								color: "white",
							}}>
							See More
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Modal;
