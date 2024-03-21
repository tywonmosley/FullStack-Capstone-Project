/* eslint-disable react/prop-types */
import { useState } from "react";
import { useAddItemMutation } from "../redux/api";

/**
 * AddItems component allows users to add new items.
 * @param {Object} props - Component props.
 * @param {string} props.token - User authentication token.
 * @returns {JSX.Element} AddItems component UI.
 */
function AddItems(props) {
  // State for form input values
  const [form, setForm] = useState({
    title: "",
    price: "",
    description: "",
    image: "",
    category: "",
  });

  // State for handling errors
  const [error, setError] = useState(null);

  // Mutation hook for adding an item
  const [addItem] = useAddItemMutation();

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Add item with API mutation
      // eslint-disable-next-line no-unused-vars
      const { data, error } = await addItem({ token: props.token, body: form });

      // Handle errors
      if (error) {
        setError("Something went wrong! Please try again.");
      } else {
        // Clear form on successful submission
        setForm({
          title: "",
          price: "",
          description: "",
          image: "",
          category: "",
        });
      }
    } catch (error) {
      console.error("Error occurred while adding item:", error);
    }
  };

  // Handle form input changes
  const handleChange = ({ target }) => {
    setError(null);
    setForm({ ...form, [target.name]: target.value });
  };

  return (
    <div>
      <h2>Add an Item</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddItems;
