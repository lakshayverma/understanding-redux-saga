import React from "react";
import { useDispatch } from "react-redux";
import { actionsSupported } from "../redux/reducer/bookReducer";


function SearchBar() {

    const dispatch = useDispatch();
    const [isbn, setisbn] = React.useState('0545162076');

    const getBookData = () => {
        // Get the Data for the User
        dispatch({
            type: actionsSupported.REQUESTED,
            payload: {
                isbn: isbn
            }
        })
    }

    return (
        <>
            <div className="row justify-content-center">
                <div className="col-12 col-md-10 col-lg-8">
                    <div className="card card-sm">
                        <div className="card-body row no-gutters align-items-center">
                            <div className="col-auto">
                                <i className="fas fa-search h4 text-body"></i>
                            </div>
                            <div className="col">
                                <input type="text" value={isbn} onChange={(e) => setisbn(e.target.value)} className="form-control form-control-lg form-control-borderless" placeholder="Search your book" />
                            </div>

                            <div className="col-auto">
                                <button onClick={getBookData} className="btn btn-lg btn-success" >Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ textAlign: "center", marginTop: "30px" }}> Searching - {isbn}</div>
        </>
    );
}
export default SearchBar;
