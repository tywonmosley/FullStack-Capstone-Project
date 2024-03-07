import tabImage from "../assets/HomeImage.jpeg";

function Account(props) {
    /**
   * user body from API:
   * {
      "user": {
          "user_id": 5,
          "username": "test123",
          "email": "someEmail@gmail.com",
          "first_name": "test",
          "last_name": "testy"
      }
  }
   */
    console.log(props);
  
    return (
      <section>
        <h2>Account</h2>
        <img src={tabImage} alt="image"></img>
      </section>
    );
  }
  
  export default Account;