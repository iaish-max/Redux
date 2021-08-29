// there are many reducers but in one react app there is only one store
// so we make a root reducer that contain all reducers.

import { combineReducers } from "redux";
import cartItems from "./reducer";

export default combineReducers({
	cartItems,
});
