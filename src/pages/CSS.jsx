import { useEffect, useState, useRef } from "react";
import { Helmet } from "react-helmet";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Top from "../components/Top";

function Css() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [activeLesson, setActiveLesson] = useState("intro");
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        showSidebar &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target)
      ) {
        setShowSidebar(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showSidebar]);

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
    title: "Learn CSS | Learn Web Dev",
    desc: "Learn CSS from scratch: selectors, box model, flexbox, grid, animations, responsive design and more.",
  };

  const lessons = [
    { id: "intro", label: "Introduction to CSS" },
    { id: "syntax", label: "CSS Syntax" },
    { id: "selectors", label: "Selectors" },
    { id: "specificity", label: "Specificity" },
    { id: "box-model", label: "Box Model" },
    { id: "display", label: "Display Property" },
    { id: "positioning", label: "Positioning" },
    { id: "flexbox", label: "Flexbox" },
    { id: "grid", label: "CSS Grid" },
    { id: "colors", label: "Colors" },
    { id: "units", label: "Units (px, %, rem, vh)" },
    { id: "typography", label: "Typography" },
    { id: "responsive", label: "Responsive Design" },
    { id: "media-queries", label: "Media Queries" },
    { id: "pseudo", label: "Pseudo Classes & Elements" },
    { id: "transitions", label: "Transitions" },
    { id: "animations", label: "Animations" },
    { id: "z-index", label: "Z-Index" },
    { id: "css-variables", label: "CSS Variables" },
  ];

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.desc} />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.desc} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://learnwebdev.me/css" />
      </Helmet>

      <h1 className="sr-only">Learn CSS — تعلم CSS </h1>

      <div className="bg-[#0f1117] min-h-screen text-white flex">
        {/* mobile nav */}
        <button
          className="fixed top-24 left-0 bg-blue-400 text-black p-2 rounded-r-xl z-50 sm:hidden"
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

        {/* top button */}
        <Top color="blue" />

        {/* sidebar */}
        <div
          ref={sidebarRef}
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
          <h2 className="text-blue-400 text-xl">CSS Track</h2>

          <div className="flex flex-col gap-2">
            {lessons.map((lesson) => (
              <a
                key={lesson.id}
                href={`#${lesson.id}`}
                onClick={() => setShowSidebar(false)}
                className={`text-sm ${
                  activeLesson === lesson.id
                    ? "text-blue-300 font-medium"
                    : "text-slate-500"
                }`}
              >
                • {lesson.label}
              </a>
            ))}
          </div>
          <div className="flex  gap-5 ">
            <Link
              to="/html"
              aria-label="الدرس السابق"
              className="flex items-center gap-1 text-sm text-slate-500 hover:text-slate-800 transition-colors"
            >
              <ArrowLeft size={16} />
              <span>html</span>
            </Link>
            <Link
              to="/javascript"
              aria-label="الدرس التالي"
              className="flex items-center gap-1 text-sm text-slate-500 hover:text-slate-800 transition-colors"
            >
              <span>javascript</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* content */}
        <div className="flex-1 py-10 px-20 overflow-y-auto justify-center items-center flex flex-col gap-10 max-sm:p-5">
          {/* INTRO */}
          <div
            id="intro"
            className="bg-[#161b27] p-10 border border-white/10 rounded-xl max-w-3xl max-sm:p-5 w-full"
          >
            <span className="text-xs text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full">
              Lesson 1
            </span>

            <h2 className="text-2xl font-semibold mt-3 mb-3">
              Introduction to CSS
            </h2>

            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              CSS (Cascading Style Sheets) is used to style HTML elements. It
              controls layout, colors, spacing, fonts, and responsiveness.
            </p>

            <hr className="border-white/10 mb-6" />

            <h3 className="text-sm text-slate-300 mb-2">
              Why CSS is important?
            </h3>

            <div className="grid grid-cols-2 gap-3">
              {[
                {
                  title: "Design Control",
                  desc: "You control how your website looks (colors, layout, spacing).",
                },
                {
                  title: "Separation of Concerns",
                  desc: "HTML for structure, CSS for style, JS for behavior.",
                },
                {
                  title: "Responsive Design",
                  desc: "Makes websites work on mobile, tablet, and desktop.",
                },
                {
                  title: "Animations",
                  desc: "You can create smooth transitions and animations.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-[#0f1117] p-4 rounded-lg border border-white/10"
                >
                  <p className="text-blue-400 text-sm mb-1">{item.title}</p>
                  <p className="text-xs text-slate-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* SYNTAX */}
          <div
            id="syntax"
            className="bg-[#161b27] p-10 max-sm:p-5 border border-white/10 rounded-xl max-w-3xl w-full"
          >
            <span className="text-xs text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full">
              Lesson 2
            </span>

            <h2 className="text-xl mt-3 mb-3">CSS Syntax</h2>

            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              CSS is written using rules. Each rule is made of a selector and a
              declaration block. The declaration block contains properties and
              values that define how the element looks.
            </p>

            <hr className="border-white/10 mb-6" />

            {/* BASIC STRUCTURE */}
            <h3 className="text-sm text-slate-300 mb-3">Basic Structure</h3>

            <div className="bg-[#0f1117] p-4 font-mono text-sm border border-white/10 rounded-lg mb-6">
              <p className="text-green-400">selector {"{"}</p>
              <p className="pl-4 text-slate-300">property: value;</p>
              <p className="pl-4 text-slate-300">property: value;</p>
              <p className="text-green-400">{"}"}</p>
            </div>

            <p className="text-xs text-slate-500 mb-6">Example:</p>

            <div className="bg-[#0f1117] p-4 font-mono text-sm border border-white/10 rounded-lg mb-6">
              <p className="text-green-400">h1 {"{"}</p>
              <p className="pl-4 text-slate-300">color: blue;</p>
              <p className="pl-4 text-slate-300">font-size: 32px;</p>
              <p className="text-green-400">{"}"}</p>
            </div>

            <hr className="border-white/10 mb-6" />

            {/* PARTS EXPLANATION */}
            <h3 className="text-sm text-slate-300 mb-3">CSS Rule Breakdown</h3>

            <div className="space-y-3 text-sm">
              <div className="bg-[#0f1117] p-4 rounded border border-white/10">
                <p className="text-blue-400">Selector</p>
                <p className="text-slate-500 text-xs mt-1">
                  Targets the HTML element (h1, p, .class, #id)
                </p>
              </div>

              <div className="bg-[#0f1117] p-4 rounded border border-white/10">
                <p className="text-blue-400">Declaration Block</p>
                <p className="text-slate-500 text-xs mt-1">
                  Everything inside {`{ }`}
                </p>
              </div>

              <div className="bg-[#0f1117] p-4 rounded border border-white/10">
                <p className="text-blue-400">Property</p>
                <p className="text-slate-500 text-xs mt-1">
                  What you want to change (color, font-size, margin)
                </p>
              </div>

              <div className="bg-[#0f1117] p-4 rounded border border-white/10">
                <p className="text-blue-400">Value</p>
                <p className="text-slate-500 text-xs mt-1">
                  The setting you apply (red, 20px, center)
                </p>
              </div>
            </div>

            <hr className="border-white/10 my-6" />

            {/* REAL EXAMPLE */}
            <h3 className="text-sm text-slate-300 mb-3">
              Real Example in Website
            </h3>

            <div className="bg-[#0f1117] p-4 font-mono text-sm border border-white/10 rounded-lg">
              <p className="text-green-400">p {"{"}</p>
              <p className="pl-4 text-slate-300">color: gray;</p>
              <p className="pl-4 text-slate-300">font-size: 14px;</p>
              <p className="pl-4 text-slate-300">line-height: 1.5;</p>
              <p className="text-green-400">{"}"}</p>
            </div>

            <div className="mt-6 border-l-4 border-blue-500 bg-blue-500/5 p-4 text-xs text-blue-300">
              💡 CSS rules always end with a semicolon (;) and can contain
              multiple properties inside one block.
            </div>
          </div>

          {/* SELECTORS */}
          <div
            id="selectors"
            className="bg-[#161b27] p-10 max-sm:p-5 border border-white/10 rounded-xl max-w-3xl w-full"
          >
            <span className="text-xs text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full">
              Lesson 3
            </span>

            <h2 className="text-xl mt-3 mb-3">CSS Selectors</h2>

            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              Selectors are patterns used to target HTML elements. They tell CSS
              which elements should be styled.
            </p>

            <hr className="border-white/10 mb-6" />

            {/* TYPES */}
            <h3 className="text-sm text-slate-300 mb-4">Basic Selectors</h3>

            <div className="space-y-3 text-sm">
              <div className="bg-[#0f1117] p-4 rounded border border-white/10">
                <p className="text-blue-400">Element Selector</p>
                <p className="text-slate-500 text-xs mt-1">
                  Targets all elements of the same type.
                </p>
                <div className="mt-2 font-mono text-xs text-slate-300">
                  p {"{ color: red; }"}
                </div>
              </div>

              <div className="bg-[#0f1117] p-4 rounded border border-white/10">
                <p className="text-blue-400">Class Selector</p>
                <p className="text-slate-500 text-xs mt-1">
                  Targets elements with a specific class.
                </p>
                <div className="mt-2 font-mono text-xs text-slate-300">
                  .box {"{ padding: 10px; }"}
                </div>
              </div>

              <div className="bg-[#0f1117] p-4 rounded border border-white/10">
                <p className="text-blue-400">ID Selector</p>
                <p className="text-slate-500 text-xs mt-1">
                  Targets one unique element by ID.
                </p>
                <div className="mt-2 font-mono text-xs text-slate-300">
                  #main {"{ color: blue; }"}
                </div>
              </div>

              <div className="bg-[#0f1117] p-4 rounded border border-white/10">
                <p className="text-blue-400">Universal Selector</p>
                <p className="text-slate-500 text-xs mt-1">
                  Targets all elements in the page.
                </p>
                <div className="mt-2 font-mono text-xs text-slate-300">
                  * {"{ margin: 0; padding: 0; }"}
                </div>
              </div>
            </div>

            <hr className="border-white/10 my-6" />

            {/* ADVANCED */}
            <h3 className="text-sm text-slate-300 mb-4">Advanced Selectors</h3>

            <div className="space-y-3 text-sm">
              <div className="bg-[#0f1117] p-4 rounded border border-white/10">
                <p className="text-purple-400">Group Selector</p>
                <p className="text-slate-500 text-xs mt-1">
                  Apply same styles to multiple elements.
                </p>
                <div className="mt-2 font-mono text-xs text-slate-300">
                  h1, h2, p {"{ color: black; }"}
                </div>
              </div>

              <div className="bg-[#0f1117] p-4 rounded border border-white/10">
                <p className="text-purple-400">Descendant Selector</p>
                <p className="text-slate-500 text-xs mt-1">
                  Targets elements inside another element.
                </p>
                <div className="mt-2 font-mono text-xs text-slate-300">
                  div p {"{ color: gray; }"}
                </div>
              </div>

              <div className="bg-[#0f1117] p-4 rounded border border-white/10">
                <p className="text-purple-400">Child Selector</p>
                <p className="text-slate-500 text-xs mt-1">
                  Targets direct children only.
                </p>
                <div className="mt-2 font-mono text-xs text-slate-300">
                  div &gt; p {"{ color: red; }"}
                </div>
              </div>

              <div className="bg-[#0f1117] p-4 rounded border border-white/10">
                <p className="text-purple-400">Pseudo Selector</p>
                <p className="text-slate-500 text-xs mt-1">
                  Targets states like hover, active, focus.
                </p>
                <div className="mt-2 font-mono text-xs text-slate-300">
                  button:hover {"{ background: blue; }"}
                </div>
              </div>
            </div>

            <hr className="border-white/10 my-6" />

            {/* REAL WORLD */}
            <h3 className="text-sm text-slate-300 mb-3">Real World Example</h3>

            <div className="bg-[#0f1117] p-4 font-mono text-xs border border-white/10 rounded-lg">
              <p className="text-green-400">/* style all buttons */</p>
              <p className="text-slate-300">button {"{"}</p>
              <p className="pl-4 text-slate-300">padding: 10px 20px;</p>
              <p className="pl-4 text-slate-300">border: none;</p>
              <p className="pl-4 text-slate-300">background: black;</p>
              <p className="text-slate-300">{"}"}</p>
            </div>

            <div className="mt-6 border-l-4 border-blue-500 bg-blue-500/5 p-4 text-xs text-blue-300">
              💡 The more specific the selector, the higher priority it gets
              (Specificity concept).
            </div>
          </div>

          {/* SPECIFICITY */}
          <div
            id="specificity"
            className="bg-[#161b27] p-10 max-sm:p-5 border border-white/10 rounded-xl max-w-3xl w-full"
          >
            <span className="text-xs text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full">
              Lesson 4
            </span>

            <h2 className="text-xl mt-3 mb-3">CSS Specificity</h2>

            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              Specificity determines which CSS rule is applied when multiple
              rules target the same element.
            </p>

            <hr className="border-white/10 mb-6" />

            {/* ORDER */}
            <h3 className="text-sm text-slate-300 mb-4">
              Specificity Order (Low → High)
            </h3>

            <div className="space-y-2 text-sm text-slate-300">
              <p>1️⃣ Universal selector (*) → weakest</p>
              <p>2️⃣ Element selector (p, h1, div)</p>
              <p>3️⃣ Class selector (.box, .btn)</p>
              <p>4️⃣ ID selector (#main)</p>
              <p>5️⃣ Inline styles → strongest</p>
            </div>

            <hr className="border-white/10 my-6" />

            {/* EXAMPLE */}
            <h3 className="text-sm text-slate-300 mb-3">Example Conflict</h3>

            <div className="bg-[#0f1117] p-4 font-mono text-xs border border-white/10 rounded-lg">
              <p className="text-green-400">p {"{"}</p>
              <p className="pl-4">color: blue;</p>
              <p className="text-green-400">{"}"}</p>

              <br />

              <p className="text-green-400">.text {"{"}</p>
              <p className="pl-4">color: red;</p>
              <p className="text-green-400">{"}"}</p>

              <br />

              <p className="text-green-400">#title {"{"}</p>
              <p className="pl-4">color: green;</p>
              <p className="text-green-400">{"}"}</p>
            </div>

            <p className="text-xs text-slate-500 mt-3">
              ID wins over class, and class wins over element.
            </p>

            <hr className="border-white/10 my-6" />

            {/* HOW IT WORKS */}
            <h3 className="text-sm text-slate-300 mb-3">How Browser Decides</h3>

            <div className="space-y-2 text-xs text-slate-400">
              <p>🧠 Browser checks specificity score</p>
              <p>🎯 Higher score overrides lower one</p>
              <p>⚠️ If equal → last rule in CSS wins</p>
            </div>

            <hr className="border-white/10 my-6" />

            {/* REAL USE CASE */}
            <h3 className="text-sm text-slate-300 mb-3">
              Real Problem Example
            </h3>

            <div className="bg-[#0f1117] p-4 rounded border border-white/10 text-xs text-slate-400">
              Sometimes your CSS doesn't apply because another rule has higher
              specificity. This is very common in large projects.
            </div>

            <div className="mt-6 border-l-4 border-amber-500 bg-amber-500/5 p-4 text-xs text-amber-300">
              💡 Tip: Avoid overusing ID selectors — prefer classes for scalable
              CSS.
            </div>
          </div>

          {/* BOX MODEL */}
          <div
            id="box-model"
            className="bg-[#161b27] p-10 max-sm:p-5 border border-white/10 rounded-xl max-w-3xl w-full"
          >
            <span className="text-xs text-green-400 bg-green-500/10 px-3 py-1 rounded-full">
              Lesson 5
            </span>

            <h2 className="text-xl mt-3 mb-3">CSS Box Model</h2>

            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              Every element in CSS is treated as a rectangular box. This box
              consists of: content, padding, border, and margin.
            </p>

            <hr className="border-white/10 mb-6" />

            {/* VISUAL ORDER */}
            <h3 className="text-sm text-slate-300 mb-4">Box Structure</h3>

            <div className="bg-[#0f1117] p-4 rounded border border-white/10 font-mono text-sm text-slate-300">
              margin → border → padding → content
            </div>

            <hr className="border-white/10 my-6" />

            {/* PARTS */}
            <h3 className="text-sm text-slate-300 mb-4">Box Components</h3>

            <div className="space-y-3 text-sm">
              <div className="bg-[#0f1117] p-4 rounded border border-white/10">
                <p className="text-blue-400">Content</p>
                <p className="text-slate-500 text-xs mt-1">
                  The actual text, image, or data inside the element.
                </p>
              </div>

              <div className="bg-[#0f1117] p-4 rounded border border-white/10">
                <p className="text-blue-400">Padding</p>
                <p className="text-slate-500 text-xs mt-1">
                  Space between content and border (inside space).
                </p>
                <div className="mt-2 font-mono text-xs text-slate-300">
                  padding: 20px;
                </div>
              </div>

              <div className="bg-[#0f1117] p-4 rounded border border-white/10">
                <p className="text-blue-400">Border</p>
                <p className="text-slate-500 text-xs mt-1">
                  The visible line around padding and content.
                </p>
                <div className="mt-2 font-mono text-xs text-slate-300">
                  border: 2px solid black;
                </div>
              </div>

              <div className="bg-[#0f1117] p-4 rounded border border-white/10">
                <p className="text-blue-400">Margin</p>
                <p className="text-slate-500 text-xs mt-1">
                  Space outside the element (distance from other elements).
                </p>
                <div className="mt-2 font-mono text-xs text-slate-300">
                  margin: 10px;
                </div>
              </div>
            </div>

            <hr className="border-white/10 my-6" />

            {/* EXAMPLE */}
            <h3 className="text-sm text-slate-300 mb-3">Real Example</h3>

            <div className="bg-[#0f1117] p-4 border border-white/10 rounded-lg font-mono text-xs text-slate-300">
              <p className="text-green-400">div {"{"}</p>
              <p className="pl-4">width: 200px;</p>
              <p className="pl-4">padding: 20px;</p>
              <p className="pl-4">border: 5px solid blue;</p>
              <p className="pl-4">margin: 10px;</p>
              <p className="text-green-400">{"}"}</p>
            </div>

            <div className="mt-5 bg-blue-500/5 border-l-4 border-blue-500 p-4 text-xs text-blue-300">
              💡 Total element size = content + padding + border + margin
            </div>

            <hr className="border-white/10 my-6" />

            {/* IMPORTANT NOTE */}
            <h3 className="text-sm text-slate-300 mb-3">Important Tip</h3>

            <div className="text-xs text-slate-400 space-y-2">
              <p>👉 padding affects inner space</p>
              <p>👉 margin affects outer space</p>
              <p>👉 border adds thickness around element</p>
            </div>
          </div>

          {/* DISPLAY */}
          <div
            id="display"
            className="bg-[#161b27] p-10 max-sm:p-5 border border-white/10 rounded-xl max-w-3xl w-full"
          >
            <span className="text-xs text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full">
              Lesson 6
            </span>

            <h2 className="text-xl mt-3 mb-3">CSS Display Property</h2>

            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              The display property controls how an element is rendered on the
              page. It defines whether elements behave like blocks, inline
              elements, or are hidden.
            </p>

            <hr className="border-white/10 mb-6" />

            {/* TYPES */}
            <h3 className="text-sm text-slate-300 mb-4">
              Common Display Values
            </h3>

            <div className="space-y-3 text-sm">
              <div className="bg-[#0f1117] p-4 rounded border border-white/10">
                <p className="text-blue-400">block</p>
                <p className="text-slate-500 text-xs mt-1">
                  Takes full width and starts on a new line.
                </p>
                <div className="mt-2 font-mono text-xs text-slate-300">
                  div, h1, p are block by default
                </div>
              </div>

              <div className="bg-[#0f1117] p-4 rounded border border-white/10">
                <p className="text-blue-400">inline</p>
                <p className="text-slate-500 text-xs mt-1">
                  Takes only needed space and stays in same line.
                </p>
                <div className="mt-2 font-mono text-xs text-slate-300">
                  span, a are inline elements
                </div>
              </div>

              <div className="bg-[#0f1117] p-4 rounded border border-white/10">
                <p className="text-blue-400">inline-block</p>
                <p className="text-slate-500 text-xs mt-1">
                  Inline behavior but allows width & height.
                </p>
                <div className="mt-2 font-mono text-xs text-slate-300">
                  display: inline-block;
                </div>
              </div>

              <div className="bg-[#0f1117] p-4 rounded border border-white/10">
                <p className="text-blue-400">none</p>
                <p className="text-slate-500 text-xs mt-1">
                  Completely removes element from layout.
                </p>
                <div className="mt-2 font-mono text-xs text-slate-300">
                  display: none;
                </div>
              </div>
            </div>

            <hr className="border-white/10 my-6" />

            {/* REAL EXAMPLE */}
            <h3 className="text-sm text-slate-300 mb-3">Real Example</h3>

            <div className="bg-[#0f1117] p-4 font-mono text-xs border border-white/10 rounded-lg">
              <p className="text-green-400">.box {"{"}</p>
              <p className="pl-4">display: block;</p>
              <p className="pl-4">width: 200px;</p>
              <p className="pl-4">height: 100px;</p>
              <p className="pl-4">background: blue;</p>
              <p className="text-green-400">{"}"}</p>
            </div>

            <hr className="border-white/10 my-6" />

            {/* VISUAL IDEA */}
            <h3 className="text-sm text-slate-300 mb-3">How it behaves</h3>

            <div className="space-y-2 text-xs text-slate-400">
              <p>🔹 block → full width (new line)</p>
              <p>🔹 inline → same line (no width/height control)</p>
              <p>🔹 inline-block → same line + sizing control</p>
              <p>🔹 none → element disappears completely</p>
            </div>

            <div className="mt-6 border-l-4 border-purple-500 bg-purple-500/5 p-4 text-xs text-purple-300">
              💡 display: none removes the element completely from layout (not
              just hidden).
            </div>
          </div>

          {/* POSITIONING */}
          <div
            id="positioning"
            className="bg-[#161b27] p-10 max-sm:p-5 border border-white/10 rounded-xl max-w-3xl w-full"
          >
            <span className="text-xs text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full">
              Lesson 7
            </span>

            <h2 className="text-xl mt-3 mb-3">CSS Positioning</h2>

            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              Positioning controls how elements are placed on the page — whether
              they follow normal flow or are manually positioned.
            </p>

            <hr className="border-white/10 mb-6" />

            {/* TYPES */}
            <h3 className="text-sm text-slate-300 mb-4">Position Types</h3>

            <div className="space-y-3 text-sm">
              <div className="bg-[#0f1117] p-4 rounded border border-white/10">
                <p className="text-blue-400">static (default)</p>
                <p className="text-slate-500 text-xs mt-1">
                  Normal flow — no positioning applied.
                </p>
              </div>

              <div className="bg-[#0f1117] p-4 rounded border border-white/10">
                <p className="text-blue-400">relative</p>
                <p className="text-slate-500 text-xs mt-1">
                  Moves element relative to its original position.
                </p>
                <div className="mt-2 font-mono text-xs text-slate-300">
                  top: 10px; left: 20px;
                </div>
              </div>

              <div className="bg-[#0f1117] p-4 rounded border border-white/10">
                <p className="text-blue-400">absolute</p>
                <p className="text-slate-500 text-xs mt-1">
                  Positioned relative to nearest positioned parent.
                </p>
                <div className="mt-2 font-mono text-xs text-slate-300">
                  position: absolute; top: 0; right: 0;
                </div>
              </div>

              <div className="bg-[#0f1117] p-4 rounded border border-white/10">
                <p className="text-blue-400">fixed</p>
                <p className="text-slate-500 text-xs mt-1">
                  Fixed to the viewport (stays on scroll).
                </p>
                <div className="mt-2 font-mono text-xs text-slate-300">
                  position: fixed; bottom: 10px;
                </div>
              </div>

              <div className="bg-[#0f1117] p-4 rounded border border-white/10">
                <p className="text-blue-400">sticky</p>
                <p className="text-slate-500 text-xs mt-1">
                  Acts like relative until scroll reaches a point, then sticks.
                </p>
                <div className="mt-2 font-mono text-xs text-slate-300">
                  position: sticky; top: 0;
                </div>
              </div>
            </div>

            <hr className="border-white/10 my-6" />

            {/* EXAMPLE */}
            <h3 className="text-sm text-slate-300 mb-3">Real Example</h3>

            <div className="bg-[#0f1117] p-4 font-mono text-xs border border-white/10 rounded-lg">
              <p className="text-green-400">.parent {"{"}</p>
              <p className="pl-4">position: relative;</p>
              <p className="text-green-400">{"}"}</p>

              <br />

              <p className="text-green-400">.child {"{"}</p>
              <p className="pl-4">position: absolute;</p>
              <p className="pl-4">top: 10px;</p>
              <p className="pl-4">right: 10px;</p>
              <p className="text-green-400">{"}"}</p>
            </div>

            <hr className="border-white/10 my-6" />

            {/* REAL USE CASES */}
            <h3 className="text-sm text-slate-300 mb-3">Real Use Cases</h3>

            <div className="space-y-2 text-xs text-slate-400">
              <p>📌 Sticky navbar</p>
              <p>🪟 Modals & popups</p>
              <p>🎯 Dropdown menus</p>
              <p>🏷️ Badges on cards</p>
            </div>

            <div className="mt-6 border-l-4 border-emerald-500 bg-emerald-500/5 p-4 text-xs text-emerald-300">
              💡 Tip: absolute always depends on the nearest relative parent.
            </div>
          </div>

          {/* FLEXBOX */}
          <div
            id="flexbox"
            className="bg-[#161b27] p-10 max-sm:p-5 border border-white/10 rounded-xl max-w-3xl w-full"
          >
            <span className="text-xs text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full">
              Lesson 8
            </span>

            <h2 className="text-xl mt-3 mb-3">CSS Flexbox</h2>

            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              Flexbox is a layout system used to arrange items in one dimension
              (row or column). It makes alignment and spacing much easier.
            </p>

            <hr className="border-white/10 mb-6" />

            {/* MAIN IDEA */}
            <h3 className="text-sm text-slate-300 mb-4">Main Concept</h3>

            <div className="bg-[#0f1117] p-4 rounded border border-white/10 font-mono text-sm text-slate-300">
              display: flex;
            </div>

            <p className="text-xs text-slate-500 mt-3 mb-6">
              Once you set display: flex, the container becomes a flex
              container.
            </p>

            <hr className="border-white/10 mb-6" />

            {/* MAIN PROPERTIES */}
            <h3 className="text-sm text-slate-300 mb-4">Main Properties</h3>

            <div className="space-y-3 text-sm">
              <div className="bg-[#0f1117] p-4 rounded border border-white/10">
                <p className="text-blue-400">justify-content (X-axis)</p>
                <p className="text-slate-500 text-xs mt-1">
                  Controls horizontal alignment of items.
                </p>
                <div className="mt-2 font-mono text-xs text-slate-300">
                  center | space-between | space-around | flex-start | flex-end
                </div>
              </div>

              <div className="bg-[#0f1117] p-4 rounded border border-white/10">
                <p className="text-blue-400">align-items (Y-axis)</p>
                <p className="text-slate-500 text-xs mt-1">
                  Controls vertical alignment of items.
                </p>
                <div className="mt-2 font-mono text-xs text-slate-300">
                  center | flex-start | flex-end | stretch
                </div>
              </div>

              <div className="bg-[#0f1117] p-4 rounded border border-white/10">
                <p className="text-blue-400">flex-direction</p>
                <p className="text-slate-500 text-xs mt-1">
                  Defines direction of items.
                </p>
                <div className="mt-2 font-mono text-xs text-slate-300">
                  row | column | row-reverse | column-reverse
                </div>
              </div>

              <div className="bg-[#0f1117] p-4 rounded border border-white/10">
                <p className="text-blue-400">gap</p>
                <p className="text-slate-500 text-xs mt-1">
                  Space between items without margin hacks.
                </p>
                <div className="mt-2 font-mono text-xs text-slate-300">
                  gap: 10px;
                </div>
              </div>
            </div>

            <hr className="border-white/10 my-6" />

            {/* REAL EXAMPLE */}
            <h3 className="text-sm text-slate-300 mb-3">Real Example</h3>

            <div className="bg-[#0f1117] p-4 font-mono text-xs border border-white/10 rounded-lg">
              <p className="text-green-400">.container {"{"}</p>
              <p className="pl-4">display: flex;</p>
              <p className="pl-4">justify-content: center;</p>
              <p className="pl-4">align-items: center;</p>
              <p className="pl-4">gap: 10px;</p>
              <p className="text-green-400">{"}"}</p>
            </div>

            <hr className="border-white/10 my-6" />

            {/* VISUAL IDEA */}
            <h3 className="text-sm text-slate-300 mb-3">How Flexbox Works</h3>

            <div className="flex gap-2 bg-[#0f1117] p-4 rounded border border-white/10">
              <div className="bg-cyan-500/20 p-2 rounded text-xs">Item 1</div>
              <div className="bg-cyan-500/20 p-2 rounded text-xs">Item 2</div>
              <div className="bg-cyan-500/20 p-2 rounded text-xs">Item 3</div>
            </div>

            <div className="mt-6 border-l-4 border-cyan-500 bg-cyan-500/5 p-4 text-xs text-cyan-300">
              💡 Flexbox is best for navigation bars, centering elements, and
              small layouts.
            </div>
          </div>

          {/* GRID */}
          <div
            id="grid"
            className="bg-[#161b27] p-10 max-sm:p-5 border border-white/10 rounded-xl max-w-3xl w-full"
          >
            <span className="text-xs text-pink-400 bg-pink-500/10 px-3 py-1 rounded-full">
              Lesson 9
            </span>

            <h2 className="text-xl mt-3 mb-3">CSS Grid</h2>

            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              CSS Grid is a 2D layout system used to create rows and columns at
              the same time. It is more powerful than Flexbox for full page
              layouts.
            </p>

            <hr className="border-white/10 mb-6" />

            {/* MAIN IDEA */}
            <h3 className="text-sm text-slate-300 mb-4">Main Concept</h3>

            <div className="bg-[#0f1117] p-4 rounded border border-white/10 font-mono text-sm text-slate-300">
              display: grid;
            </div>

            <p className="text-xs text-slate-500 mt-3 mb-6">
              Grid turns a container into a grid system (rows + columns).
            </p>

            <hr className="border-white/10 mb-6" />

            {/* CORE PROPERTIES */}
            <h3 className="text-sm text-slate-300 mb-4">Core Properties</h3>

            <div className="space-y-3 text-sm">
              <div className="bg-[#0f1117] p-4 rounded border border-white/10">
                <p className="text-blue-400">grid-template-columns</p>
                <p className="text-slate-500 text-xs mt-1">
                  Defines number and size of columns.
                </p>
                <div className="mt-2 font-mono text-xs text-slate-300">
                  grid-template-columns: 1fr 1fr 1fr;
                </div>
              </div>

              <div className="bg-[#0f1117] p-4 rounded border border-white/10">
                <p className="text-blue-400">grid-template-rows</p>
                <p className="text-slate-500 text-xs mt-1">
                  Defines number and size of rows.
                </p>
                <div className="mt-2 font-mono text-xs text-slate-300">
                  grid-template-rows: auto auto;
                </div>
              </div>

              <div className="bg-[#0f1117] p-4 rounded border border-white/10">
                <p className="text-blue-400">gap</p>
                <p className="text-slate-500 text-xs mt-1">
                  Space between grid items.
                </p>
                <div className="mt-2 font-mono text-xs text-slate-300">
                  gap: 10px;
                </div>
              </div>

              <div className="bg-[#0f1117] p-4 rounded border border-white/10">
                <p className="text-blue-400">fr unit</p>
                <p className="text-slate-500 text-xs mt-1">
                  Fractional unit used to divide available space.
                </p>
                <div className="mt-2 font-mono text-xs text-slate-300">
                  1fr = 1 fraction of space
                </div>
              </div>
            </div>

            <hr className="border-white/10 my-6" />

            {/* REAL EXAMPLE */}
            <h3 className="text-sm text-slate-300 mb-3">Real Example</h3>

            <div className="bg-[#0f1117] p-4 font-mono text-xs border border-white/10 rounded-lg">
              <p className="text-green-400">.container {"{"}</p>
              <p className="pl-4">display: grid;</p>
              <p className="pl-4">grid-template-columns: 1fr 1fr 1fr;</p>
              <p className="pl-4">gap: 10px;</p>
              <p className="text-green-400">{"}"}</p>
            </div>

            <hr className="border-white/10 my-6" />

            {/* VISUAL */}
            <h3 className="text-sm text-slate-300 mb-3">Visual Example</h3>

            <div className="grid grid-cols-3 gap-2 bg-[#0f1117] p-4 rounded border border-white/10">
              <div className="bg-pink-500/20 p-2 rounded text-xs text-center">
                1
              </div>
              <div className="bg-pink-500/20 p-2 rounded text-xs text-center">
                2
              </div>
              <div className="bg-pink-500/20 p-2 rounded text-xs text-center">
                3
              </div>
              <div className="bg-pink-500/20 p-2 rounded text-xs text-center">
                4
              </div>
              <div className="bg-pink-500/20 p-2 rounded text-xs text-center">
                5
              </div>
              <div className="bg-pink-500/20 p-2 rounded text-xs text-center">
                6
              </div>
            </div>

            <div className="mt-6 border-l-4 border-pink-500 bg-pink-500/5 p-4 text-xs text-pink-300">
              💡 Grid is best for full page layouts like dashboards, galleries,
              and websites structure.
            </div>
          </div>

          {/* COLORS */}
          <div
            id="colors"
            className="bg-[#161b27] p-10 max-sm:p-5 border border-white/10 rounded-xl max-w-3xl w-full"
          >
            <span className="text-xs text-yellow-400 bg-yellow-500/10 px-3 py-1 rounded-full">
              Lesson 10
            </span>

            <h2 className="text-xl mt-3 mb-3">CSS Colors</h2>

            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              CSS provides multiple ways to define colors for text, backgrounds,
              borders, and more.
            </p>

            <hr className="border-white/10 mb-6" />

            {/* TYPES */}
            <h3 className="text-sm text-slate-300 mb-4">Color Formats</h3>

            <div className="space-y-3 text-sm">
              <div className="bg-[#0f1117] p-4 rounded border border-white/10">
                <p className="text-blue-400">Named Colors</p>
                <p className="text-slate-500 text-xs mt-1">
                  Simple color names like red, blue, green.
                </p>
                <div className="mt-2 font-mono text-xs text-slate-300">
                  color: red;
                </div>
              </div>

              <div className="bg-[#0f1117] p-4 rounded border border-white/10">
                <p className="text-blue-400">Hex Colors</p>
                <p className="text-slate-500 text-xs mt-1">
                  Most common format using #RRGGBB.
                </p>
                <div className="mt-2 font-mono text-xs text-slate-300">
                  color: #ff0000;
                </div>
              </div>

              <div className="bg-[#0f1117] p-4 rounded border border-white/10">
                <p className="text-blue-400">RGB Colors</p>
                <p className="text-slate-500 text-xs mt-1">
                  Red, Green, Blue values (0–255).
                </p>
                <div className="mt-2 font-mono text-xs text-slate-300">
                  color: rgb(255, 0, 0);
                </div>
              </div>

              <div className="bg-[#0f1117] p-4 rounded border border-white/10">
                <p className="text-blue-400">RGBA Colors</p>
                <p className="text-slate-500 text-xs mt-1">
                  RGB + Alpha (opacity).
                </p>
                <div className="mt-2 font-mono text-xs text-slate-300">
                  color: rgba(255, 0, 0, 0.5);
                </div>
              </div>

              <div className="bg-[#0f1117] p-4 rounded border border-white/10">
                <p className="text-blue-400">HSL Colors</p>
                <p className="text-slate-500 text-xs mt-1">
                  Hue, Saturation, Lightness (more human-friendly).
                </p>
                <div className="mt-2 font-mono text-xs text-slate-300">
                  color: hsl(0, 100%, 50%);
                </div>
              </div>
            </div>

            <hr className="border-white/10 my-6" />

            {/* REAL EXAMPLES */}
            <h3 className="text-sm text-slate-300 mb-3">Real Examples</h3>

            <div className="bg-[#0f1117] p-4 font-mono text-xs border border-white/10 rounded-lg space-y-2">
              <p className="text-green-400">h1 {"{"}</p>
              <p className="pl-4">color: #ff5733;</p>
              <p className="pl-4">background: rgba(0,0,0,0.1);</p>
              <p className="text-green-400">{"}"}</p>
            </div>

            <hr className="border-white/10 my-6" />

            {/* USE CASES */}
            <h3 className="text-sm text-slate-300 mb-3">
              Where Colors Are Used
            </h3>

            <div className="space-y-2 text-xs text-slate-400">
              <p>🎨 Text color → color</p>
              <p>🎨 Background → background-color</p>
              <p>🎨 Borders → border-color</p>
              <p>🎨 Shadows → box-shadow</p>
            </div>

            <div className="mt-6 border-l-4 border-yellow-500 bg-yellow-500/5 p-4 text-xs text-yellow-300">
              💡 Tip: Use RGBA or HSL when you need transparency or better
              control over shades.
            </div>
          </div>

          {/* UNITS */}
          <div
            id="units"
            className="bg-[#161b27] p-10 max-sm:p-5 border border-white/10 rounded-xl max-w-3xl w-full"
          >
            <span className="text-xs text-green-400 bg-green-500/10 px-3 py-1 rounded-full">
              Lesson 11
            </span>

            <h2 className="text-xl mt-3 mb-3">CSS Units</h2>

            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              CSS units define the size of elements like width, height, padding,
              and font-size. There are absolute and relative units.
            </p>

            <hr className="border-white/10 mb-6" />

            {/* TYPES */}
            <h3 className="text-sm text-slate-300 mb-4">Absolute Units</h3>

            <div className="space-y-3 text-sm mb-6">
              <div className="bg-[#0f1117] p-4 rounded border border-white/10">
                <p className="text-blue-400">px (Pixels)</p>
                <p className="text-slate-500 text-xs mt-1">
                  Fixed size, most commonly used unit.
                </p>
                <div className="mt-2 font-mono text-xs text-slate-300">
                  font-size: 16px;
                </div>
              </div>
            </div>

            {/* RELATIVE UNITS */}
            <h3 className="text-sm text-slate-300 mb-4">Relative Units</h3>

            <div className="space-y-3 text-sm">
              <div className="bg-[#0f1117] p-4 rounded border border-white/10">
                <p className="text-blue-400">%</p>
                <p className="text-slate-500 text-xs mt-1">
                  Relative to parent element size.
                </p>
                <div className="mt-2 font-mono text-xs text-slate-300">
                  width: 50%;
                </div>
              </div>

              <div className="bg-[#0f1117] p-4 rounded border border-white/10">
                <p className="text-blue-400">rem</p>
                <p className="text-slate-500 text-xs mt-1">
                  Relative to root font-size (html).
                </p>
                <div className="mt-2 font-mono text-xs text-slate-300">
                  font-size: 1.5rem;
                </div>
              </div>

              <div className="bg-[#0f1117] p-4 rounded border border-white/10">
                <p className="text-blue-400">em</p>
                <p className="text-slate-500 text-xs mt-1">
                  Relative to parent font-size.
                </p>
                <div className="mt-2 font-mono text-xs text-slate-300">
                  padding: 2em;
                </div>
              </div>

              <div className="bg-[#0f1117] p-4 rounded border border-white/10">
                <p className="text-blue-400">vh / vw</p>
                <p className="text-slate-500 text-xs mt-1">
                  Relative to viewport height and width.
                </p>
                <div className="mt-2 font-mono text-xs text-slate-300">
                  height: 100vh;
                </div>
              </div>
            </div>

            <hr className="border-white/10 my-6" />

            {/* REAL EXAMPLE */}
            <h3 className="text-sm text-slate-300 mb-3">Real Example</h3>

            <div className="bg-[#0f1117] p-4 font-mono text-xs border border-white/10 rounded-lg">
              <p className="text-green-400">.box {"{"}</p>
              <p className="pl-4">width: 50%;</p>
              <p className="pl-4">padding: 2rem;</p>
              <p className="pl-4">font-size: 1.2rem;</p>
              <p className="pl-4">height: 100vh;</p>
              <p className="text-green-400">{"}"}</p>
            </div>

            <hr className="border-white/10 my-6" />

            {/* COMPARISON */}
            <h3 className="text-sm text-slate-300 mb-3">px vs rem vs %</h3>

            <div className="space-y-2 text-xs text-slate-400">
              <p>🔹 px → fixed size (does not scale)</p>
              <p>🔹 rem → scalable (best for responsive design)</p>
              <p>🔹 % → depends on parent element</p>
              <p>🔹 vh/vw → depends on screen size</p>
            </div>

            <div className="mt-6 border-l-4 border-green-500 bg-green-500/5 p-4 text-xs text-green-300">
              💡 Pro Tip: Use rem for fonts and spacing to make your design
              scalable across all devices.
            </div>
          </div>

          {/* TYPOGRAPHY */}
          <div
            id="typography"
            className="bg-[#161b27] p-10 border border-white/10 rounded-xl max-w-3xl w-full max-sm:p-5"
          >
            <span className="text-xs text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full">
              Lesson 12
            </span>

            <h2 className="text-xl mt-3 mb-3">CSS Typography</h2>

            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              Typography controls how text looks on a website — including font,
              size, spacing, alignment, and readability.
            </p>

            <hr className="border-white/10 mb-6" />

            {/* MAIN PROPERTIES */}
            <h3 className="text-sm text-slate-300 mb-4">
              Main Typography Properties
            </h3>

            <div className="space-y-3 text-sm">
              <div className="bg-[#0f1117] p-4 rounded border border-white/10">
                <p className="text-blue-400">font-size</p>
                <p className="text-slate-500 text-xs mt-1">
                  Controls the size of the text.
                </p>
                <div className="mt-2 font-mono text-xs text-slate-300">
                  font-size: 16px;
                </div>
              </div>

              <div className="bg-[#0f1117] p-4 rounded border border-white/10">
                <p className="text-blue-400">font-weight</p>
                <p className="text-slate-500 text-xs mt-1">
                  Controls how bold the text is.
                </p>
                <div className="mt-2 font-mono text-xs text-slate-300">
                  font-weight: 400 | 700 | bold;
                </div>
              </div>

              <div className="bg-[#0f1117] p-4 rounded border border-white/10">
                <p className="text-blue-400">line-height</p>
                <p className="text-slate-500 text-xs mt-1">
                  Controls space between lines.
                </p>
                <div className="mt-2 font-mono text-xs text-slate-300">
                  line-height: 1.5;
                </div>
              </div>

              <div className="bg-[#0f1117] p-4 rounded border border-white/10">
                <p className="text-blue-400">letter-spacing</p>
                <p className="text-slate-500 text-xs mt-1">
                  Controls space between letters.
                </p>
                <div className="mt-2 font-mono text-xs text-slate-300">
                  letter-spacing: 2px;
                </div>
              </div>

              <div className="bg-[#0f1117] p-4 rounded border border-white/10">
                <p className="text-blue-400">text-align</p>
                <p className="text-slate-500 text-xs mt-1">
                  Aligns text (left, center, right).
                </p>
                <div className="mt-2 font-mono text-xs text-slate-300">
                  text-align: center;
                </div>
              </div>
            </div>

            <hr className="border-white/10 my-6" />

            {/* FONT FAMILY */}
            <h3 className="text-sm text-slate-300 mb-3">Font Family</h3>

            <div className="bg-[#0f1117] p-4 rounded border border-white/10 font-mono text-xs text-slate-300">
              font-family: Arial, Helvetica, sans-serif;
            </div>

            <p className="text-xs text-slate-500 mt-3 mb-6">
              You can use system fonts or Google Fonts.
            </p>

            <hr className="border-white/10 mb-6" />

            {/* REAL EXAMPLE */}
            <h3 className="text-sm text-slate-300 mb-3">Real Example</h3>

            <div className="bg-[#0f1117] p-4 font-mono text-xs border border-white/10 rounded-lg">
              <p className="text-green-400">p {"{"}</p>
              <p className="pl-4">font-size: 16px;</p>
              <p className="pl-4">font-weight: 400;</p>
              <p className="pl-4">line-height: 1.6;</p>
              <p className="pl-4">letter-spacing: 0.5px;</p>
              <p className="text-green-400">{"}"}</p>
            </div>

            <hr className="border-white/10 my-6" />

            {/* IMPORTANCE */}
            <h3 className="text-sm text-slate-300 mb-3">
              Why Typography Matters
            </h3>

            <div className="space-y-2 text-xs text-slate-400">
              <p>📖 Improves readability</p>
              <p>🎯 Creates visual hierarchy</p>
              <p>🧠 Makes content easier to scan</p>
              <p>🎨 Improves UI/UX design quality</p>
            </div>

            <div className="mt-6 border-l-4 border-indigo-500 bg-indigo-500/5 p-4 text-xs text-indigo-300">
              💡 Good typography = 50% of good UI design.
            </div>
          </div>

          {/* RESPONSIVE DESIGN */}
          <div
            id="responsive"
            className="bg-[#161b27] p-10 border border-white/10 rounded-xl max-w-3xl w-full max-sm:p-5"
          >
            <span className="text-xs text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full">
              Lesson 13
            </span>

            <h2 className="text-xl mt-3 mb-3">Responsive Design</h2>

            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              Responsive Design means making websites adapt to all screen sizes
              (mobile, tablet, desktop) without breaking layout.
            </p>

            <hr className="border-white/10 mb-6" />

            {/* CORE IDEA */}
            <h3 className="text-sm text-slate-300 mb-4">Core Idea</h3>

            <div className="bg-[#0f1117] p-4 rounded border border-white/10 text-sm text-slate-300 font-mono">
              One website → many screen sizes
            </div>

            <hr className="border-white/10 my-6" />

            {/* METHODS */}
            <h3 className="text-sm text-slate-300 mb-4">
              How to make a site responsive
            </h3>

            <div className="space-y-3 text-sm">
              <div className="bg-[#0f1117] p-4 rounded border border-white/10">
                <p className="text-blue-400">Flexible Units</p>
                <p className="text-slate-500 text-xs mt-1">
                  Use %, rem, vh instead of fixed px.
                </p>
                <div className="mt-2 font-mono text-xs text-slate-300">
                  width: 100%; font-size: 1rem;
                </div>
              </div>

              <div className="bg-[#0f1117] p-4 rounded border border-white/10">
                <p className="text-blue-400">Flexbox & Grid</p>
                <p className="text-slate-500 text-xs mt-1">
                  Use layout systems that adapt automatically.
                </p>
                <div className="mt-2 font-mono text-xs text-slate-300">
                  display: flex;
                </div>
              </div>

              <div className="bg-[#0f1117] p-4 rounded border border-white/10">
                <p className="text-blue-400">Media Queries</p>
                <p className="text-slate-500 text-xs mt-1">
                  Apply styles based on screen size.
                </p>
                <div className="mt-2 font-mono text-xs text-slate-300">
                  @media (max-width: 768px)
                </div>
              </div>
            </div>

            <hr className="border-white/10 my-6" />

            {/* MEDIA QUERY EXAMPLE */}
            <h3 className="text-sm text-slate-300 mb-3">Media Query Example</h3>

            <div className="bg-[#0f1117] p-4 font-mono text-xs border border-white/10 rounded-lg">
              <p className="text-green-400">/* Desktop */</p>
              <p className="text-slate-300">.box {"{"}</p>
              <p className="pl-4">width: 500px;</p>
              <p className="text-slate-300">{"}"}</p>

              <br />

              <p className="text-green-400">/* Mobile */</p>
              <p className="text-slate-300">@media (max-width: 768px) {"{"}</p>
              <p className="pl-4">.box {"{"}</p>
              <p className="pl-8">width: 100%;</p>
              <p className="pl-4">{"}"}</p>
              <p className="text-slate-300">{"}"}</p>
            </div>

            <hr className="border-white/10 my-6" />

            {/* BREAKPOINTS */}
            <h3 className="text-sm text-slate-300 mb-3">Common Breakpoints</h3>

            <div className="space-y-2 text-xs text-slate-400">
              <p>📱 Mobile → max-width: 480px</p>
              <p>📟 Tablet → max-width: 768px</p>
              <p>💻 Laptop → max-width: 1024px</p>
              <p>🖥️ Desktop → 1200px+</p>
            </div>

            <hr className="border-white/10 my-6" />

            {/* REAL EXAMPLE */}
            <h3 className="text-sm text-slate-300 mb-3">Real World Example</h3>

            <div className="bg-[#0f1117] p-4 rounded border border-white/10 text-sm text-slate-300">
              A navbar becomes a hamburger menu on mobile screens.
            </div>

            <div className="mt-6 border-l-4 border-emerald-500 bg-emerald-500/5 p-4 text-xs text-emerald-300">
              💡 Mobile-first design is the modern standard: design for mobile
              first, then scale up.
            </div>
          </div>

          {/* MEDIA QUERIES */}
          <div
            id="media-queries"
            className="bg-[#161b27] p-10 border border-white/10 rounded-xl max-w-3xl w-full max-sm:p-5"
          >
            <span className="text-xs text-sky-400 bg-sky-500/10 px-3 py-1 rounded-full">
              Lesson 14
            </span>

            <h2 className="text-xl mt-3 mb-3">CSS Media Queries</h2>

            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              Media Queries allow you to apply different CSS styles depending on
              screen size, device type, or resolution.
            </p>

            <hr className="border-white/10 mb-6" />

            {/* CORE IDEA */}
            <h3 className="text-sm text-slate-300 mb-4">Core Syntax</h3>

            <div className="bg-[#0f1117] p-4 rounded border border-white/10 font-mono text-xs text-slate-300">
              @media (condition) {"{"}
              <br />
              &nbsp;&nbsp;/* CSS rules */
              <br />
              {"}"}
            </div>

            <hr className="border-white/10 my-6" />

            {/* TYPES */}
            <h3 className="text-sm text-slate-300 mb-4">Common Conditions</h3>

            <div className="space-y-3 text-sm">
              <div className="bg-[#0f1117] p-4 rounded border border-white/10">
                <p className="text-blue-400">max-width</p>
                <p className="text-slate-500 text-xs mt-1">
                  Applies styles when screen is smaller than a value.
                </p>
                <div className="mt-2 font-mono text-xs text-slate-300">
                  @media (max-width: 768px)
                </div>
              </div>

              <div className="bg-[#0f1117] p-4 rounded border border-white/10">
                <p className="text-blue-400">min-width</p>
                <p className="text-slate-500 text-xs mt-1">
                  Applies styles when screen is larger than a value.
                </p>
                <div className="mt-2 font-mono text-xs text-slate-300">
                  @media (min-width: 1024px)
                </div>
              </div>

              <div className="bg-[#0f1117] p-4 rounded border border-white/10">
                <p className="text-blue-400">orientation</p>
                <p className="text-slate-500 text-xs mt-1">
                  Targets portrait or landscape mode.
                </p>
                <div className="mt-2 font-mono text-xs text-slate-300">
                  @media (orientation: landscape)
                </div>
              </div>
            </div>

            <hr className="border-white/10 my-6" />

            {/* EXAMPLE */}
            <h3 className="text-sm text-slate-300 mb-3">Practical Example</h3>

            <div className="bg-[#0f1117] p-4 font-mono text-xs border border-white/10 rounded-lg">
              <p className="text-green-400">/* Default (Desktop) */</p>
              <p>.container {"{"}</p>
              <p className="pl-4">display: flex;</p>
              <p>{"}"}</p>

              <br />

              <p className="text-green-400">/* Mobile */</p>
              <p>@media (max-width: 768px) {"{"}</p>
              <p className="pl-4">.container {"{"}</p>
              <p className="pl-8">flex-direction: column;</p>
              <p className="pl-4">{"}"}</p>
              <p>{"}"}</p>
            </div>

            <hr className="border-white/10 my-6" />

            {/* REAL USE CASE */}
            <h3 className="text-sm text-slate-300 mb-3">Real Use Case</h3>

            <div className="bg-[#0f1117] p-4 rounded border border-white/10 text-xs text-slate-400">
              Navigation bar switches into hamburger menu on mobile screens
              using media queries.
            </div>

            <hr className="border-white/10 my-6" />

            {/* BREAKPOINTS */}
            <h3 className="text-sm text-slate-300 mb-3">
              Standard Breakpoints
            </h3>

            <div className="space-y-2 text-xs text-slate-400">
              <p>📱 Mobile → 480px</p>
              <p>📟 Tablet → 768px</p>
              <p>💻 Laptop → 1024px</p>
              <p>🖥️ Desktop → 1200px+</p>
            </div>

            <div className="mt-6 border-l-4 border-sky-500 bg-sky-500/5 p-4 text-xs text-sky-300">
              💡 Tip: Always design mobile-first → then scale up using min-width
              media queries.
            </div>
          </div>

          {/* PSEUDO CLASSES & ELEMENTS */}
          <div
            id="pseudo"
            className="bg-[#161b27] p-10 border border-white/10 rounded-xl max-w-3xl w-full max-sm:p-5"
          >
            <span className="text-xs text-fuchsia-400 bg-fuchsia-500/10 px-3 py-1 rounded-full">
              Lesson 15
            </span>

            <h2 className="text-xl mt-3 mb-3">Pseudo Classes & Elements</h2>

            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              Pseudo classes and pseudo elements are used to style elements
              based on their state or to style specific parts of an element.
            </p>

            <hr className="border-white/10 mb-6" />

            {/* PSEUDO CLASSES */}
            <h3 className="text-sm text-slate-300 mb-4">Pseudo Classes</h3>

            <div className="space-y-3 text-sm">
              <div className="bg-[#0f1117] p-4 rounded border border-white/10">
                <p className="text-blue-400">:hover</p>
                <p className="text-slate-500 text-xs mt-1">
                  Applies style when user hovers over an element.
                </p>
                <div className="mt-2 font-mono text-xs text-slate-300">
                  button:hover {"{ background: blue; }"}
                </div>
              </div>

              <div className="bg-[#0f1117] p-4 rounded border border-white/10">
                <p className="text-blue-400">:active</p>
                <p className="text-slate-500 text-xs mt-1">
                  Applies when element is being clicked.
                </p>
                <div className="mt-2 font-mono text-xs text-slate-300">
                  button:active {"{ transform: scale(0.95); }"}
                </div>
              </div>

              <div className="bg-[#0f1117] p-4 rounded border border-white/10">
                <p className="text-blue-400">:focus</p>
                <p className="text-slate-500 text-xs mt-1">
                  Applies when input or element is focused.
                </p>
                <div className="mt-2 font-mono text-xs text-slate-300">
                  input:focus {"{ border: 2px solid blue; }"}
                </div>
              </div>

              <div className="bg-[#0f1117] p-4 rounded border border-white/10">
                <p className="text-blue-400">:nth-child()</p>
                <p className="text-slate-500 text-xs mt-1">
                  Targets specific child elements.
                </p>
                <div className="mt-2 font-mono text-xs text-slate-300">
                  li:nth-child(2) {"{ color: red; }"}
                </div>
              </div>
            </div>

            <hr className="border-white/10 my-6" />

            {/* PSEUDO ELEMENTS */}
            <h3 className="text-sm text-slate-300 mb-4">Pseudo Elements</h3>

            <div className="space-y-3 text-sm">
              <div className="bg-[#0f1117] p-4 rounded border border-white/10">
                <p className="text-purple-400">::before</p>
                <p className="text-slate-500 text-xs mt-1">
                  Adds content before an element.
                </p>
                <div className="mt-2 font-mono text-xs text-slate-300">
                  p::before {"{ content: '🔥'; }"}
                </div>
              </div>

              <div className="bg-[#0f1117] p-4 rounded border border-white/10">
                <p className="text-purple-400">::after</p>
                <p className="text-slate-500 text-xs mt-1">
                  Adds content after an element.
                </p>
                <div className="mt-2 font-mono text-xs text-slate-300">
                  p::after {"{ content: '!'; }"}
                </div>
              </div>

              <div className="bg-[#0f1117] p-4 rounded border border-white/10">
                <p className="text-purple-400">::first-letter</p>
                <p className="text-slate-500 text-xs mt-1">
                  Styles the first letter of text.
                </p>
                <div className="mt-2 font-mono text-xs text-slate-300">
                  p::first-letter {"{ font-size: 30px; }"}
                </div>
              </div>

              <div className="bg-[#0f1117] p-4 rounded border border-white/10">
                <p className="text-purple-400">::selection</p>
                <p className="text-slate-500 text-xs mt-1">
                  Styles selected text by user.
                </p>
                <div className="mt-2 font-mono text-xs text-slate-300">
                  ::selection {"{ background: yellow; }"}
                </div>
              </div>
            </div>

            <hr className="border-white/10 my-6" />

            {/* REAL EXAMPLE */}
            <h3 className="text-sm text-slate-300 mb-3">Real Example</h3>

            <div className="bg-[#0f1117] p-4 font-mono text-xs border border-white/10 rounded-lg">
              <p className="text-green-400">button {"{"}</p>
              <p className="pl-4">background: black;</p>
              <p className="pl-4">color: white;</p>
              <p className="text-green-400">{"}"}</p>

              <br />

              <p className="text-green-400">button:hover {"{"}</p>
              <p className="pl-4">background: blue;</p>
              <p className="text-green-400">{"}"}</p>
            </div>

            <hr className="border-white/10 my-6" />

            {/* USE CASE */}
            <h3 className="text-sm text-slate-300 mb-3">Real Use Cases</h3>

            <div className="space-y-2 text-xs text-slate-400">
              <p>🎯 hover → buttons & links effects</p>
              <p>🎯 focus → input fields styling</p>
              <p>🎯 before/after → icons, decorations</p>
              <p>🎯 nth-child → lists & tables styling</p>
            </div>

            <div className="mt-6 border-l-4 border-fuchsia-500 bg-fuchsia-500/5 p-4 text-xs text-fuchsia-300">
              💡 Pseudo elements allow you to style parts of elements without
              adding extra HTML.
            </div>
          </div>

          {/* TRANSITIONS */}
          <div
            id="transitions"
            className="bg-[#161b27] p-10 border border-white/10 rounded-xl max-w-3xl w-full max-sm:p-5"
          >
            <span className="text-xs text-orange-400 bg-orange-500/10 px-3 py-1 rounded-full">
              Lesson 16
            </span>

            <h2 className="text-xl mt-3 mb-3">CSS Transitions</h2>

            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              Transitions allow you to smoothly animate changes between CSS
              states (like hover, focus, or active).
            </p>

            <hr className="border-white/10 mb-6" />

            {/* CORE IDEA */}
            <h3 className="text-sm text-slate-300 mb-4">Core Concept</h3>

            <div className="bg-[#0f1117] p-4 rounded border border-white/10 font-mono text-xs text-slate-300">
              transition: property duration timing-function delay;
            </div>

            <hr className="border-white/10 my-6" />

            {/* MAIN PROPERTIES */}
            <h3 className="text-sm text-slate-300 mb-4">Main Properties</h3>

            <div className="space-y-3 text-sm">
              <div className="bg-[#0f1117] p-4 rounded border border-white/10">
                <p className="text-blue-400">transition-property</p>
                <p className="text-slate-500 text-xs mt-1">
                  Which CSS property to animate.
                </p>
                <div className="mt-2 font-mono text-xs text-slate-300">
                  transition-property: all;
                </div>
              </div>

              <div className="bg-[#0f1117] p-4 rounded border border-white/10">
                <p className="text-blue-400">transition-duration</p>
                <p className="text-slate-500 text-xs mt-1">
                  How long the animation takes.
                </p>
                <div className="mt-2 font-mono text-xs text-slate-300">
                  transition-duration: 0.3s;
                </div>
              </div>

              <div className="bg-[#0f1117] p-4 rounded border border-white/10">
                <p className="text-blue-400">transition-timing-function</p>
                <p className="text-slate-500 text-xs mt-1">
                  Controls animation speed curve.
                </p>
                <div className="mt-2 font-mono text-xs text-slate-300">
                  ease | linear | ease-in | ease-out
                </div>
              </div>

              <div className="bg-[#0f1117] p-4 rounded border border-white/10">
                <p className="text-blue-400">transition-delay</p>
                <p className="text-slate-500 text-xs mt-1">
                  Delay before animation starts.
                </p>
                <div className="mt-2 font-mono text-xs text-slate-300">
                  transition-delay: 0.2s;
                </div>
              </div>
            </div>

            <hr className="border-white/10 my-6" />

            {/* REAL EXAMPLE */}
            <h3 className="text-sm text-slate-300 mb-3">Real Example</h3>

            <div className="bg-[#0f1117] p-4 font-mono text-xs border border-white/10 rounded-lg">
              <p className="text-green-400">button {"{"}</p>
              <p className="pl-4">background: black;</p>
              <p className="pl-4">color: white;</p>
              <p className="pl-4">transition: all 0.3s ease;</p>
              <p className="text-green-400">{"}"}</p>

              <br />

              <p className="text-green-400">button:hover {"{"}</p>
              <p className="pl-4">background: orange;</p>
              <p className="pl-4">transform: scale(1.05);</p>
              <p className="text-green-400">{"}"}</p>
            </div>

            <hr className="border-white/10 my-6" />

            {/* VISUAL IDEA */}
            <h3 className="text-sm text-slate-300 mb-3">
              What Transition Does
            </h3>

            <div className="bg-[#0f1117] p-4 rounded border border-white/10 text-xs text-slate-400">
              Instead of instant change → it creates smooth animation between
              states.
            </div>

            <hr className="border-white/10 my-6" />

            {/* USE CASES */}
            <h3 className="text-sm text-slate-300 mb-3">Common Use Cases</h3>

            <div className="space-y-2 text-xs text-slate-400">
              <p>🎯 Buttons hover effects</p>
              <p>🎯 Card animations</p>
              <p>🎯 Input focus effects</p>
              <p>🎯 UI micro-interactions</p>
            </div>

            <div className="mt-6 border-l-4 border-orange-500 bg-orange-500/5 p-4 text-xs text-orange-300">
              💡 Tip: Always use transitions for hover effects — it makes UI
              feel modern and smooth.
            </div>
          </div>

          {/* ANIMATIONS */}
          <div
            id="animations"
            className="bg-[#161b27] p-10 border border-white/10 rounded-xl max-w-3xl w-full max-sm:p-5"
          >
            <span className="text-xs text-red-400 bg-red-500/10 px-3 py-1 rounded-full">
              Lesson 17
            </span>

            <h2 className="text-xl mt-3 mb-3">CSS Animations</h2>

            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              CSS Animations allow you to create complex motion effects using
              keyframes, not just simple transitions.
            </p>

            <hr className="border-white/10 mb-6" />

            {/* CORE IDEA */}
            <h3 className="text-sm text-slate-300 mb-4">Core Concept</h3>

            <div className="bg-[#0f1117] p-4 rounded border border-white/10 font-mono text-xs text-slate-300">
              animation: name duration timing-function delay iteration-count;
            </div>

            <hr className="border-white/10 my-6" />

            {/* KEYFRAMES */}
            <h3 className="text-sm text-slate-300 mb-4">Keyframes</h3>

            <div className="bg-[#0f1117] p-4 rounded border border-white/10 font-mono text-xs text-slate-300">
              <p className="text-green-400">@keyframes slide {"{"}</p>
              <p className="pl-4">0% {"{ transform: translateX(0); }"}</p>
              <p className="pl-4">100% {"{ transform: translateX(100px); }"}</p>
              <p className="text-green-400">{"}"}</p>
            </div>

            <hr className="border-white/10 my-6" />

            {/* MAIN PROPERTIES */}
            <h3 className="text-sm text-slate-300 mb-4">
              Animation Properties
            </h3>

            <div className="space-y-3 text-sm">
              <div className="bg-[#0f1117] p-4 rounded border border-white/10">
                <p className="text-blue-400">animation-name</p>
                <p className="text-slate-500 text-xs mt-1">
                  Name of the keyframe animation.
                </p>
                <div className="mt-2 font-mono text-xs text-slate-300">
                  animation-name: slide;
                </div>
              </div>

              <div className="bg-[#0f1117] p-4 rounded border border-white/10">
                <p className="text-blue-400">animation-duration</p>
                <p className="text-slate-500 text-xs mt-1">
                  How long animation takes.
                </p>
                <div className="mt-2 font-mono text-xs text-slate-300">
                  animation-duration: 1s;
                </div>
              </div>

              <div className="bg-[#0f1117] p-4 rounded border border-white/10">
                <p className="text-blue-400">animation-iteration-count</p>
                <p className="text-slate-500 text-xs mt-1">
                  How many times it repeats.
                </p>
                <div className="mt-2 font-mono text-xs text-slate-300">
                  infinite | 1 | 3
                </div>
              </div>

              <div className="bg-[#0f1117] p-4 rounded border border-white/10">
                <p className="text-blue-400">animation-timing-function</p>
                <p className="text-slate-500 text-xs mt-1">
                  Speed curve of animation.
                </p>
                <div className="mt-2 font-mono text-xs text-slate-300">
                  ease | linear | ease-in-out
                </div>
              </div>
            </div>

            <hr className="border-white/10 my-6" />

            {/* FULL EXAMPLE */}
            <h3 className="text-sm text-slate-300 mb-3">Full Example</h3>

            <div className="bg-[#0f1117] p-4 font-mono text-xs border border-white/10 rounded-lg">
              <p className="text-green-400">.box {"{"}</p>
              <p className="pl-4">animation: slide 1s ease-in-out infinite;</p>
              <p className="text-green-400">{"}"}</p>

              <br />

              <p className="text-green-400">@keyframes slide {"{"}</p>
              <p className="pl-4">0% {"{ transform: translateX(0); }"}</p>
              <p className="pl-4">100% {"{ transform: translateX(50px); }"}</p>
              <p className="text-green-400">{"}"}</p>
            </div>

            <hr className="border-white/10 my-6" />

            {/* TYPES OF ANIMATIONS */}
            <h3 className="text-sm text-slate-300 mb-3">Types of Animations</h3>

            <div className="space-y-2 text-xs text-slate-400">
              <p>🎬 Movement → translate, position changes</p>
              <p>🎬 Fade → opacity animations</p>
              <p>🎬 Scale → zoom in/out effects</p>
              <p>🎬 Rotation → rotate effects</p>
            </div>

            <hr className="border-white/10 my-6" />

            {/* USE CASES */}
            <h3 className="text-sm text-slate-300 mb-3">Real Use Cases</h3>

            <div className="space-y-2 text-xs text-slate-400">
              <p>🚀 Loading spinners</p>
              <p>🎯 Page entrance effects</p>
              <p>🎨 UI micro-interactions</p>
              <p>🔥 Attention grabbing elements</p>
            </div>

            <div className="mt-6 border-l-4 border-red-500 bg-red-500/5 p-4 text-xs text-red-300">
              💡 Tip: Use animations carefully — too much motion kills UX.
            </div>
          </div>

          {/* Z-INDEX */}
          <div
            id="z-index"
            className="bg-[#161b27] p-10 border border-white/10 rounded-xl max-w-3xl w-full max-sm:p-5"
          >
            <span className="text-xs text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full">
              Lesson 18
            </span>

            <h2 className="text-xl mt-3 mb-3">CSS Z-Index</h2>

            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              Z-index controls the stacking order of elements on the screen —
              which element appears on top of another.
            </p>

            <hr className="border-white/10 mb-6" />

            {/* CORE IDEA */}
            <h3 className="text-sm text-slate-300 mb-4">Core Concept</h3>

            <div className="bg-[#0f1117] p-4 rounded border border-white/10 font-mono text-xs text-slate-300">
              z-index: number;
            </div>

            <p className="text-xs text-slate-500 mt-3 mb-6">
              Higher number = appears on top (only works with positioned
              elements).
            </p>

            <hr className="border-white/10 my-6" />

            {/* STACKING EXPLANATION */}
            <h3 className="text-sm text-slate-300 mb-4">How it works</h3>

            <div className="space-y-2 text-xs text-slate-400">
              <p>🔹 z-index: 1 → behind</p>
              <p>🔹 z-index: 10 → above</p>
              <p>🔹 z-index: 100 → top layer</p>
              <p>🔹 works only with position: relative/absolute/fixed/sticky</p>
            </div>

            <hr className="border-white/10 my-6" />

            {/* EXAMPLE */}
            <h3 className="text-sm text-slate-300 mb-3">Real Example</h3>

            <div className="bg-[#0f1117] p-4 font-mono text-xs border border-white/10 rounded-lg">
              <p className="text-green-400">.box1 {"{"}</p>
              <p className="pl-4">position: absolute;</p>
              <p className="pl-4">z-index: 1;</p>
              <p className="text-green-400">{"}"}</p>

              <br />

              <p className="text-green-400">.box2 {"{"}</p>
              <p className="pl-4">position: absolute;</p>
              <p className="pl-4">z-index: 10;</p>
              <p className="text-green-400">{"}"}</p>
            </div>

            <hr className="border-white/10 my-6" />

            {/* REAL USE CASES */}
            <h3 className="text-sm text-slate-300 mb-3">Real Use Cases</h3>

            <div className="space-y-2 text-xs text-slate-400">
              <p>🪟 Modals & popups</p>
              <p>📌 Sticky navbar</p>
              <p>🎯 Dropdown menus</p>
              <p>🖼️ Overlapping images/cards</p>
            </div>

            <div className="mt-6 border-l-4 border-cyan-500 bg-cyan-500/5 p-4 text-xs text-cyan-300">
              💡 Tip: Z-index doesn’t work alone — position is required.
            </div>
          </div>

          {/* CSS VARIABLES */}
          <div
            id="css-variables"
            className="bg-[#161b27] p-10 border border-white/10 rounded-xl max-w-3xl w-full max-sm:p-5"
          >
            <span className="text-xs text-violet-400 bg-violet-500/10 px-3 py-1 rounded-full">
              Lesson 19
            </span>

            <h2 className="text-xl mt-3 mb-3">CSS Variables</h2>

            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              CSS Variables (Custom Properties) let you store values and reuse
              them across your CSS. They make your code cleaner and easier to
              maintain.
            </p>

            <hr className="border-white/10 mb-6" />

            {/* CORE IDEA */}
            <h3 className="text-sm text-slate-300 mb-4">Core Syntax</h3>

            <div className="bg-[#0f1117] p-4 rounded border border-white/10 font-mono text-xs text-slate-300">
              :root {"{"}
              <br />
              &nbsp;&nbsp;--main-color: #ff5733;
              <br />
              &nbsp;&nbsp;--text-size: 16px;
              <br />
              {"}"}
            </div>

            <hr className="border-white/10 my-6" />

            {/* USAGE */}
            <h3 className="text-sm text-slate-300 mb-4">
              How to Use Variables
            </h3>

            <div className="bg-[#0f1117] p-4 rounded border border-white/10 font-mono text-xs text-slate-300">
              color: var(--main-color);
              <br />
              font-size: var(--text-size);
            </div>

            <hr className="border-white/10 my-6" />

            {/* FULL EXAMPLE */}
            <h3 className="text-sm text-slate-300 mb-3">Full Example</h3>

            <div className="bg-[#0f1117] p-4 font-mono text-xs border border-white/10 rounded-lg">
              <p className="text-green-400">:root {"{"}</p>
              <p className="pl-4">--primary: #00bcd4;</p>
              <p className="pl-4">--padding: 20px;</p>
              <p className="text-green-400">{"}"}</p>

              <br />

              <p className="text-green-400">.box {"{"}</p>
              <p className="pl-4">background: var(--primary);</p>
              <p className="pl-4">padding: var(--padding);</p>
              <p className="text-green-400">{"}"}</p>
            </div>

            <hr className="border-white/10 my-6" />

            {/* BENEFITS */}
            <h3 className="text-sm text-slate-300 mb-3">
              Why Use CSS Variables?
            </h3>

            <div className="space-y-2 text-xs text-slate-400">
              <p>♻️ Reusable values across project</p>
              <p>🎯 Easier maintenance</p>
              <p>⚡ Faster updates (change one value everywhere)</p>
              <p>🧠 Cleaner and scalable CSS architecture</p>
            </div>

            <div className="mt-6 border-l-4 border-violet-500 bg-violet-500/5 p-4 text-xs text-violet-300">
              💡 Tip: CSS Variables are the foundation of modern design systems.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Css;
