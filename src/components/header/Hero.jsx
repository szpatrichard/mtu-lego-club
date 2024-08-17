import React from "react";

import {
	FaPencilAlt as PencilIcon,
	FaRulerCombined as RulerIcon,
} from "react-icons/fa";

import HeroImg from "../../assets/images/hero.png";

const Hero = () => {
	return (
		<section className="hero__container">
			<div className="slogan">
				<h3>
					<span>Let's Get Down To</span>
					<span>Business</span>
					<span>To Make More</span>
					<span>Amazing Lego Projects</span>
					<span>Together.</span>
				</h3>
				<div className="icons">
					<PencilIcon className="pencil-icon" />
					<RulerIcon className="ruler-icon" />
				</div>
			</div>
			<div className="hero-img">
				<img src={HeroImg} alt="" />
			</div>
		</section>
	);
};

export default Hero;
