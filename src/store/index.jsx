import React, { createContext } from "react";
import globalReducer, { initialState as globalState } from "./global/reducer";
import commonReducer, { initialState as commonState } from "./common/reduce";
import GlobalAction from "./global/action";
import CommonAction from "./common/action";
import Provider, { InitSetStore } from "./config";
const GlobalContext = createContext();
const CommonContext = createContext();
export const useGlobalStore = () => InitSetStore(GlobalContext, GlobalAction);
export const useCommonStore = () => InitSetStore(CommonContext, CommonAction);
function StoreProvider({ children }) {
    return <Provider reducer={globalReducer} state={globalState} Context={GlobalContext} persistName="GLOBAL_STORE">
        <Provider reducer={commonReducer} state={commonState} Context={CommonContext}>
            {children}
        </Provider>
    </Provider>
}
export default StoreProvider;