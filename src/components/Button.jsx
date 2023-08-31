function Button({ label }) {
  return (
    <button className="border border-black rounded-full w-[25%] bg-[#1B49A6] min-w-[100px] text-white mx-2">
      {label}
    </button>
  );
}

export default Button;
