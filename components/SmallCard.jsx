export default function SmallCard({ title, subtitle }) {
  return (
    <div className="rounded-md border shadow-md border-gray-300 flex flex-col bg-gray-50 p-4 gap-1 flex-grow">
      <h2 className="text-black font-bold text-3xl">{title}</h2>
      <p className="text-gray-500">{subtitle}</p>
    </div>
  );
}
