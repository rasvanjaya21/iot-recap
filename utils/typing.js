import React from "react";
import words from "@utils/words";
import Typed from "typed.js";

class Typing extends React.Component {
	componentDidMount() {
		const options = {
			strings: words,
			typeSpeed: 80,
			backSpeed: 80,
			loop: true,
		};
		// this.el refers to the <span> in the render() method
		this.typed = new Typed(this.el, options);
	}
	componentWillUnmount() {
		// Please don't forget to cleanup animation layer
		this.typed.destroy();
	}

	render() {
		return (
			<span
				className="flex overflow-auto no-scrollbar"
				style={{
					fontWeight: "bold",
					fontSize: "35px",
					color: "#1e56d7",
				}}
				ref={(el) => {
					this.el = el;
				}}
			/>
		);
	}
}

export default Typing;
