export function Header() {
  return (
    <header className="sticky top-0 flex h-20 items-center justify-between border-b-[1px] border-slate-500 bg-slate-900 px-4 text-slate-400 lg:hidden">
      <div>
        <h1 className="cursor-pointer text-2xl font-extrabold hover:text-pink-600">
          Site title
        </h1>
        <h2 className="-mt-1 cursor-pointer text-sm font-extrabold italic hover:text-pink-600">
          Subtitle
        </h2>
      </div>

      <span className="rotate-90 cursor-pointer text-2xl font-extrabold hover:text-pink-600">
        |||
      </span>
    </header>
  );
}
