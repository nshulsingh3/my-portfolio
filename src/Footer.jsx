import { useState } from "react";

export default function Footer() {
	const [email, setEmail] = useState("");
	const [showPopup, setShowPopup] = useState(false);

	const [showError, setShowError] = useState(false);
	const sendEmail = async () => {
		const functionUrl =
			"https://xl4qurbkdi5vgoe43b6qp5y3nq0gnhfw.lambda-url.ap-southeast-2.on.aws/";

		try {
			const response = await fetch(functionUrl, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					"Access-Control-Allow-Origin": "https://theanshulsingh.netlify.app",
				},
				body: JSON.stringify({
					to: email,
				}),
			});

			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}

			const result = await response.json();
			console.log("Email sent successfully:", result);
		} catch (error) {
			console.error("Error sending email:", error);
		}
	};
	const validateEmail = (email) => {
		return String(email)
			.toLowerCase()
			.match(
				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
			);
	};

	return (
		<div className="mt-6 bg-gradient-to-b from-blue-500/[0.0] to-green-400/[0.25] py-[24px]">
			<footer>
				<div className="flex-col justify-center text-center items-center gap-2">
					<h1 className="text-2xl font-bold text-sky-700">
						{"Reach out to Code Monk"}
					</h1>
					<div className="bg-white flex rounded-[50px] p-1.5 w-[90vw] md:w-[40vw] m-auto mt-4 justify-between">
						<input
							placeholder="Your Email"
							className="rounded-l-[20px] pl-2 ml-2 flex-1 focus:outline-sky-500 error:outline-red-500"
							autoComplete="off"
							onChange={(e) => setEmail(e.target.value)}
							value={email}
							type="email"
						/>
						<button
							className="bg-sky-700 text-white rounded-r-[50px] px-4 py-1.5 ml-2"
							onClick={async () => {
								if (validateEmail(email)) {
									await sendEmail();
									setShowPopup(true);
									setTimeout(() => {
										setShowPopup(false);
									}, 3000);

									setEmail("");
								} else {
									setShowError(true);
									setTimeout(() => {
										setShowError(false);
									}, 3000);
								}
							}}
						>
							Wake up!
						</button>
					</div>
					<div className="text-sm  text-sky-700 mt-4">
						{"© 2024 Anshul Singh"}
					</div>
				</div>
			</footer>
			{showPopup ? (
				<div className="flex w-full m-auto">
					<div
						className="fixed top-20 right-4 bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-2 py-2 shadow-md"
						role="alert"
					>
						<div className="flex items-center">
							<div className="py-1">
								<svg
									className="fill-current h-6 w-6 text-teal-500 mr-4"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
								>
									<path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
								</svg>
							</div>
							<div>
								<p className="font-bold">Alarm sent!</p>
								<p className="text-sm">
									Anshul will wake up soon!
								</p>
							</div>
						</div>
					</div>
				</div>
			) : (
				""
			)}
			{showError ? (
				<div className="flex w-full m-auto">
					<div
						className="fixed top-20 right-4 bg-red-100 border-t-4 border-red-500 rounded-b text-red-900 px-2 py-2 shadow-md"
						role="alert"
					>
						<div className="flex items-center">
							<div className="py-1">
								<svg
									className="fill-current h-6 w-6 text-red-500 mr-4"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
								>
									<path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
								</svg>
							</div>
							<div>
								<p className="font-bold">Ooops!</p>
								<p className="text-sm">
									Please enter a valid email.
								</p>
							</div>
						</div>
					</div>
				</div>
			) : (
				""
			)}
		</div>
	);
}
