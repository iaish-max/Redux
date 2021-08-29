// action are pass internally we do not have to import
// actions in reducers.

import { ADD_TO_CART, REMOVE_TO_CART } from "../Constants";

export default function cartItems(state = [], action) {
	switch (action.type) {
		case ADD_TO_CART:
			console.log("reducer", action);
			return [...state, { cartData: action.data }];
		case REMOVE_TO_CART:
			state.pop();
			return [...state];
		default:
			return state;
	}
}
