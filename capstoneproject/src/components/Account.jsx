import { useAccountQuery } from "../redux/api";

/**
 * Account component displays user account information retrieved from API.
 * @param {Object} props - Component props.
 * @param {string} props.token - User authentication token.
 * @returns {JSX.Element} Account component UI.
 */
function Account(props) {
  // Fetch user account data from API
  const { data, error, isLoading } = useAccountQuery(props.token);

  // Render error message if there's an error or if data is not available and loading has finished
  if (error || (!data?.user && !isLoading)) {
    return <p>Something went wrong!</p>;
  }

  // Render loading message while fetching data
  if (isLoading) {
    return <p>Loading...</p>;
  }

  // Render user account information
  return (
    <section>
      <h2>Account</h2>
      <ul>
        <li>Username: {data.user.username}</li>
        {data.user.email && <li>Email: {data.user.email}</li>}
        {data.user.first_name && <li>First Name: {data.user.first_name}</li>}
        {data.user.last_name && <li>Last Name: {data.user.last_name}</li>}
      </ul>
    </section>
  );
}

export default Account;
