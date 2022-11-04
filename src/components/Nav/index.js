export function Nav() {
  return (
    <nav className="fixed bottom-0 flex h-12 w-full items-center justify-between border-t-[1px] border-slate-600 bg-slate-900 px-8 text-slate-400 lg:right-0 lg:h-screen lg:w-12 lg:flex-col lg:border-l-[1px] lg:py-8 lg:px-0">
      <div className="flex gap-4 lg:flex-col">
        <span className="cursor-pointer hover:text-pink-600">Btn</span>
        <span className="cursor-pointer hover:text-pink-600">Btn</span>
        <span className="cursor-pointer hover:text-pink-600">Btn</span>
      </div>

      <div className="flex gap-4 lg:flex-col">
        <span className="cursor-pointer hover:text-pink-600">Btn</span>
        <span className="cursor-pointer hover:text-pink-600">Btn</span>
      </div>
    </nav>
  );
}
