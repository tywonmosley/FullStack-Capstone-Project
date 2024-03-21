import { useParams, useNavigate } from "react-router-dom";
import { useDetailsQuery } from "../redux/api";

// eslint-disable-next-line react/prop-types
function ItemDetails({ token }) {
  const { id } = useParams();
  const { data, error, isLoading } = useDetailsQuery({ token, id });
  const navigate = useNavigate();


  const returnHome = () => {
    navigate("/items");
  };

  const editItemsDetail = () => {
    navigate(`/edit/${id}`);
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Something went wrong!!!</p>;
  }

  if (token) {
    return (
      <div>
        {data ? (
          <div>
            <h2>Item Detail</h2>
            <img src={data.image} width="200px" alt={data.title} />
            <h3>{data.title}</h3>
            <p>
              <b>Category:</b>
              {data.category}
              <br />
              <b>Cost:</b> ${data.price}
            </p>
            <p>
              <b>Description:</b>
              {data.description}
            </p>
            <button onClick={editItemsDetail}>Edit</button>
            <button onClick={returnHome}>Return</button>
          </div>
        ) : (
          <p>No data available</p>
        )}
      </div>
    );
  }

  if (!token) {
    return (
      <div>
        {data ? (
          <div>
            <h2>Item Detail</h2>
            <img src={data.image} width="200px" alt={data.title} />
            <h3>{data.title}</h3>
            <p>
              <b>Category:</b>
              {data.category}
              <br />
              <b>Cost:</b> ${data.price}
            </p>
            <p>
              <b>Description:</b>
              {data.description}
            </p>
            <button onClick={returnHome}>Return</button>
          </div>
        ) : (
          <p>No data available</p>
        )}
      </div>
    );
  }
}

export default ItemDetails;
