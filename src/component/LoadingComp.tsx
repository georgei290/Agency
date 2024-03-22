import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

const LoadingComp = () => {
	return (
		<div
			style={{
				position: "absolute",
				zIndex: 9999,
				background: "rgba(255, 255, 255, 0.2)",
				height: "100vh",
				width: "100%",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				flexDirection: "column",
				textAlign: "center",
				backdropFilter: "blur(10px)",
				left: 0,
				right: 0,
				top: 0,
				bottom: 0,
			}}>
			< ClipLoader />
			<h2>Processing Your Request...</h2>
			<p>Please hang on while we fetch the right result.</p>
		</div>
	);
};

export default LoadingComp;
