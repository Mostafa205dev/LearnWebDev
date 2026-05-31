export default function Contact() {
  return (
    <div className="min-h-screen bg-[#0f1117] text-slate-200">
      {/* Header */}
      <div className="text-center py-16 px-6 border-b border-white/10">
        <h1 className="text-3xl font-bold text-orange-400">
          Contact Us | اتصل بنا
        </h1>
        <p className="text-slate-500 mt-3">تعلم تطوير الويب | Learn Web Development</p>
      </div>

      {/* Cards */}
      <div className="max-w-3xl mx-auto px-6 py-12 space-y-6">
        {/* WhatsApp */}
        <div className="bg-[#161b27] border border-white/10 rounded-2xl p-6 flex items-center gap-5 hover:border-orange-400/40 transition">
          <div className="w-14 h-14 rounded-xl bg-orange-500/10 flex items-center justify-center text-green-400 text-xl">
            💬
          </div>

          <div>
            <p className="text-slate-400 text-sm">WhatsApp</p>
            <p className="text-slate-200">واتساب</p>
            <p className="text-orange-400 font-semibold mt-1">01155410622</p>
          </div>
        </div>

        {/* Email */}
        <div className="bg-[#161b27] border border-white/10 rounded-2xl p-6 flex items-center gap-5 hover:border-orange-400/40 transition">
          <div className="w-14 h-14 rounded-xl bg-orange-500/10 flex items-center justify-center text-red-400 text-xl">
            ✉️
          </div>

          <div>
            <p className="text-slate-400 text-sm">Email</p>
            <p className="text-slate-200">البريد الإلكتروني</p>
            <p className="text-orange-400 font-semibold mt-1">
              mostafatarek1125@gmail.com
            </p>
            <p className="text-orange-400 font-semibold">seso63412@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
