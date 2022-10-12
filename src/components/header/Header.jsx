import React, { useState } from "react";

import Navbar from "./Navbar";
import Hero from "./Hero";
import CTA from "./CTA";

import Logo from "../../assets/images/logo.svg";

const Header = () => {
	const [fix, setFix] = useState(false);

	const setFixed = () => {
		setFix(false);

		if (window.scrollY >= 720) setFix(true);
	};

	window.addEventListener("scroll", setFixed);

	return (
		<header>
			<div
				className={
					fix ? "header__container sticky" : "header__container"
				}
			>
				<div className="container navbar">
					<a href="/" class="club-logo">
						<img src={Logo} alt="MTU" />
						<div>
							<span>Munster Technological University</span>
							<h1>Lego Building Club</h1>
						</div>
					</a>
					<div className="nav">
						<Navbar />
					</div>
				</div>
			</div>

			<Hero />

			<CTA />
		</header>
	);
};

export default Header;
