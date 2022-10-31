export default function Button({ className, disabled, text, onClick, otherProps }) {
  return (
    <button
      className={`items-center px-4 py-2.5 w-full text-white font-semibold bg-blue-700 hover:bg-blue-800 rounded-md outline-none transition-all duration-200 ease-out focus:ring-1 ring-blue-700 ring-offset-2 ${
        disabled ? "cursor-not-allowed opacity-75 " : ""
      } ${className}`}
      type="submit"
      onClick={onClick}
      {...otherProps}
    >
      {text}
    </button>
  );
}
