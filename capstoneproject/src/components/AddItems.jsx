import { useState } from "react";

//api
import { useAddItemMutation } from "../redux/api";

function AddItems(props) {

    const [form, setForm] = useState({
        title: "",
        price: "",
        description: "",
        image: "",
        category: "",
    });

    // eslint-disable-next-line no-unused-vars
    const [error, setError] = useState(null);
    const [ addItem ] = useAddItemMutation();

    const handleSubmit = async (event) => {
        event.preventDefault();
        // eslint-disable-next-line no-unused-vars, react/prop-types
        const { data, error } = await addItem({ token: props.token, body: form });
       
        if (error) {
            setError("Something went wrong! Please try again.");
          } else {
            setForm({
                title: "",
                price: "",
                description: "",
                image: "",
                category: "",
            });
          }
        
    };
    

    const handleChange = ({target}) =>{
        setError(null);
        console.log("target---> ", target);
        console.log("value ---> ", target.value);
        console.log("**************");

        setForm({...form, [target.name]: target.value})
    };

  return (
    <div>
      <h2>Add an Item</h2>
     <form>
      <label htmlFor="title">Title:</label>
      <input value={form.title} name="title" type="text" onChange={handleChange}/>
      <br/>
      <label htmlFor="price">Price:</label>
      <input value={form.price} name="price" type="text" onChange={handleChange}/>
      <br/>
      <label htmlFor="description">Description:</label>
      <input value={form.description} name="description" type="text" onChange={handleChange} />
      <br/>
      <label htmlFor="image">Image Url:</label>
      <input value={form.image} name="image" type="text" onChange={handleChange}/>
      <br/>
      <label htmlFor="category">Category:</label>
      <input value={form.category} name="category" type="text" onChange={handleChange}/>
      <br/> <br/>
      <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default AddItems;
