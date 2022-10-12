import React from "react";
import data from "./data";

const Events = () => {
	return (
		<section className="events__container" id="events">
			<div className="container">
				<h2 className="events-title">Events</h2>
				<div>
					{data
						.sort((a, b) => a.date - b.date)
						.map(({ id, title, date, location }) => {
							{
								return (
									<div>
										{title}
										{date.toLocaleString()}
									</div>
								);
							}
						})}
				</div>
			</div>
		</section>
	);
};

export default Events;
