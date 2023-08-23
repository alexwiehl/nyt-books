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
    <div className="flex flex-col max-lg:flex-row flex-1 bg-white/0 rounded-[10px]  max-lg:items-center ">
      <p className="absolute  ml-[140px] max-lg:-mt-10 max-lg:-ml-7 text-[150px] text-white/20 z-0 font-alice font-black ">
        {rank}
      </p>
      <img
        src={image}
        alt={`cover of ${title} by ${author}`}
        className="border border-black relative h-[200px] max-xl:h-[175px] max-lg:w-[110px] max-lg:h-auto max-md:w-[90px] max-md:h-auto max-sm:h-auto max-sm:w-[90px] ml-4 mb-5 p-3 max-lg:p-2 mt-7 max-lg:mt-1  bg-white rounded-[10px] z-10 self-start"
      />

      <div className="flex flex-1 flex-col max-lg:flex-row max-md:flex-col justify-between items-start">
        <div className="flex flex-col flex-1 mx-4">
          <p className="text-xs text-opacity-20 mb-2 max-lg:hidden font-epi">
            {weeks < 2 ? "NEW THIS WEEK" : `${weeks} WEEKS ON THE LIST`}
          </p>
          <h3 className="z-10 text-2xl leading-6 font-alice mb-1">{title}</h3>
          <h4 className="text-m mb-4 z-10 font-alice">by {author}</h4>
          <p className="text-[13px] leading-5 mb-4 max-md:hidden font-epi">
            {description}
          </p>
        </div>
        <button className="transition mx-4 mb-5 py-1 px-7 bg-white/80 hover:bg-white font-black text-black rounded-full font-alice self-start border border-black">
          BUY
        </button>
      </div>
    </div>
  );
}

export default BookCard;
