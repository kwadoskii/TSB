export default function Card({ children, className, headerColor, header, style }) {
  return (
    <div
      className={`bg-white rounded-md overflow-hidden p-6 mb-7 shadow-md border border-gray-300 ${className}`}
      style={{ ...style }}
    >
      {header && (
        <div className="mb-6" style={{ color: headerColor || "black" }}>
          <h3 className="text-2xl m-0">{header}</h3>
        </div>
      )}
      <div>{children}</div>
    </div>
  );
}
