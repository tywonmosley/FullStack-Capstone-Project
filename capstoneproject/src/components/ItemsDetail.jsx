//api
import { useDetailsQuery } from "../redux/api";

// eslint-disable-next-line react/prop-types
function ItemsDetail({ token }) {
  const { data, error, isLoading } = useDetailsQuery({token, id: 1});
  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Something went wrong!</p>;
  }
  console.log(data);

  if (!data) {
    return <p>No data available</p>;
  }

  return <div><h2>Item Detail</h2></div>;
}

export default ItemsDetail;
