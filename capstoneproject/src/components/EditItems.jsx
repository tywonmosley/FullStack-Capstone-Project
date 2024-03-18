import { useParams, useNavigate } from "react-router-dom";
import { useState} from "react";

//api
import { useEditItemMutation, useDetailsQuery } from "../redux/api";

// eslint-disable-next-line react/prop-types
function EditItems({token}) {
  let { id } = useParams();
  const navigate = useNavigate();  
  const [editItem] = useEditItemMutation(); 
  const [form, setForm] = useState({
    title: "",
    price: "",
    description: "",
    image: "",
    category: "",
  });

  const [errorMsg, setError] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const { data, error, isLoading } = useDetailsQuery({ token, id });

  
  const cancelEdit = () => {
    navigate(`/details/${id}`);
  };

  const handleChange = ({ target }) => {
    setError(null);
    setForm({ ...form, [target.name]: target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // eslint-disable-next-line no-unused-vars
    const { data, error } = await editItem({
      token: token,
      body: form,
      id: id,
    });

    if (error) {
      setError("Something went wrong! Please try again.");
    } else {
      navigate(`/details/${id}`); 
    }
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Something went wrong!!!</p>;
  }

  return (
    <div>
      <h2>Edit Item Detail</h2>
      {errorMsg && <p>{errorMsg}</p>}
      <form>
        <label htmlFor="title">Title:</label>
        <input
          value={form.title}
          name="title"
          type="text"
          onChange={handleChange}
        />
        <br />
        <label htmlFor="price">Price:</label>
        <input
          value={form.price}
          name="price"
          type="text"
          onChange={handleChange}
        />
        <br />
        <label htmlFor="description">Description:</label>
        <input
          value={form.description}
          name="description"
          type="text"
          onChange={handleChange}
        />
        <br />
        <label htmlFor="image">Image Url:</label>
        <input
          value={form.image}
          name="image"
          type="text"
          onChange={handleChange}
        />
        <br />
        <label htmlFor="category">Category:</label>
        <input
          value={form.category}
          name="category"
          type="text"
          onChange={handleChange}
        />
        <br /> <br />
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={cancelEdit}>Cancel</button>
      </form>
    </div>
  );
}

export default EditItems;

