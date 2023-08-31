import { useState } from "react";
import Search from "./components/Search";
import SearchResults from "./components/SearchResults";

function App() {
  const currentDate = new Date().toJSON().slice(0, 10);

  const [query, setQuery] = useState(currentDate);
  const [results, setResults] = useState([]);

  return (
    <>
      <header className="bg-[#ffd455]">
        <section className="p-16">
          <div className="bg-opacity-50 bg-cover bg-[url('https://images.pexels.com/photos/14200456/pexels-photo-14200456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] w-full flex-col justify-items-center py-52 px-26 bg-bottom rounded-3xl">
            <h1 className="flex flex-1 justify-items-center font-alice text-white max-md:text-5xl text-[80px] text-center justify-center pb-4 mx-4">
              NYT Best Sellers
            </h1>
            <Search
              query={query}
              setQuery={setQuery}
              setResults={setResults}
              currentDate={currentDate}
            />
          </div>
          {/* <div className="bg-cover bg-[url('public/yellowbookbg.jpg')] max-w-screen-xl mb-20 mt-12 mx-20 rounded-[100px] z-0 relative"> */}

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
