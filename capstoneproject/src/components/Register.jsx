import { useState } from "react";

//api
import { useRegisterMutation } from "../redux/api";

function Register(props) {
  const [userInfo, setUserInfo] = useState({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    email: "",
  });
  
  const [register] = useRegisterMutation();
  

  const eventHandler = async (event) => {
    event.preventDefault();
    const { data,error } = await register(userInfo)
    console.log(`data${JSON.stringify(data)}`);
    console.log(`error${JSON.stringify(error)}`);

  };

  const onUserInput = (e) => {
    if (errorMsg) {
      setError(null);
    }
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h1>Register</h1>
      {/* error message */}
      {error ? <p>{error}</p> : false}
      <form className="register" onSubmit={eventHandler}>
        <label>
          First Name:
          <input
            placeholder="firstname"
            type="text"
            name="firstname"
            value={userInfo.firstname}
            onChange={onUserInput}
          ></input>
        </label>
        <br />
        <label>
          Last Name:
          <input
            placeholder="lastname"
            type="text"
            name="lastname"
            value={userInfo.lastname}
            onChange={onUserInput}
          ></input>
        </label>
        <br />
        <label>
          Username:
          <input
            placeholder="username"
            type="text"
            name="username"
            value={userInfo.username}
            onChange={onUserInput}
          ></input>
        </label>
        <br />
        <label>
          {" "}
          Password:
          <input
            placeholder="password"
            type="password"
            name="password"
            value={userInfo.password}
            onChange={onUserInput}
          ></input>
        </label>
        <br />
        <label>
          Email:
          <input
            placeholder="email"
            type="email"
            name="email"
            value={userInfo.email}
            onChange={onUserInput}
          ></input>
        </label>
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Register;
