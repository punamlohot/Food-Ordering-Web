import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [inputValue, setInputValue] = useState(" ");
  const [password, setPassword] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <>
      <div className="container p-3 m-10" id="log">
        <h1 className="wel">Welcome User</h1>
        <form action="/action_page.php">
          <div className="mb-3 mt-5">
            {/*<label htmlFor="Name" className="form-label">UserName:</label>*/}
            <input
              type="text"
              className="form-control text-center"
              id="email"
              placeholder="Enter Username Or Email"
              name="email"
            />
          </div>
          <div className="mb-5">
            {/*<label htmlFor="pwd" className="form-label">Password:</label>*/}
            <input
              type="password"
              className="form-control text-center"
              id="pwd"
              placeholder="Enter password"
              name="pswd"
            />
          </div>
          <div className="form-check mb-2">
            <label className="form-check-label">
              Remember me
              <input
                className="form-check-input"
                type="checkbox"
                name="remember"
              />
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <br></br>
          <br></br>
          <div className="linkss">
            <a href=" ">Forgot Password</a>&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/register">Register Here</Link>
          </div>
        </form>
      </div>
    </>
  );
};
export default Login;
