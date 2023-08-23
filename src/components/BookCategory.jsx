function BookCategory({ category, index, children }) {
  let sectionColor = "";
  let textColor = "";

  switch (index) {
    case 0:
      sectionColor = "#f1b3ca";
      textColor = "black";
      break;
    case 1:
      sectionColor = "#1B49A6";
      textColor = "white";
      break;
    case 2:
      sectionColor = "#ffd455";
      textColor = "black";
      break;
    case 3:
      sectionColor = "#f06735";
      textColor = "white";
      break;
    case 4:
      sectionColor = "#f1b3ca";
      textColor = "black";
      break;
    case 5:
      sectionColor = "#1B49A6";
      textColor = "white";
      break;
    case 6:
      sectionColor = "#ffd455";
      textColor = "black";
      break;
    case 7:
      sectionColor = "#f06735";
      textColor = "white";
      break;
    case 8:
      sectionColor = "#f1b3ca";
      textColor = "black";
      break;
    case 9:
      sectionColor = "#1B49A6";
      textColor = "white";
      break;
    case 10:
      sectionColor = "#ffd455";
      textColor = "black";
      break;
    case 11:
      sectionColor = "#f06735";
      textColor = "white";
      break;
    case 12:
      sectionColor = "#f1b3ca";
      textColor = "black";
      break;
    case 13:
      sectionColor = "#1B49A6";
      textColor = "white";
      break;
    case 14:
      sectionColor = "#ffd455";
      textColor = "black";
      break;
    case 15:
      sectionColor = "#f06735";
      textColor = "white";
      break;
    case 16:
      sectionColor = "#f1b3ca";
      textColor = "black";
      break;
    case 17:
      sectionColor = "#1B49A6";
      textColor = "white";
      break;
    case 18:
      sectionColor = "#ffd455";
      textColor = "black";
      break;
    case 19:
      sectionColor = "#f06735";
      textColor = "white";
      break;
    case 20:
      sectionColor = "#f1b3ca";
      textColor = "black";
      break;
    case 21:
      sectionColor = "#1B49A6";
      textColor = "white";
      break;
    default:
      sectionColor = "#f1b3ca";
      textColor = "black";
      break;
  }

  return (
    <div
      className="flex flex-col pb-10 px-12 pt-5 bg-red-200  w-screen mx-auto"
      style={{
        backgroundColor: sectionColor,
        color: textColor,
      }}
    >
      <div className="flex-1 self-center mt-10 mb-8 font-bold text-4xl font-alice">
        {category}
      </div>
      <div className="flex flex-row max-lg:flex-col flex-1 p-1 gap-2">
        {children}
      </div>
    </div>
  );
}

export default BookCategory;
