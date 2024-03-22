import React, { useEffect, useState } from "react";
import "./emailbox.css";
import pic from "../assets/img/1.png";
import axios from "axios";
import Swal from "sweetalert2";

const EmailSubcribe = () => {
	const [email, setEmail] = useState("");
	const [load, setLoad] = useState(false);

	const queryString = window.location.search;
	console.log(queryString);

	// Parse the query string to extract the token
	const urlParams = new URLSearchParams(queryString);
	const token = urlParams.get("token");

	// Use the token as needed (e.g., store it in state or perform an action)
	console.log("Token:", token);

	// Use the token as needed (e.g., store it in state or perform an action)

	const EmailSubmit = async () => {
		setLoad(true);
		try {
			const response = await axios.post(
				`https://dom-ranker-2487.onrender.com/api/v1/create-user?token=${token}`,
				{
					email: email,
				},
			);

			setLoad(false);

			Swal.fire({
				icon: "success",
				title: "Please Check your mail box ",
			}).then(() => {
				window.location.reload();
			});

			console.log(response);
		} catch (err) {
			Swal.fire({
				icon: "error",
				title: "This email already exists",
			});
			// throw err
		}
	};
	return (
		<div
			style={{
				height: "100vh",
				width: "100%",
				position: "absolute",
				background: "rgba(0,0,0,0.7)",
				backdropFilter: "blur(5px)",
				bottom: 0,
				top: 0,
				right: 0,
				left: 0,
				zIndex: 1000,
				transition: "all",
				transitionDelay: "10s",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}>
			<div class='subscription-box'>
				<img style={{ height: "70px" }} src={pic} />
				<h1>ENTER YOUR EMAIL</h1>

				<p>
					Boost your website's SEO with exclusive tips and updates! Click
					'CONTINUE' to receive valuable insights directly in your inbox.
				</p>

				<form
					onSubmit={(e) => {
						e.preventDefault();
						EmailSubmit();
					}}>
					<input
						required
						onChange={(e) => {
							setEmail(e.target.value);
						}}
						type='email'
						placeholder='Enter your Email'
					/>
					{load ? (
						<button disabled>Loading...</button>
					) : (
						<button type='submit'>Continue</button>
					)}
				</form>
			</div>
		</div>
	);
};

export default EmailSubcribe;
