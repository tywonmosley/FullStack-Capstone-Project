import { useState } from "react";
import { Link } from "react-router-dom";
import { useItemsQuery } from "../redux/api";


// eslint-disable-next-line react/prop-types
function ItemList({ token }) {
  const { data, error, isLoading } = useItemsQuery(token);
  const [filterCategory, setFilterCategory] = useState("");
  const [sortBy, setSortBy] = useState("price"); // Default sorting by price
  const [searchQuery, setSearchQuery] = useState("");

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Something went wrong!</p>;
  }

  if (!data || data.length === 0) {
    return <p>No data available</p>;
  }

  // Filtering function
  const filteredData = data.filter(
    (item) =>
      item.category.toLowerCase().includes(filterCategory.toLowerCase()) &&
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Sorting function
  const sortedData = [...filteredData].sort((a, b) => {
    if (sortBy === "price") {
      return a.price - b.price;
    } else if (sortBy === "rating") {
      return b.rating.rate - a.rating.rate; // Sort by descending rating
    }
    return 0;
  });

  return (
    <div className="shop">
      <h2>Item List</h2>
      <div>
        {/* Filter */}
        <select
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          {/* Dynamically generate options based on available categories */}
          {[...new Set(data.map((item) => item.category))].map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        {/* Sort */}
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="price">Sort by Price</option>
          <option value="rating">Sort by Rating</option>
        </select>

        {/* Search */}
        <input
          type="text"
          placeholder="Search by title"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <br/>

      {sortedData.map((item) => (
        <div className="product" key={item.id}>
          <img src={item.image} width="150px" alt={item.title} />
          <h3>{item.title}</h3>
          <p>
            <b>Category:</b> {item.category} <b>Cost:</b> ${item.price}
          </p>
          <Link to={`/details/${item.id}`}>See More Details</Link>
          <br></br>
          <button>Add to Cart</button>
          <br/><br/>
        </div>
      ))}
    </div>
  );
}

export default ItemList;
