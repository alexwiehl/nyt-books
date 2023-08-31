import { useEffect, useState } from "react";
import Button from "./Button";

const API_KEY = "C7iUqcQlOnOGdt6uyGR0hIUXweCxIMtP";

function Search({ query, setQuery, results, setResults, currentDate }) {
  useEffect(() => {
    async function fetchBooks() {
      const res = await fetch(
        `https://api.nytimes.com/svc/books/v3/lists/overview.json?published_date=${query}&api-key=${API_KEY}`
      );

      const data = await res.json();

      setResults(data.results);
    }

    fetchBooks();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    console.log({ query });
    fetch(
      `https://api.nytimes.com/svc/books/v3/lists/overview.json?published_date=${query}&api-key=${API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => setResults(data.results));
    // setQuery("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex-1 flex self-center justify-center mx-20 "
    >
      <input
        type="date"
        min="2009-01-01T00:00"
        max={`${currentDate}T00:00`}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a NYT Best Seller"
        className="border border-black px-5 py-4 rounded-full w-full min-w-[160px]"
      ></input>
      <Button label="Search" />
    </form>
  );
}

export default Search;
