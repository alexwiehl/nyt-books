import { useState } from "react";
import Search from "./components/Search";
import SearchResults from "./components/SearchResults";

function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  return (
    <main>
      <section className="bg-cover bg-[url('public/yellowbookbg.jpg')] w-full h-screen bg-slate-500 flex justify-center hero-bg">
        {/* <div className="bg-cover bg-[url('public/yellowbookbg.jpg')] max-w-screen-xl mb-20 mt-12 mx-20 rounded-[100px] z-0 relative"> */}
        <Search query={query} setQuery={setQuery} setResults={setResults} />
        {/* </div> */}
      </section>
      <section>{results && <SearchResults results={results} />}</section>
    </main>
  );
}

export default App;
