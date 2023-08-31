import { useState } from "react";
import Search from "./components/Search";
import SearchResults from "./components/SearchResults";

function App() {
  const currentDate = new Date().toJSON().slice(0, 10);

  const [query, setQuery] = useState(currentDate);
  const [results, setResults] = useState([]);

  return (
    <>
      <header className="flex bg-[#ffd455] justify-center w-full">
        <section className="flex max-md:p-8 p-16 w-full">
          <div className="w-full flex flex-col px-26 py-52 bg-bottom rounded-3xl justify-evenly bg-opacity-50 bg-cover bg-[url('https://images.pexels.com/photos/14200456/pexels-photo-14200456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')]">
            <h1 className="flex-1 font-alice text-white max-md:text-6xl text-[80px] text-center pb-4 mx-4">
              NYT Best Sellers
            </h1>

            <Search
              query={query}
              setQuery={setQuery}
              setResults={setResults}
              currentDate={currentDate}
            />
            {/* <p className="flex-1 font-alice text-white max-md:text-xl text-[20px] text-center pt-4 mx-4">
              Search any weekly list between today and 2009.
            </p> */}
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
