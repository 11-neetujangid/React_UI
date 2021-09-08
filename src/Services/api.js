import axios from "axios";
import { setData, setDataByTitle, setDataByID } from "../Actions/action";

const url = 'http://www.omdbapi.com';
export const getData = () => async (dispatch, getState) => {
    try {
        const res = await axios.get(`${url}/?apikey=9597cff7&`);
        console.log(res.data);
        dispatch(setData(res.data));
    } catch (error) {
        console.log(error);
    }
}
export const getDataByTitle = (record) => async (dispatch, getState) => {
    try {
        console.log(`${url}/?t=${record.title}&y=${record.year}&apikey=9597cff7`)
        const res = await axios.get(`${url}/?t=${record.title}&y=${record.year}&apikey=9597cff7&`);
        console.log(res.data);
        dispatch(setDataByTitle(res.data));
    } catch (error) {
        console.log(error);
    }
}
export const getDataByID = (record) => async (dispatch, getState) => {
    try {
        const res = await axios.get(`${url}/?i=${record.id}&plot=${record.plot}&apikey=9597cff7&`);
        console.log(res.data);
        dispatch(setDataByID(res.data));
    } catch (error) {
        console.log(error);
    }
}