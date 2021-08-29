import React from "react";

function Home(props) {
	console.log("Home props", props);

	return (
		<div>
			<h1>Home Component</h1>
			<div className="cart-wrapper">
				<div className="img-wrapper item">
					<img
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYZgQkGhzzaGImYLNE-ZWbI7tkXePwnd0DqA&usqp=CAU"
						alt="iphone img"
					/>
				</div>
				<div className="text-wrapper item">
					<span>I-Phone</span>
					<span>Price: $1000.00</span>
				</div>
				<div className="btn-wrapper item">
					<button
						onClick={() => {
							props.addToCartHandler({ name: "i-phone", price: 1000 });
						}}
					>
						Add To Cart
					</button>

					<button
						onClick={() => {
							props.removeToCartHandler();
						}}
					>
						Remove To Cart
					</button>
				</div>
			</div>
		</div>
	);
}
export default Home;
