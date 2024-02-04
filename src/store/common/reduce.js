export const initialState = {
    user: {},
    loading: false,
    error: false,
    message: ""
}
export default (function (state, { type, payload }) {
    const resetAllStore = (data) => ({ ...data });
    // const setStoreState = ({ data, stateName }) => ({ ...state, [stateName]: data });
    switch (type) {
        case "PERSIST_COMMON_STORE": return resetAllStore(payload);
        case "SET_USER": return { ...state, user: payload };
        case "SET_ERROR": return { ...state, error: payload.error, message: payload.message };
        case "SET_LOADING": return { ...state, loading: payload };
        default: return state;
    }
});