import { useContext } from "react";
import UserContext from "../context/UserContext";

function ViewData() {

    const {username, password} = useContext(UserContext);

    return (
        <div className="container mt-5">
            <h2>View Data </h2>
            <h1>Userame:</h1>
            <h3>{username }</h3>
            <br />
            <h1>Password:</h1>
            <h3>{password }</h3>
        </div>
    );
}

export default ViewData;