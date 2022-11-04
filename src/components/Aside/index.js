export function Aside() {
  return (
    <aside className="fixed hidden h-screen w-64 flex-col items-center border-r-[1px] border-slate-500 bg-slate-900 p-8 text-slate-400 lg:flex">
      <h1 className="cursor-pointer text-2xl font-extrabold hover:text-pink-600">
        Site title
      </h1>
      <h2 className="-mt-1 cursor-pointer text-sm font-extrabold italic hover:text-pink-600">
        Subtitle
      </h2>

      <p className="mt-8 text-center">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus
        saepe velit, sapiente commodi non magni.
      </p>

      <nav className="mt-7">
        <ul className="flex gap-5">
          <li className="cursor-pointer hover:text-pink-600">Btn 1</li>
          <li className="cursor-pointer hover:text-pink-600">Btn 2</li>
          <li className="cursor-pointer hover:text-pink-600">Btn 3</li>
        </ul>
      </nav>

      <nav className="mt-10">
        <ul className="flex flex-col gap-3">
          <li className="cursor-pointer hover:text-pink-600">Home</li>
          <li className="cursor-pointer hover:text-pink-600">About</li>
          <li className="cursor-pointer hover:text-pink-600">Plans</li>
          <li className="cursor-pointer hover:text-pink-600">Contact</li>
        </ul>
      </nav>
    </aside>
  );
}
