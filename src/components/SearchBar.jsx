import React from "react";
import { useDispatch } from "react-redux";
import { actionsSupported } from "../redux/reducer/bookReducer";


function SearchBar() {

    const dispatch = useDispatch();
    const [isbn, setisbn] = React.useState('0545162076');

    const getUserData = () => {
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
            <div class="row justify-content-center">
                <div class="col-12 col-md-10 col-lg-8">
                    <div class="card card-sm">
                        <div class="card-body row no-gutters align-items-center">
                            <div class="col-auto">
                                <i class="fas fa-search h4 text-body"></i>
                            </div>
                            <div class="col">
                                <input type="text" value={isbn} onChange={(e) => setisbn(e.target.value)} class="form-control form-control-lg form-control-borderless" placeholder="Search your book" />
                            </div>

                            <div class="col-auto">
                                <button onClick={getUserData} class="btn btn-lg btn-success" >Search</button>
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
