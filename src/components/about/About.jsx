import React from "react";

import { FaViruses as VirusIcon } from "react-icons/fa";
import { BsBricks as BricksIcon } from "react-icons/bs";
import { IoIosPeople as PeopleIcon } from "react-icons/io";
import { BiCurrentLocation as LocationIcon } from "react-icons/bi";

const About = () => {
	return (
		<section className="about__container" id="about">
			<div className="container">
				<h2 className="about-title">About</h2>

				<div className="description__grid">
					<div>
						The Lego Building Club is a recreational club of MTU.
						Whether you are a pro or a complete beginner you will
						settle in with us as long as you share our enthusiasm
						with plastic brick building. The club was founded as a
						way to meet, build and share ideas with others.
					</div>

					<BricksIcon className="grid-icon" />

					<VirusIcon className="grid-icon" />

					<div>
						Established during the COVID pandemic in the year 2020,
						we faced many difficulties through which we prevailed.
						We held our first virtual Lego building competition
						which turned out to be a massive success for our club.
					</div>

					<div>
						With a member count of 100 and increasing we make our
						best effort to organise events and competitions in order
						to encourage our members to be more active and engaging
						in the community. We regularly schedule events each
						week.
					</div>

					<PeopleIcon className="grid-icon" />

					<LocationIcon className="grid-icon" />

					<div>
						We are available on location on the Cork campus. You can
						always find us if you have any queries.
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
