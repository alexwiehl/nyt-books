import { useState } from "react";
import Search from "./components/Search";
import SearchResults from "./components/SearchResults";

function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  return (
    <main>
      <section>
        <Search query={query} setQuery={setQuery} setResults={setResults} />
      </section>
      <section>{results && <SearchResults results={results} />}</section>
    </main>
  );
}

export default App;
