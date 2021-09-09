export default function Nav() {
  return (
    <nav className="flex flex-wrap items-center gap-1">
      <div>
        <a className="p-1 py-0 my-0 border-[3px] border-transparent hover:text-blue-700 rounded-md hover:bg-purple-100">
          Most Relevant
        </a>
      </div>

      <div>
        <a className="p-1 py-0 my-0 border-[3px] border-transparent hover:text-blue-700 rounded-md hover:bg-purple-100">
          Two
        </a>
      </div>

      <div href="#" passHref>
        <a className="p-1 py-0 my-0 border-[3px] border-transparent hover:text-blue-700 rounded-md hover:bg-purple-100">
          Three
        </a>
      </div>
    </nav>
  );
}
