class GlobalAction {
    constructor() {
        this.dispatch = null;
    }
    setStoreState(stateName, data) {
        return this.dispatch({ type: "SET_STORE_STATE", payload: { data, stateName } });
    }
}
export default GlobalAction;