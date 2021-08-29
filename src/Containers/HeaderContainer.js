import Header from "../Components/Header";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
	cartData: state.cartItems,
});

const mapDispatchToProps = (reducer) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
