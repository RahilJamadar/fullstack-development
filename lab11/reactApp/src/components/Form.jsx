import { useState } from "react";
import UserContext from "../context/UserContext";
import ViewData from "./ViewData";

function Form() {

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data Submitted:', formData);
    }
    return (
        <>
            <UserContext.Provider value={formData}>
                <ViewData />
            </UserContext.Provider>

            <div className="container mt-5">
                <div className="card shadow-sm">
                    <div className="card-body">
                        <h3 className="card-title mb-4 text-center text-primary">Login Form</h3>
                        <form>
                            <div className="form-group mb-3">
                                <label htmlFor="Username" className="form-label">
                                    Username
                                </label>
                                <input
                                    name="username"
                                    type="text"
                                    className="form-control"
                                    id="Username"
                                    placeholder="Enter username"
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group mb-4">
                                <label htmlFor="Password" className="form-label">
                                    Password
                                </label>
                                <input
                                    name="password"
                                    type="password"
                                    className="form-control"
                                    id="Password"
                                    placeholder="Password"
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="d-grid">
                                <button type="submit" onClick={handleSubmit} className="btn btn-primary">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Form;