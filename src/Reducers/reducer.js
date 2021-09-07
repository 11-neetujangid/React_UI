import { SET_DATA, USER_DATA, DATA_BY_TITLE, DATA_BY_ID} from "../Actions/action";

const initialState = {
    records: [],
    data: {
        title: '',
        year: '',
        plot: '',
        response: '',
    },
    title: []
}
function reducer(state = initialState, action) {
    switch (action.type) {

        case SET_DATA:
            console.log(action.payload);
            return {
                ...state,
                records: action.payload,
            }
        case USER_DATA:
            console.log(action.payload);
            return {
                ...state,
                data: action.payload,
            }
        case DATA_BY_TITLE:
            console.log(action.payload);
            return {
                ...state,
                records: action.payload,
            }
        case DATA_BY_ID:
            console.log(action.payload);
            return {
                ...state,
                records: action.payload,
            }
        default:
            return state;
    }
}
export default reducer;