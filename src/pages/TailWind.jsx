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
              { id: "intro", label: "Intro To Tailwind CSS" },
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
            className="bg-[#161b27] p-10 border border-white/10 rounded-xl w-full max-w-3xl max-sm:px-5"
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
            className="bg-[#161b27] p-10 border border-white/10 rounded-xl w-full max-w-3xl max-sm:px-5"
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

          {/* lesson 3 */}
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

          {/* lesson 4 */}
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

          {/* lesson 5 */}
          <div
            id="spacing"
            className="bg-[#161b27] p-10 border border-white/10 rounded-xl max-w-3xl max-sm:px-5"
          >
            <span className="inline-block bg-cyan-500/10 text-cyan-400 text-xs px-4 py-1 rounded-full mb-4">
              Lesson 5
            </span>

            <h2 className="text-2xl font-semibold text-slate-100 mb-2">
              Spacing (Margin & Padding)
            </h2>

            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              Tailwind spacing system controls{" "}
              <span className="text-cyan-300">margin (m)</span> and
              <span className="text-cyan-300"> padding (p)</span> using simple
              utility classes instead of writing CSS.
            </p>

            <hr className="border-white/10 mb-8" />

            {/* MAIN EXPLANATION */}
            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Margin Utilities (m-*)
            </p>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {[
                {
                  title: "m-* (all sides)",
                  desc: "Adds margin on all 4 sides of the element.",
                  color: "text-cyan-400",
                },
                {
                  title: "mt-* (margin-top)",
                  desc: "Adds space ONLY above the element.",
                  color: "text-indigo-400",
                },
                {
                  title: "mb-* (margin-bottom)",
                  desc: "Adds space ONLY below the element.",
                  color: "text-blue-400",
                },
                {
                  title: "ml / mr (left / right)",
                  desc: "Adds space on left or right side only.",
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

            {/* PADDING */}
            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Padding Utilities (p-*)
            </p>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {[
                {
                  title: "p-*",
                  desc: "Padding on all sides inside the element.",
                },
                {
                  title: "pt / pb",
                  desc: "Padding top or bottom only.",
                },
                {
                  title: "pl / pr",
                  desc: "Padding left or right only.",
                },
                {
                  title: "px / py",
                  desc: "Horizontal (x) or vertical (y) padding.",
                },
              ].map((c) => (
                <div
                  key={c.title}
                  className="bg-[#0f1117] border border-white/7 rounded-xl p-5"
                >
                  <p className="text-sm font-medium mb-2 text-cyan-400">
                    {c.title}
                  </p>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              ))}
            </div>

            <hr className="border-white/10 mb-8" />

            {/* EXAMPLE */}
            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Example
            </p>

            <div className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8">
              <p className="text-cyan-400 mb-2">// Tailwind Example</p>

              <p>
                &lt;div class="
                <span className="text-sky-400">mt-6 mb-4 px-5 py-3</span>
                "&gt;Box&lt;/div&gt;
              </p>

              <br />

              <p className="text-cyan-400 mb-2">// Meaning</p>

              <p className="text-slate-300 leading-relaxed">
                mt-6 = margin top
                <br />
                mb-4 = margin bottom
                <br />
                px-5 = padding left & right
                <br />
                py-3 = padding top & bottom
              </p>
            </div>

            {/* TIP */}
            <div className="border-l-4 border-cyan-500 bg-cyan-500/5 rounded-r-lg p-4 text-sm text-cyan-300 leading-relaxed">
              💡 Shortcut rule: <br />
              <span className="text-white">m</span> = margin,
              <span className="text-white"> p</span> = padding
              <br />
              <span className="text-white">t</span> = top,
              <span className="text-white">b</span> = bottom,
              <span className="text-white">l</span> = left,
              <span className="text-white">r</span> = right,
              <span className="text-white">x</span> = left + right,
              <span className="text-white">y</span> = top + bottom
            </div>
          </div>

          {/* lesson 6 */}
          <div
            id="sizing"
            className="bg-[#161b27] p-10 border border-white/10 rounded-xl max-w-3xl max-sm:px-5"
          >
            <span className="inline-block bg-cyan-500/10 text-cyan-400 text-xs px-4 py-1 rounded-full mb-4">
              Lesson 6
            </span>

            <h2 className="text-2xl font-semibold text-slate-100 mb-2">
              Sizing (Width & Height)
            </h2>

            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              Tailwind sizing controls the{" "}
              <span className="text-cyan-300">width (w-*)</span> and
              <span className="text-cyan-300"> height (h-*)</span> of elements
              using predefined utilities, fractions, and full control values
              instead of CSS.
            </p>

            <hr className="border-white/10 mb-8" />

            {/* WIDTH */}
            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Width (w-*)
            </p>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {[
                {
                  title: "w-* (fixed sizes)",
                  desc: "Example: w-4, w-10, w-64 → fixed spacing scale widths.",
                  color: "text-cyan-400",
                },
                {
                  title: "w-full",
                  desc: "Makes element take 100% of parent width.",
                  color: "text-indigo-400",
                },
                {
                  title: "w-screen",
                  desc: "Makes element take full viewport width.",
                  color: "text-blue-400",
                },
                {
                  title: "w-auto",
                  desc: "Default width based on content size.",
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

            {/* FRACTIONS */}
            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Fraction Widths
            </p>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {[
                {
                  title: "w-1/2",
                  desc: "50% of parent width.",
                },
                {
                  title: "w-1/3",
                  desc: "33.33% of parent width.",
                },
                {
                  title: "w-2/3",
                  desc: "66.66% of parent width.",
                },
                {
                  title: "w-1/4",
                  desc: "25% of parent width.",
                },
              ].map((c) => (
                <div
                  key={c.title}
                  className="bg-[#0f1117] border border-white/7 rounded-xl p-5"
                >
                  <p className="text-sm font-medium mb-2 text-cyan-400">
                    {c.title}
                  </p>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              ))}
            </div>

            <hr className="border-white/10 mb-8" />

            {/* HEIGHT */}
            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Height (h-*)
            </p>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {[
                {
                  title: "h-*",
                  desc: "Fixed height using spacing scale (h-4, h-20, etc).",
                },
                {
                  title: "h-full",
                  desc: "Takes full height of parent container.",
                },
                {
                  title: "h-screen",
                  desc: "Takes full viewport height (100vh).",
                },
                {
                  title: "h-auto",
                  desc: "Height depends on content size.",
                },
              ].map((c) => (
                <div
                  key={c.title}
                  className="bg-[#0f1117] border border-white/7 rounded-xl p-5"
                >
                  <p className="text-sm font-medium mb-2 text-cyan-400">
                    {c.title}
                  </p>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              ))}
            </div>

            <hr className="border-white/10 mb-8" />

            {/* MIN / MAX */}
            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Min & Max Sizing
            </p>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {[
                {
                  title: "min-w / min-h",
                  desc: "Prevents element from shrinking below a size.",
                },
                {
                  title: "max-w / max-h",
                  desc: "Prevents element from growing beyond limit.",
                },
                {
                  title: "max-w-sm / md / lg",
                  desc: "Predefined max width for responsive design.",
                },
                {
                  title: "max-w-full",
                  desc: "Limits width to parent container.",
                },
              ].map((c) => (
                <div
                  key={c.title}
                  className="bg-[#0f1117] border border-white/7 rounded-xl p-5"
                >
                  <p className="text-sm font-medium mb-2 text-cyan-400">
                    {c.title}
                  </p>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              ))}
            </div>

            <hr className="border-white/10 mb-8" />

            {/* EXAMPLE */}
            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Example
            </p>

            <div className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8">
              <p className="text-cyan-400 mb-2">// Tailwind Example</p>

              <p>
                &lt;div class="
                <span className="text-sky-400">w-1/2 h-40 max-w-md</span>
                "&gt;Box&lt;/div&gt;
              </p>

              <br />

              <p className="text-cyan-400 mb-2">// Meaning</p>

              <p className="text-slate-300 leading-relaxed">
                w-1/2 = takes 50% of parent width
                <br />
                h-40 = fixed height from spacing scale
                <br />
                max-w-md = maximum width of medium size (28rem)
              </p>
            </div>

            {/* TIP */}
            <div className="border-l-4 border-cyan-500 bg-cyan-500/5 rounded-r-lg p-4 text-sm text-cyan-300 leading-relaxed">
              💡 Important rule:
              <br />
              Tailwind sizing is based on a scale system + percentages +
              viewport units, which makes layouts predictable and responsive
              without writing CSS.
            </div>
          </div>

          {/* lesson 7 */}
          <div
            id="borders"
            className="bg-[#161b27] p-10 border border-white/10 rounded-xl w-full max-w-3xl max-sm:px-5"
          >
            <span className="inline-block bg-cyan-500/10 text-cyan-400 text-xs px-4 py-1 rounded-full mb-4">
              Lesson 7
            </span>

            <h2 className="text-2xl font-semibold text-slate-100 mb-6">
              Borders & Outlines (Live Demo)
            </h2>

            {/* BORDER WIDTH LIVE */}
            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Border Width (Live Examples)
            </p>

            <div className="flex flex-col gap-3 mb-8">
              <div className="border p-3 rounded bg-[#0f1117]">
                border (1px default)
              </div>

              <div className="border-2 p-3 rounded bg-[#0f1117]">
                border-2 (thicker)
              </div>

              <div className="border-4 p-3 rounded bg-[#0f1117]">
                border-4 (very thick)
              </div>

              <div className="border-0 p-3 rounded bg-[#0f1117]">
                border-0 (no border)
              </div>
            </div>

            <hr className="border-white/10 mb-8" />

            {/* BORDER COLORS LIVE */}
            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Border Colors (Live)
            </p>

            <div className="flex flex-col gap-3 mb-8">
              <div className="border border-white/20 p-3 rounded bg-[#0f1117]">
                border-white/20
              </div>

              <div className="border border-cyan-500 p-3 rounded bg-[#0f1117]">
                border-cyan-500
              </div>

              <div className="border border-red-500 p-3 rounded bg-[#0f1117]">
                border-red-500
              </div>

              <div className="border border-green-500 p-3 rounded bg-[#0f1117]">
                border-green-500
              </div>
            </div>

            <hr className="border-white/10 mb-8" />

            {/* BORDER RADIUS LIVE */}
            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Border Radius (Live)
            </p>

            <div className="flex flex-col gap-3 mb-8">
              <div className="border p-3 rounded-sm bg-[#0f1117]">
                rounded-sm
              </div>

              <div className="border p-3 rounded-md bg-[#0f1117]">
                rounded-md
              </div>

              <div className="border p-3 rounded-lg bg-[#0f1117]">
                rounded-lg
              </div>

              <div className="border p-3 rounded-full bg-[#0f1117] text-center">
                rounded-full
              </div>
            </div>

            <hr className="border-white/10 mb-8" />

            {/* RING / FOCUS LIVE */}
            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Focus Ring (Try Click 👇)
            </p>

            <div className="flex flex-col gap-3 mb-8">
              <button className="border p-3 rounded bg-[#0f1117] focus:ring-2 focus:ring-cyan-500 outline-none">
                Click me (focus ring)
              </button>

              <button className="border p-3 rounded bg-[#0f1117] focus:ring-4 focus:ring-red-500 outline-none">
                Click me (red ring)
              </button>
            </div>

            {/* TIP */}
            <div className="border-l-4 border-cyan-500 bg-cyan-500/5 rounded-r-lg p-4 text-sm text-cyan-300">
              💡 Focus states help users see which element is currently active.
            </div>
          </div>

          {/* lesson 8 */}
          <div
            id="backgrounds"
            className="bg-[#161b27] p-10 border border-white/10 rounded-xl w-full max-w-3xl max-sm:px-5"
          >
            <span className="inline-block bg-cyan-500/10 text-cyan-400 text-xs px-4 py-1 rounded-full mb-4">
              Lesson 8
            </span>

            <h2 className="text-2xl font-semibold text-slate-100 mb-6">
              Backgrounds
            </h2>

            {/* COLORS */}
            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Background Colors
            </p>

            <div className="flex flex-col gap-3 mb-8">
              <div className="bg-cyan-500 text-black p-3 rounded">
                bg-cyan-500
              </div>

              <div className="bg-indigo-500 text-white p-3 rounded">
                bg-indigo-500
              </div>

              <div className="bg-green-500 text-black p-3 rounded">
                bg-green-500
              </div>

              <div className="bg-red-500 text-white p-3 rounded">
                bg-red-500
              </div>
            </div>

            <hr className="border-white/10 mb-8" />

            {/* OPACITY */}
            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Background Opacity
            </p>

            <div className="flex flex-col gap-3 mb-8">
              <div className="bg-cyan-500/100 p-3 rounded">bg-cyan-500/100</div>

              <div className="bg-cyan-500/50 p-3 rounded">bg-cyan-500/50</div>

              <div className="bg-cyan-500/20 p-3 rounded">bg-cyan-500/20</div>

              <div className="bg-cyan-500/10 p-3 rounded">bg-cyan-500/10</div>
            </div>

            <hr className="border-white/10 mb-8" />

            {/* GRADIENTS */}
            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Gradients
            </p>

            <div className="flex flex-col gap-3 mb-8">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-3 rounded text-black">
                cyan → blue
                <div className="text-xs text-slate-800 mt-1">
                  bg-gradient-to-r from-cyan-500 to-blue-500
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded text-white">
                purple → pink
                <div className="text-xs text-slate-200 mt-1">
                  bg-gradient-to-r from-purple-500 to-pink-500
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500 p-3 rounded text-black">
                multi color gradient
                <div className="text-xs text-slate-800 mt-1">
                  bg-gradient-to-r from-green-400 via-cyan-400 to-blue-500
                </div>
              </div>
            </div>

            <hr className="border-white/10 mb-8" />

            {/* IMAGE */}
            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Background Image
            </p>

            <div className="h-32 bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f')] bg-cover bg-center rounded-lg flex items-center justify-center text-white font-bold">
              bg-cover + bg-center
            </div>

            {/* TIP */}
            <div className="border-l-4 border-cyan-500 bg-cyan-500/5 rounded-r-lg p-4 text-sm text-cyan-300 mt-8">
              💡 Backgrounds define the visual identity of any UI — color,
              depth, and mood all start here.
            </div>
          </div>

          {/* lesson 9 */}
          <div
            id="shadows-opacity"
            className="bg-[#161b27] p-10 border border-white/10 rounded-xl w-full max-w-3xl max-sm:px-5"
          >
            <span className="inline-block bg-cyan-500/10 text-cyan-400 text-xs px-4 py-1 rounded-full mb-4">
              Lesson 9
            </span>

            <h2 className="text-2xl font-semibold text-slate-100 mb-6">
              Shadows & Opacity (Live Effects)
            </h2>

            {/* SHADOWS */}
            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Box Shadows
            </p>

            <div className="flex flex-col gap-4 mb-8">
              <div className="shadow-sm bg-[#0f1117] p-4 rounded">
                shadow-sm
              </div>

              <div className="shadow-md bg-[#0f1117] p-4 rounded">
                shadow-md
              </div>

              <div className="shadow-lg bg-[#0f1117] p-4 rounded">
                shadow-lg
              </div>

              <div className="shadow-xl bg-[#0f1117] p-4 rounded">
                shadow-xl
              </div>
            </div>

            <hr className="border-white/10 mb-8" />

            {/* COLORED SHADOW */}
            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Colored Shadow Effect
            </p>

            <div className="flex flex-col gap-4 mb-8">
              <div className="shadow-lg shadow-cyan-500/30 bg-[#0f1117] p-4 rounded">
                cyan shadow
              </div>

              <div className="shadow-lg shadow-pink-500/30 bg-[#0f1117] p-4 rounded">
                pink shadow
              </div>

              <div className="shadow-lg shadow-green-500/30 bg-[#0f1117] p-4 rounded">
                green shadow
              </div>
            </div>

            <hr className="border-white/10 mb-8" />

            {/* OPACITY */}
            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Opacity (Transparency)
            </p>

            <div className="flex flex-col gap-4 mb-8">
              <div className="bg-cyan-500 opacity-100 p-3 rounded">
                opacity-100
              </div>

              <div className="bg-cyan-500 opacity-70 p-3 rounded">
                opacity-70
              </div>

              <div className="bg-cyan-500 opacity-40 p-3 rounded">
                opacity-40
              </div>

              <div className="bg-cyan-500 opacity-10 p-3 rounded">
                opacity-10
              </div>
            </div>

            {/* TIP */}
            <div className="border-l-4 border-cyan-500 bg-cyan-500/5 rounded-r-lg p-4 text-sm text-cyan-300">
              💡 Shadows add depth, opacity adds layering — together they make
              UI feel modern and realistic.
            </div>
          </div>

          {/* lesson 10 */}
          <div
            id="flexbox"
            className="bg-[#161b27] p-10 border border-white/10 rounded-xl w-full max-w-3xl max-sm:px-5"
          >
            <span className="inline-block bg-cyan-500/10 text-cyan-400 text-xs px-4 py-1 rounded-full mb-4">
              Lesson 10
            </span>

            <h2 className="text-2xl font-semibold text-slate-100 mb-6">
              Flexbox (Live + Code Explanation)
            </h2>

            {/* FLEX ROW */}
            <p className="text-xs text-slate-500 uppercase tracking-widest mb-3">
              flex-row
            </p>

            <div className="border border-white/10 p-3 rounded bg-[#0f1117] mb-2 flex flex-row gap-2">
              <div className="bg-cyan-500 px-3 py-1 rounded">1</div>
              <div className="bg-cyan-500 px-3 py-1 rounded">2</div>
              <div className="bg-cyan-500 px-3 py-1 rounded">3</div>
            </div>

            <p className="text-xs text-slate-500 mb-6">
              className="flex flex-row gap-2" → items are placed horizontally in
              a row
            </p>

            <hr className="border-white/10 mb-8" />

            {/* FLEX COLUMN */}
            <p className="text-xs text-slate-500 uppercase tracking-widest mb-3">
              flex-col
            </p>

            <div className="border border-white/10 p-3 rounded bg-[#0f1117] mb-2 flex flex-col gap-2">
              <div className="bg-indigo-500 px-3 py-1 rounded">1</div>
              <div className="bg-indigo-500 px-3 py-1 rounded">2</div>
              <div className="bg-indigo-500 px-3 py-1 rounded">3</div>
            </div>

            <p className="text-xs text-slate-500 mb-6">
              className="flex flex-col" → items are stacked vertically in a
              column
            </p>

            <hr className="border-white/10 mb-8" />

            {/* JUSTIFY CONTENT */}
            <p className="text-xs text-slate-500 uppercase tracking-widest mb-3">
              justify-center
            </p>

            <div className="border border-white/10 p-3 rounded bg-[#0f1117] mb-2 flex justify-center gap-2">
              <div className="bg-green-500 px-3 py-1 rounded">A</div>
              <div className="bg-green-500 px-3 py-1 rounded">B</div>
            </div>

            <p className="text-xs text-slate-500 mb-6">
              flex + justify-center → centers items horizontally
            </p>

            <hr className="border-white/10 mb-8" />

            {/* SPACE BETWEEN */}
            <p className="text-xs text-slate-500 uppercase tracking-widest mb-3">
              justify-between
            </p>

            <div className="border border-white/10 p-3 rounded bg-[#0f1117] mb-2 flex justify-between">
              <div className="bg-pink-500 px-3 py-1 rounded">A</div>
              <div className="bg-pink-500 px-3 py-1 rounded">B</div>
            </div>

            <p className="text-xs text-slate-500 mb-6">
              justify-between → pushes first item to start and second item to
              end
            </p>

            <hr className="border-white/10 mb-8" />

            {/* ALIGN ITEMS */}
            <p className="text-xs text-slate-500 uppercase tracking-widest mb-3">
              items-center
            </p>

            <div className="border border-white/10 p-3 rounded bg-[#0f1117] flex items-center gap-2 h-24 mb-2">
              <div className="bg-yellow-500 px-3 py-1 rounded">A</div>
              <div className="bg-yellow-500 px-3 py-1 rounded">B</div>
            </div>

            <p className="text-xs text-slate-500 mb-6">
              items-center → vertically centers items inside the container
            </p>

            {/* TIP */}
            <div className="border-l-4 border-cyan-500 bg-cyan-500/5 rounded-r-lg p-4 text-sm text-cyan-300">
              💡 Flexbox is the core system for building layouts in modern web
              design. It controls direction, alignment, and spacing.
            </div>
          </div>

          {/* lesson 11 */}
          <div
            id="grid"
            className="bg-[#161b27] p-10 border border-white/10 rounded-xl w-full max-w-3xl max-sm:px-5"
          >
            <span className="inline-block bg-cyan-500/10 text-cyan-400 text-xs px-4 py-1 rounded-full mb-4">
              Lesson 11
            </span>

            <h2 className="text-2xl font-semibold text-slate-100 mb-6">
              CSS Grid (Live + Code Explanation)
            </h2>

            {/* GRID 3 COLUMNS */}
            <p className="text-xs text-slate-500 uppercase tracking-widest mb-3">
              grid-cols-3
            </p>

            <div className="border border-white/10 p-3 rounded bg-[#0f1117] mb-2 grid grid-cols-3 gap-2">
              <div className="bg-cyan-500 p-2 rounded text-center">1</div>
              <div className="bg-cyan-500 p-2 rounded text-center">2</div>
              <div className="bg-cyan-500 p-2 rounded text-center">3</div>
            </div>

            <p className="text-xs text-slate-400 mb-6">
              className="grid grid-cols-3 gap-2" → creates 3 equal columns with
              spacing
            </p>

            <p className="text-xs text-slate-500 mb-6">
              grid = enable grid layout, grid-cols-3 = 3 columns, gap-2 =
              spacing between items
            </p>

            <hr className="border-white/10 mb-8" />

            {/* GRID 2 COLUMNS */}
            <p className="text-xs text-slate-500 uppercase tracking-widest mb-3">
              grid-cols-2 (auto wrap)
            </p>

            <div className="border border-white/10 p-3 rounded bg-[#0f1117] mb-2 grid grid-cols-2 gap-2">
              <div className="bg-indigo-500 p-2 rounded text-center">A</div>
              <div className="bg-indigo-500 p-2 rounded text-center">B</div>
              <div className="bg-indigo-500 p-2 rounded text-center">C</div>
              <div className="bg-indigo-500 p-2 rounded text-center">D</div>
            </div>

            <p className="text-xs text-slate-400 mb-6">
              className="grid grid-cols-2" → items automatically move to next
              row when space is full
            </p>

            <p className="text-xs text-slate-500 mb-6">
              grid creates rows automatically when items overflow columns
            </p>

            <hr className="border-white/10 mb-8" />

            {/* GRID SPAN */}
            <p className="text-xs text-slate-500 uppercase tracking-widest mb-3">
              col-span example
            </p>

            <div className="border border-white/10 p-3 rounded bg-[#0f1117] mb-2 grid grid-cols-3 gap-2">
              <div className="bg-green-500 p-2 rounded text-center col-span-2">
                span 2 columns
              </div>
              <div className="bg-green-500 p-2 rounded text-center">1</div>
              <div className="bg-green-500 p-2 rounded text-center">2</div>
            </div>

            <p className="text-xs text-slate-400 mb-6">
              className="col-span-2" → element takes 2 columns instead of 1
            </p>

            <p className="text-xs text-slate-500 mb-6">
              col-span-* controls how many columns an item occupies inside the
              grid
            </p>

            <hr className="border-white/10 mb-8" />

            {/* GRID ROWS */}
            <p className="text-xs text-slate-500 uppercase tracking-widest mb-3">
              grid-rows-2
            </p>

            <div className="border border-white/10 p-3 rounded bg-[#0f1117] mb-2 grid grid-rows-2 gap-2 h-32">
              <div className="bg-pink-500 p-2 rounded text-center">Row 1</div>
              <div className="bg-pink-500 p-2 rounded text-center">Row 2</div>
            </div>

            <p className="text-xs text-slate-400 mb-6">
              className="grid grid-rows-2 h-32" → creates 2 fixed rows with
              height control
            </p>

            <p className="text-xs text-slate-500 mb-6">
              grid-rows-* controls vertical layout structure
            </p>

            {/* TIP */}
            <div className="border-l-4 border-cyan-500 bg-cyan-500/5 rounded-r-lg p-4 text-sm text-cyan-300">
              💡 Grid is best for full layouts like dashboards, galleries, and
              structured page sections.
            </div>
          </div>

          {/* lesson 12 */}
          <div
            id="positioning"
            className="bg-[#161b27] p-10 border border-white/10 rounded-xl w-full max-w-3xl max-sm:px-5"
          >
            <span className="inline-block bg-cyan-500/10 text-cyan-400 text-xs px-4 py-1 rounded-full mb-4">
              Lesson 12
            </span>

            <h2 className="text-2xl font-semibold text-slate-100 mb-6">
              Positioning (Live + Code Explanation)
            </h2>

            {/* RELATIVE + ABSOLUTE */}
            <p className="text-xs text-slate-500 uppercase tracking-widest mb-3">
              relative + absolute
            </p>

            <div className="relative border border-white/10 p-6 rounded bg-[#0f1117] mb-2">
              <div className="bg-indigo-500 p-3 rounded w-fit">
                Parent (relative)
              </div>

              <div className="absolute top-2 right-2 bg-cyan-500 text-black px-2 py-1 rounded text-xs">
                Badge
              </div>
            </div>

            <p className="text-xs text-slate-400 mb-6">
              className="relative" → defines positioning context <br />
              className="absolute top-2 right-2" → positions element inside
              parent
            </p>

            <hr className="border-white/10 mb-8" />

            {/* FIXED */}
            <p className="text-xs text-slate-500 uppercase tracking-widest mb-3">
              fixed
            </p>

            <div className="border border-white/10 p-6 rounded bg-[#0f1117] mb-2">

              <p className="text-slate-400">
                Scroll page → this element stays fixed on screen
              </p>
            </div>

            <p className="text-xs text-slate-400 mb-6">
              className="fixed bottom-4 right-4" → sticks element to viewport
            </p>

            <hr className="border-white/10 mb-8" />

            {/* STICKY */}
            <p className="text-xs text-slate-500 uppercase tracking-widest mb-3">
              sticky
            </p>

            <div className="border border-white/10 rounded bg-[#0f1117] mb-2 h-40 overflow-y-auto">
              <div className="sticky top-0 bg-green-500 p-2 text-black">
                Sticky Header
              </div>

              <div className="p-3 text-slate-400 space-y-2">
                <p>Scroll inside this box...</p>
                <p>Content line 1</p>
                <p>Content line 2</p>
                <p>Content line 3</p>
                <p>Content line 4</p>
                <p>Content line 5</p>
                <p>Content line 6</p>
              </div>
            </div>

            <p className="text-xs text-slate-400 mb-6">
              className="sticky top-0" → sticks until parent scroll ends
            </p>

            {/* TIP */}
            <div className="border-l-4 border-cyan-500 bg-cyan-500/5 rounded-r-lg p-4 text-sm text-cyan-300">
              💡 Positioning controls where elements appear: inside layout, on
              screen, or fixed to viewport.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TailWind;
