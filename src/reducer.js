import * as actions from "./actions";
import produce from "immer";
let lastId = 0;

const reducer = (store = [], action) => {
	const { type, payload } = action;
	let newStore;
	switch (type) {
		case actions.BUG_ADDED:
			lastId++;
			return produce(store, (draftStore) => {
				draftStore.push({
					id: lastId,
					description: payload.description,
					resolve: false,
				});
			});
		case actions.BUG_REMOVED:
			return produce(store, (draftStore) =>
				draftStore.filter((bug) => bug.id != payload.id)
			);

		default:
			return store;
	}
};

export default reducer;
