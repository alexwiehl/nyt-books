import { useEffect, useState } from "react";
import Button from "./Button";

const API_KEY = "C7iUqcQlOnOGdt6uyGR0hIUXweCxIMtP";

function Search({ query, setQuery, results, setResults }) {
  function handleSubmit(e) {
    e.preventDefault();
    console.log({ query });
    fetch(
      `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => setResults(data.results));
    setQuery("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a NYT Best Seller"
        className="border border-black "
      ></input>
      <Button label="Search" />
    </form>
  );
}

export default Search;
