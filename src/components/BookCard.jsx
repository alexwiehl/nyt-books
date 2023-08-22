function BookCard({
  key,
  title,
  author,
  image,
  description,
  rank,
  amazonURL,
  weeks,
}) {
  return (
    <div className="flex flex-col max-lg:flex-row flex-1 bg-white/0 rounded-[10px] p-1 max-lg:items-center ">
      <p className="absolute -ml-3 -mt-9 text-9xl text-white/20 z-0 font-alice font-black ">
        {rank}
      </p>
      <img
        src={image}
        alt={`cover of ${title} by ${author}`}
        className="border border-black relative h-[200px] max-xl:h-[175px] max-lg:w-[110px] max-lg:h-auto max-md:w-[90px] max-md:h-auto max-sm:h-[150px] m-7 p-3 max-lg:p-2 mt-7 max-lg:mt-1  bg-white rounded-[10px] z-10 self-center"
      />

      <div className="flex flex-1 flex-col max-lg:flex-row max-md:flex-col justify-between items-start">
        <div className="flex flex-col flex-1 mx-4">
          <p className=" text-xs text-opacity-20 mb-2 max-lg:hidden font-epi">
            {weeks < 2 ? "NEW THIS WEEK" : `${weeks} WEEKS ON THE LIST`}
          </p>
          <h3 className="z-10 text-2xl leading-6 font-alice mb-1">{title}</h3>
          <h4 className="text-m mb-4 z-10 font-alice">by {author}</h4>
          <p className="text-[13px] leading-5 mb-4 max-md:hidden font-epi">
            {description}
          </p>
        </div>
        <button className="mx-4 mb-5 py-2 px-6 border-[1px] rounded-full font-alice self-start">
          BUY
        </button>
      </div>
    </div>
  );
}

export default BookCard;
