import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="bg-[#0f1117] flex flex-wrap items-center justify-between px-8 py-4 border-b border-white/8">
      <div className="flex items-center justify-between w-full sm:w-auto">
        <div className="text-lg font-semibold text-white">
          Learn<span className="text-indigo-500">WebDev</span>
        </div>
        <Link
          to="/html"
          className="text-sm bg-indigo-500 text-white rounded-lg px-4 py-2 hover:opacity-85 sm:hidden"
        >
          ابدأ مجاناً
        </Link>
      </div>

      <div className="flex gap-6 w-full sm:w-auto justify-center py-2 sm:py-0">
        <Link
          to="/"
          className="text-sm text-slate-400 hover:text-white cursor-pointer"
        >
          Home
        </Link>
        <Link
          to={"/privacy"}
          className="text-sm text-slate-400 hover:text-white cursor-pointer"
        >
          privacy
        </Link>
        <Link
          to={"/contact"}
          className="text-sm text-slate-400 hover:text-white cursor-pointer"
        >
          Contact Us
        </Link>
        <Link
          to={"/about"}
          className="text-sm text-slate-400 hover:text-white cursor-pointer"
        >
          About
        </Link>
      </div>

      <Link
        to="/html"
        className="hidden sm:block text-sm bg-indigo-500 text-white rounded-lg px-4 py-2 hover:opacity-85"
      >
        ابدأ مجاناً
      </Link>
    </div>
  );
}

export default Header;
