import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="bg-[#0f1117] min-h-screen text-slate-200 font-sans">

      {/* Hero */}
      <div className="text-center px-8 pt-16 pb-12">
        <span className="inline-block bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs rounded-full px-4 py-1 mb-6">
          من نحن
        </span>

        <h1 className="text-4xl font-bold text-slate-100 leading-tight mb-4">
          مشروع Web Track
          <br />
          <span className="text-indigo-500">لتعلم البرمجة بطريقة بسيطة</span>
        </h1>

        <p className="text-slate-500 text-base max-w-lg mx-auto mb-8 leading-relaxed">
          منصة تعليمية بسيطة هدفها تساعدك تفهم تطوير الويب خطوة بخطوة بدون تعقيد،
          وبأسلوب عملي تقدر تطبقه فورًا.
        </p>

        <div className="flex gap-3 justify-center">
          <Link
            to="/"
            className="bg-indigo-500 text-white rounded-xl px-6 py-3 text-sm font-medium hover:opacity-85"
          >
            العودة للرئيسية
          </Link>

          <Link
            to="/Html"
            className="text-slate-400 border border-white/10 rounded-xl px-6 py-3 text-sm hover:text-white"
          >
            ابدأ الدروس
          </Link>
        </div>
      </div>

      {/* Features */}
      <div className="px-8 pb-12">
        <h2 className="text-xl font-semibold text-slate-100 text-center mb-8">
          ليه المشروع ده؟
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              title: "تعلم بسيط",
              desc: "شرح مبسط بدون تعقيد يناسب أي مبتدئ.",
            },
            {
              title: "تطبيق عملي",
              desc: "كل درس فيه تطبيق مباشر مش مجرد نظري.",
            },
            {
              title: "تنظيم ممتاز",
              desc: "الدروس مقسمة بشكل يساعدك تتعلم خطوة خطوة.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-[#161b27] border border-white/7 rounded-xl p-5 hover:border-indigo-500/40 transition"
            >
              <h3 className="text-indigo-400 font-medium mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-slate-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 px-8 pb-12">
        {[
          { num: "1", label: "مشروع تعليمي" },
          { num: "100%", label: "مفتوح المصدر" },
          { num: "∞", label: "قابل للتطوير" },
        ].map((s) => (
          <div
            key={s.label}
            className="bg-[#161b27] border border-white/7 rounded-xl p-5 text-center"
          >
            <div className="text-2xl font-bold text-indigo-500">{s.num}</div>
            <div className="text-xs text-slate-500 mt-1">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}