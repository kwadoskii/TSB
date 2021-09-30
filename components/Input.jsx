export default function Input({
  checkboxText,
  name,
  hasLabel = false,
  type = "text",
  noVerticalMargin = false,
  value,
  onChange,
  ...props
}) {
  const nameFormatted = name?.toLowerCase().split(" ").join("_");

  return (
    <div className={`${noVerticalMargin ? "my-0 mx-0" : "my-6 mx-0"}`}>
      {hasLabel && (
        <label className="block mb-2 font-medium" htmlFor={nameFormatted}>
          {name}
        </label>
      )}
      {type !== "checkbox" ? (
        <input
          className="outline-none border border-gray-300 p-3 bg-white rounded-md transition-all duration-75 w-full focus:bg-white focus:my-shadow-blue h-10 placeholder-gray-500"
          {...props}
          name={nameFormatted}
          id={nameFormatted}
          type={type}
          value={value}
          onChange={onChange}
        />
      ) : (
        <div className="p-1 rounded-md transition duration-100 cursor-pointer flex items-center hover:bg-gray-50 ease-out">
          <input
            className="none h-4 scale-125 cursor-pointer"
            {...props}
            name={nameFormatted}
            id={nameFormatted}
            type={type}
          />
          <span className="ml-2 font-medium">
            <label className="cursor-pointer flex-grow" htmlFor={nameFormatted}>
              {checkboxText}
            </label>
          </span>
        </div>
      )}
    </div>
  );
}
