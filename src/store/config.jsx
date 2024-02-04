import React, { memo, useContext, useEffect, useReducer } from "react";
import { session, commonConfig } from '../helper/import';
export const InitSetStore = (Context, Action) => {
    const { state, dispatch } = useContext(Context);
    let action = new Action();
    action.dispatch = dispatch;
    return [state, action];
};
function Provider({ reducer, state: initState, children, Context, persistName = '' }) {
    const [state, dispatch] = useReducer(reducer, initState);
    useEffect(() => {
        if (!!persistName) {
            const persist = session.get(commonConfig[`S_${persistName}`], true);
            if (!!persist) dispatch({ type: `PERSIST_${persistName}`, payload: persist });
        }
    }, [persistName]);
    useEffect(() => {
        const prevFunc = window.onbeforeunload;
        if (!!persistName) window.onbeforeunload = function () {
            if (!!prevFunc) prevFunc();
            session.set(commonConfig[`S_${persistName}`], state);
        }
    });
    return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
}
export default memo(Provider);