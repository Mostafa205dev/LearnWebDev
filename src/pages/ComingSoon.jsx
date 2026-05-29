export default function ComingSoonPage() {
  return (
    <div className="min-h-screen bg-[#0b1020] text-white flex items-center justify-center px-6 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-[-120px] left-[-120px] w-[320px] h-[320px] bg-orange-500/20 blur-3xl rounded-full" />
      <div className="absolute bottom-[-120px] right-[-120px] w-[320px] h-[320px] bg-blue-500/20 blur-3xl rounded-full" />

      {/* Main Card */}
      <div className="relative z-10 w-full max-w-2xl bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 sm:p-12 shadow-2xl text-center">
        <span className="inline-block px-4 py-1 rounded-full bg-orange-500/10 text-orange-400 text-xs tracking-[0.25em] uppercase mb-6">
          Coming Soon
        </span>

        <h1 className="text-4xl sm:text-6xl font-bold leading-tight mb-5">
          Something Amazing
          <br />
          Is On The Way 🚀
        </h1>

        <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl mx-auto mb-10">
          We’re building a new experience for you. The page is currently under
          development and will be available very soon.
        </p>

        {/* Progress */}
        <div className="w-full bg-white/10 h-3 rounded-full overflow-hidden mb-3">
          <div className="h-full w-[72%] bg-gradient-to-r from-orange-500 to-orange-300 rounded-full" />
        </div>

        <p className="text-xs text-slate-500 mb-10">72% completed</p>


        {/* Footer */}
        <div className="mt-12 pt-6 border-t border-white/10 text-xs text-slate-500">
          © 2026 LearnWebDev.me — All rights reserved.
        </div>
      </div>
    </div>
  );
}
