let state = {};

export const actionsSupported = {
    "REQUESTED": "USER_FETCH_REQUESTED",
    "SUCCEEDED": "USER_FETCH_SUCCEEDED",
    "FAILED": "USER_FETCH_FAILED"
};

export const bookReducer = (state, action) => {
    switch (action.type) {
        case actionsSupported.REQUESTED:
            return {
                ...state, respone: null, loading: true
            };
        case actionsSupported.SUCCEEDED:
            return {
                ...state, respone: action.response, loading: false
            };
        default:
            return {
                respone: "Default State"
            };
    }
}
