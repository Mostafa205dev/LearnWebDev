function Header() {
  return (
    <div className="bg-[#0f1117] flex items-center justify-between px-8 py-4 border-b border-white/8">
      <div className="text-lg font-semibold text-white">
        Learn<span className="text-indigo-500">WebDev</span>
      </div>
      <div className="flex gap-6">
        <a className="text-sm text-slate-400 hover:text-white cursor-pointer">
          المسارات
        </a>
        <a className="text-sm text-slate-400 hover:text-white cursor-pointer">
          الدروس
        </a>
        <a className="text-sm text-slate-400 hover:text-white cursor-pointer">
          عن الموقع
        </a>
      </div>
      <button className="text-sm bg-indigo-500 text-white rounded-lg px-4 py-2 hover:opacity-85">
        ابدأ مجاناً
      </button>
    </div>
  );
}

export default Header;
