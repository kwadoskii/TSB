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
  needed = false,
  ...props
}) {
  const nameFormatted = name?.toLowerCase().split(" ").join("_");
  const inputRef = useRef(null);

  return (
    <div className={`w-full ${!noVerticalMargin && "my-6 mx-0"}`}>
      {hasLabel && (
        <label className="block mb-2 font-medium" htmlFor={nameFormatted}>
          {name}
          {needed && <span className="text-red-500">*</span>}
        </label>
      )}
      {type !== "checkbox" ? (
        <div className="relative">
          <input
            className="focus:my-shadow-blue placeholder-gray-500 p-3 pr-8 w-full h-10 bg-white focus:bg-white border border-gray-300 rounded-md outline-none transition-all duration-75"
            {...props}
            name={nameFormatted}
            id={nameFormatted}
            type={type}
            value={value}
            onChange={onChange}
            ref={inputRef}
          />
          {error && <p className="mt-0.5 pl-1 text-red-600 text-xs">{error.replace(/"/g, "")}</p>}
          {clearButton && value && (
            <div
              className="absolute right-2 top-1/4 flex items-center cursor-pointer"
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
        <div className="flex items-center p-1 hover:bg-gray-50 rounded-md cursor-pointer transition duration-100 ease-out">
          <input
            className="none h-4 cursor-pointer scale-125"
            {...props}
            name={nameFormatted}
            id={nameFormatted}
            type={type}
            onChange={onChange}
          />
          <span className="ml-2 font-medium">
            <label className="flex-grow cursor-pointer" htmlFor={nameFormatted}>
              {checkboxText}
            </label>
          </span>
        </div>
      )}
    </div>
  );
}
