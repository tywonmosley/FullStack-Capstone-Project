import { useParams, useNavigate } from "react-router-dom";


//api
import { useDetailsQuery } from "../redux/api";

// eslint-disable-next-line react/prop-types
function ItemDetails({ token }) {
  const { id } = useParams();
  const { data, error, isLoading } = useDetailsQuery( { token, id } );
const navigate = useNavigate();

  const returnHome = () => {
    navigate ("/items")
  }

  const editItemsDetail = () => {
    navigate (`/edit/${id}`)
  }
  
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Something went wrong!!!</p>;
  }
  return (
    <div>
        {data ? 
        <div>
      <h2>Item Detail</h2>
      <img src={data.image} width="200px" />
      <h3>{data.title}</h3>
      <p><b>Category:</b>{data.category}
      <br/>    
      <b>Cost:</b> ${data.price}</p>
      <p><b>Description:</b>{data.description}</p> 
      <button onClick={editItemsDetail}>Edit </button>
      <button onClick={returnHome}>Return </button>

      </div>: 
      <p>No data available</p> }
    </div>
    
  );
}

export default ItemDetails;