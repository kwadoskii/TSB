export default function Footer() {
  return (
    <div className="bg-gray-300 py-4 text-center md:px-3">
      <p className="text-sm text-gray-700 my-3">A forum to write, learn and earn.</p>
      <p className="text-sm text-gray-700 my-1">
        Made with love and Next.js with a touch of tailwind.
      </p>
      <p className="text-sm text-gray-700 my-3">Built by @kwadoskii</p>
      <p className="text-xs text-gray-600 my-2">TSB © 2021 - {new Date().getFullYear()}</p>
    </div>
  );
}
