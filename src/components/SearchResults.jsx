import BookCard from "./BookCard";
import BookCategory from "./BookCategory";
import Button from "./Button";

function SearchResults({ results }) {
  console.log(results);
  return (
    <>
      {results.lists?.map((list, index) => {
        return (
          <BookCategory
            key={list.list_id}
            category={list.display_name}
            index={index}
          >
            {list.books?.map((book) => {
              console.log(book);
              return (
                <>
                  <BookCard
                    key={book.primary_isbn10}
                    title={book.title}
                    author={book.author}
                    image={book.book_image}
                    description={book.description}
                    rank={book.rank}
                    amazonURL={book.amazon_product_url}
                    weeks={book.weeks_on_list}
                  />
                  {/* <Button label="BUY NOW" /> */}
                </>
              );
            })}
          </BookCategory>
        );
      })}
    </>
  );
}

export default SearchResults;
