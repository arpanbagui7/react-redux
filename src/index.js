import store from "./store";
import * as actions from "./actions";

store.dispatch({
	type: actions.BUG_ADDED,
	payload: {
		description: "Bug 1",
	},
});

store.dispatch({
	type: actions.BUG_REMOVED,
	payload: {
		id: 1,
	},
});

console.log(store.getState());
