export const SET_DATA = 'SET_DATA';
export const USER_DATA = 'USER_DATA';
export const DATA_BY_TITLE = 'DATA_BY_TITLE';
export const DATA_BY_ID = 'DATA_BY_ID';

export const setData = (payload) => ({ type: SET_DATA, payload: payload });
export const userData = (payload) => ({ type: USER_DATA, payload: payload });
export const setDataByTitle = (payload) => ({ type: DATA_BY_TITLE, payload: payload });
export const setDataByID = (payload) => ({ type: DATA_BY_ID, payload: payload });
