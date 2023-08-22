import BookCard from "./BookCard";

function SearchResults({ results }) {
  return (
    <section>
      {results.books?.map((book) => {
        return <BookCard key={book.primary_isbn10} title={book.title} />;
      })}
    </section>
  );
}

export default SearchResults;
