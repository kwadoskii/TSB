import { XIcon } from "@heroicons/react/outline";
import { useRef } from "react";

export default function Input({
  checkboxText,
  name,
  hasLabel = false,
  type = "text",
  noVerticalMargin = false,
  value,
  onChange,
  clearButton = false,
  error, //use redux to implement this
  ...props
}) {
  const nameFormatted = name?.toLowerCase().split(" ").join("_");
  const inputRef = useRef(null);

  return (
    <div className={`w-full ${!noVerticalMargin && "my-6 mx-0"}`}>
      {hasLabel && (
        <label className="block mb-2 font-medium" htmlFor={nameFormatted}>
          {name}
        </label>
      )}
      {type !== "checkbox" ? (
        <div className="relative">
          <input
            className="outline-none border border-gray-300 p-3 bg-white rounded-md transition-all duration-75 w-full focus:bg-white focus:my-shadow-blue h-10 placeholder-gray-500 pr-8"
            {...props}
            name={nameFormatted}
            id={nameFormatted}
            type={type}
            value={value}
            onChange={onChange}
            ref={inputRef}
          />
          {error && <p className="text-xs text-red-600 pl-1 mt-0.5">{error.replace(/"/g, "")}</p>}
          {clearButton && value && (
            <div
              className="flex items-center cursor-pointer absolute right-2 top-1/4"
              onClick={() => {
                inputRef.current.value = "";
                inputRef.current.focus();
              }}
            >
              <XIcon className="h-5 text-gray-400 hover:text-gray-700 bg-white" />
            </div>
          )}
        </div>
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
