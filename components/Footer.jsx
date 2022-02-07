export default function Footer() {
  return (
    <div className="py-4 text-center bg-gray-300 md:px-3">
      <p className="my-3 text-gray-700 text-sm">A forum to write, learn and earn.</p>
      <p className="my-1 text-gray-700 text-sm">
        Made with love and Next.js with a touch of tailwind.
      </p>
      <p className="my-3 text-gray-700 text-sm">Built by @kwadoskii</p>
      <p className="my-2 text-gray-600 text-xs">TSB © 2021 - {new Date().getFullYear()}</p>
    </div>
  );
}
