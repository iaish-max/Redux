import React from "react";

function Header(props) {
	const { cartData } = props;
	return (
		<div>
			<h2>{cartData.length}</h2>
		</div>
	);
}

export default Header;
