import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";


export default function Home() {
  const seoData = {
  title:
    "تعلم تطوير الويب | Learn Web Development",

  desc:
    "تعلم HTML و CSS و JavaScript و React من الصفر مع دروس وأمثلة عملية. Learn Web Development from scratch with beginner-friendly tutorials, coding examples, and modern web development concepts.",
};

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>

        <meta name="description" content={seoData.desc} />

        <meta property="og:title" content={seoData.title} />

        <meta property="og:description" content={seoData.desc} />

        <meta
          name="keywords"
          content="Learn Web Development, HTML Tutorial, CSS Tutorial, JavaScript Tutorial, React Tutorial, Frontend Development, Programming"
        />

        <meta name="robots" content="index, follow" />

        <meta
          property="og:image"
          content="https://learnwebdev.me/favicon.png"
        />

        <meta property="og:type" content="website" />

        <link rel="canonical" href="https://learnwebdev.me/" />
      </Helmet>
      <div className="bg-[#0f1117] min-h-screen text-slate-200 font-sans">
        {/* Hero */}
        <div className="text-center px-8 pt-16 pb-12">
          <span className="inline-block bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs rounded-full px-4 py-1 mb-6">
            تعلم بالعربي
          </span>
          <h1 className="text-4xl font-bold text-slate-100 leading-tight mb-4">
            تعلم تطوير الويب
            <br />
            <span className="text-indigo-500">من الصفر للاحتراف</span>
          </h1>
          <p className="text-slate-500 text-base max-w-lg mx-auto mb-8 leading-relaxed">
            دروس عملية بالعربي في HTML و CSS و JavaScript و React وأكتر — مجاناً
            وبدون تعقيد.
          </p>
          <div className="flex gap-3 justify-center">
            <button className="bg-indigo-500 text-white rounded-xl px-6 py-3 text-sm font-medium hover:opacity-85">
              Front End
            </button>
            {/* <button className="text-slate-400 border border-white/10 rounded-xl px-6 py-3 text-sm hover:text-white">
            BackEnd
          </button> */}
          </div>
        </div>

        {/* Topics */}
        <div className="px-8 pb-12">
          <p className="text-xs text-indigo-500 uppercase tracking-widest text-center mb-3">
            المسارات
          </p>
          <h2 className="text-xl font-semibold text-slate-100 text-center mb-8">
            إيه اللي هتتعلمه؟
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {[
              {
                letter: "H",
                name: "html",
                desc: "أساس كل موقع ويب",
                color: "text-orange-400 bg-orange-500/10",
                lessons: "13 درس",
              },
              {
                letter: "C",
                name: "css",
                desc: "التصميم والشكل",
                color: "text-blue-400 bg-blue-500/10",
                lessons: "19 درس",
              },
              {
                letter: "JS",
                name: "javascript",
                desc: "التفاعل والمنطق",
                color: "text-yellow-400 bg-yellow-500/10",
                lessons: "20 درس",
              },
              {
                letter: "R",
                name: "react",
                desc: "بناء تطبيقات حديثة",
                color: "text-cyan-400 bg-cyan-500/10",
                lessons: "18 درس",
              },
              {
                letter: "T",
                name: "tailwind",
                desc: "تصميم سريع ومرن",
                color: "text-indigo-400 bg-indigo-500/10",
                lessons: "10 دروس",
              },
            ].map((t) => (
              <Link
                to={`/${t.name}`}
                key={t.name}
                className="bg-[#161b27] border border-white/7 rounded-xl p-5 hover:border-indigo-500/40 hover:-translate-y-1 transition-all cursor-pointer"
              >
                <div
                  className={`w-9 h-9 rounded-lg flex items-center justify-center text-sm font-bold mb-3 ${t.color}`}
                >
                  {t.letter}
                </div>
                <h3 className="text-sm font-medium text-slate-200 mb-1">
                  {t.name}
                </h3>
                <p className="text-xs text-slate-500">{t.desc}</p>
                <p className="text-xs text-indigo-500 mt-2">{t.lessons}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 px-8 pb-12">
          {[
            { num: "+65", label: "درس مجاني" },
            { num: "5", label: "مسارات تعليمية" },
            { num: "100%", label: "مجاني للجميع" },
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
    </>
  );
}
