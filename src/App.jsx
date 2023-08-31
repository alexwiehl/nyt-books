import { useState } from "react";
import Search from "./components/Search";
import SearchResults from "./components/SearchResults";

function App() {
  const currentDate = new Date().toJSON().slice(0, 10);

  const [query, setQuery] = useState(currentDate);
  const [results, setResults] = useState([]);

  return (
    <>
      <header>
        <section className="bg-cover bg-[url('public/yellowbookbg.jpg')] w-full h-2/5  bg-slate-500 flex justify-center p-52 ">
          {/* <div className="bg-cover bg-[url('public/yellowbookbg.jpg')] max-w-screen-xl mb-20 mt-12 mx-20 rounded-[100px] z-0 relative"> */}
          <Search
            query={query}
            setQuery={setQuery}
            setResults={setResults}
            currentDate={currentDate}
          />
          {/* </div> */}
        </section>
      </header>
      <main>
        <section>{results && <SearchResults results={results} />}</section>
      </main>
    </>
  );
}

export default App;
