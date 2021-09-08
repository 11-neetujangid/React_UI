import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData, getDataByTitle, getDataByID } from "../Services/api";
import { userData } from "../Actions/action";

const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getData());
    }, [dispatch])
    const data = useSelector((state) => state.records);
    console.log(data);
    const record = useSelector((state) => state.data);
    console.log(record);
    const onchangeInput = (e) => {
        dispatch(userData({ ...record, [e.target.name]: e.target.value }))
    }
    const onClickButton = () => {
        dispatch(getDataByTitle(record))
    }
    const onClickButton2 = () => {
        dispatch(getDataByID(record));
    }

    return (
        <>
            <h1>By Title</h1>
            <form >
                <div className="form" style={{ display: 'inline-flex' }}>
                    <div className="form-group" >
                        <label htmlFor="exampleInput1">Title</label>
                        <input type="text" className="form-control" name="title" placeholder="Title" onChange={(e) => onchangeInput(e)} />
                    </div>
                    <div>
                        <label htmlFor="exampleInputPassword1">Year</label>
                        <input type="text" className="form-control" name="year" placeholder="year" onChange={(e) => onchangeInput(e)} />
                    </div>
                    <div>
                        <label htmlFor="exampleInputPassword1">Plot</label>
                        <select className="form-select form-select-sm" style={{ display: 'inline-flex', height: '60%' }} name="plot" onChange={(e) => onchangeInput(e)} >
                            <option select="true">Short</option>
                            <option value="full">Full</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="exampleInputPassword1">Response</label>
                        <select className="form-select form-select-sm" style={{ display: 'inline-flex', height: '60%' }} name="response" onChange={(e) => onchangeInput(e)} >
                            <option select="true">JSON</option>
                            <option value="xml">XML</option>
                        </select>
                    </div>
                </div>
            </form><br />
            <div style={{ display: 'inline-flex' }}>
                <button type="button" className="btn btn-primary" onClick={() => onClickButton()}>Search</button>
            </div>

            <div className='item-container'>
                <div className='card'>
                    <p>{data.Title}</p>
                    <p>{data.Year}</p>
                    <p>{data.Released}</p>
                    <p>{data.Writer}</p>
                    <p>{data.imdbID}</p>
                    <p>{data.Poster}</p>
                </div>
            </div><br /><br />
            <h1>By ID</h1>
            <form >
                <div className="form" style={{ display: 'inline-flex' }}>
                    <div className="form-group" >
                        <label htmlFor="exampleInput1">ID</label>
                        <input type="text" className="form-control" name="id" placeholder="IMDb ID" onChange={(e) => onchangeInput(e)} />
                    </div>
                    <div>
                        <label htmlFor="exampleInputPassword1">Plot</label>
                        <select className="form-select form-select-sm" style={{ display: 'inline-flex', height: '60%' }} name="plot" onChange={(e) => onchangeInput(e)} >
                            <option select="true">Short</option>
                            <option value="full">Full</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="exampleInputPassword1">Response</label>
                        <select className="form-select form-select-sm" style={{ display: 'inline-flex', height: '60%' }} name="response" onChange={(e) => onchangeInput(e)} >
                            <option select="true">JSON</option>
                            <option value="xml">XML</option>
                        </select>
                    </div>
                </div>
                <div><br />
                    <button type="button" className="btn btn-primary" onClick={() => onClickButton2()}>Search</button>
                </div>
            </form>

            <div className='item-container'>
                <div className='card'>
                    <p>{data.Title}</p>
                    <p>{data.Year}</p>
                    <p>{data.Released}</p>
                    <p>{data.Writer}</p>
                    <p>{data.imdbID}</p>
                    <p>{data.Poster}</p>
                </div>
            </div><br /><br />
        </>
    )
}
export default Home;