import React, { useReducer } from "react";
import DashboardReducer from "./DashboardReducer";
import DashboardContext from "./DashboardContext";

const DashboardState = (props) => {

    const initialState = {
        data: [],
        collection: [],
    };
    const [state, dispatch] = useReducer(DashboardReducer, initialState);

    const getData = async (val) => {
        dispatch({
            type: 'GET_DATA',
            payload: val
        });
    };

    const getCollections = async (val) => {
        dispatch({
            type: 'GET_COLLECTIONS',
            payload: val
        });
    };

    return (
        <DashboardContext.Provider
            value={{
                data: state.data,
                collection: state.collection,
                getData,
                getCollections
            }}
        >
            {props.children}
        </DashboardContext.Provider>
    );
};

export default DashboardState;