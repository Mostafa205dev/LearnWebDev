import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { ArrowUp, ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

function Html() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [activeLesson, setActiveLesson] = useState("intro");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLesson(entry.target.id);
          }
        });
      },
      {
        threshold: 0,
        rootMargin: "0px 0px -50% 0px",
      },
    );

    document.querySelectorAll("div[id]").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  function Top() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const seoData = {
    title: "Learn HTML | Learn Web Dev",
    desc: "Learn HTML from scratch with examples, lessons, tags, forms, semantic elements and SEO basics.",
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
          content="HTML, Learn HTML, HTML Tutorial, Web Development, Learn Web Development"
        />

        <meta name="robots" content="index, follow" />
        <meta
          property="og:image"
          content="https://learnwebdev.me/favicon.png"
        />

        <meta property="og:type" content="website" />

        <link rel="canonical" href="https://learnwebdev.me/html" />
      </Helmet>

      <h1 className="sr-only">Learn HTML — تعلم HTML</h1>

      <div className="bg-[#0f1117] min-h-screen text-white flex">
        {/* button sidebar for phone */}
        <button
          className="fixed top-24 left-0 bg-red-400 text-black p-2 rounded-r-xl z-50 sm:hidden"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          <div className="flex flex-col gap-1 w-6">
            <span
              className={`block h-0.5 w-full bg-white rounded transition-all duration-300 ${
                showSidebar ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></span>

            <span
              className={`block h-0.5 w-full bg-white rounded transition-all duration-300 ${
                showSidebar ? "opacity-0" : ""
              }`}
            ></span>

            <span
              className={`block h-0.5 w-full bg-white rounded transition-all duration-300 ${
                showSidebar ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></span>
          </div>
        </button>

        {/* button to top*/}
        <button
          className="fixed bottom-5 right-5 bg-red-400 p-2 rounded-xl "
          onClick={() => Top()}
        >
          <ArrowUp size={20} color="white" />
        </button>
        {/* sidebar */}
        <div
          className={`
          border-r border-white/10 p-7 w-[230px]
          flex flex-col gap-[30px]
          h-screen bg-[#0f1117] z-40
          transition-transform duration-300

          fixed top-0 left-0
          ${showSidebar ? "translate-x-0" : "-translate-x-full"}

          sm:relative sm:sticky sm:top-0 sm:translate-x-0
        `}
        >
          <h2 className="text-orange-400 text-xl">Html Track</h2>
          <div className="flex flex-col gap-2">
            {[
              { id: "intro", label: "Introduction To Html" },
              { id: "page-structure", label: "Page Structure" },
              { id: "headings-and-texts", label: "Headings And Texts" },
              { id: "links-and-images", label: "Links And Images" },
              { id: "lists", label: "Lists" },
              { id: "tables", label: "Tables" },
              { id: "forms", label: "Forms" },
              { id: "semantic-elements", label: "Semantic Elements" },
              { id: "attributes", label: "HTML Attributes" },
              { id: "media-elements", label: "Media Elements" },
              { id: "meta-seo", label: "Meta Tags & SEO" },
              { id: "html-entities", label: "HTML Entities" },
              { id: "block-vs-inline", label: "Block vs Inline" },
            ].map((lesson) => (
              <a
                key={lesson.id}
                href={`#${lesson.id}`}
                onClick={() => setShowSidebar(false)}
                className={`text-sm ${
                  activeLesson === lesson.id
                    ? "text-orange-300 font-medium"
                    : "text-slate-500"
                }`}
              >
                • {lesson.label}
              </a>
            ))}
          </div>
          <div className="flex  gap-5">
            <Link
              to="/html"
              aria-label="الدرس السابق"
              className="flex items-center gap-1 text-sm text-slate-500 hover:text-slate-800 transition-colors"
            >
              <ArrowLeft size={16} />
              <span>html</span>
            </Link>

            <Link
              to="/css"
              aria-label="الدرس التالي"
              className="flex items-center gap-1 text-sm text-slate-500 hover:text-slate-800 transition-colors"
            >
              <span>css</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* HtmlBody */}
        <div className="flex-1 py-10 px-20 overflow-y-auto flex flex-col justify-center items-center gap-10 max-sm:p-5">
          {/* lesson 1 */}
          <div
            id="intro"
            className="bg-[#161b27] p-10 border border-white/10 rounded-xl max-w-3xl max-sm:px-5"
          >
            <span className="inline-block bg-orange-500/10 text-orange-400 text-xs px-4 py-1 rounded-full mb-4">
              Lesson 1
            </span>

            <h2 className="text-2xl font-semibold text-slate-100 mb-2">
              Introduction To HTML
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              HTML is the structure and content language of every website —
              before learning CSS or JavaScript, you need to understand HTML
              well.
            </p>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              What is HTML?
            </p>
            <div className="grid grid-cols-2 gap-3 mb-8">
              {[
                {
                  title: "Structural Language",
                  desc: "HTML is not a programming language — it defines the structure of content like headings, text, and images.",
                  color: "text-orange-400",
                },
                {
                  title: "Tags & Elements",
                  desc: "HTML is made up of tags — each tag describes the type of content inside it.",
                  color: "text-indigo-400",
                },
                {
                  title: "Foundation of the Web",
                  desc: "Every website on the internet is built with HTML — it's the only language browsers read directly.",
                  color: "text-blue-400",
                },
                {
                  title: ".html File",
                  desc: "HTML code is saved in a file with a .html extension and can be opened in any browser.",
                  color: "text-green-400",
                },
              ].map((c) => (
                <div
                  key={c.title}
                  className="bg-[#0f1117] border border-white/7 rounded-xl p-5"
                >
                  <p className={`text-sm font-medium mb-2 ${c.color}`}>
                    {c.title}
                  </p>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              ))}
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Tag Structure
            </p>
            <p className="text-sm text-slate-400 mb-3 leading-relaxed">
              Every tag has an opening tag, content, and a closing tag.
            </p>
            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-2"
              dir="ltr"
            >
              <span className="text-pink-400">&lt;h1&gt;</span>
              <span className="text-slate-300"> Hello World </span>
              <span className="text-pink-400">&lt;/h1&gt;</span>
            </div>
            <p
              className="text-xs text-slate-600 font-mono mb-8 text-left"
              dir="ltr"
            >
              // opening tag &nbsp;&nbsp; content &nbsp;&nbsp; closing tag
            </p>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Your First HTML File
            </p>
            <p className="text-sm text-slate-400 mb-3 leading-relaxed">
              This is the simplest possible HTML page:
            </p>
            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8"
              dir="ltr"
            >
              <p>
                <span className="text-pink-400">&lt;!DOCTYPE html&gt;</span>
              </p>
              <p>
                <span className="text-pink-400">&lt;html </span>
                <span className="text-blue-400">lang</span>
                <span className="text-slate-300">=</span>
                <span className="text-green-400">"en"</span>
                <span className="text-pink-400">&gt;</span>
              </p>
              <p className="pl-4">
                <span className="text-pink-400">&lt;head&gt;</span>
              </p>
              <p className="pl-8">
                <span className="text-pink-400">&lt;meta </span>
                <span className="text-blue-400">charset</span>
                <span className="text-slate-300">=</span>
                <span className="text-green-400">"UTF-8"</span>
                <span className="text-pink-400"> /&gt;</span>
              </p>
              <p className="pl-8">
                <span className="text-pink-400">&lt;title&gt;</span>
                <span className="text-slate-300">My First Page</span>
                <span className="text-pink-400">&lt;/title&gt;</span>
              </p>
              <p className="pl-4">
                <span className="text-pink-400">&lt;/head&gt;</span>
              </p>
              <p className="pl-4">
                <span className="text-pink-400">&lt;body&gt;</span>
              </p>
              <p className="pl-8">
                <span className="text-pink-400">&lt;h1&gt;</span>
                <span className="text-slate-300">Hello!</span>
                <span className="text-pink-400">&lt;/h1&gt;</span>
              </p>
              <p className="pl-8">
                <span className="text-pink-400">&lt;p&gt;</span>
                <span className="text-slate-300">
                  This is my first website.
                </span>
                <span className="text-pink-400">&lt;/p&gt;</span>
              </p>
              <p className="pl-4">
                <span className="text-pink-400">&lt;/body&gt;</span>
              </p>
              <p>
                <span className="text-pink-400">&lt;/html&gt;</span>
              </p>
            </div>

            <div className="border-l-4 border-blue-500 bg-blue-500/5 rounded-r-lg p-4 text-sm text-blue-300 leading-relaxed mb-8">
              💡 Every HTML page must start with{" "}
              <code className="text-blue-200">&lt;!DOCTYPE html&gt;</code> —
              this tells the browser the page is HTML5.
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Core Parts
            </p>
            <div className="flex flex-col gap-3">
              {[
                {
                  tag: "<head>",
                  desc: "Contains page info like the title and charset — not visible to the user.",
                },
                {
                  tag: "<body>",
                  desc: "Everything that actually shows in the browser — all content goes here.",
                },
                {
                  tag: "<title>",
                  desc: "The page name shown in the browser tab.",
                },
              ].map((item) => (
                <div
                  key={item.tag}
                  className="bg-[#0f1117] border border-white/7 rounded-xl p-4"
                >
                  <p className="text-pink-400 font-mono text-sm mb-1">
                    {item.tag}
                  </p>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* lesson 2 */}
          <div
            id="page-structure"
            className="bg-[#161b27] p-10 border border-white/10 rounded-xl max-w-3xl mb-10 max-sm:px-5"
          >
            <span className="inline-block bg-orange-500/10 text-orange-400 text-xs px-4 py-1 rounded-full mb-4">
              Lesson 2
            </span>

            <h2 className="text-2xl font-semibold text-slate-100 mb-2">
              Page Structure
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              Every HTML page follows a specific structure — understanding it is
              key to writing correct HTML.
            </p>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              The HTML Tree
            </p>
            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8"
              dir="ltr"
            >
              <p>
                <span className="text-pink-400">&lt;html&gt;</span>
              </p>
              <p className="pl-4">
                <span className="text-pink-400">&lt;head&gt;</span>
              </p>
              <p className="pl-8">
                <span className="text-pink-400">&lt;meta </span>
                <span className="text-blue-400">charset</span>
                <span className="text-slate-300">=</span>
                <span className="text-green-400">"UTF-8"</span>
                <span className="text-pink-400"> /&gt;</span>
              </p>
              <p className="pl-8">
                <span className="text-pink-400">&lt;title&gt;</span>
                <span className="text-slate-300">Page Title</span>
                <span className="text-pink-400">&lt;/title&gt;</span>
              </p>
              <p className="pl-4">
                <span className="text-pink-400">&lt;/head&gt;</span>
              </p>
              <p className="pl-4">
                <span className="text-pink-400">&lt;body&gt;</span>
              </p>
              <p className="pl-8">
                <span className="text-pink-400">&lt;header&gt;</span>
                <span className="text-slate-300"> ... </span>
                <span className="text-pink-400">&lt;/header&gt;</span>
              </p>
              <p className="pl-8">
                <span className="text-pink-400">&lt;main&gt;</span>
                <span className="text-slate-300"> ... </span>
                <span className="text-pink-400">&lt;/main&gt;</span>
              </p>
              <p className="pl-8">
                <span className="text-pink-400">&lt;footer&gt;</span>
                <span className="text-slate-300"> ... </span>
                <span className="text-pink-400">&lt;/footer&gt;</span>
              </p>
              <p className="pl-4">
                <span className="text-pink-400">&lt;/body&gt;</span>
              </p>
              <p>
                <span className="text-pink-400">&lt;/html&gt;</span>
              </p>
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Key Sections
            </p>
            <div className="grid grid-cols-2 gap-3 mb-8">
              {[
                {
                  title: "Head Section",
                  desc: "Contains metadata — info about the page not shown to the user, like charset and title.",
                  color: "text-orange-400",
                },
                {
                  title: "Body Section",
                  desc: "Everything visible in the browser — all your content, text, images, and links go here.",
                  color: "text-indigo-400",
                },
                {
                  title: "Header Tag",
                  desc: "The top section of the page — usually contains the logo and navigation menu.",
                  color: "text-blue-400",
                },
                {
                  title: "Footer Tag",
                  desc: "The bottom section — copyright, links, and extra info usually go here.",
                  color: "text-green-400",
                },
              ].map((c) => (
                <div
                  key={c.title}
                  className="bg-[#0f1117] border border-white/7 rounded-xl p-5"
                >
                  <p className={`text-sm font-medium mb-2 ${c.color}`}>
                    {c.title}
                  </p>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="border-l-4 border-blue-500 bg-blue-500/5 rounded-r-lg p-4 text-sm text-blue-300 leading-relaxed mb-8">
              💡 The <code className="text-blue-200">&lt;main&gt;</code> tag
              holds the unique content of each page — there should only be one{" "}
              <code className="text-blue-200">&lt;main&gt;</code> per page.
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Structural Tags
            </p>
            <div className="flex flex-col gap-3">
              {[
                {
                  tag: "<header>",
                  desc: "Top area of the page or a section — typically holds the nav and logo.",
                },
                {
                  tag: "<main>",
                  desc: "The primary content of the page — unique to that page only.",
                },
                {
                  tag: "<footer>",
                  desc: "Bottom of the page — holds copyright, links, and contact info.",
                },
              ].map((item) => (
                <div
                  key={item.tag}
                  className="bg-[#0f1117] border border-white/7 rounded-xl p-4"
                >
                  <p className="text-pink-400 font-mono text-sm mb-1">
                    {item.tag}
                  </p>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* lesson 3 */}
          <div
            id="headings-and-texts"
            className="bg-[#161b27] p-10 border border-white/10 rounded-xl max-w-3xl mb-10 max-sm:p-5"
          >
            <span className="inline-block bg-orange-500/10 text-orange-400 text-xs px-4 py-1 rounded-full mb-4">
              Lesson 3
            </span>

            <h2 className="text-2xl font-semibold text-slate-100 mb-2">
              Headings And Texts
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              HTML gives you 6 heading levels and several text tags — each one
              carries a different meaning for the browser and the user.
            </p>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Heading Levels
            </p>
            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-5 mb-8"
              dir="ltr"
            >
              {[
                { tag: "h1", size: "text-3xl", weight: "font-bold" },
                { tag: "h2", size: "text-2xl", weight: "font-semibold" },
                { tag: "h3", size: "text-xl", weight: "font-semibold" },
                { tag: "h4", size: "text-base", weight: "font-medium" },
                { tag: "h5", size: "text-sm", weight: "font-medium" },
                { tag: "h6", size: "text-xs", weight: "font-medium" },
              ].map((h) => (
                <div key={h.tag} className="flex items-baseline gap-4 mb-2">
                  <span className="text-pink-400 font-mono text-xs w-8">
                    &lt;{h.tag}&gt;
                  </span>
                  <span className={`text-slate-200 ${h.size} ${h.weight}`}>
                    Heading {h.tag.slice(1)}
                  </span>
                </div>
              ))}
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Text Formatting
            </p>
            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-5 mb-8 flex flex-col gap-3"
              dir="ltr"
            >
              <div className="flex items-center gap-3">
                <span className="text-pink-400 font-mono text-xs w-16">
                  &lt;b&gt;
                </span>
                <span className="text-slate-200 text-sm font-bold">
                  Bold text
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-pink-400 font-mono text-xs w-16">
                  &lt;i&gt;
                </span>
                <span className="text-slate-200 text-sm italic">
                  Italic text
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-pink-400 font-mono text-xs w-16">
                  &lt;u&gt;
                </span>
                <span className="text-slate-200 text-sm underline">
                  Underlined text
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-pink-400 font-mono text-xs w-16">
                  &lt;mark&gt;
                </span>
                <span className="text-orange-400 text-sm bg-orange-500/10 px-1 rounded">
                  Highlighted text
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-pink-400 font-mono text-xs w-16">
                  &lt;small&gt;
                </span>
                <span className="text-slate-400 text-xs">Small text</span>
              </div>
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Quick Facts
            </p>
            <div className="grid grid-cols-2 gap-3 mb-8">
              {[
                {
                  title: "Only One h1",
                  desc: "Every page should have exactly one <h1> — it's the main title of the page.",
                  color: "text-orange-400",
                },
                {
                  title: "Order Matters",
                  desc: "Don't skip heading levels — go h1 → h2 → h3 in order for proper structure.",
                  color: "text-indigo-400",
                },
                {
                  title: "<p> for Paragraphs",
                  desc: "Regular body text always goes inside a <p> tag — never leave text floating loose.",
                  color: "text-blue-400",
                },
                {
                  title: "SEO Impact",
                  desc: "Search engines read headings to understand your page — structure them carefully.",
                  color: "text-green-400",
                },
              ].map((c) => (
                <div
                  key={c.title}
                  className="bg-[#0f1117] border border-white/7 rounded-xl p-5"
                >
                  <p className={`text-sm font-medium mb-2 ${c.color}`}>
                    {c.title}
                  </p>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="border-l-4 border-blue-500 bg-blue-500/5 rounded-r-lg p-4 text-sm text-blue-300 leading-relaxed mb-8">
              💡 Use <code className="text-blue-200">&lt;strong&gt;</code>{" "}
              instead of <code className="text-blue-200">&lt;b&gt;</code> for
              important text — it carries semantic meaning for screen readers.
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Common Text Tags
            </p>
            <div className="flex flex-col gap-3">
              {[
                {
                  tag: "<p>",
                  desc: "A paragraph of text — the most common text container in HTML.",
                },
                {
                  tag: "<strong>",
                  desc: "Important text — bold visually, but also meaningful to screen readers.",
                },
                {
                  tag: "<em>",
                  desc: "Emphasized text — italic visually, carries stress meaning.",
                },
                {
                  tag: "<br>",
                  desc: "A line break — moves content to the next line without a new paragraph.",
                },
              ].map((item) => (
                <div
                  key={item.tag}
                  className="bg-[#0f1117] border border-white/7 rounded-xl p-4 flex items-center gap-4"
                >
                  <p className="text-pink-400 font-mono text-sm min-w-[70px]">
                    {item.tag}
                  </p>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* lesson 4 */}
          <div
            id="links-and-images"
            className="bg-[#161b27] p-10 border border-white/10 rounded-xl max-w-3xl mb-10 max-sm:p-5"
          >
            <span className="inline-block bg-orange-500/10 text-orange-400 text-xs px-4 py-1 rounded-full mb-4">
              Lesson 4
            </span>

            <h2 className="text-2xl font-semibold text-slate-100 mb-2">
              Links And Images
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              Links connect pages together and images make websites visually
              rich — these are two of the most used HTML elements.
            </p>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Anchor Tag (Links)
            </p>

            <p className="text-sm text-slate-400 mb-3 leading-relaxed">
              The <code className="text-orange-300">&lt;a&gt;</code> tag is used
              to create clickable links.
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 flex flex-wrap"
              dir="ltr"
            >
              <span className="text-pink-400">&lt;a </span>
              <span className="text-blue-400">href</span>
              <span className="text-slate-300">=</span>
              <span className="text-green-400">"https://google.com"</span>
              <span className="text-pink-400">&gt;</span>
              <span className="text-slate-300">Visit Google</span>
              <span className="text-pink-400">&lt;/a&gt;</span>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {[
                {
                  title: "href Attribute",
                  desc: "Defines where the link goes when the user clicks it.",
                  color: "text-orange-400",
                },
                {
                  title: "Clickable Content",
                  desc: "Anything inside the anchor tag becomes clickable text or content.",
                  color: "text-indigo-400",
                },
                {
                  title: "External Links",
                  desc: "Links can open websites, pages, files, or even email addresses.",
                  color: "text-blue-400",
                },
                {
                  title: "Navigation",
                  desc: "Links are what connect the entire web together.",
                  color: "text-green-400",
                },
              ].map((c) => (
                <div
                  key={c.title}
                  className="bg-[#0f1117] border border-white/7 rounded-xl p-5"
                >
                  <p className={`text-sm font-medium mb-2 ${c.color}`}>
                    {c.title}
                  </p>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="border-l-4 border-blue-500 bg-blue-500/5 rounded-r-lg p-4 text-sm text-blue-300 leading-relaxed mb-8">
              💡 Use <code className="text-blue-200">target="_blank"</code> to
              open the link in a new browser tab.
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Image Tag
            </p>

            <p className="text-sm text-slate-400 mb-3 leading-relaxed">
              Images are added using the{" "}
              <code className="text-orange-300">&lt;img&gt;</code> tag.
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8"
              dir="ltr"
            >
              <span className="text-pink-400">&lt;img </span>

              <span className="text-blue-400">src</span>
              <span className="text-slate-300">=</span>
              <span className="text-green-400">"cat.jpg"</span>

              <span className="text-slate-300"> </span>

              <span className="text-blue-400">alt</span>
              <span className="text-slate-300">=</span>
              <span className="text-green-400">"Cute Cat"</span>

              <span className="text-pink-400"> /&gt;</span>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {[
                {
                  title: "src Attribute",
                  desc: "Specifies the image file path or URL.",
                  color: "text-orange-400",
                },
                {
                  title: "alt Attribute",
                  desc: "Alternative text shown if the image fails to load.",
                  color: "text-indigo-400",
                },
                {
                  title: "Self Closing Tag",
                  desc: "The img tag does not need a closing tag.",
                  color: "text-blue-400",
                },
                {
                  title: "Supports URLs",
                  desc: "Images can come from your project or external websites.",
                  color: "text-green-400",
                },
              ].map((c) => (
                <div
                  key={c.title}
                  className="bg-[#0f1117] border border-white/7 rounded-xl p-5"
                >
                  <p className={`text-sm font-medium mb-2 ${c.color}`}>
                    {c.title}
                  </p>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              ))}
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Common Attributes
            </p>

            <div className="flex flex-col gap-3">
              {[
                {
                  tag: 'href=""',
                  desc: "Used inside anchor tags to define the destination URL.",
                },
                {
                  tag: 'target="_blank"',
                  desc: "Opens the link in a new browser tab.",
                },
                {
                  tag: 'src=""',
                  desc: "Defines the image source or file path.",
                },
                {
                  tag: 'alt=""',
                  desc: "Describes the image for accessibility and fallback text.",
                },
              ].map((item) => (
                <div
                  key={item.tag}
                  className="bg-[#0f1117] border border-white/7 rounded-xl p-4 flex items-center gap-4"
                >
                  <p className="text-pink-400 font-mono text-sm min-w-[120px] ">
                    {item.tag}
                  </p>

                  <p className="text-xs text-slate-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* lesson 5 */}
          <div
            id="lists"
            className="bg-[#161b27] p-10 border border-white/10 rounded-xl max-w-3xl mb-10 max-sm:p-5"
          >
            <span className="inline-block bg-orange-500/10 text-orange-400 text-xs px-4 py-1 rounded-full mb-4">
              Lesson 5
            </span>

            <h2 className="text-2xl font-semibold text-slate-100 mb-2">
              Lists
            </h2>

            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              Lists help organize content clearly — HTML provides ordered,
              unordered, and description lists.
            </p>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Unordered List
            </p>

            <p className="text-sm text-slate-400 mb-3 leading-relaxed">
              Unordered lists use bullet points and are created with the{" "}
              <code className="text-orange-300">&lt;ul&gt;</code> tag.
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8"
              dir="ltr"
            >
              <p>
                <span className="text-pink-400">&lt;ul&gt;</span>
              </p>

              <p className="pl-4">
                <span className="text-pink-400">&lt;li&gt;</span>
                <span className="text-slate-300">HTML</span>
                <span className="text-pink-400">&lt;/li&gt;</span>
              </p>

              <p className="pl-4">
                <span className="text-pink-400">&lt;li&gt;</span>
                <span className="text-slate-300">CSS</span>
                <span className="text-pink-400">&lt;/li&gt;</span>
              </p>

              <p className="pl-4">
                <span className="text-pink-400">&lt;li&gt;</span>
                <span className="text-slate-300">JavaScript</span>
                <span className="text-pink-400">&lt;/li&gt;</span>
              </p>

              <p>
                <span className="text-pink-400">&lt;/ul&gt;</span>
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {[
                {
                  title: "Bullet Points",
                  desc: "Items appear with dots or bullets by default.",
                  color: "text-orange-400",
                },
                {
                  title: "<li> Tag",
                  desc: "Every list item must be placed inside an li tag.",
                  color: "text-indigo-400",
                },
                {
                  title: "Flexible Usage",
                  desc: "Used for menus, navigation, features, and many layouts.",
                  color: "text-blue-400",
                },
                {
                  title: "Nested Lists",
                  desc: "Lists can contain other lists inside them.",
                  color: "text-green-400",
                },
              ].map((c) => (
                <div
                  key={c.title}
                  className="bg-[#0f1117] border border-white/7 rounded-xl p-5"
                >
                  <p className={`text-sm font-medium mb-2 ${c.color}`}>
                    {c.title}
                  </p>

                  <p className="text-xs text-slate-500 leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              ))}
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Ordered List
            </p>

            <p className="text-sm text-slate-400 mb-3 leading-relaxed">
              Ordered lists use numbers and are created with the{" "}
              <code className="text-orange-300">&lt;ol&gt;</code> tag.
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8"
              dir="ltr"
            >
              <p>
                <span className="text-pink-400">&lt;ol&gt;</span>
              </p>

              <p className="pl-4">
                <span className="text-pink-400">&lt;li&gt;</span>
                <span className="text-slate-300">Open VS Code</span>
                <span className="text-pink-400">&lt;/li&gt;</span>
              </p>

              <p className="pl-4">
                <span className="text-pink-400">&lt;li&gt;</span>
                <span className="text-slate-300">Create HTML File</span>
                <span className="text-pink-400">&lt;/li&gt;</span>
              </p>

              <p className="pl-4">
                <span className="text-pink-400">&lt;li&gt;</span>
                <span className="text-slate-300">Run In Browser</span>
                <span className="text-pink-400">&lt;/li&gt;</span>
              </p>

              <p>
                <span className="text-pink-400">&lt;/ol&gt;</span>
              </p>
            </div>

            <div className="border-l-4 border-blue-500 bg-blue-500/5 rounded-r-lg p-4 text-sm text-blue-300 leading-relaxed mb-8">
              💡 Use ordered lists when the order of items matters like
              instructions or steps.
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Description List
            </p>

            <p className="text-sm text-slate-400 mb-3 leading-relaxed">
              Description lists are used for terms and definitions.
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8"
              dir="ltr"
            >
              <p>
                <span className="text-pink-400">&lt;dl&gt;</span>
              </p>

              <p className="pl-4">
                <span className="text-pink-400">&lt;dt&gt;</span>
                <span className="text-slate-300">HTML</span>
                <span className="text-pink-400">&lt;/dt&gt;</span>
              </p>

              <p className="pl-8">
                <span className="text-pink-400">&lt;dd&gt;</span>
                <span className="text-slate-300">
                  Structure language for websites
                </span>
                <span className="text-pink-400">&lt;/dd&gt;</span>
              </p>

              <p>
                <span className="text-pink-400">&lt;/dl&gt;</span>
              </p>
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Common List Tags
            </p>

            <div className="flex flex-col gap-3">
              {[
                {
                  tag: "<ul>",
                  desc: "Creates an unordered list with bullet points.",
                },
                {
                  tag: "<ol>",
                  desc: "Creates an ordered list with numbers.",
                },
                {
                  tag: "<li>",
                  desc: "Represents a single list item.",
                },
                {
                  tag: "<dl>",
                  desc: "Creates a description list.",
                },
                {
                  tag: "<dt>",
                  desc: "Defines the term in a description list.",
                },
                {
                  tag: "<dd>",
                  desc: "Defines the description of the term.",
                },
              ].map((item) => (
                <div
                  key={item.tag}
                  className="bg-[#0f1117] border border-white/7 rounded-xl p-4 flex items-center gap-4"
                >
                  <p className="text-pink-400 font-mono text-sm min-w-[70px]">
                    {item.tag}
                  </p>

                  <p className="text-xs text-slate-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* lesson 6 */}
          <div
            id="tables"
            className="bg-[#161b27] p-10 border border-white/10 rounded-xl max-w-3xl mb-10 max-sm:p-5"
          >
            <span className="inline-block bg-orange-500/10 text-orange-400 text-xs px-4 py-1 rounded-full mb-4">
              Lesson 6
            </span>

            <h2 className="text-2xl font-semibold text-slate-100 mb-2">
              Tables
            </h2>

            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              HTML tables are used to display data in rows and columns — perfect
              for schedules, pricing tables, and structured information.
            </p>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Basic Table Structure
            </p>

            <p className="text-sm text-slate-400 mb-3 leading-relaxed">
              Tables are created using the{" "}
              <code className="text-orange-300">&lt;table&gt;</code> tag.
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <p>
                <span className="text-pink-400">&lt;table&gt;</span>
              </p>

              <p className="pl-4">
                <span className="text-pink-400">&lt;tr&gt;</span>
              </p>

              <p className="pl-8">
                <span className="text-pink-400">&lt;th&gt;</span>
                <span className="text-slate-300">Name</span>
                <span className="text-pink-400">&lt;/th&gt;</span>
              </p>

              <p className="pl-8">
                <span className="text-pink-400">&lt;th&gt;</span>
                <span className="text-slate-300">Age</span>
                <span className="text-pink-400">&lt;/th&gt;</span>
              </p>

              <p className="pl-4">
                <span className="text-pink-400">&lt;/tr&gt;</span>
              </p>

              <p className="pl-4">
                <span className="text-pink-400">&lt;tr&gt;</span>
              </p>

              <p className="pl-8">
                <span className="text-pink-400">&lt;td&gt;</span>
                <span className="text-slate-300">Mostafa</span>
                <span className="text-pink-400">&lt;/td&gt;</span>
              </p>

              <p className="pl-8">
                <span className="text-pink-400">&lt;td&gt;</span>
                <span className="text-slate-300">20</span>
                <span className="text-pink-400">&lt;/td&gt;</span>
              </p>

              <p className="pl-4">
                <span className="text-pink-400">&lt;/tr&gt;</span>
              </p>

              <p>
                <span className="text-pink-400">&lt;/table&gt;</span>
              </p>
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Table Example
            </p>

            <div className="bg-[#0f1117] border border-white/10 rounded-xl  mb-8">
              <table className="w-full text-sm text-left ">
                <thead className="bg-white/5 text-slate-300">
                  <tr>
                    <th className="p-4 max-sm:p-2 border-b border-white/10 max-sm:text-xs">
                      Language
                    </th>
                    <th className="p-4 max-sm:p-2 border-b border-white/10 max-sm:text-xs">
                      Type
                    </th>
                    <th className="p-4 max-sm:p-2 border-b border-white/10 max-sm:text-xs">
                      Difficulty
                    </th>
                  </tr>
                </thead>

                <tbody className="text-slate-400">
                  <tr className="border-b border-white/5">
                    <td className="p-4 max-sm:p-2 max-sm:text-xs">HTML</td>
                    <td className="p-4 max-sm:p-2 max-sm:text-xs">Markup</td>
                    <td className="p-4 max-sm:p-2 max-sm:text-xs">Easy</td>
                  </tr>

                  <tr className="border-b border-white/5">
                    <td className="p-4 max-sm:p-2 max-sm:text-xs">CSS</td>
                    <td className="p-4 max-sm:p-2 max-sm:text-xs">Styling</td>
                    <td className="p-4 max-sm:p-2 max-sm:text-xs">Medium</td>
                  </tr>

                  <tr>
                    <td className="p-4 max-sm:p-2 max-sm:text-xs">
                      JavaScript
                    </td>
                    <td className="p-4 max-sm:p-2 max-sm:text-xs">
                      Programming
                    </td>
                    <td className="p-4 max-sm:p-2 max-sm:text-xs">Hard</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {[
                {
                  title: "Rows",
                  desc: "Rows are created using the tr tag.",
                  color: "text-orange-400",
                },
                {
                  title: "Table Headers",
                  desc: "th creates bold header cells for titles.",
                  color: "text-indigo-400",
                },
                {
                  title: "Table Data",
                  desc: "td contains the actual data inside the table.",
                  color: "text-blue-400",
                },
                {
                  title: "Structured Layout",
                  desc: "Tables organize information clearly into columns.",
                  color: "text-green-400",
                },
              ].map((c) => (
                <div
                  key={c.title}
                  className="bg-[#0f1117] border border-white/7 rounded-xl p-5"
                >
                  <p className={`text-sm font-medium mb-2 ${c.color}`}>
                    {c.title}
                  </p>

                  <p className="text-xs text-slate-500 leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="border-l-4 border-blue-500 bg-blue-500/5 rounded-r-lg p-4 text-sm text-blue-300 leading-relaxed mb-8">
              💡 Tables should only be used for displaying data — not for
              building page layouts.
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Common Table Tags
            </p>

            <div className="flex flex-col gap-3">
              {[
                {
                  tag: "<table>",
                  desc: "Creates the main table container.",
                },
                {
                  tag: "<tr>",
                  desc: "Represents a table row.",
                },
                {
                  tag: "<th>",
                  desc: "Creates a header cell inside the table.",
                },
                {
                  tag: "<td>",
                  desc: "Represents a regular data cell.",
                },
                {
                  tag: "<thead>",
                  desc: "Groups the table header content.",
                },
                {
                  tag: "<tbody>",
                  desc: "Groups the main table body content.",
                },
              ].map((item) => (
                <div
                  key={item.tag}
                  className="bg-[#0f1117] border border-white/7 rounded-xl p-4 flex items-center gap-4"
                >
                  <p className="text-pink-400 font-mono text-sm min-w-[80px]">
                    {item.tag}
                  </p>

                  <p className="text-xs text-slate-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* lesson 7 */}
          <div
            id="forms"
            className="bg-[#161b27] p-10 border border-white/10 rounded-xl max-w-3xl mb-10 max-sm:p-5"
          >
            <span className="inline-block bg-orange-500/10 text-orange-400 text-xs px-4 py-1 rounded-full mb-4">
              Lesson 7
            </span>

            <h2 className="text-2xl font-semibold text-slate-100 mb-2">
              Forms
            </h2>

            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              Forms allow users to send data to websites — like login pages,
              search bars, and registration forms.
            </p>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Basic Form Structure
            </p>

            <p className="text-sm text-slate-400 mb-3 leading-relaxed">
              Forms are created using the{" "}
              <code className="text-orange-300">&lt;form&gt;</code> tag.
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <p>
                <span className="text-pink-400">&lt;form&gt;</span>
              </p>

              <p className="pl-4">
                <span className="text-pink-400">&lt;input </span>
                <span className="text-blue-400">type</span>
                <span className="text-slate-300">=</span>
                <span className="text-green-400">"text"</span>
                <span className="text-pink-400"> /&gt;</span>
              </p>

              <p className="pl-4">
                <span className="text-pink-400">&lt;button&gt;</span>
                <span className="text-slate-300">Submit</span>
                <span className="text-pink-400">&lt;/button&gt;</span>
              </p>

              <p>
                <span className="text-pink-400">&lt;/form&gt;</span>
              </p>
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Form Example
            </p>

            <div className="bg-[#0f1117] border border-white/10 rounded-xl p-6 mb-8">
              <form className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-sm text-slate-300">Username</label>

                  <input
                    type="text"
                    placeholder="Enter username"
                    className="bg-[#161b27] border border-white/10 rounded-lg px-4 py-3 text-sm text-white outline-none"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm text-slate-300">Email</label>

                  <input
                    type="email"
                    placeholder="Enter email"
                    className="bg-[#161b27] border border-white/10 rounded-lg px-4 py-3 text-sm text-white outline-none"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm text-slate-300">Message</label>

                  <textarea
                    placeholder="Write your message..."
                    rows="4"
                    className="bg-[#161b27] border border-white/10 rounded-lg px-4 py-3 text-sm text-white outline-none resize-none"
                  ></textarea>
                </div>

                <button className="bg-orange-500 hover:bg-orange-400 transition text-white text-sm rounded-lg py-3 mt-2">
                  Send Message
                </button>
              </form>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {[
                {
                  title: "Input Fields",
                  desc: "Used to collect user data like names, emails, and passwords.",
                  color: "text-orange-400",
                },
                {
                  title: "Labels",
                  desc: "Describe what each input field is for.",
                  color: "text-indigo-400",
                },
                {
                  title: "Textarea",
                  desc: "Allows users to enter long multi-line text.",
                  color: "text-blue-400",
                },
                {
                  title: "Buttons",
                  desc: "Used to submit or reset form data.",
                  color: "text-green-400",
                },
              ].map((c) => (
                <div
                  key={c.title}
                  className="bg-[#0f1117] border border-white/7 rounded-xl p-5"
                >
                  <p className={`text-sm font-medium mb-2 ${c.color}`}>
                    {c.title}
                  </p>

                  <p className="text-xs text-slate-500 leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="border-l-4 border-blue-500 bg-blue-500/5 rounded-r-lg p-4 text-sm text-blue-300 leading-relaxed mb-8">
              💡 Always use labels with inputs for better accessibility and user
              experience.
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Common Input Types
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-5 mb-8 flex flex-col gap-3"
              dir="ltr"
            >
              {[
                {
                  type: 'type="text"',
                  example: "Regular text input",
                },
                {
                  type: 'type="email"',
                  example: "Email address input",
                },
                {
                  type: 'type="password"',
                  example: "Hidden password field",
                },
                {
                  type: 'type="number"',
                  example: "Numeric values only",
                },
                {
                  type: 'type="checkbox"',
                  example: "Checkbox selection",
                },
                {
                  type: 'type="radio"',
                  example: "Single choice selection",
                },
              ].map((item) => (
                <div
                  key={item.type}
                  className="flex items-center gap-4 max-sm:gap-[1px]"
                >
                  <span className="text-pink-400 font-mono text-xs min-w-[140px]">
                    {item.type}
                  </span>

                  <span className="text-slate-400 text-sm">{item.example}</span>
                </div>
              ))}
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Common Form Tags
            </p>

            <div className="flex flex-col gap-3">
              {[
                {
                  tag: "<form>",
                  desc: "Main container that holds all form elements.",
                },
                {
                  tag: "<input>",
                  desc: "Creates different types of user input fields.",
                },
                {
                  tag: "<label>",
                  desc: "Describes an input field.",
                },
                {
                  tag: "<textarea>",
                  desc: "Creates a multi-line text input.",
                },
                {
                  tag: "<button>",
                  desc: "Creates a clickable button.",
                },
                {
                  tag: "<select>",
                  desc: "Creates a dropdown selection menu.",
                },
              ].map((item) => (
                <div
                  key={item.tag}
                  className="bg-[#0f1117] border border-white/7 rounded-xl p-4 flex items-center gap-4"
                >
                  <p className="text-pink-400 font-mono text-sm min-w-[90px]">
                    {item.tag}
                  </p>

                  <p className="text-xs text-slate-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* lesson 8 */}
          <div
            id="semantic-elements"
            className="bg-[#161b27] p-10 border border-white/10 rounded-xl max-w-3xl mb-10 max-sm:p-5"
          >
            <span className="inline-block bg-orange-500/10 text-orange-400 text-xs px-4 py-1 rounded-full mb-4">
              Lesson 8
            </span>

            <h2 className="text-2xl font-semibold text-slate-100 mb-2">
              Semantic Elements
            </h2>

            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              Semantic HTML elements describe the meaning of content — making
              websites easier for developers, browsers, search engines, and
              screen readers to understand.
            </p>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              What Does Semantic Mean?
            </p>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {[
                {
                  title: "Clear Meaning",
                  desc: "Semantic tags explain the purpose of content instead of using generic divs everywhere.",
                  color: "text-orange-400",
                },
                {
                  title: "Better Accessibility",
                  desc: "Screen readers understand semantic elements more clearly.",
                  color: "text-indigo-400",
                },
                {
                  title: "SEO Friendly",
                  desc: "Search engines use semantic structure to better understand pages.",
                  color: "text-blue-400",
                },
                {
                  title: "Cleaner Code",
                  desc: "Semantic HTML makes your code easier to read and maintain.",
                  color: "text-green-400",
                },
              ].map((c) => (
                <div
                  key={c.title}
                  className="bg-[#0f1117] border border-white/7 rounded-xl p-5"
                >
                  <p className={`text-sm font-medium mb-2 ${c.color}`}>
                    {c.title}
                  </p>

                  <p className="text-xs text-slate-500 leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              ))}
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Semantic Page Structure
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <p>
                <span className="text-pink-400">&lt;header&gt;</span>
              </p>

              <p className="pl-4">
                <span className="text-pink-400">&lt;nav&gt;</span>
                <span className="text-slate-300"> Navigation Links </span>
                <span className="text-pink-400">&lt;/nav&gt;</span>
              </p>

              <p>
                <span className="text-pink-400">&lt;/header&gt;</span>
              </p>

              <p>
                <span className="text-pink-400">&lt;main&gt;</span>
              </p>

              <p className="pl-4">
                <span className="text-pink-400">&lt;section&gt;</span>
                <span className="text-slate-300"> Website Content </span>
                <span className="text-pink-400">&lt;/section&gt;</span>
              </p>

              <p className="pl-4">
                <span className="text-pink-400">&lt;article&gt;</span>
                <span className="text-slate-300"> Blog Post </span>
                <span className="text-pink-400">&lt;/article&gt;</span>
              </p>

              <p>
                <span className="text-pink-400">&lt;/main&gt;</span>
              </p>

              <p>
                <span className="text-pink-400">&lt;footer&gt;</span>
              </p>

              <p>
                <span className="text-pink-400">&lt;/footer&gt;</span>
              </p>
            </div>

            <div className="border-l-4 border-blue-500 bg-blue-500/5 rounded-r-lg p-4 text-sm text-blue-300 leading-relaxed mb-8">
              💡 Before HTML5, developers mostly used{" "}
              <code className="text-blue-200">&lt;div&gt;</code> for everything
              — semantic tags made structure much clearer.
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Common Semantic Tags
            </p>

            <div className="flex flex-col gap-3 mb-8">
              {[
                {
                  tag: "<header>",
                  desc: "Top section of a page or section — often contains logo and navigation.",
                },
                {
                  tag: "<nav>",
                  desc: "Contains navigation links and menus.",
                },
                {
                  tag: "<main>",
                  desc: "Holds the primary content of the page.",
                },
                {
                  tag: "<section>",
                  desc: "Groups related content together.",
                },
                {
                  tag: "<article>",
                  desc: "Represents independent content like blog posts or news articles.",
                },
                {
                  tag: "<aside>",
                  desc: "Contains side content like ads or sidebars.",
                },
                {
                  tag: "<footer>",
                  desc: "Bottom section of the page with copyright or contact info.",
                },
              ].map((item) => (
                <div
                  key={item.tag}
                  className="bg-[#0f1117] border border-white/7 rounded-xl p-4 flex items-center gap-4"
                >
                  <p className="text-pink-400 font-mono text-sm min-w-[90px]">
                    {item.tag}
                  </p>

                  <p className="text-xs text-slate-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Semantic vs Non-Semantic
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#0f1117] border border-red-500/20 rounded-xl p-5">
                <p className="text-red-400 text-sm font-medium mb-3">
                  Non-Semantic
                </p>

                <div className="flex flex-col gap-2 font-mono text-xs">
                  <span className="text-slate-400">&lt;div&gt;</span>
                  <span className="text-slate-400">&lt;span&gt;</span>
                </div>

                <p className="text-xs text-slate-500 leading-relaxed mt-4">
                  These tags do not describe the meaning of the content.
                </p>
              </div>

              <div className="bg-[#0f1117] border border-green-500/20 rounded-xl p-5">
                <p className="text-green-400 text-sm font-medium mb-3">
                  Semantic
                </p>

                <div className="flex flex-col gap-2 font-mono text-xs">
                  <span className="text-slate-300">&lt;header&gt;</span>
                  <span className="text-slate-300">&lt;article&gt;</span>
                  <span className="text-slate-300">&lt;footer&gt;</span>
                </div>

                <p className="text-xs text-slate-500 leading-relaxed mt-4">
                  These tags clearly describe the role of the content.
                </p>
              </div>
            </div>
          </div>

          {/* lesson 9 */}
          <div
            id="attributes"
            className="bg-[#161b27] p-10 border border-white/10 rounded-xl max-w-3xl mb-10 max-sm:p-5"
          >
            <span className="inline-block bg-orange-500/10 text-orange-400 text-xs px-4 py-1 rounded-full mb-4">
              Lesson 9
            </span>

            <h2 className="text-2xl font-semibold text-slate-100 mb-2">
              HTML Attributes
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              Attributes add extra information to HTML elements — they control
              behavior, appearance, and accessibility without changing the tag
              itself.
            </p>

            <hr className="border-white/10 mb-8" />

            {/* What is an Attribute */}
            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              What Is An Attribute?
            </p>
            <p className="text-sm text-slate-400 mb-3 leading-relaxed">
              Attributes are always written inside the opening tag as{" "}
              <code className="text-orange-300">name="value"</code> pairs.
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-2"
              dir="ltr"
            >
              <span className="text-pink-400">&lt;a </span>
              <span className="text-blue-400">href</span>
              <span className="text-slate-300">=</span>
              <span className="text-green-400">"https://google.com"</span>
              <span className="text-slate-300"> </span>
              <span className="text-blue-400">target</span>
              <span className="text-slate-300">=</span>
              <span className="text-green-400">"_blank"</span>
              <span className="text-pink-400">&gt;</span>
              <span className="text-slate-300">Google</span>
              <span className="text-pink-400">&lt;/a&gt;</span>
            </div>
            <p
              className="text-xs text-slate-600 font-mono mb-8 text-left"
              dir="ltr"
            >
              // tag &nbsp;&nbsp; attribute name &nbsp;&nbsp; attribute value
            </p>

            <hr className="border-white/10 mb-8" />

            {/* Global Attributes */}
            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Global Attributes
            </p>
            <p className="text-sm text-slate-400 mb-4 leading-relaxed">
              These attributes work on{" "}
              <span className="text-slate-200">any</span> HTML element.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {[
                {
                  title: "id",
                  desc: 'Gives an element a unique name on the page — used for linking and JavaScript. Example: id="header"',
                  color: "text-orange-400",
                },
                {
                  title: "class",
                  desc: 'Groups elements together so CSS or JS can target them. Example: class="btn primary"',
                  color: "text-indigo-400",
                },
                {
                  title: "style",
                  desc: 'Applies inline CSS directly to one element. Example: style="color: red;"',
                  color: "text-blue-400",
                },
                {
                  title: "title",
                  desc: 'Shows a small tooltip when the user hovers over the element. Example: title="Click me"',
                  color: "text-green-400",
                },
                {
                  title: "hidden",
                  desc: "Hides the element from the page — it still exists in the HTML but is invisible.",
                  color: "text-pink-400",
                },
                {
                  title: "lang",
                  desc: 'Declares the language of the element\'s content. Example: lang="ar" for Arabic.',
                  color: "text-yellow-400",
                },
              ].map((c) => (
                <div
                  key={c.title}
                  className="bg-[#0f1117] border border-white/7 rounded-xl p-5"
                >
                  <p
                    className={`text-sm font-medium mb-2 font-mono ${c.color}`}
                  >
                    {c.title}
                  </p>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              ))}
            </div>

            <hr className="border-white/10 mb-8" />

            {/* id vs class */}
            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              id vs class
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-3"
              dir="ltr"
            >
              <p>
                <span className="text-slate-500">
                  {"// id — unique, used once"}
                </span>
              </p>
              <p>
                <span className="text-pink-400">&lt;div </span>
                <span className="text-blue-400">id</span>
                <span className="text-slate-300">=</span>
                <span className="text-green-400">"navbar"</span>
                <span className="text-pink-400">&gt;&lt;/div&gt;</span>
              </p>
              <br />
              <p>
                <span className="text-slate-500">
                  {"// class — reusable, used many times"}
                </span>
              </p>
              <p>
                <span className="text-pink-400">&lt;p </span>
                <span className="text-blue-400">class</span>
                <span className="text-slate-300">=</span>
                <span className="text-green-400">"card"</span>
                <span className="text-pink-400">&gt;</span>
                <span className="text-slate-300">First</span>
                <span className="text-pink-400">&lt;/p&gt;</span>
              </p>
              <p>
                <span className="text-pink-400">&lt;p </span>
                <span className="text-blue-400">class</span>
                <span className="text-slate-300">=</span>
                <span className="text-green-400">"card"</span>
                <span className="text-pink-400">&gt;</span>
                <span className="text-slate-300">Second</span>
                <span className="text-pink-400">&lt;/p&gt;</span>
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-[#0f1117] border border-orange-500/20 rounded-xl p-5">
                <p className="text-orange-400 text-sm font-medium font-mono mb-2">
                  id
                </p>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Unique — only one element per page can have the same id. Think
                  of it like a national ID number.
                </p>
              </div>
              <div className="bg-[#0f1117] border border-indigo-500/20 rounded-xl p-5">
                <p className="text-indigo-400 text-sm font-medium font-mono mb-2">
                  class
                </p>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Reusable — many elements can share the same class. Think of it
                  like a group or category label.
                </p>
              </div>
            </div>

            <hr className="border-white/10 mb-8" />

            {/* Input-specific attributes */}
            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Input Attributes
            </p>
            <p className="text-sm text-slate-400 mb-3 leading-relaxed">
              These are commonly used with{" "}
              <code className="text-orange-300">&lt;input&gt;</code> fields.
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-5 mb-8 flex flex-col gap-3"
              dir="ltr"
            >
              {[
                {
                  attr: 'placeholder="..."',
                  desc: "Ghost text inside the field before the user types.",
                },
                {
                  attr: "disabled",
                  desc: "Makes the input unclickable and uneditable.",
                },
                {
                  attr: "required",
                  desc: "The form won't submit unless this field is filled.",
                },
                {
                  attr: 'value="..."',
                  desc: "Sets a default value already filled in the field.",
                },
                {
                  attr: 'name="..."',
                  desc: "Identifies the field when the form data is sent.",
                },
                {
                  attr: 'maxlength="10"',
                  desc: "Limits how many characters the user can type.",
                },
              ].map((item) => (
                <div
                  key={item.attr}
                  className="flex items-start gap-4 max-sm:gap-0"
                >
                  <span className="text-pink-400 font-mono text-xs min-w-[160px] max-sm:min-w-fit pt-0.5">
                    {item.attr}
                  </span>
                  <span className="text-slate-400 text-xs leading-relaxed">
                    {item.desc}
                  </span>
                </div>
              ))}
            </div>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8"
              dir="ltr"
            >
              <span className="text-pink-400">&lt;input </span>
              <span className="text-blue-400">type</span>
              <span className="text-slate-300">=</span>
              <span className="text-green-400">"text"</span>
              <span className="text-slate-300"> </span>
              <span className="text-blue-400">placeholder</span>
              <span className="text-slate-300">=</span>
              <span className="text-green-400">"Enter name"</span>
              <span className="text-slate-300"> </span>
              <span className="text-blue-400">required</span>
              <span className="text-slate-300"> </span>
              <span className="text-blue-400">maxlength</span>
              <span className="text-slate-300">=</span>
              <span className="text-green-400">"20"</span>
              <span className="text-pink-400"> /&gt;</span>
            </div>

            <div className="border-l-4 border-blue-500 bg-blue-500/5 rounded-r-lg p-4 text-sm text-blue-300 leading-relaxed mb-8">
              💡 <code className="text-blue-200">disabled</code> and{" "}
              <code className="text-blue-200">required</code> are{" "}
              <span className="text-blue-200">boolean attributes</span> — you
              just write the name with no value needed.
            </div>

            <hr className="border-white/10 mb-8" />

            {/* data- attributes */}
            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Data Attributes
            </p>
            <p className="text-sm text-slate-400 mb-3 leading-relaxed">
              Custom attributes prefixed with{" "}
              <code className="text-orange-300">data-</code> let you store extra
              info on any element — very useful with JavaScript.
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8"
              dir="ltr"
            >
              <p>
                <span className="text-pink-400">&lt;button </span>
                <span className="text-blue-400">data-id</span>
                <span className="text-slate-300">=</span>
                <span className="text-green-400">"42"</span>
                <span className="text-slate-300"> </span>
                <span className="text-blue-400">data-role</span>
                <span className="text-slate-300">=</span>
                <span className="text-green-400">"admin"</span>
                <span className="text-pink-400">&gt;</span>
              </p>
              <p className="pl-4">
                <span className="text-slate-300">Delete User</span>
              </p>
              <p>
                <span className="text-pink-400">&lt;/button&gt;</span>
              </p>
            </div>

            <hr className="border-white/10 mb-8" />

            {/* Reference list */}
            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Common Attributes Reference
            </p>

            <div className="flex flex-col gap-3">
              {[
                {
                  tag: "id",
                  desc: "Unique identifier for one element.",
                },
                {
                  tag: "class",
                  desc: "Reusable label shared by multiple elements.",
                },
                {
                  tag: "style",
                  desc: "Inline CSS applied directly to the element.",
                },
                {
                  tag: "title",
                  desc: "Tooltip text shown on hover.",
                },
                {
                  tag: "href",
                  desc: "Destination URL for anchor tags.",
                },
                {
                  tag: "src",
                  desc: "Source file path for images, scripts, and iframes.",
                },
                {
                  tag: "alt",
                  desc: "Fallback text for images — also read by screen readers.",
                },
                {
                  tag: "placeholder",
                  desc: "Hint text inside empty input fields.",
                },
                {
                  tag: "disabled",
                  desc: "Disables an input or button element.",
                },
                {
                  tag: "required",
                  desc: "Prevents form submission if the field is empty.",
                },
                {
                  tag: "data-*",
                  desc: "Custom attribute for storing any extra data you need.",
                },
              ].map((item) => (
                <div
                  key={item.tag}
                  className="bg-[#0f1117] border border-white/7 rounded-xl p-4 flex items-center gap-4"
                >
                  <p className="text-pink-400 font-mono text-sm min-w-[100px]">
                    {item.tag}
                  </p>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* lesson 10 */}
          <div
            id="media-elements"
            className="bg-[#161b27] p-10 border border-white/10 rounded-xl max-w-3xl mb-10 max-sm:p-5"
          >
            <span className="inline-block bg-orange-500/10 text-orange-400 text-xs px-4 py-1 rounded-full mb-4">
              Lesson 10
            </span>

            <h2 className="text-2xl font-semibold text-slate-100 mb-2">
              Media Elements
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              HTML lets you embed videos, audio, and external pages directly
              into your website — no plugins needed.
            </p>

            <hr className="border-white/10 mb-8" />

            {/* VIDEO */}
            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Video Tag
            </p>
            <p className="text-sm text-slate-400 mb-3 leading-relaxed">
              Use the <code className="text-orange-300">&lt;video&gt;</code> tag
              to embed a video file directly on your page.
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8"
              dir="ltr"
            >
              <p>
                <span className="text-pink-400">&lt;video </span>
                <span className="text-blue-400">src</span>
                <span className="text-slate-300">=</span>
                <span className="text-green-400">"clip.mp4"</span>
                <span className="text-slate-300"> </span>
                <span className="text-blue-400">controls</span>
                <span className="text-slate-300"> </span>
                <span className="text-blue-400">width</span>
                <span className="text-slate-300">=</span>
                <span className="text-green-400">"600"</span>
                <span className="text-pink-400">&gt;</span>
              </p>
              <p className="pl-4 text-slate-500">
                Your browser does not support video.
              </p>
              <p>
                <span className="text-pink-400">&lt;/video&gt;</span>
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {[
                {
                  title: "controls",
                  desc: "Shows the play, pause, and volume buttons on the video player.",
                  color: "text-orange-400",
                },
                {
                  title: "autoplay",
                  desc: "Starts playing the video automatically when the page loads.",
                  color: "text-indigo-400",
                },
                {
                  title: "loop",
                  desc: "Replays the video from the beginning when it ends.",
                  color: "text-blue-400",
                },
                {
                  title: "muted",
                  desc: "Starts the video with the sound turned off — required for autoplay in most browsers.",
                  color: "text-green-400",
                },
              ].map((c) => (
                <div
                  key={c.title}
                  className="bg-[#0f1117] border border-white/7 rounded-xl p-5"
                >
                  <p
                    className={`text-sm font-medium font-mono mb-2 ${c.color}`}
                  >
                    {c.title}
                  </p>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              ))}
            </div>

            <hr className="border-white/10 mb-8" />

            {/* AUDIO */}
            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Audio Tag
            </p>
            <p className="text-sm text-slate-400 mb-3 leading-relaxed">
              Use the <code className="text-orange-300">&lt;audio&gt;</code> tag
              to embed sound files — same attributes as video.
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8"
              dir="ltr"
            >
              <p>
                <span className="text-pink-400">&lt;audio </span>
                <span className="text-blue-400">src</span>
                <span className="text-slate-300">=</span>
                <span className="text-green-400">"song.mp3"</span>
                <span className="text-slate-300"> </span>
                <span className="text-blue-400">controls</span>
                <span className="text-pink-400">&gt;</span>
              </p>
              <p className="pl-4 text-slate-500">
                Your browser does not support audio.
              </p>
              <p>
                <span className="text-pink-400">&lt;/audio&gt;</span>
              </p>
            </div>

            <hr className="border-white/10 mb-8" />

            {/* IFRAME */}
            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              iframe Tag
            </p>
            <p className="text-sm text-slate-400 mb-3 leading-relaxed">
              <code className="text-orange-300">&lt;iframe&gt;</code> embeds an
              external webpage — like a YouTube video or a Google Map — inside
              your page.
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-3"
              dir="ltr"
            >
              <span className="text-pink-400">&lt;iframe </span>
              <span className="text-blue-400">src</span>
              <span className="text-slate-300">=</span>
              <span className="text-green-400 ">"www.youtube.com"</span>
              <br />
              <span className="pl-8 text-blue-400">width</span>
              <span className="text-slate-300">=</span>
              <span className="text-green-400">"560"</span>
              <span className="text-slate-300"> </span>
              <span className="text-blue-400">height</span>
              <span className="text-slate-300">=</span>
              <span className="text-green-400">"315"</span>
              <span className="text-slate-300"> </span>
              <span className="text-blue-400">allowfullscreen</span>
              <span className="text-pink-400">&gt;&lt;/iframe&gt;</span>
            </div>

            <div className="border-l-4 border-blue-500 bg-blue-500/5 rounded-r-lg p-4 text-sm text-blue-300 leading-relaxed mb-8">
              💡 Always add fallback text inside{" "}
              <code className="text-blue-200">&lt;video&gt;</code> and{" "}
              <code className="text-blue-200">&lt;audio&gt;</code> — it shows
              when the browser can't play the file.
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Common Media Tags
            </p>

            <div className="flex flex-col gap-3">
              {[
                {
                  tag: "<video>",
                  desc: "Embeds a video file with optional player controls.",
                },
                { tag: "<audio>", desc: "Embeds a sound or music file." },
                {
                  tag: "<iframe>",
                  desc: "Embeds an external webpage inside the current page.",
                },
                {
                  tag: "<source>",
                  desc: "Specifies multiple media file formats as fallbacks inside video or audio.",
                },
                {
                  tag: "controls",
                  desc: "Boolean attribute that adds built-in player controls.",
                },
                {
                  tag: "autoplay",
                  desc: "Starts the media automatically — usually requires muted.",
                },
              ].map((item) => (
                <div
                  key={item.tag}
                  className="bg-[#0f1117] border border-white/7 rounded-xl p-4 flex items-center gap-4 "
                >
                  <p className="text-pink-400 font-mono text-sm min-w-[100px] max-sm:min-w-fit">
                    {item.tag}
                  </p>
                  <p className="text-xs text-slate-500 leading-relaxed max-sm:max-w-fit">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* lesson 11 */}
          <div
            id="meta-seo"
            className="bg-[#161b27] p-10 border border-white/10 rounded-xl max-w-3xl mb-10 max-sm:p-5"
          >
            <span className="inline-block bg-orange-500/10 text-orange-400 text-xs px-4 py-1 rounded-full mb-4">
              Lesson 11
            </span>

            <h2 className="text-2xl font-semibold text-slate-100 mb-2">
              Meta Tags &amp; SEO
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              Meta tags live inside the{" "}
              <code className="text-orange-300">&lt;head&gt;</code> and give
              browsers and search engines important info about your page —
              invisible to users but critical for performance and
              discoverability.
            </p>

            <hr className="border-white/10 mb-8" />

            {/* What are meta tags */}
            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              What Are Meta Tags?
            </p>
            <p className="text-sm text-slate-400 mb-3 leading-relaxed">
              The <code className="text-orange-300">&lt;meta&gt;</code> tag is
              self-closing and always goes inside{" "}
              <code className="text-orange-300">&lt;head&gt;</code>.
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8"
              dir="ltr"
            >
              <p>
                <span className="text-pink-400">&lt;meta </span>
                <span className="text-blue-400">name</span>
                <span className="text-slate-300">=</span>
                <span className="text-green-400">"description"</span>
                <span className="text-slate-300"> </span>
                <span className="text-blue-400">content</span>
                <span className="text-slate-300">=</span>
                <span className="text-green-400">
                  "Learn HTML from scratch"
                </span>
                <span className="text-pink-400"> /&gt;</span>
              </p>
            </div>

            <hr className="border-white/10 mb-8" />

            {/* Essential head setup */}
            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Essential Head Setup
            </p>
            <p className="text-sm text-slate-400 mb-3 leading-relaxed">
              Every HTML page should start with these inside the{" "}
              <code className="text-orange-300">&lt;head&gt;</code>:
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8"
              dir="ltr"
            >
              <p>
                <span className="text-pink-400">&lt;head&gt;</span>
              </p>
              <p className="pl-4">
                <span className="text-pink-400">&lt;meta </span>
                <span className="text-blue-400">charset</span>
                <span className="text-slate-300">=</span>
                <span className="text-green-400">"UTF-8"</span>
                <span className="text-pink-400"> /&gt;</span>
              </p>
              <p className="pl-4">
                <span className="text-pink-400">&lt;meta </span>
                <span className="text-blue-400">name</span>
                <span className="text-slate-300">=</span>
                <span className="text-green-400">"viewport"</span>
                <span className="text-slate-300"> </span>
                <span className="text-blue-400">content</span>
                <span className="text-slate-300">=</span>
                <span className="text-green-400">
                  "width=device-width, initial-scale=1.0"
                </span>
                <span className="text-pink-400"> /&gt;</span>
              </p>
              <p className="pl-4">
                <span className="text-pink-400">&lt;meta </span>
                <span className="text-blue-400">name</span>
                <span className="text-slate-300">=</span>
                <span className="text-green-400">"description"</span>
                <span className="text-slate-300"> </span>
                <span className="text-blue-400">content</span>
                <span className="text-slate-300">=</span>
                <span className="text-green-400">"Page description here"</span>
                <span className="text-pink-400"> /&gt;</span>
              </p>
              <p className="pl-4">
                <span className="text-pink-400">&lt;title&gt;</span>
                <span className="text-slate-300">Page Title</span>
                <span className="text-pink-400">&lt;/title&gt;</span>
              </p>
              <p>
                <span className="text-pink-400">&lt;/head&gt;</span>
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {[
                {
                  title: "charset",
                  desc: 'UTF-8 supports all characters and languages — always include it. Example: charset="UTF-8"',
                  color: "text-orange-400",
                },
                {
                  title: "viewport",
                  desc: "Makes your page responsive on mobile screens — without it, mobile looks broken.",
                  color: "text-indigo-400",
                },
                {
                  title: "description",
                  desc: "The text Google shows under your page title in search results — keep it under 160 characters.",
                  color: "text-blue-400",
                },
                {
                  title: "title",
                  desc: "Shows in the browser tab and is the biggest SEO factor on the page.",
                  color: "text-green-400",
                },
              ].map((c) => (
                <div
                  key={c.title}
                  className="bg-[#0f1117] border border-white/7 rounded-xl p-5"
                >
                  <p
                    className={`text-sm font-medium font-mono mb-2 ${c.color}`}
                  >
                    {c.title}
                  </p>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              ))}
            </div>

            <hr className="border-white/10 mb-8" />

            {/* Open Graph */}
            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Open Graph Tags
            </p>
            <p className="text-sm text-slate-400 mb-3 leading-relaxed">
              Open Graph tags control how your page looks when shared on social
              media like Facebook, WhatsApp, and LinkedIn.
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8"
              dir="ltr"
            >
              <p>
                <span className="text-pink-400">&lt;meta </span>
                <span className="text-blue-400">property</span>
                <span className="text-slate-300">=</span>
                <span className="text-green-400">"og:title"</span>
                <span className="text-slate-300"> </span>
                <span className="text-blue-400">content</span>
                <span className="text-slate-300">=</span>
                <span className="text-green-400">"My Site"</span>
                <span className="text-pink-400"> /&gt;</span>
              </p>
              <p>
                <span className="text-pink-400">&lt;meta </span>
                <span className="text-blue-400">property</span>
                <span className="text-slate-300">=</span>
                <span className="text-green-400">"og:description"</span>
                <span className="text-slate-300"> </span>
                <span className="text-blue-400">content</span>
                <span className="text-slate-300">=</span>
                <span className="text-green-400">"Learn web development"</span>
                <span className="text-pink-400"> /&gt;</span>
              </p>
              <p>
                <span className="text-pink-400">&lt;meta </span>
                <span className="text-blue-400">property</span>
                <span className="text-slate-300">=</span>
                <span className="text-green-400">"og:image"</span>
                <span className="text-slate-300"> </span>
                <span className="text-blue-400">content</span>
                <span className="text-slate-300">=</span>
                <span className="text-green-400">"thumbnail.jpg"</span>
                <span className="text-pink-400"> /&gt;</span>
              </p>
            </div>

            <div className="border-l-4 border-blue-500 bg-blue-500/5 rounded-r-lg p-4 text-sm text-blue-300 leading-relaxed mb-8">
              💡 The <code className="text-blue-200">viewport</code> meta tag is
              the single most important thing that makes a website
              mobile-friendly.
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Common Meta Tags Reference
            </p>

            <div className="flex flex-col gap-3">
              {[
                {
                  tag: 'charset="UTF-8"',
                  desc: "Declares the character encoding — supports all languages.",
                },
                {
                  tag: "name=viewport",
                  desc: "Controls layout on mobile devices.",
                },
                {
                  tag: "name=description",
                  desc: "Page summary shown in search engine results.",
                },
                {
                  tag: "name=keywords",
                  desc: "Comma-separated keywords for the page topic (less important today).",
                },
                { tag: "name=author", desc: "The name of the page author." },
                {
                  tag: "name=robots",
                  desc: 'Controls if search engines can index the page. Example: content="noindex"',
                },
                {
                  tag: "property=og:title",
                  desc: "Title shown when the page is shared on social media.",
                },
                {
                  tag: "property=og:image",
                  desc: "Thumbnail image shown when shared on social media.",
                },
              ].map((item) => (
                <div
                  key={item.tag}
                  className="bg-[#0f1117] border border-white/7 rounded-xl p-4 flex items-start gap-4"
                >
                  <p className="text-pink-400 font-mono text-xs min-w-[160px] max-sm:min-w-fit pt-0.5">
                    {item.tag}
                  </p>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* lesson 12 */}
          <div
            id="html-entities"
            className="bg-[#161b27] p-10 border border-white/10 rounded-xl max-w-3xl mb-10 max-sm:p-5"
          >
            <span className="inline-block bg-orange-500/10 text-orange-400 text-xs px-4 py-1 rounded-full mb-4">
              Lesson 12
            </span>

            <h2 className="text-2xl font-semibold text-slate-100 mb-2">
              HTML Entities
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              Some characters have special meaning in HTML — entities let you
              display them as plain text without confusing the browser.
            </p>

            <hr className="border-white/10 mb-8" />

            {/* Why entities */}
            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Why Do We Need Entities?
            </p>
            <p className="text-sm text-slate-400 mb-3 leading-relaxed">
              Characters like <code className="text-orange-300">&lt;</code> and{" "}
              <code className="text-orange-300">&gt;</code> are used by HTML
              itself — if you type them directly, the browser thinks you're
              writing a tag.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-[#0f1117] border border-red-500/20 rounded-xl p-5">
                <p className="text-red-400 text-sm font-medium mb-3">
                  ❌ Wrong
                </p>
                <div
                  className="font-mono text-xs text-slate-400 mb-3"
                  dir="ltr"
                >
                  <p>&lt;p&gt;5 &lt; 10&lt;/p&gt;</p>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  The browser reads{" "}
                  <span className="text-red-400 font-mono">&lt;</span> as the
                  start of a tag — the text breaks.
                </p>
              </div>
              <div className="bg-[#0f1117] border border-green-500/20 rounded-xl p-5">
                <p className="text-green-400 text-sm font-medium mb-3">
                  ✓ Correct
                </p>
                <div
                  className="font-mono text-xs text-slate-400 mb-3"
                  dir="ltr"
                >
                  <p>&lt;p&gt;5 &amp;lt; 10&lt;/p&gt;</p>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  The entity{" "}
                  <span className="text-green-400 font-mono">&amp;lt;</span>{" "}
                  safely renders as the {"<"} character.
                </p>
              </div>
            </div>

            <hr className="border-white/10 mb-8" />

            {/* Entity structure */}
            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Entity Structure
            </p>
            <p className="text-sm text-slate-400 mb-3 leading-relaxed">
              Every entity starts with{" "}
              <code className="text-orange-300">&amp;</code> and ends with{" "}
              <code className="text-orange-300">;</code>
            </p>
            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-2"
              dir="ltr"
            >
              <span className="text-pink-400">&amp;</span>
              <span className="text-blue-400">nbsp</span>
              <span className="text-pink-400">;</span>
              <span className="text-slate-500 ml-6">
                {"// non-breaking space"}
              </span>
            </div>
            <p
              className="text-xs text-slate-600 font-mono mb-8 text-left"
              dir="ltr"
            >
              // &amp; → start &nbsp;&nbsp; name → entity &nbsp;&nbsp; ; → end
            </p>

            <hr className="border-white/10 mb-8" />

            {/* Common entities table */}
            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Most Used Entities
            </p>

            <div className="bg-[#0f1117] border border-white/10 rounded-xl overflow-hidden mb-8">
              <table className="w-full text-sm text-left" dir="ltr">
                <thead className="bg-white/5 text-slate-300">
                  <tr>
                    <th className="p-4 max-sm:p-2 border-b border-white/10 max-sm:text-xs">
                      Entity
                    </th>
                    <th className="p-4 max-sm:p-2 border-b border-white/10 max-sm:text-xs">
                      Renders As
                    </th>
                    <th className="p-4 max-sm:p-2 border-b border-white/10 max-sm:text-xs">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody className="text-slate-400">
                  {[
                    {
                      entity: "&amp;nbsp;",
                      render: "( space )",
                      desc: "Non-breaking space — keeps two words on the same line.",
                    },
                    {
                      entity: "&amp;lt;",
                      render: "<",
                      desc: "Less-than sign — opening angle bracket.",
                    },
                    {
                      entity: "&amp;gt;",
                      render: ">",
                      desc: "Greater-than sign — closing angle bracket.",
                    },
                    {
                      entity: "&amp;amp;",
                      render: "&",
                      desc: "Ampersand character.",
                    },
                    {
                      entity: "&amp;quot;",
                      render: '"',
                      desc: "Double quotation mark.",
                    },
                    {
                      entity: "&amp;apos;",
                      render: "'",
                      desc: "Apostrophe / single quote.",
                    },
                    {
                      entity: "&amp;copy;",
                      render: "©",
                      desc: "Copyright symbol.",
                    },
                    {
                      entity: "&amp;reg;",
                      render: "®",
                      desc: "Registered trademark symbol.",
                    },
                    {
                      entity: "&amp;trade;",
                      render: "™",
                      desc: "Trademark symbol.",
                    },
                    {
                      entity: "&amp;mdash;",
                      render: "—",
                      desc: "Em dash — longer dash used in writing.",
                    },
                    {
                      entity: "&amp;hearts;",
                      render: "♥",
                      desc: "Heart symbol.",
                    },
                    { entity: "&amp;star;", render: "★", desc: "Star symbol." },
                  ].map((row) => (
                    <tr key={row.entity} className="border-b border-white/5">
                      <td className="p-4 max-sm:p-2 max-sm:text-xs font-mono text-pink-400 text-xs">
                        {row.entity}
                      </td>
                      <td className="p-4 max-sm:p-2 max-sm:text-xs text-slate-200 font-semibold">
                        {row.render}
                      </td>
                      <td className="p-4  max-sm:p-2  max-sm:text-xs text-xs text-slate-500">
                        {row.desc}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="border-l-4 border-blue-500 bg-blue-500/5 rounded-r-lg p-4 text-sm text-blue-300 leading-relaxed mb-8">
              💡 The most common mistake beginners make is typing{" "}
              <code className="text-blue-200">&amp;</code> directly in text —
              always use <code className="text-blue-200">&amp;amp;</code>{" "}
              instead.
            </div>

            <hr className="border-white/10 mb-8" />

            {/* Practical example */}
            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Practical Example
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-4"
              dir="ltr"
            >
              <p>
                <span className="text-slate-500">
                  {"// Footer copyright line"}
                </span>
              </p>
              <p>
                <span className="text-pink-400">&lt;p&gt;</span>
                <span className="text-slate-300">
                  &amp;copy; 2025 &amp;nbsp; MyBrand &amp;trade;
                </span>
                <span className="text-pink-400">&lt;/p&gt;</span>
              </p>
            </div>

            <div className="bg-[#0f1117] border border-white/10 rounded-lg p-4 text-sm mb-8 text-slate-300">
              <span className="text-slate-500 text-xs mr-2">Renders as:</span>©
              2025 &nbsp; MyBrand ™
            </div>
          </div>

          {/* lesson 13 */}
          <div
            id="block-vs-inline"
            className="bg-[#161b27] p-10 border border-white/10 rounded-xl max-w-3xl mb-10 max-sm:p-5"
          >
            <span className="inline-block bg-orange-500/10 text-orange-400 text-xs px-4 py-1 rounded-full mb-4">
              Lesson 13
            </span>

            <h2 className="text-2xl font-semibold text-slate-100 mb-2">
              Block vs Inline Elements
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              Every HTML element is either block-level or inline — this controls
              how elements sit next to each other on the page, and it's the
              foundation you need before learning CSS layout.
            </p>

            <hr className="border-white/10 mb-8" />

            {/* Visual comparison */}
            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              The Visual Difference
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {/* Block demo */}
              <div className="bg-[#0f1117] border border-orange-500/20 rounded-xl p-5">
                <p className="text-orange-400 text-sm font-medium mb-4">
                  Block Elements
                </p>
                <div className="flex flex-col gap-2">
                  <div className="bg-orange-500/10 border border-orange-500/30 rounded p-2 text-xs text-orange-300 text-center">
                    &lt;div&gt; Full width
                  </div>
                  <div className="bg-orange-500/10 border border-orange-500/30 rounded p-2 text-xs text-orange-300 text-center">
                    &lt;p&gt; New line
                  </div>
                  <div className="bg-orange-500/10 border border-orange-500/30 rounded p-2 text-xs text-orange-300 text-center">
                    &lt;h1&gt; Full width
                  </div>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed mt-4">
                  Each element starts on a new line and takes the full width.
                </p>
              </div>

              {/* Inline demo */}
              <div className="bg-[#0f1117] border border-indigo-500/20 rounded-xl p-5">
                <p className="text-indigo-400 text-sm font-medium mb-4">
                  Inline Elements
                </p>
                <div className="flex flex-wrap gap-1 mb-2">
                  <span className="bg-indigo-500/10 border border-indigo-500/30 rounded px-2 py-1 text-xs text-indigo-300">
                    &lt;span&gt;
                  </span>
                  <span className="bg-indigo-500/10 border border-indigo-500/30 rounded px-2 py-1 text-xs text-indigo-300">
                    &lt;a&gt;
                  </span>
                  <span className="bg-indigo-500/10 border border-indigo-500/30 rounded px-2 py-1 text-xs text-indigo-300">
                    &lt;strong&gt;
                  </span>
                  <span className="bg-indigo-500/10 border border-indigo-500/30 rounded px-2 py-1 text-xs text-indigo-300">
                    &lt;em&gt;
                  </span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed mt-4">
                  Elements sit next to each other on the same line — only as
                  wide as their content.
                </p>
              </div>
            </div>

            <hr className="border-white/10 mb-8" />

            {/* Code example */}
            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Code Example
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8"
              dir="ltr"
            >
              <p className="text-slate-500 text-xs mb-2">
                {"// Block — each on its own line"}
              </p>
              <p>
                <span className="text-pink-400">&lt;p&gt;</span>
                <span className="text-slate-300">First paragraph</span>
                <span className="text-pink-400">&lt;/p&gt;</span>
              </p>
              <p>
                <span className="text-pink-400">&lt;p&gt;</span>
                <span className="text-slate-300">Second paragraph</span>
                <span className="text-pink-400">&lt;/p&gt;</span>
              </p>
              <br />
              <p className="text-slate-500 text-xs mb-2">
                {"// Inline — all on the same line"}
              </p>
              <p>
                <span className="text-pink-400">&lt;p&gt;</span>
                <span className="text-slate-300">Visit </span>
                <span className="text-pink-400">&lt;a </span>
                <span className="text-blue-400">href</span>
                <span className="text-slate-300">=</span>
                <span className="text-green-400">"#"</span>
                <span className="text-pink-400">&gt;</span>
                <span className="text-slate-300">this link</span>
                <span className="text-pink-400">&lt;/a&gt;</span>
                <span className="text-slate-300"> for more </span>
                <span className="text-pink-400">&lt;strong&gt;</span>
                <span className="text-slate-300">info</span>
                <span className="text-pink-400">&lt;/strong&gt;</span>
                <span className="text-pink-400">&lt;/p&gt;</span>
              </p>
            </div>

            <hr className="border-white/10 mb-8" />

            {/* Block elements list */}
            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Block Elements
            </p>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {[
                {
                  title: "div",
                  desc: "Generic block container — the most used block element.",
                },
                {
                  title: "p",
                  desc: "Paragraph — always starts on a new line.",
                },
                {
                  title: "h1 → h6",
                  desc: "All heading levels are block elements.",
                },
                {
                  title: "ul / ol",
                  desc: "Both list types are block elements.",
                },
                { title: "table", desc: "Tables are block-level by default." },
                {
                  title: "section",
                  desc: "Semantic block containers are all block-level.",
                },
              ].map((c) => (
                <div
                  key={c.title}
                  className="bg-[#0f1117] border border-white/7 rounded-xl p-4"
                >
                  <p className="text-orange-400 font-mono text-sm mb-1">
                    &lt;{c.title}&gt;
                  </p>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              ))}
            </div>

            <hr className="border-white/10 mb-8" />

            {/* Inline elements list */}
            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Inline Elements
            </p>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {[
                {
                  title: "span",
                  desc: "Generic inline container — the inline equivalent of div.",
                },
                {
                  title: "a",
                  desc: "Links are inline — they sit inside sentences.",
                },
                {
                  title: "strong",
                  desc: "Bold inline text with semantic importance.",
                },
                {
                  title: "em",
                  desc: "Italic inline text with emphasis meaning.",
                },
                {
                  title: "img",
                  desc: "Images are inline by default — they sit in the text flow.",
                },
                { title: "label", desc: "Form labels are inline elements." },
              ].map((c) => (
                <div
                  key={c.title}
                  className="bg-[#0f1117] border border-white/7 rounded-xl p-4"
                >
                  <p className="text-indigo-400 font-mono text-sm mb-1">
                    &lt;{c.title}&gt;
                  </p>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="border-l-4 border-blue-500 bg-blue-500/5 rounded-r-lg p-4 text-sm text-blue-300 leading-relaxed mb-8">
              💡 In CSS you can change any element's behavior using{" "}
              <code className="text-blue-200">display: block</code> or{" "}
              <code className="text-blue-200">display: inline</code> — but
              understanding the HTML defaults is essential first.
            </div>

            <hr className="border-white/10 mb-8" />

            {/* Key rules */}
            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Important Rules
            </p>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {[
                {
                  title: "Block inside Block ✓",
                  desc: "You can put a block element inside another block element.",
                  color: "text-green-400",
                  border: "border-green-500/20",
                },
                {
                  title: "Inline inside Block ✓",
                  desc: "You can put an inline element inside a block element.",
                  color: "text-green-400",
                  border: "border-green-500/20",
                },
                {
                  title: "Inline inside Inline ✓",
                  desc: "You can nest inline elements inside each other.",
                  color: "text-green-400",
                  border: "border-green-500/20",
                },
                {
                  title: "Block inside Inline ✗",
                  desc: "You should not put a block element inside an inline element — this breaks HTML rules.",
                  color: "text-red-400",
                  border: "border-red-500/20",
                },
              ].map((c) => (
                <div
                  key={c.title}
                  className={`bg-[#0f1117] border ${c.border} rounded-xl p-5`}
                >
                  <p className={`text-sm font-medium mb-2 ${c.color}`}>
                    {c.title}
                  </p>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              ))}
            </div>

            <hr className="border-white/10 mb-8" />

            {/* Quick reference */}
            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Quick Reference
            </p>

            <div className="flex flex-col gap-3">
              {[
                {
                  tag: "Block",
                  rule: "Starts on a new line — takes full width by default.",
                },
                {
                  tag: "Inline",
                  rule: "Stays on the same line — only as wide as its content.",
                },
                {
                  tag: "<div>",
                  rule: "Most common block container — use for layout sections.",
                },
                {
                  tag: "<span>",
                  rule: "Most common inline container — use to style text inside a paragraph.",
                },
                {
                  tag: "display",
                  rule: "CSS property that lets you override block/inline behavior.",
                },
              ].map((item) => (
                <div
                  key={item.tag}
                  className="bg-[#0f1117] border border-white/7 rounded-xl p-4 flex items-center gap-4"
                >
                  <p className="text-pink-400 font-mono text-sm min-w-[80px]">
                    {item.tag}
                  </p>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {item.rule}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Html;
