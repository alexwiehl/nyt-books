function Button({ label }) {
  return (
    <button className="border border-black rounded-full w-[25%] bg-[#f06735] min-w-[100px] text-white mx-2 hover:bg-[#1B49A6] transition-all ease-in-out duration-200">
      {label}
    </button>
  );
}

export default Button;
