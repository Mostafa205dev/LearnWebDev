import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Top from "../components/Top";



function TailWind() {
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

  const seoData = {
    title: "Learn TailWind CSS | Learn Web Dev",
    desc: "Learn TailWind CSS from scratch with examples, lessons, components and responsive design.",
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
          content="TailWind CSS, Learn TailWind CSS, TailWind CSS Tutorial, Web Development, Learn Web Development"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:image"
          content="https://learnwebdev.me/favicon.png"
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://learnwebdev.me/tailwind" />
      </Helmet>

      <h1 className="sr-only">Learn TailWind CSS — تعلم TailWind CSS</h1>

      {/* body */}
      <div className="bg-[#0f1117] min-h-screen text-white flex">
        {/* button sidebar for phone */}
        <button
          className="fixed top-24 left-0 bg-cyan-400 text-black p-2 rounded-r-xl z-50 sm:hidden"
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

        {/* button to top */}
        <Top color="cyan" />

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
          <h2 className="text-cyan-400 text-xl">Tailwind Track</h2>
          <div className="flex flex-col gap-2">
            {[
              { id: "intro", label: "Introduction To Tailwind CSS" },
              { id: "utility-first", label: "Utility First CSS" },
              { id: "colors", label: "Colors" },
              { id: "typography", label: "Typography" },
              { id: "spacing", label: "Spacing" },
              { id: "sizing", label: "Sizing" },
              { id: "borders", label: "Borders & Outlines" },
              { id: "backgrounds", label: "Backgrounds" },
              { id: "shadows-opacity", label: "Shadows & Opacity" },
              { id: "flexbox", label: "Flexbox" },
              { id: "grid", label: "Grid" },
              { id: "positioning", label: "Positioning" },
              { id: "zindex-overflow", label: "Z-index & Overflow" },
              { id: "responsive-design", label: "Responsive Design" },
              { id: "transitions", label: "Transitions" },
              { id: "transforms", label: "Transforms" },
              { id: "animations", label: "Animations" },
              { id: "dark-mode", label: "Dark Mode" },
              { id: "pseudo-classes", label: "Pseudo Classes" },
              { id: "group-peer", label: "Group & Peer" },
              { id: "arbitrary-values", label: "Arbitrary Values" },
              { id: "customization", label: "Customization" },
              { id: "tailwind-react", label: "Tailwind With React" },
              { id: "best-practices", label: "Best Practices" },
            ].map((lesson) => (
              <a
                key={lesson.id}
                href={`#${lesson.id}`}
                onClick={() => setShowSidebar(false)}
                className={`text-sm ${
                  activeLesson === lesson.id
                    ? "text-cyan-300 font-medium"
                    : "text-slate-500"
                }`}
              >
                • {lesson.label}
              </a>
            ))}
          </div>
          <div className="flex gap-5">
            <Link
              to="/css"
              aria-label="الدرس السابق"
              className="flex items-center gap-1 text-sm text-slate-500 hover:text-cyan-400 transition-colors"
            >
              <ArrowLeft size={16} />
              <span>css</span>
            </Link>
            <span className="text-slate-700">|</span>
            <Link
              to="/react"
              aria-label="الدرس التالي"
              className="flex items-center gap-1 text-sm text-slate-500 hover:text-cyan-400 transition-colors"
            >
              <span>react</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* TailwindBody */}
        <div className="flex-1 py-10 px-20 overflow-y-auto flex flex-col justify-center items-center gap-10 max-sm:p-5">
          {/* lesson 1 */}
          <div
            id="intro"
            className="bg-[#161b27] p-10 border border-white/10 rounded-xl max-w-3xl max-sm:px-5"
          >
            <span className="inline-block bg-cyan-500/10 text-cyan-400 text-xs px-4 py-1 rounded-full mb-4">
              Lesson 1
            </span>

            <h2 className="text-2xl font-semibold text-slate-100 mb-2">
              Introduction To Tailwind CSS
            </h2>

            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              Tailwind CSS is a utility-first CSS framework that lets you build
              designs directly inside your HTML or JSX without creating separate
              CSS files for every component.
            </p>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              What is Tailwind CSS?
            </p>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {[
                {
                  title: "Utility First",
                  desc: "Instead of writing CSS classes, you use small utility classes directly in your HTML.",
                  color: "text-cyan-400",
                },
                {
                  title: "Fast Development",
                  desc: "Most styling is written directly in JSX which speeds up development.",
                  color: "text-indigo-400",
                },
                {
                  title: "Responsive Built In",
                  desc: "Creating responsive layouts is easy using breakpoint utilities.",
                  color: "text-blue-400",
                },
                {
                  title: "Highly Customizable",
                  desc: "You can customize colors, spacing, fonts and more through the Tailwind config.",
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
              CSS vs Tailwind
            </p>

            <p className="text-sm text-slate-400 mb-3 leading-relaxed">
              Let's compare a simple button in traditional CSS and Tailwind CSS.
            </p>

            <div className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-4">
              <p className="text-cyan-400 mb-2">// HTML</p>

              <p>
                &lt;button class="btn"&gt;
                <span className="text-slate-300"> Click Me </span>
                &lt;/button&gt;
              </p>

              <br />

              <p className="text-cyan-400 mb-2">// CSS</p>

              <p>.btn {"{"}</p>
              <p className="pl-4">background: #06b6d4;</p>
              <p className="pl-4">padding: 12px 20px;</p>
              <p className="pl-4">border-radius: 8px;</p>
              <p>{"}"}</p>
            </div>

            <div className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8">
              <p className="text-cyan-400 mb-2">// Tailwind</p>

              <p>
                &lt;button class="
                <span className="text-sky-400">
                  bg-cyan-500 px-5 py-3 rounded-lg
                </span>
                "&gt;
                <span className="text-slate-300"> Click Me </span>
                &lt;/button&gt;
              </p>
            </div>

            <div className="border-l-4 border-cyan-500 bg-cyan-500/5 rounded-r-lg p-4 text-sm text-cyan-300 leading-relaxed mb-8">
              💡 Tailwind doesn't replace CSS. It simply provides utility
              classes that generate CSS for you behind the scenes.
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Why Developers Love Tailwind
            </p>

            <div className="flex flex-col gap-3">
              {[
                {
                  title: "Less Context Switching",
                  desc: "You don't need to constantly move between JSX and CSS files.",
                },
                {
                  title: "Consistent Design",
                  desc: "Using predefined utilities helps maintain consistent spacing and sizing.",
                },
                {
                  title: "Responsive Utilities",
                  desc: "Responsive design can be built directly in class names.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-[#0f1117] border border-white/7 rounded-xl p-4"
                >
                  <p className="text-cyan-400 font-medium text-sm mb-1">
                    {item.title}
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
            id="utility-first"
            className="bg-[#161b27] p-10 border border-white/10 rounded-xl max-w-3xl max-sm:px-5"
          >
            <span className="inline-block bg-cyan-500/10 text-cyan-400 text-xs px-4 py-1 rounded-full mb-4">
              Lesson 2
            </span>

            <h2 className="text-2xl font-semibold text-slate-100 mb-2">
              Utility First CSS
            </h2>

            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              Tailwind uses a Utility-First approach. Instead of creating custom
              CSS classes for every component, you build your UI by combining
              small utility classes directly on the element.
            </p>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              What Does Utility First Mean?
            </p>

            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              Each Tailwind class usually has one responsibility. You combine
              multiple utilities together to create the final design.
            </p>

            <div className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto">
              <p>
                &lt;div class="
                <span className="text-cyan-400">
                  bg-blue-500 text-white p-4 rounded-lg shadow-lg
                </span>
                "&gt;
              </p>
              <p className="pl-4 text-slate-300">Hello Tailwind</p>
              <p>&lt;/div&gt;</p>
            </div>

            <div className="flex flex-col gap-3 mb-8">
              {[
                {
                  utility: "bg-blue-500",
                  desc: "Adds a blue background color.",
                },
                {
                  utility: "text-white",
                  desc: "Changes text color to white.",
                },
                {
                  utility: "p-4",
                  desc: "Adds padding from all sides.",
                },
                {
                  utility: "rounded-lg",
                  desc: "Adds rounded corners.",
                },
                {
                  utility: "shadow-lg",
                  desc: "Adds a large shadow.",
                },
              ].map((item) => (
                <div
                  key={item.utility}
                  className="bg-[#0f1117] border border-white/10 rounded-lg p-4"
                >
                  <p className="text-cyan-400 font-mono text-sm mb-1">
                    {item.utility}
                  </p>

                  <p className="text-xs text-slate-500">{item.desc}</p>
                </div>
              ))}
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Combining Utilities
            </p>

            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              Real Tailwind development is about combining many utilities
              together to build components.
            </p>

            <div className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto">
              <p>
                &lt;button class="
                <span className="text-cyan-400">
                  bg-cyan-500 hover:bg-cyan-600 text-white px-5 py-3 rounded-lg
                  transition
                </span>
                "&gt;
              </p>

              <p className="pl-4 text-slate-300">Login</p>

              <p>&lt;/button&gt;</p>
            </div>

            <div className="border-l-4 border-cyan-500 bg-cyan-500/5 rounded-r-lg p-4 text-sm text-cyan-300 leading-relaxed mb-8">
              💡 Think of Tailwind classes like LEGO blocks. Each utility does
              one small job, and combining them creates complete components.
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Benefits Of Utility First
            </p>

            <div className="grid grid-cols-2 gap-3 max-sm:grid-cols-1">
              {[
                {
                  title: "Faster Development",
                  desc: "Build interfaces without constantly switching to CSS files.",
                },
                {
                  title: "Consistent Design",
                  desc: "Spacing, colors and sizing stay consistent across the project.",
                },
                {
                  title: "Less CSS",
                  desc: "You write fewer custom CSS rules.",
                },
                {
                  title: "Easy Refactoring",
                  desc: "Styles are visible directly on the component.",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="bg-[#0f1117] border border-white/10 rounded-lg p-5"
                >
                  <p className="text-cyan-400 font-medium text-sm mb-2">
                    {card.title}
                  </p>

                  <p className="text-xs text-slate-500 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* lesson colors */}
          <div
            id="colors"
            className="bg-[#161b27] p-10 border border-white/10 rounded-xl max-w-3xl max-sm:px-5"
          >
            <span className="inline-block bg-cyan-500/10 text-cyan-400 text-xs px-4 py-1 rounded-full mb-4">
              Lesson 3
            </span>

            <h2 className="text-2xl font-semibold text-slate-100 mb-2">
              Colors in Tailwind CSS
            </h2>

            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              Tailwind has a full color system based on scales (like blue-50 →
              blue-950). Instead of writing HEX codes everywhere, you use
              semantic utility classes.
            </p>

            <hr className="border-white/10 mb-8" />

            {/* color system */}
            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Color System (Scales)
            </p>

            <p className="text-sm text-slate-400 mb-4">
              Each color has multiple shades from light to dark:
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {[
                "bg-blue-100",
                "bg-blue-300",
                "bg-blue-500",
                "bg-blue-700",
                "bg-blue-900",
              ].map((c) => (
                <div key={c} className={`w-10 h-10 rounded ${c}`} />
              ))}
            </div>

            {/* text colors */}
            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Text Colors
            </p>

            <div className="bg-[#0f1117] border border-white/10 rounded-lg p-5 mb-6">
              <p className="text-blue-400">text-blue-400 → Blue text</p>
              <p className="text-red-400">text-red-400 → Red text</p>
              <p className="text-green-400">text-green-400 → Green text</p>
              <p className="text-slate-300">text-slate-300 → Gray text</p>
            </div>

            {/* background colors */}
            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Background Colors
            </p>

            <div className="grid grid-cols-2 gap-3 mb-8 max-sm:grid-cols-1">
              {["bg-blue-500", "bg-cyan-500", "bg-green-500", "bg-red-500"].map(
                (c) => (
                  <div
                    key={c}
                    className={`h-12 rounded flex items-center justify-center text-white ${c}`}
                  >
                    {c}
                  </div>
                ),
              )}
            </div>

            {/* opacity */}
            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Opacity System
            </p>

            <div className="flex gap-3 mb-8">
              <div className="w-16 h-16 bg-cyan-500/100 rounded" />
              <div className="w-16 h-16 bg-cyan-500/50 rounded" />
              <div className="w-16 h-16 bg-cyan-500/20 rounded" />
            </div>

            {/* borders */}
            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Borders With Colors
            </p>

            <div className="bg-[#0f1117] border border-blue-500 rounded-lg p-5 mb-8">
              <div className="flex items-start gap-2 text-slate-300">
                <span className="text-cyan-400 font-mono">border-blue-500</span>

                <span>
                  <span className="text-cyan-300">→</span> adds a blue colored
                  border around the element
                </span>
              </div>
            </div>

            <hr className="border-white/10 mb-8" />

            {/* hover */}
            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Hover Colors
            </p>

            <div className="mb-8">
              <button className="bg-cyan-500 hover:bg-cyan-700 text-white px-5 py-3 rounded-lg transition">
                Hover Me
              </button>

              <p className="text-slate-400 text-sm mt-3">
                You can change colors on hover using{" "}
                <span className="text-cyan-400">hover:</span>
              </p>
            </div>

            <hr className="border-white/10 mb-8" />

            {/* css vs tailwind */}
            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              CSS vs Tailwind (Colors)
            </p>

            {/* CSS */}
            <div className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-6 overflow-x-auto">
              <p className="text-cyan-400 mb-2">// CSS</p>
              <p>.btn {"{"}</p>
              <p className="pl-4">background-color: #06b6d4;</p>
              <p className="pl-4">color: white;</p>
              <p>{"}"}</p>
            </div>

            {/* Tailwind */}
            <div className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto">
              <p className="text-cyan-400 mb-2">// Tailwind</p>
              <p>
                &lt;button class="
                <span className="text-sky-400">bg-cyan-500 text-white</span>
                "&gt;Click&lt;/button&gt;
              </p>
            </div>

            {/* summary */}
            <div className="border-l-4 border-cyan-500 bg-cyan-500/5 rounded-r-lg p-4 text-sm text-cyan-300 leading-relaxed">
              💡 Tailwind colors are:
              <br />• Scalable (100 → 950)
              <br />• Semantic (blue, red, green…)
              <br />• Easy to combine with hover, opacity, borders
            </div>
          </div>

          {/* lesson typography */}
          <div
            id="typography"
            className="bg-[#161b27] p-10 border border-white/10 rounded-xl max-w-3xl max-sm:px-5"
          >
            <span className="inline-block bg-cyan-500/10 text-cyan-400 text-xs px-4 py-1 rounded-full mb-4">
              Lesson 4
            </span>

            <h2 className="text-2xl font-semibold text-slate-100 mb-2">
              Typography in Tailwind CSS
            </h2>

            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              Typography in Tailwind controls how text looks: size, weight,
              spacing, alignment, decoration, and more — all using utility
              classes.
            </p>

            <hr className="border-white/10 mb-8" />

            {/* font size */}
            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Font Size
            </p>

            <div className="bg-[#0f1117] border border-white/10 rounded-lg p-5 mb-6">
              <p className="text-xs">text-xs → Extra small text</p>
              <p className="text-sm">text-sm → Small text</p>
              <p className="text-base">text-base → Default text</p>
              <p className="text-lg">text-lg → Large text</p>
              <p className="text-2xl">text-2xl → Heading size</p>
            </div>

            {/* font weight */}
            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Font Weight
            </p>

            <div className="bg-[#0f1117] border border-white/10 rounded-lg p-5 mb-6 space-y-2">
              <p className="font-light">font-light → Light text</p>
              <p className="font-normal">font-normal → Normal text</p>
              <p className="font-medium">font-medium → Medium text</p>
              <p className="font-bold">font-bold → Bold text</p>
            </div>

            {/* line height */}
            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Line Height
            </p>

            <div className="bg-[#0f1117] border border-white/10 rounded-lg p-5 mb-6">
              <p className="leading-tight text-sm mb-4">
                leading-tight → Small line height. Lorem ipsum dolor sit amet
                consectetur adipisicing elit.
              </p>

              <p className="leading-loose text-sm">
                leading-loose → Large line height. Lorem ipsum dolor sit amet
                consectetur adipisicing elit.
              </p>
            </div>

            {/* text alignment */}
            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Text Alignment
            </p>

            <div className="bg-[#0f1117] border border-white/10 rounded-lg p-5 mb-6 space-y-3">
              <p className="text-left text-sm">text-left → Left aligned</p>
              <p className="text-center text-sm">
                text-center → Center aligned
              </p>
              <p className="text-right text-sm">text-right → Right aligned</p>
            </div>

            {/* decoration */}
            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Text Decoration
            </p>

            <div className="bg-[#0f1117] border border-white/10 rounded-lg p-5 mb-6 space-y-3">
              <p className="underline">underline → Underlined text</p>
              <p className="line-through">line-through → Strikethrough text</p>
              <p className="no-underline">no-underline → Remove decoration</p>
            </div>

            <hr className="border-white/10 mb-8" />

            {/* css vs tailwind */}
            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              CSS vs Tailwind (Typography)
            </p>

            {/* CSS */}
            <div className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-6 overflow-x-auto">
              <p className="text-cyan-400 mb-2">// CSS</p>
              <p>.title {"{"}</p>
              <p className="pl-4">font-size: 24px;</p>
              <p className="pl-4">font-weight: bold;</p>
              <p className="pl-4">line-height: 1.5;</p>
              <p>{"}"}</p>
            </div>

            {/* Tailwind */}
            <div className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto">
              <p className="text-cyan-400 mb-2">// Tailwind</p>
              <p>
                &lt;h1 className="
                <span className="text-sky-400">
                  text-2xl font-bold leading-relaxed
                </span>
                "&gt;Title&lt;/h1&gt;
              </p>
            </div>

            {/* summary */}
            <div className="border-l-4 border-cyan-500 bg-cyan-500/5 rounded-r-lg p-4 text-sm text-cyan-300 leading-relaxed">
              💡 Typography in Tailwind is fully utility-based:
              <br />• text-* controls size
              <br />• font-* controls weight
              <br />• leading-* controls spacing between lines
              <br />• text-* alignment controls layout
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TailWind;
