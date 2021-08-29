//connect connect react or redux
//Through mapDispatchToProps send data to store through action
//Through mapStateToProps receive data from store.

import { connect } from "react-redux";
import Home from "../Components/Home.js";
import { addToCart, removeToCart } from "../Services/Actions/actions.js";

const mapStateToProps = (state) => ({
	cartData: state.cartItems,
});

const mapDispatchToProps = (dispatch) => ({
	addToCartHandler: (data) => {
		dispatch(addToCart(data));
	},
	removeToCartHandler: () => {
		dispatch(removeToCart());
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
