//api

import { useItemsQuery } from "../redux/api"

function ItemList({ token }) {
    console.log(token)
    const {data, error, isLooading} = useItemsQuery(token)
if (isLooading) {
    return(<p>Loading...</p>)
} if(error) {
    return(<p>Something went wrong!</p>)
}
console.log(data)
// console.log(JSON.stringify(data, null, 3))
if (!data) {
    return <p>No data available</p>;
}
/**
 * 
 *   "id": 1,
      "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      "price": 109.95,
      "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      "category": "men's clothing",
      "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      "rating": {
         "rate": 3.9,
         "count": 120
 */
return (
    <div>
        <h2>Item List</h2>
        {data?.map((item) => {
            return (<div key={item.id}> 
       
        <img src={item.image} width="150px"/> 
        <h3>{item.title}</h3>
        <p><b>Category:</b>{item.category}    <b>Cost:</b>{item.price}
        </p>

            </div>)
        })}
  </div>
);
}

export default ItemList