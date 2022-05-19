import { GET_DATA, GET_COLLECTIONS } from "../types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
    const { payload, type } = action;

    switch (type) {
        case GET_DATA:
            return {
                ...state,
                data: payload
            }
        case GET_COLLECTIONS:
            return{
                ...state,
                collection: payload
            }
        default:
            return state;
    }
};
