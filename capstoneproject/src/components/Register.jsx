import { useState } from "react";

function Register() {
  const [userInfo, setUserInfo] = useState({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    email: "",
  });

  const eventHandler = (event) => {
    event.preventDefault();
    console.log("in eventHandler", `USERINFO${JSON.stringify(userInfo)}`);
  };

  const onUserInput = (e) => {
    console.log(e.target.name, e.target.value);
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h1>Register</h1>
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
