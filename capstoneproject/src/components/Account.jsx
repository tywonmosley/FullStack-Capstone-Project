

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
        <h1>Account</h1>
      </section>
    );
  }
  
  export default Account;