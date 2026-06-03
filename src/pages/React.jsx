import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { ArrowUp, ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
function React() {
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
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  const seoData = {
    title: "Learn React | Learn Web Dev",
    desc: "Learn React from scratch with JSX, Components, Props, State, Hooks and React Router.",
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
          content="React, Learn React, React Tutorial, JSX, React Hooks"
        />

        <meta name="robots" content="index, follow" />

        <meta
          property="og:image"
          content="https://learnwebdev.me/favicon.png"
        />

        <meta property="og:type" content="website" />

        <link rel="canonical" href="https://learnwebdev.me/react" />
      </Helmet>

      <h1 className="sr-only">Learn React — تعلم React </h1>

      <div className="bg-[#0f1117] min-h-screen text-white flex">
        {/* Mobile Sidebar Button */}
        <button
          className="fixed top-24 left-0 bg-cyan-500 text-black p-2 rounded-r-xl z-50 sm:hidden"
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

        {/* Scroll Top Button */}
        <button
          className="fixed bottom-5 right-5 bg-cyan-500 text-black p-2 rounded-xl z-50"
          onClick={Top}
        >
          <ArrowUp size={20} color="white" />
        </button>

        {/* Sidebar */}
        <div
          className={`
            border-r border-white/10 p-7 w-[240px]
            flex flex-col gap-[30px]
            h-screen bg-[#0f1117] z-40
            transition-transform duration-300
            fixed top-0 left-0

            ${showSidebar ? "translate-x-0" : "-translate-x-full"}

            sm:relative sm:sticky sm:top-0 sm:translate-x-0
          `}
        >
          <h2 className="text-cyan-400 text-xl font-semibold">React Track</h2>

          <div className="flex flex-col gap-2">
            {[
              { id: "intro", label: "Introduction To React" },
              { id: "jsx", label: "JSX" },
              { id: "components", label: "Components" },
              { id: "props", label: "Props" },
              { id: "state", label: "useState Hook" },
              { id: "events", label: "Handling Events" },
              { id: "rendering", label: "Conditional Rendering" },
              { id: "lists", label: "Lists & Keys" },
              { id: "effects", label: "useEffect Hook" },
              { id: "forms", label: "Forms In React" },
              { id: "lifting-state", label: "Lifting State Up" },
              { id: "context", label: "Context API" },
              { id: "routing", label: "React Router" },
              { id: "fetching", label: "Fetching Data" },
              { id: "custom-hooks", label: "Custom Hooks" },
              { id: "performance", label: "Performance Basics" },
              { id: "project-structure", label: "Project Structure" },
            ].map((lesson) => (
              <a
                key={lesson.id}
                href={`#${lesson.id}`}
                onClick={() => setShowSidebar(false)}
                className={`text-sm transition ${
                  activeLesson === lesson.id
                    ? "text-cyan-300 font-medium"
                    : "text-slate-500 hover:text-slate-300"
                }`}
              >
                • {lesson.label}
              </a>
            ))}
          </div>
          <div className="flex  gap-5">
            <Link
              to="/javascript"
              aria-label="الدرس السابق"
              className="flex items-center gap-1 text-sm text-slate-500 hover:text-slate-800 transition-colors"
            >
              <ArrowLeft size={16} />
              <span>javascript</span>
            </Link>

            <Link
              aria-label="الدرس التالي"
              className="flex items-center gap-1 text-sm text-slate-500 hover:text-slate-800 transition-colors"
            >
              <span>tailwind(soon)</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 py-10 px-20 overflow-y-auto flex flex-col items-center gap-10 max-sm:p-5">
          {/* lesson 1 */}
          <div
            id="intro"
            className="bg-[#161b27] p-10 border border-white/10 rounded-xl w-full max-w-3xl max-sm:px-5"
          >
            <span className="inline-block bg-cyan-500/10 text-cyan-400 text-xs px-4 py-1 rounded-full mb-4">
              Lesson 1
            </span>

            <h2 className="text-2xl font-semibold text-slate-100 mb-2">
              Introduction To React
            </h2>

            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              React is a JavaScript library used to build modern, fast and
              interactive user interfaces. It helps developers create reusable
              components and manage application state efficiently.
            </p>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              What Is React?
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {[
                {
                  title: "JavaScript Library",
                  desc: "React is a library created by Meta for building user interfaces.",
                  color: "text-cyan-400",
                },
                {
                  title: "Component Based",
                  desc: "Applications are built using reusable components.",
                  color: "text-blue-400",
                },
                {
                  title: "Fast Updates",
                  desc: "React updates only the parts of the page that change.",
                  color: "text-green-400",
                },
                {
                  title: "Huge Ecosystem",
                  desc: "React works with tools like React Router, Next.js and many others.",
                  color: "text-purple-400",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-[#0f1117] border border-white/7 rounded-xl p-5"
                >
                  <p className={`text-sm font-medium mb-2 ${item.color}`}>
                    {item.title}
                  </p>

                  <p className="text-xs text-slate-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Why React?
            </p>

            <div className="flex flex-col gap-3 mb-8">
              {[
                "Reusable Components",
                "Easy State Management",
                "Fast Performance",
                "Large Community",
                "Used By Major Companies",
              ].map((item) => (
                <div
                  key={item}
                  className="bg-[#0f1117] border border-white/7 rounded-xl p-4"
                >
                  <p className="text-slate-300 text-sm">{item}</p>
                </div>
              ))}
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Creating Your First Component
            </p>

            <p className="text-sm text-slate-400 mb-3 leading-relaxed">
              A React component is simply a JavaScript function that returns UI.
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 max-sm:text-xs break-words whitespace-pre-wrap">
                {`function Welcome() {
  return <h1>Hello React!</h1>;
}`}
              </pre>
            </div>

            <div className="border-l-4 border-cyan-500 bg-cyan-500/5 rounded-r-lg p-4 text-sm text-cyan-200 leading-relaxed mb-8">
              💡 React component names must start with a capital letter.
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Rendering A Component
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 max-sm:text-xs break-words whitespace-pre-wrap">
                {`function Welcome() {
  return <h1>Hello React!</h1>;
}

function App() {
  return (
    <div>
      <Welcome />
    </div>
  );
}`}
              </pre>
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              React In Action
            </p>

            <div className="flex flex-col gap-3">
              {[
                {
                  tag: "Social Media",
                  desc: "Build feeds, posts and interactive user experiences.",
                  color: "text-cyan-400",
                },
                {
                  tag: "Dashboards",
                  desc: "Create admin panels and analytics dashboards.",
                  color: "text-blue-400",
                },
                {
                  tag: "E-Commerce",
                  desc: "Build modern online stores and shopping experiences.",
                  color: "text-green-400",
                },
                {
                  tag: "Web Applications",
                  desc: "Create scalable and maintainable web apps.",
                  color: "text-purple-400",
                },
              ].map((item) => (
                <div
                  key={item.tag}
                  className="bg-[#0f1117] border border-white/7 rounded-xl p-4"
                >
                  <p className={`font-medium text-sm mb-1 ${item.color}`}>
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
            id="jsx"
            className="bg-[#161b27] p-10 border border-white/10 rounded-xl w-full max-w-3xl max-sm:px-5"
          >
            <span className="inline-block bg-cyan-500/10 text-cyan-400 text-xs px-4 py-1 rounded-full mb-4">
              Lesson 2
            </span>

            <h2 className="text-2xl font-semibold text-slate-100 mb-2">JSX</h2>

            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              JSX stands for JavaScript XML. It allows us to write HTML-like
              code directly inside JavaScript, making React components easier to
              read and write.
            </p>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              What Is JSX?
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {[
                {
                  title: "HTML Inside JavaScript",
                  desc: "JSX lets you write UI code using HTML-like syntax.",
                  color: "text-cyan-400",
                },
                {
                  title: "Easy To Read",
                  desc: "Components become more readable and organized.",
                  color: "text-blue-400",
                },
                {
                  title: "React Uses JSX",
                  desc: "Most React applications are written using JSX.",
                  color: "text-green-400",
                },
                {
                  title: "Compiled To JavaScript",
                  desc: "JSX is converted into regular JavaScript behind the scenes.",
                  color: "text-purple-400",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-[#0f1117] border border-white/7 rounded-xl p-5"
                >
                  <p className={`text-sm font-medium mb-2 ${item.color}`}>
                    {item.title}
                  </p>

                  <p className="text-xs text-slate-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              JSX Example
            </p>

            <p className="text-sm text-slate-400 mb-3 leading-relaxed">
              JSX looks similar to HTML but is actually JavaScript.
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 max-sm:text-xs break-words whitespace-pre-wrap">
                {`function App() {
  return (
    <h1>Hello React</h1>
  );
}`}
              </pre>
            </div>

            <div className="border-l-4 border-cyan-500 bg-cyan-500/5 rounded-r-lg p-4 text-sm text-cyan-200 leading-relaxed mb-8">
              💡 JSX must return a single parent element.
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Single Parent Element
            </p>

            <p className="text-sm text-slate-400 mb-3 leading-relaxed">
              This will cause an error because React expects one parent element.
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-4 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 max-sm:text-xs break-words whitespace-pre-wrap">
                {`function App() {
  return (
    <h1>Hello</h1>
    <p>React</p>
  );
}`}
              </pre>
            </div>

            <p className="text-sm text-slate-400 mb-3">Correct version:</p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 max-sm:text-xs break-words whitespace-pre-wrap">
                {`function App() {
  return (
    <div>
      <h1>Hello</h1>
      <p>React</p>
    </div>
  );
}`}
              </pre>
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              JavaScript Inside JSX
            </p>

            <p className="text-sm text-slate-400 mb-3 leading-relaxed">
              Use curly braces to write JavaScript expressions inside JSX.
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 max-sm:text-xs break-words whitespace-pre-wrap">
                {`function App() {
  const name = "Mostafa";

  return (
    <h1>Hello {name}</h1>
  );
}`}
              </pre>
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              JSX Attributes
            </p>

            <p className="text-sm text-slate-400 mb-3 leading-relaxed">
              Some HTML attributes have different names in JSX.
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 max-sm:text-xs break-words whitespace-pre-wrap">
                {`function App() {
  return (
    <div className="container">
      Welcome
    </div>
  );
}`}
              </pre>
            </div>

            <div className="bg-[#0f1117] border border-white/7 rounded-xl p-5 mb-8">
              <p className="text-cyan-400 text-sm font-medium mb-3">
                Common JSX Differences
              </p>

              <ul className="text-xs text-slate-400 space-y-2">
                <li>• class ➜ className</li>
                <li>• for ➜ htmlFor</li>
                <li>• onclick ➜ onClick</li>
                <li>• tabindex ➜ tabIndex</li>
              </ul>
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              JSX Benefits
            </p>

            <div className="flex flex-col gap-3">
              {[
                {
                  tag: "Readable Code",
                  desc: "UI code looks very similar to HTML.",
                  color: "text-cyan-400",
                },
                {
                  tag: "Easy To Maintain",
                  desc: "Components become easier to understand.",
                  color: "text-blue-400",
                },
                {
                  tag: "JavaScript Integration",
                  desc: "Mix JavaScript and UI together easily.",
                  color: "text-green-400",
                },
                {
                  tag: "React Standard",
                  desc: "Most React projects use JSX.",
                  color: "text-purple-400",
                },
              ].map((item) => (
                <div
                  key={item.tag}
                  className="bg-[#0f1117] border border-white/7 rounded-xl p-4"
                >
                  <p className={`font-medium text-sm mb-1 ${item.color}`}>
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
            id="components"
            className="bg-[#161b27] p-10 border border-white/10 rounded-xl w-full max-w-3xl max-sm:px-5"
          >
            <span className="inline-block bg-cyan-500/10 text-cyan-400 text-xs px-4 py-1 rounded-full mb-4">
              Lesson 3
            </span>

            <h2 className="text-2xl font-semibold text-slate-100 mb-2">
              Components
            </h2>

            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              Components are the building blocks of React applications. Every
              piece of UI can be created as a reusable component.
            </p>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              What Is A Component?
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {[
                {
                  title: "Reusable",
                  desc: "Create once and use many times.",
                  color: "text-cyan-400",
                },
                {
                  title: "Independent",
                  desc: "Each component manages its own UI.",
                  color: "text-blue-400",
                },
                {
                  title: "Organized Code",
                  desc: "Split large apps into small parts.",
                  color: "text-green-400",
                },
                {
                  title: "Easy Maintenance",
                  desc: "Update one component without affecting others.",
                  color: "text-purple-400",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-[#0f1117] border border-white/7 rounded-xl p-5"
                >
                  <p className={`text-sm font-medium mb-2 ${item.color}`}>
                    {item.title}
                  </p>

                  <p className="text-xs text-slate-500">{item.desc}</p>
                </div>
              ))}
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Creating A Component
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 max-sm:text-xs break-words whitespace-pre-wrap">
                {`function Welcome() {
  return <h1>Welcome To React</h1>;
}`}
              </pre>
            </div>

            <div className="border-l-4 border-cyan-500 bg-cyan-500/5 rounded-r-lg p-4 text-sm text-cyan-200 leading-relaxed mb-8">
              💡 Component names must start with a capital letter.
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Using A Component
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 max-sm:text-xs break-words whitespace-pre-wrap">
                {`function App() {
  return (
    <div>
      <Welcome />
    </div>
  );
}`}
              </pre>
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Reusing Components
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 max-sm:text-xs break-words whitespace-pre-wrap">
                {`function App() {
  return (
    <>
      <Welcome />
      <Welcome />
      <Welcome />
    </>
  );
}`}
              </pre>
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Nesting Components
            </p>

            <p className="text-sm text-slate-400 mb-3">
              Components can be placed inside other components.
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 max-sm:text-xs break-words whitespace-pre-wrap">
                {`function Header() {
  return <h1>Header</h1>;
}

function App() {
  return (
    <div>
      <Header />
    </div>
  );
}`}
              </pre>
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Exporting Components
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-4 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 max-sm:text-xs break-words whitespace-pre-wrap">
                {`function Header() {
  return <h1>Header</h1>;
}

export default Header;`}
              </pre>
            </div>

            <p className="text-sm text-slate-400 mb-3">
              Import it into another file:
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 max-sm:text-xs break-words whitespace-pre-wrap">
                {`import Header from "./Header";

function App() {
  return <Header />;
}`}
              </pre>
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Component File Structure
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 max-sm:text-xs break-words whitespace-pre-wrap">
                {`src
├── components
│   ├── Header.jsx
│   ├── Footer.jsx
│   └── Navbar.jsx
│
└── App.jsx`}
              </pre>
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Self Closing Components
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 max-sm:text-xs break-words whitespace-pre-wrap">
                {`<Header />
<Navbar />
<Footer />`}
              </pre>
            </div>

            <div className="bg-[#0f1117] border border-white/7 rounded-xl p-5">
              <p className="text-cyan-400 text-sm font-medium mb-3">
                Component Rules
              </p>

              <ul className="text-xs text-slate-400 space-y-2">
                <li>• Component names start with a capital letter.</li>
                <li>• A component returns JSX.</li>
                <li>• Components can be reused.</li>
                <li>• Components can contain other components.</li>
                <li>• Use export/import to separate files.</li>
              </ul>
            </div>
          </div>

          {/* lesson 4 */}
          <div
            id="props"
            className="bg-[#161b27] p-10 border border-white/10 rounded-xl w-full max-w-3xl max-sm:px-5"
          >
            <span className="inline-block bg-cyan-500/10 text-cyan-400 text-xs px-4 py-1 rounded-full mb-4">
              Lesson 4
            </span>

            <h2 className="text-2xl font-semibold text-slate-100 mb-2">
              Props
            </h2>

            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              Props (Properties) allow components to receive data from their
              parent components. They make components dynamic and reusable.
            </p>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              What Are Props?
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {[
                {
                  title: "Pass Data",
                  desc: "Send data from one component to another.",
                  color: "text-cyan-400",
                },
                {
                  title: "Reusable Components",
                  desc: "Use the same component with different values.",
                  color: "text-blue-400",
                },
                {
                  title: "Read Only",
                  desc: "Props cannot be modified by the child component.",
                  color: "text-green-400",
                },
                {
                  title: "Parent To Child",
                  desc: "Props always flow from parent to child.",
                  color: "text-purple-400",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-[#0f1117] border border-white/7 rounded-xl p-5"
                >
                  <p className={`text-sm font-medium mb-2 ${item.color}`}>
                    {item.title}
                  </p>

                  <p className="text-xs text-slate-500">{item.desc}</p>
                </div>
              ))}
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Passing Props
            </p>

            <p className="text-sm text-slate-400 mb-3">
              Pass data as attributes when using a component.
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 max-sm:text-xs break-words whitespace-pre-wrap">
                {`function App() {
  return (
    <User name="Mostafa" />
  );
}`}
              </pre>
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Receiving Props
            </p>

            <p className="text-sm text-slate-400 mb-3">
              The component receives props as an object.
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 max-sm:text-xs break-words whitespace-pre-wrap">
                {`function User(props) {
  return (
    <h1>{props.name}</h1>
  );
}`}
              </pre>
            </div>

            <div className="border-l-4 border-cyan-500 bg-cyan-500/5 rounded-r-lg p-4 text-sm text-cyan-200 leading-relaxed mb-8">
              💡 Props are stored inside an object called props.
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Multiple Props
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 max-sm:text-xs break-words whitespace-pre-wrap">
                {`<User
  name="Mostafa"
  age={20}
  city="Cairo"
/>`}
              </pre>
            </div>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 max-sm:text-xs break-words whitespace-pre-wrap">
                {`function User(props) {
  return (
    <>
      <h1>{props.name}</h1>
      <p>{props.age}</p>
      <p>{props.city}</p>
    </>
  );
}`}
              </pre>
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Destructuring Props
            </p>

            <p className="text-sm text-slate-400 mb-3">
              This is the most common way to use props.
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 max-sm:text-xs break-words whitespace-pre-wrap">
                {`function User({ name, age }) {
  return (
    <>
      <h1>{name}</h1>
      <p>{age}</p>
    </>
  );
}`}
              </pre>
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Passing JavaScript Values
            </p>

            <p className="text-sm text-slate-400 mb-3">
              Use curly braces to pass JavaScript values.
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 max-sm:text-xs break-words whitespace-pre-wrap">
                {`const age = 20;

<User age={age} />`}
              </pre>
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Passing Arrays & Objects
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 max-sm:text-xs break-words whitespace-pre-wrap">
                {`const user = {
  name: "Mostafa",
  age: 20
};

<User data={user} />`}
              </pre>
            </div>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 max-sm:text-xs break-words whitespace-pre-wrap">
                {`function User({ data }) {
  return (
    <h1>{data.name}</h1>
  );
}`}
              </pre>
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Passing Functions
            </p>

            <p className="text-sm text-slate-400 mb-3">
              Functions can also be passed through props.
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 max-sm:text-xs break-words whitespace-pre-wrap">
                {`function App() {
  function sayHello() {
    alert("Hello");
  }

  return (
    <Button click={sayHello} />
  );
}`}
              </pre>
            </div>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 max-sm:text-xs break-words whitespace-pre-wrap">
                {`function Button({ click }) {
  return (
    <button onClick={click}>
      Click
    </button>
  );
}`}
              </pre>
            </div>

            <hr className="border-white/10 mb-8" />

            <div className="bg-[#0f1117] border border-white/7 rounded-xl p-5">
              <p className="text-cyan-400 text-sm font-medium mb-3">
                Props Rules
              </p>

              <ul className="text-xs text-slate-400 space-y-2">
                <li>• Props are used to pass data between components.</li>
                <li>• Props flow from parent to child.</li>
                <li>• Props are read-only.</li>
                <li>
                  • Props can contain strings, numbers, arrays, objects and
                  functions.
                </li>
                <li>• Destructuring props is the most common practice.</li>
              </ul>
            </div>
          </div>

          {/* lesson 5 */}
          <div
            id="state"
            className="bg-[#161b27] p-10 border border-white/10 rounded-xl w-full max-w-3xl max-sm:px-5"
          >
            <span className="inline-block bg-cyan-500/10 text-cyan-400 text-xs px-4 py-1 rounded-full mb-4">
              Lesson 5
            </span>

            <h2 className="text-2xl font-semibold text-slate-100 mb-2">
              useState Hook
            </h2>

            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              useState is a React Hook that allows components to store and
              update data. When state changes, React automatically re-renders
              the component.
            </p>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              What Is State?
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {[
                {
                  title: "Stores Data",
                  desc: "State is used to store values inside a component.",
                  color: "text-cyan-400",
                },
                {
                  title: "Can Change",
                  desc: "Unlike props, state can be updated.",
                  color: "text-blue-400",
                },
                {
                  title: "Triggers Re-render",
                  desc: "Updating state updates the UI automatically.",
                  color: "text-green-400",
                },
                {
                  title: "Component Specific",
                  desc: "Each component has its own state.",
                  color: "text-purple-400",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-[#0f1117] border border-white/7 rounded-xl p-5"
                >
                  <p className={`text-sm font-medium mb-2 ${item.color}`}>
                    {item.title}
                  </p>

                  <p className="text-xs text-slate-500">{item.desc}</p>
                </div>
              ))}
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Importing useState
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 max-sm:text-xs break-words whitespace-pre-wrap">
                {`import { useState } from "react";`}
              </pre>
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Creating State
            </p>

            <p className="text-sm text-slate-400 mb-3">
              useState returns an array containing the value and the update
              function.
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 max-sm:text-xs break-words whitespace-pre-wrap">
                {`const [count, setCount] = useState(0);`}
              </pre>
            </div>

            <div className="border-l-4 border-cyan-500 bg-cyan-500/5 rounded-r-lg p-4 text-sm text-cyan-200 leading-relaxed mb-8">
              💡 count contains the current value and setCount updates it.
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Updating State
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 max-sm:text-xs break-words whitespace-pre-wrap">
                {`function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>{count}</h1>

      <button
        onClick={() => setCount(count + 1)}
      >
        Increase
      </button>
    </>
  );
}`}
              </pre>
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              State With Strings
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 max-sm:text-xs break-words whitespace-pre-wrap">
                {`const [name, setName] = useState("Mostafa");

setName("Ahmed");`}
              </pre>
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              State With Booleans
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 max-sm:text-xs break-words whitespace-pre-wrap">
                {`const [darkMode, setDarkMode] =
  useState(false);

setDarkMode(true);`}
              </pre>
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              State With Arrays
            </p>

            <p className="text-sm text-slate-400 mb-3">
              Never modify arrays directly. Create a new array.
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 max-sm:text-xs break-words whitespace-pre-wrap">
                {`const [users, setUsers] =
  useState(["Ali"]);

setUsers([...users, "Mostafa"]);`}
              </pre>
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              State With Objects
            </p>

            <p className="text-sm text-slate-400 mb-3">
              Copy the old object and update only the needed property.
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 max-sm:text-xs break-words whitespace-pre-wrap">
                {`const [user, setUser] =
  useState({
    name: "Mostafa",
    age: 20
  });

setUser({
  ...user,
  age: 21
});`}
              </pre>
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Updating Based On Previous State
            </p>

            <p className="text-sm text-slate-400 mb-3">
              This is the safest way when the new value depends on the old
              value.
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 max-sm:text-xs break-words whitespace-pre-wrap">
                {`setCount(prevCount => prevCount + 1);`}
              </pre>
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Common Mistake
            </p>

            <p className="text-sm text-slate-400 mb-3">
              Never update state directly.
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-4 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-red-400 max-sm:text-xs break-words whitespace-pre-wrap">{`count = count + 1;`}</pre>
            </div>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-green-400 max-sm:text-xs break-words whitespace-pre-wrap ">{`setCount(count + 1);`}</pre>
            </div>

            <hr className="border-white/10 mb-8" />

            <div className="bg-[#0f1117] border border-white/7 rounded-xl p-5">
              <p className="text-cyan-400 text-sm font-medium mb-3">
                useState Rules
              </p>

              <ul className="text-xs text-slate-400 space-y-2">
                <li>• State stores data inside components.</li>
                <li>• Updating state causes a re-render.</li>
                <li>• Use the setter function to update state.</li>
                <li>• Never modify arrays or objects directly.</li>
                <li>• Use the previous state callback when needed.</li>
              </ul>
            </div>
          </div>

          {/* lesson 6 */}
          <div
            id="events"
            className="bg-[#161b27] p-10 border border-white/10 rounded-xl w-full max-w-3xl max-sm:px-5"
          >
            <span className="inline-block bg-cyan-500/10 text-cyan-400 text-xs px-4 py-1 rounded-full mb-4">
              Lesson 6
            </span>

            <h2 className="text-2xl font-semibold text-slate-100 mb-2">
              Handling Events
            </h2>

            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              Events in React are used to handle user interactions like clicks,
              typing, hovering, and form submissions.
            </p>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              What Are Events?
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {[
                {
                  title: "Click Events",
                  desc: "Triggered when a user clicks a button.",
                  color: "text-cyan-400",
                },
                {
                  title: "Input Events",
                  desc: "Triggered when a user types in a field.",
                  color: "text-blue-400",
                },
                {
                  title: "Mouse Events",
                  desc: "Triggered on hover or mouse movement.",
                  color: "text-green-400",
                },
                {
                  title: "Form Events",
                  desc: "Triggered when submitting a form.",
                  color: "text-purple-400",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-[#0f1117] border border-white/7 rounded-xl p-5"
                >
                  <p className={`text-sm font-medium mb-2 ${item.color}`}>
                    {item.title}
                  </p>

                  <p className="text-xs text-slate-500">{item.desc}</p>
                </div>
              ))}
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Click Event Example
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 max-sm:text-xs break-words whitespace-pre-wrap">
                {`function App() {
  function handleClick() {
    alert("Button Clicked!");
  }

  return (
    <button onClick={handleClick}>
      Click Me
    </button>
  );
}`}
              </pre>
            </div>

            <div className="border-l-4 border-cyan-500 bg-cyan-500/5 rounded-r-lg p-4 text-sm text-cyan-200 leading-relaxed mb-8">
              💡 In React, event names use camelCase like onClick instead of
              onclick.
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Inline Event Handler
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 max-sm:text-xs break-words whitespace-pre-wrap">
                {`<button onClick={() => alert("Hello!")}>
  Click
</button>`}
              </pre>
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Input Event Example
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 max-sm:text-xs break-words whitespace-pre-wrap">
                {`function App() {
  function handleChange(e) {
    console.log(e.target.value);
  }

  return (
    <input onChange={handleChange} />
  );
}`}
              </pre>
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Form Submit Event
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 max-sm:text-xs break-words whitespace-pre-wrap">
                {`function App() {
  function handleSubmit(e) {
    e.preventDefault();
    alert("Form Submitted");
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Send</button>
    </form>
  );
}`}
              </pre>
            </div>

            <div className="border-l-4 border-cyan-500 bg-cyan-500/5 rounded-r-lg p-4 text-sm text-cyan-200 leading-relaxed mb-8">
              💡 e.preventDefault() stops page refresh in forms.
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Passing Parameters
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 max-sm:text-xs break-words whitespace-pre-wrap">
                {`function App() {
  function greet(name) {
    alert("Hello " + name);
  }

  return (
    <button onClick={() => greet("Mostafa")}>
      Greet
    </button>
  );
}`}
              </pre>
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Event Object
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 max-sm:text-xs break-words whitespace-pre-wrap">
                {`function App() {
  function handleClick(e) {
    console.log(e.target);
  }

  return (
    <button onClick={handleClick}>
      Click
    </button>
  );
}`}
              </pre>
            </div>

            <hr className="border-white/10 mb-8" />

            <div className="bg-[#0f1117] border border-white/7 rounded-xl p-5">
              <p className="text-cyan-400 text-sm font-medium mb-3">
                Event Rules
              </p>

              <ul className="text-xs text-slate-400 space-y-2">
                <li>• Use camelCase for events (onClick, onChange).</li>
                <li>• Pass function reference, not function call.</li>
                <li>• Use arrow functions for parameters.</li>
                <li>• Use e.preventDefault() for forms.</li>
                <li>• Events are React Synthetic Events.</li>
              </ul>
            </div>
          </div>

          {/* lesson 7 */}
          <div
            id="rendering"
            className="bg-[#161b27] p-10 border border-white/10 rounded-xl w-full max-w-3xl max-sm:px-5"
          >
            <span className="inline-block bg-cyan-500/10 text-cyan-400 text-xs px-4 py-1 rounded-full mb-4">
              Lesson 7
            </span>

            <h2 className="text-2xl font-semibold text-slate-100 mb-2">
              Conditional Rendering
            </h2>

            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              Conditional rendering means showing different UI based on
              conditions like state, props, or logic inside your component.
            </p>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Why Conditional Rendering?
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {[
                {
                  title: "Dynamic UI",
                  desc: "Show different content based on user actions.",
                  color: "text-cyan-400",
                },
                {
                  title: "Better UX",
                  desc: "Display only relevant information.",
                  color: "text-blue-400",
                },
                {
                  title: "Control Flow",
                  desc: "Decide what the user should see.",
                  color: "text-green-400",
                },
                {
                  title: "State Driven",
                  desc: "UI changes automatically with state.",
                  color: "text-purple-400",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-[#0f1117] border border-white/7 rounded-xl p-5"
                >
                  <p className={`text-sm font-medium mb-2 ${item.color}`}>
                    {item.title}
                  </p>

                  <p className="text-xs text-slate-500">{item.desc}</p>
                </div>
              ))}
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              If Statement Example
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 max-sm:text-xs break-words whitespace-pre-wrap">
                {`function App() {
  const isLoggedIn = true;

  if (isLoggedIn) {
    return <h1>Welcome Back</h1>;
  }

  return <h1>Please Login</h1>;
}`}
              </pre>
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Ternary Operator (Most Used)
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 max-sm:text-xs break-words whitespace-pre-wrap">
                {`function App() {
  const isLoggedIn = false;

  return (
    <h1>
      {isLoggedIn ? "Welcome Back" : "Please Login"}
    </h1>
  );
}`}
              </pre>
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Logical AND (&&)
            </p>

            <p className="text-sm text-slate-400 mb-3">
              Used when you want to show something only if condition is true.
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 max-sm:text-xs break-words whitespace-pre-wrap">
                {`function App() {
  const isLoggedIn = true;

  return (
    <div>
      {isLoggedIn && <h1>Dashboard</h1>}
    </div>
  );
}`}
              </pre>
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Conditional With State
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 max-sm:text-xs break-words whitespace-pre-wrap">
                {`import { useState } from "react";

function App() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div>
      <h1>{isOn ? "ON" : "OFF"}</h1>

      <button onClick={() => setIsOn(!isOn)}>
        Toggle
      </button>
    </div>
  );
}`}
              </pre>
            </div>

            <div className="border-l-4 border-cyan-500 bg-cyan-500/5 rounded-r-lg p-4 text-sm text-cyan-200 leading-relaxed mb-8">
              💡 Conditional rendering is often combined with useState.
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Show / Hide Elements
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 max-sm:text-xs break-words whitespace-pre-wrap">
                {`function App() {
  const [show, setShow] = useState(true);

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        Toggle Text
      </button>

      {show && <p>Hello React</p>}
    </div>
  );
}`}
              </pre>
            </div>

            <hr className="border-white/10 mb-8" />

            <div className="bg-[#0f1117] border border-white/7 rounded-xl p-5">
              <p className="text-cyan-400 text-sm font-medium mb-3">
                Conditional Rendering Rules
              </p>

              <ul className="text-xs text-slate-400 space-y-2">
                <li>• Use if/else for complex logic.</li>
                <li>• Use ternary for simple conditions.</li>
                <li>• Use && when only condition is needed.</li>
                <li>• Combine with useState for dynamic UI.</li>
                <li>• Keep conditions simple and readable.</li>
              </ul>
            </div>
          </div>

          {/* lesson 8 */}
          <div
            id="lists"
            className="bg-[#161b27] p-10 border border-white/10 rounded-xl w-full max-w-3xl max-sm:px-5"
          >
            <span className="inline-block bg-cyan-500/10 text-cyan-400 text-xs px-4 py-1 rounded-full mb-4">
              Lesson 8
            </span>

            <h2 className="text-2xl font-semibold text-slate-100 mb-2">
              Lists & Keys
            </h2>

            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              Lists in React are used to render multiple elements dynamically.
              Keys help React identify each item and update the UI efficiently.
            </p>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Why Lists?
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {[
                {
                  title: "Dynamic Data",
                  desc: "Render arrays of data easily.",
                  color: "text-cyan-400",
                },
                {
                  title: "Reusable UI",
                  desc: "Same component for multiple items.",
                  color: "text-blue-400",
                },
                {
                  title: "Clean Code",
                  desc: "Avoid repeating code manually.",
                  color: "text-green-400",
                },
                {
                  title: "Efficient Rendering",
                  desc: "React updates only changed items.",
                  color: "text-purple-400",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-[#0f1117] border border-white/7 rounded-xl p-5"
                >
                  <p className={`text-sm font-medium mb-2 ${item.color}`}>
                    {item.title}
                  </p>

                  <p className="text-xs text-slate-500">{item.desc}</p>
                </div>
              ))}
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Rendering Lists
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 max-sm:text-xs break-words whitespace-pre-wrap">
                {`function App() {
  const users = ["Ali", "Ahmed", "Mostafa"];

  return (
    <ul>
      {users.map((user) => (
        <li>{user}</li>
      ))}
    </ul>
  );
}`}
              </pre>
            </div>

            <div className="border-l-4 border-red-500 bg-red-500/5 rounded-r-lg p-4 text-sm text-red-200 leading-relaxed mb-8">
              ⚠️ Missing key will cause warning in console.
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Using Keys
            </p>

            <p className="text-sm text-slate-400 mb-3">
              Keys help React identify each element in a list.
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 max-sm:text-xs break-words whitespace-pre-wrap">
                {`function App() {
  const users = [
    { id: 1, name: "Ali" },
    { id: 2, name: "Ahmed" },
    { id: 3, name: "Mostafa" }
  ];

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.name}
        </li>
      ))}
    </ul>
  );
}`}
              </pre>
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Why Keys Are Important?
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 max-sm:text-xs break-words whitespace-pre-wrap">
                {`React uses keys to:
- Track items in a list
- Update only changed items
- Improve performance
- Avoid rendering bugs`}
              </pre>
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Wrong Usage Example
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 max-sm:text-xs break-words whitespace-pre-wrap">
                {`{users.map((user, index) => (
  <li key={index}>
    {user.name}
  </li>
))}`}
              </pre>
            </div>

            <div className="border-l-4 border-red-500 bg-red-500/5 rounded-r-lg p-4 text-sm text-red-200 leading-relaxed mb-8">
              ⚠️ Using index as key is not recommended if list can change.
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              List With Components
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 max-sm:text-xs break-words whitespace-pre-wrap">
                {`function User({ name }) {
  return <li>{name}</li>;
}

function App() {
  const users = ["Ali", "Ahmed"];

  return (
    <ul>
      {users.map((user, i) => (
        <User key={i} name={user} />
      ))}
    </ul>
  );
}`}
              </pre>
            </div>

            <hr className="border-white/10 mb-8" />

            <div className="bg-[#0f1117] border border-white/7 rounded-xl p-5">
              <p className="text-cyan-400 text-sm font-medium mb-3">
                Lists & Keys Rules
              </p>

              <ul className="text-xs text-slate-400 space-y-2">
                <li>• Use map() to render lists.</li>
                <li>• Each item must have a unique key.</li>
                <li>• Prefer stable IDs over array index.</li>
                <li>• Keys help React optimize rendering.</li>
                <li>• Never skip keys in dynamic lists.</li>
              </ul>
            </div>
          </div>

          {/* lesson 9 */}
          <div
            id="effects"
            className="bg-[#161b27] p-10 border border-white/10 rounded-xl w-full max-w-3xl max-sm:px-5"
          >
            <span className="inline-block bg-cyan-500/10 text-cyan-400 text-xs px-4 py-1 rounded-full mb-4">
              Lesson 9
            </span>

            <h2 className="text-2xl font-semibold text-slate-100 mb-2">
              useEffect Hook
            </h2>

            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              useEffect is a React Hook used to handle side effects like
              fetching data, timers, subscriptions, and interacting with the
              browser.
            </p>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              What Is a Side Effect?
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {[
                {
                  title: "Fetch Data",
                  desc: "Load data from APIs or servers.",
                  color: "text-cyan-400",
                },
                {
                  title: "Timers",
                  desc: "setTimeout and setInterval logic.",
                  color: "text-blue-400",
                },
                {
                  title: "DOM Updates",
                  desc: "Direct interaction with browser APIs.",
                  color: "text-green-400",
                },
                {
                  title: "Subscriptions",
                  desc: "Listen to external data sources.",
                  color: "text-purple-400",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-[#0f1117] border border-white/7 rounded-xl p-5"
                >
                  <p className={`text-sm font-medium mb-2 ${item.color}`}>
                    {item.title}
                  </p>

                  <p className="text-xs text-slate-500">{item.desc}</p>
                </div>
              ))}
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Import useEffect
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 max-sm:text-xs break-words whitespace-pre-wrap">
                {`import { useEffect } from "react";`}
              </pre>
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Basic useEffect
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 max-sm:text-xs break-words whitespace-pre-wrap">
                {`useEffect(() => {
  console.log("Component Mounted");
});`}
              </pre>
            </div>

            <div className="border-l-4 border-red-500 bg-red-500/5 rounded-r-lg p-4 text-sm text-red-200 leading-relaxed mb-8">
              ⚠️ This runs on every render (not recommended usually).
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Run Once (Component Mount)
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 max-sm:text-xs break-words whitespace-pre-wrap ">
                {`useEffect(() => {
  console.log("Runs only once");
}, []);`}
              </pre>
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Dependency Array
            </p>

            <p className="text-sm text-slate-400 mb-3">
              useEffect runs when dependencies change.
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 max-sm:text-xs break-words whitespace-pre-wrap ">
                {`useEffect(() => {
  console.log("Count changed");
}, [count]);`}
              </pre>
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Fetching Data Example
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 max-sm:text-xs break-words whitespace-pre-wrap ">
                {`useEffect(() => {
  fetch("https://api.example.com/users")
    .then((res) => res.json())
    .then((data) => console.log(data));
}, []);`}
              </pre>
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Cleanup Function
            </p>

            <p className="text-sm text-slate-400 mb-3">
              Used to clean timers or subscriptions.
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 max-sm:text-xs break-words whitespace-pre-wrap ">
                {`useEffect(() => {
  const timer = setInterval(() => {
    console.log("Running...");
  }, 1000);

  return () => clearInterval(timer);
}, []);`}
              </pre>
            </div>

            <div className="border-l-4 border-cyan-500 bg-cyan-500/5 rounded-r-lg p-4 text-sm text-cyan-200 leading-relaxed mb-8">
              💡 Cleanup runs when component unmounts.
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Common Use Cases
            </p>

            <div className="bg-[#0f1117] border border-white/7 rounded-xl p-5 mb-8">
              <ul className="text-xs text-slate-400 space-y-2">
                <li>• Fetching API data</li>
                <li>• Setting timers (setTimeout / setInterval)</li>
                <li>• Listening to events</li>
                <li>• Updating document title</li>
                <li>• Syncing with localStorage</li>
              </ul>
            </div>

            <hr className="border-white/10 mb-8" />

            <div className="bg-[#0f1117] border border-white/7 rounded-xl p-5">
              <p className="text-cyan-400 text-sm font-medium mb-3">
                useEffect Rules
              </p>

              <ul className="text-xs text-slate-400 space-y-2">
                <li>• Runs after rendering.</li>
                <li>• Use [] to run once.</li>
                <li>• Use dependencies to control updates.</li>
                <li>• Always cleanup when needed.</li>
                <li>• Avoid unnecessary effects.</li>
              </ul>
            </div>
          </div>

          {/* lesson 10 */}
          <div
            id="forms"
            className="bg-[#161b27] p-10 border border-white/10 rounded-xl w-full max-w-3xl max-sm:px-5"
          >
            <span className="inline-block bg-cyan-500/10 text-cyan-400 text-xs px-4 py-1 rounded-full mb-4">
              Lesson 10
            </span>

            <h2 className="text-2xl font-semibold text-slate-100 mb-2">
              Forms in React
            </h2>

            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              Forms in React are used to collect user input like text, emails,
              passwords, and send data to state or APIs.
            </p>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Why Forms Matter?
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {[
                {
                  title: "User Input",
                  desc: "Collect data from users.",
                  color: "text-cyan-400",
                },
                {
                  title: "State Driven",
                  desc: "Form data is stored in state.",
                  color: "text-blue-400",
                },
                {
                  title: "Dynamic UI",
                  desc: "UI updates while typing.",
                  color: "text-green-400",
                },
                {
                  title: "Validation Ready",
                  desc: "Easy to validate input data.",
                  color: "text-purple-400",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-[#0f1117] border border-white/7 rounded-xl p-5"
                >
                  <p className={`text-sm font-medium mb-2 ${item.color}`}>
                    {item.title}
                  </p>

                  <p className="text-xs text-slate-500">{item.desc}</p>
                </div>
              ))}
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Controlled Component
            </p>

            <p className="text-sm text-slate-400 mb-3">
              React controls the input using state.
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 max-sm:text-xs break-words whitespace-pre-wrap">
                {`import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  return (
    <input
      value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder="Enter your name"
    />
  );
}`}
              </pre>
            </div>

            <div className="border-l-4 border-cyan-500 bg-cyan-500/5 rounded-r-lg p-4 text-sm text-cyan-200 leading-relaxed mb-8">
              💡 Controlled input means React is the single source of truth.
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Multiple Inputs
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 max-sm:text-xs break-words whitespace-pre-wrap">
                {`function App() {
  const [form, setForm] = useState({
    name: "",
    email: ""
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  return (
    <>
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
      />

      <input
        name="email"
        value={form.email}
        onChange={handleChange}
      />
    </>
  );
}`}
              </pre>
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Form Submit
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 max-sm:text-xs break-words whitespace-pre-wrap">
                {`function App() {
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(name);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button type="submit">
        Send
      </button>
    </form>
  );
}`}
              </pre>
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Uncontrolled Component
            </p>

            <p className="text-sm text-slate-400 mb-3">
              Using ref instead of state.
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 max-sm:text-xs break-words whitespace-pre-wrap">
                {`import { useRef } from "react";

function App() {
  const inputRef = useRef();

  function handleSubmit() {
    console.log(inputRef.current.value);
  }

  return (
    <>
      <input ref={inputRef} />

      <button onClick={handleSubmit}>
        Send
      </button>
    </>
  );
}`}
              </pre>
            </div>

            <hr className="border-white/10 mb-8" />

            <div className="bg-[#0f1117] border border-white/7 rounded-xl p-5">
              <p className="text-cyan-400 text-sm font-medium mb-3">
                Forms Rules
              </p>

              <ul className="text-xs text-slate-400 space-y-2">
                <li>• Controlled inputs use state.</li>
                <li>• Always use onChange for inputs.</li>
                <li>• Use e.preventDefault() on submit.</li>
                <li>• Prefer controlled components.</li>
                <li>• Use useRef only when needed.</li>
              </ul>
            </div>
          </div>

          {/* lesson 11 */}
          <div
            id="lifting-state"
            className="bg-[#161b27] p-10 border border-white/10 rounded-xl w-full max-w-3xl max-sm:px-5"
          >
            <span className="inline-block bg-cyan-500/10 text-cyan-400 text-xs px-4 py-1 rounded-full mb-4">
              Lesson 11
            </span>

            <h2 className="text-2xl font-semibold text-slate-100 mb-2">
              Lifting State Up
            </h2>

            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              Lifting state up means moving state to the closest common parent
              component so multiple child components can share and sync the same
              data.
            </p>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Why Lift State Up?
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {[
                {
                  title: "Shared Data",
                  desc: "Multiple components use the same state.",
                  color: "text-cyan-400",
                },
                {
                  title: "Single Source",
                  desc: "One place controls the data.",
                  color: "text-blue-400",
                },
                {
                  title: "Sync UI",
                  desc: "All components update together.",
                  color: "text-green-400",
                },
                {
                  title: "Avoid Duplication",
                  desc: "No repeated state in multiple components.",
                  color: "text-purple-400",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-[#0f1117] border border-white/7 rounded-xl p-5"
                >
                  <p className={`text-sm font-medium mb-2 ${item.color}`}>
                    {item.title}
                  </p>

                  <p className="text-xs text-slate-500">{item.desc}</p>
                </div>
              ))}
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Problem Without Lifting State
            </p>

            <p className="text-sm text-slate-400 mb-3">
              Each component has its own state → no sync between them.
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 max-sm:text-xs break-words whitespace-pre-wrap">
                {`function ChildA() {
  const [value, setValue] = useState("");
}

function ChildB() {
  const [value, setValue] = useState("");
}`}
              </pre>
            </div>

            <div className="border-l-4 border-red-500 bg-red-500/5 rounded-r-lg p-4 text-sm text-red-200 leading-relaxed mb-8">
              ⚠️ These states are independent and not synchronized.
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Solution: Lift State Up
            </p>

            <p className="text-sm text-slate-400 mb-3">
              Move state to the parent component and pass it as props.
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 max-sm:text-xs break-words whitespace-pre-wrap">
                {`function Parent() {
  const [value, setValue] = useState("");

  return (
    <>
      <ChildA value={value} setValue={setValue} />
      <ChildB value={value} />
    </>
  );
}`}
              </pre>
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Child Component Receiving Props
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 max-sm:text-xs break-words whitespace-pre-wrap">
                {`function ChildA({ value, setValue }) {
  return (
    <input
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}`}
              </pre>
            </div>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 max-sm:text-xs break-words whitespace-pre-wrap">
                {`function ChildB({ value }) {
  return <h1>{value}</h1>;
}`}
              </pre>
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              How It Works
            </p>

            <div className="bg-[#0f1117] border border-white/7 rounded-xl p-5 mb-8">
              <ul className="text-xs text-slate-400 space-y-2">
                <li>• State is stored in the parent component.</li>
                <li>• Data is passed down via props.</li>
                <li>• Child components update state through functions.</li>
                <li>• UI stays synchronized across components.</li>
              </ul>
            </div>

            <div className="border-l-4 border-cyan-500 bg-cyan-500/5 rounded-r-lg p-4 text-sm text-cyan-200 leading-relaxed mb-8">
              💡 Lifting state up is one of the most important React patterns
              for sharing data.
            </div>

            <hr className="border-white/10 mb-8" />

            <div className="bg-[#0f1117] border border-white/7 rounded-xl p-5">
              <p className="text-cyan-400 text-sm font-medium mb-3">Key Rule</p>

              <p className="text-xs text-slate-400 leading-relaxed">
                Keep state in the lowest common parent that needs access to it.
              </p>
            </div>
          </div>

          {/* lesson 12 */}
          <div
            id="context"
            className="bg-[#161b27] p-10 border border-white/10 rounded-xl w-full max-w-3xl max-sm:px-5"
          >
            <span className="inline-block bg-cyan-500/10 text-cyan-400 text-xs px-4 py-1 rounded-full mb-4">
              Lesson 12
            </span>

            <h2 className="text-2xl font-semibold text-slate-100 mb-2">
              Context API
            </h2>

            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              Context API allows you to share data between components without
              passing props manually at every level (no prop drilling).
            </p>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Problem: Prop Drilling
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 max-sm:text-xs break-words whitespace-pre-wrap">
                {`App → Parent → Child → GrandChild

props passed again and again ❌`}
              </pre>
            </div>

            <div className="border-l-4 border-red-500 bg-red-500/5 rounded-r-lg p-4 text-sm text-red-200 leading-relaxed mb-8">
              ⚠️ Passing props through many layers makes code messy and hard to
              maintain.
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Solution: Context API
            </p>

            <p className="text-sm text-slate-400 mb-3">
              Create a global context that any component can access directly.
            </p>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              1. Create Context
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 max-sm:text-xs break-words whitespace-pre-wrap">
                {`import { createContext } from "react";

export const UserContext = createContext();`}
              </pre>
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              2. Provide Context (Provider)
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 max-sm:text-xs break-words whitespace-pre-wrap">
                {`function App() {
  const user = { name: "Mostafa" };

  return (
    <UserContext.Provider value={user}>
      <Child />
    </UserContext.Provider>
  );
}`}
              </pre>
            </div>

            <div className="border-l-4 border-cyan-500 bg-cyan-500/5 rounded-r-lg p-4 text-sm text-cyan-200 leading-relaxed mb-8">
              💡 Provider makes data available to all child components.
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              3. Consume Context (useContext)
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 max-sm:text-xs break-words whitespace-pre-wrap">
                {`import { useContext } from "react";
import { UserContext } from "./UserContext";

function Child() {
  const user = useContext(UserContext);

  return <h1>{user.name}</h1>;
}`}
              </pre>
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Full Flow
            </p>

            <div className="bg-[#0f1117] border border-white/7 rounded-xl p-5 mb-8">
              <ul className="text-xs text-slate-400 space-y-2">
                <li>• Create Context</li>
                <li>• Wrap App with Provider</li>
                <li>• Pass value to Provider</li>
                <li>• Use useContext in any child</li>
              </ul>
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              When To Use Context
            </p>

            <div className="bg-[#0f1117] border border-white/7 rounded-xl p-5 mb-8">
              <ul className="text-xs text-slate-400 space-y-2">
                <li>• Theme (dark/light mode)</li>
                <li>• User authentication</li>
                <li>• Language (i18n)</li>
                <li>• Global settings</li>
              </ul>
            </div>

            <div className="border-l-4 border-cyan-500 bg-cyan-500/5 rounded-r-lg p-4 text-sm text-cyan-200 leading-relaxed">
              💡 Use Context only for global data, not everything (not for small
              local state).
            </div>
          </div>

          {/* lesson 13 */}
          <div
            id="routing"
            className="bg-[#161b27] p-10 border border-white/10 rounded-xl w-full max-w-3xl max-sm:px-5"
          >
            <span className="inline-block bg-cyan-500/10 text-cyan-400 text-xs px-4 py-1 rounded-full mb-4">
              Lesson 13
            </span>

            <h2 className="text-2xl font-semibold text-slate-100 mb-2">
              React Router
            </h2>

            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              React Router is used to create multi-page navigation in React
              without reloading the page (Single Page Application).
            </p>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Why React Router?
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {[
                {
                  title: "No Page Reload",
                  desc: "Navigation is instant.",
                  color: "text-cyan-400",
                },
                {
                  title: "SPA System",
                  desc: "Single Page Application behavior.",
                  color: "text-blue-400",
                },
                {
                  title: "Better UX",
                  desc: "Fast and smooth transitions.",
                  color: "text-green-400",
                },
                {
                  title: "Organized Pages",
                  desc: "Split app into routes.",
                  color: "text-purple-400",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-[#0f1117] border border-white/7 rounded-xl p-5"
                >
                  <p className={`text-sm font-medium mb-2 ${item.color}`}>
                    {item.title}
                  </p>

                  <p className="text-xs text-slate-500">{item.desc}</p>
                </div>
              ))}
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Install React Router
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300  max-sm:text-xs break-words whitespace-pre-wrap">
                {`npm install react-router-dom`}
              </pre>
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Setup Router
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300  max-sm:text-xs break-words whitespace-pre-wrap">
                {`import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}`}
              </pre>
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Create Pages
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300  max-sm:text-xs break-words whitespace-pre-wrap">
                {`function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}`}
              </pre>
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Navigation Links
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto "
              dir="ltr"
            >
              <pre className="text-slate-300  max-sm:text-xs break-words whitespace-pre-wrap">
                {`import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </>
  );
}`}
              </pre>
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              NavLink (Active Link Styling)
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300  max-sm:text-xs break-words whitespace-pre-wrap">
                {`import { NavLink } from "react-router-dom";

<NavLink
  to="/about"
  className={({ isActive }) =>
    isActive ? "text-yellow-400" : "text-white"
  }
>
  About
</NavLink>`}
              </pre>
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Dynamic Routes
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300  max-sm:text-xs break-words whitespace-pre-wrap">
                {`<Route path="/user/:id" element={<User />} />`}
              </pre>
            </div>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300  max-sm:text-xs break-words whitespace-pre-wrap">
                {`import { useParams } from "react-router-dom";

function User() {
  const { id } = useParams();

  return <h1>User ID: {id}</h1>;
}`}
              </pre>
            </div>

            <hr className="border-white/10 mb-8" />

            <div className="bg-[#0f1117] border border-white/7 rounded-xl p-5">
              <p className="text-cyan-400 text-sm font-medium mb-3">
                React Router Rules
              </p>

              <ul className="text-xs text-slate-400 space-y-2">
                <li>• Use BrowserRouter once at top level.</li>
                <li>• Routes define pages.</li>
                <li>• Link replaces anchor tag.</li>
                <li>• NavLink for active styling.</li>
                <li>• useParams for dynamic routes.</li>
              </ul>
            </div>
          </div>

          {/* lesson 14 */}
          <div
            id="fetching"
            className="bg-[#161b27] p-10 border border-white/10 rounded-xl w-full max-w-3xl max-sm:px-5"
          >
            <span className="inline-block bg-cyan-500/10 text-cyan-400 text-xs px-4 py-1 rounded-full mb-4">
              Lesson 14
            </span>

            <h2 className="text-2xl font-semibold text-slate-100 mb-2">
              Fetching Data in React
            </h2>

            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              Fetching data means getting information from an API (server) and
              showing it inside your React app.
            </p>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Why Fetch Data?
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {[
                {
                  title: "Dynamic Content",
                  desc: "Show real-time data from APIs.",
                  color: "text-cyan-400",
                },
                {
                  title: "Live Apps",
                  desc: "Build dashboards and social apps.",
                  color: "text-blue-400",
                },
                {
                  title: "External Data",
                  desc: "Connect to backend servers.",
                  color: "text-green-400",
                },
                {
                  title: "Real Projects",
                  desc: "Used in almost every app.",
                  color: "text-purple-400",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-[#0f1117] border border-white/7 rounded-xl p-5"
                >
                  <p className={`text-sm font-medium mb-2 ${item.color}`}>
                    {item.title}
                  </p>

                  <p className="text-xs text-slate-500">{item.desc}</p>
                </div>
              ))}
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Basic Fetch (useEffect)
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 max-sm:text-xs break-words whitespace-pre-wrap">
                {`import { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch("https://api.example.com/users")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return <h1>Users</h1>;
}`}
              </pre>
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Store Data in State
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 max-sm:text-xs break-words whitespace-pre-wrap">
                {`import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://api.example.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}`}
              </pre>
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Async / Await Version (Cleaner)
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 max-sm:text-xs break-words whitespace-pre-wrap">
                {`import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      const res = await fetch("https://api.example.com/users");
      const data = await res.json();
      setUsers(data);
    }

    getUsers();
  }, []);

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}`}
              </pre>
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Loading State
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 max-sm:text-xs break-words whitespace-pre-wrap">
                {`const [loading, setLoading] = useState(true);

useEffect(() => {
  async function getData() {
    const res = await fetch("https://api.example.com/users");
    const data = await res.json();

    setUsers(data);
    setLoading(false);
  }

  getData();
}, []);`}
              </pre>
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Conditional UI
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 max-sm:text-xs break-words whitespace-pre-wrap">
                {`return (
  <div>
    {loading ? (
      <p>Loading...</p>
    ) : (
      users.map((u) => <p key={u.id}>{u.name}</p>)
    )}
  </div>
);`}
              </pre>
            </div>

            <div className="border-l-4 border-cyan-500 bg-cyan-500/5 rounded-r-lg p-4 text-sm text-cyan-200 leading-relaxed mb-8">
              💡 Always show loading state when fetching data from APIs.
            </div>

            <hr className="border-white/10 mb-8" />

            <div className="bg-[#0f1117] border border-white/7 rounded-xl p-5">
              <p className="text-cyan-400 text-sm font-medium mb-3">
                Fetching Rules
              </p>

              <ul className="text-xs text-slate-400 space-y-2">
                <li>• Use useEffect for API calls.</li>
                <li>• Store data in state.</li>
                <li>• Always handle loading state.</li>
                <li>• Use async/await for cleaner code.</li>
                <li>• Always handle errors in real apps.</li>
              </ul>
            </div>
          </div>

          {/* lesson 15 */}
          <div
            id="custom-hooks"
            className="bg-[#161b27] p-10 border border-white/10 rounded-xl w-full max-w-3xl max-sm:px-5"
          >
            <span className="inline-block bg-cyan-500/10 text-cyan-400 text-xs px-4 py-1 rounded-full mb-4">
              Lesson 15
            </span>

            <h2 className="text-2xl font-semibold text-slate-100 mb-2">
              Custom Hooks
            </h2>

            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              Custom Hooks allow you to create your own reusable hooks using
              React Hooks such as useState and useEffect. They help you avoid
              repeating the same logic in multiple components.
            </p>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              What Is A Custom Hook?
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {[
                {
                  title: "Reusable Logic",
                  desc: "Write logic once and use it in multiple components.",
                  color: "text-cyan-400",
                },
                {
                  title: "Cleaner Code",
                  desc: "Keep components focused on rendering UI.",
                  color: "text-blue-400",
                },
                {
                  title: "Built With Hooks",
                  desc: "Custom Hooks are created using React Hooks.",
                  color: "text-green-400",
                },
                {
                  title: "Less Repetition",
                  desc: "Avoid copying the same state logic everywhere.",
                  color: "text-purple-400",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-[#0f1117] border border-white/7 rounded-xl p-5"
                >
                  <p className={`text-sm font-medium mb-2 ${item.color}`}>
                    {item.title}
                  </p>

                  <p className="text-xs text-slate-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Why Do We Need Them?
            </p>

            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              Imagine you have many components that need a counter. Writing the
              same useState logic again and again is not ideal.
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 max-sm:text-xs break-words whitespace-pre-wrap">
                {`const [count, setCount] = useState(0);

function increment() {
  setCount(count + 1);
}`}
              </pre>
            </div>

            <div className="border-l-4 border-cyan-500 bg-cyan-500/5 rounded-r-lg p-4 text-sm text-cyan-200 leading-relaxed mb-8">
              💡 Instead of repeating this logic in many components, we can
              create our own hook.
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Creating A Custom Hook
            </p>

            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              A Custom Hook is simply a function that starts with "use" and uses
              React Hooks internally.
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 max-sm:text-xs break-words whitespace-pre-wrap">
                {`import { useState } from "react";

function useCounter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  return {
    count,
    increment,
  };
}`}
              </pre>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed mb-8">
              Here we created our own hook called useCounter using React's
              useState hook.
            </p>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Using The Custom Hook
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 max-sm:text-xs break-words whitespace-pre-wrap">
                {`function Counter() {
  const {
    count,
    increment,
  } = useCounter();

  return (
    <>
      <h2>{count}</h2>

      <button onClick={increment}>
        Increase
      </button>
    </>
  );
}`}
              </pre>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed mb-8">
              Notice that we use useCounter exactly like useState or any other
              React Hook.
            </p>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Another Example
            </p>

            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              We can create a hook to manage an input field.
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 max-sm:text-xs break-words whitespace-pre-wrap">
                {`import { useState } from "react";

function useInput() {
  const [value, setValue] =
    useState("");

  function handleChange(e) {
    setValue(e.target.value);
  }

  return {
    value,
    handleChange,
  };
}`}
              </pre>
            </div>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 max-sm:text-xs break-words whitespace-pre-wrap">
                {`function App() {
  const {
    value,
    handleChange,
  } = useInput();

  return (
    <>
      <input
        type="text"
        value={value}
        onChange={handleChange}
      />

      <p>{value}</p>
    </>
  );
}`}
              </pre>
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Rules For Custom Hooks
            </p>

            <div className="flex flex-col gap-3 mb-8">
              {[
                "The function name must start with use.",
                "Custom Hooks can use useState, useEffect and other hooks.",
                "Keep hooks focused on reusable logic.",
                "Do not call hooks inside loops or conditions.",
                "Return any data or functions that components need.",
              ].map((item) => (
                <div
                  key={item}
                  className="bg-[#0f1117] border border-white/7 rounded-xl p-4"
                >
                  <p className="text-slate-300 text-sm">{item}</p>
                </div>
              ))}
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Summary
            </p>

            <div className="flex flex-col gap-3">
              {[
                {
                  tag: "React Hooks",
                  desc: "Custom Hooks are built using existing React Hooks.",
                  color: "text-cyan-400",
                },
                {
                  tag: "Reusable",
                  desc: "Write logic once and use it many times.",
                  color: "text-blue-400",
                },
                {
                  tag: "Clean Code",
                  desc: "Keep components simple and easy to read.",
                  color: "text-green-400",
                },
                {
                  tag: "Powerful",
                  desc: "Create hooks for forms, counters, themes and more.",
                  color: "text-purple-400",
                },
              ].map((item) => (
                <div
                  key={item.tag}
                  className="bg-[#0f1117] border border-white/7 rounded-xl p-4"
                >
                  <p className={`font-medium text-sm mb-1 ${item.color}`}>
                    {item.tag}
                  </p>

                  <p className="text-xs text-slate-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* lesson 16 */}
          <div
            id="performance"
            className="bg-[#161b27] p-10 border border-white/10 rounded-xl w-full max-w-3xl max-sm:px-5"
          >
            <span className="inline-block bg-cyan-500/10 text-cyan-400 text-xs px-4 py-1 rounded-full mb-4">
              Lesson 16
            </span>

            <h2 className="text-2xl font-semibold text-slate-100 mb-2">
              Performance Basics
            </h2>

            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              React performance means making your app faster and avoiding
              unnecessary re-renders. In simple words: render only what needs to
              change.
            </p>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              What Causes Slow Performance?
            </p>

            <div className="flex flex-col gap-3 mb-8">
              {[
                "Unnecessary re-renders",
                "Heavy calculations inside components",
                "Passing new objects/arrays every render",
                "Not memoizing expensive logic",
              ].map((item) => (
                <div
                  key={item}
                  className="bg-[#0f1117] border border-white/7 rounded-xl p-4"
                >
                  <p className="text-slate-300 text-sm">{item}</p>
                </div>
              ))}
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Problem Example
            </p>

            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              Every time the parent component re-renders, the child also
              re-renders even if nothing changed.
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 max-sm:text-xs break-words whitespace-pre-wrap">
                {`function Child() {
  console.log("Child rendered");

  return <h2>Child Component</h2>;
}

function Parent() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>

      <Child />
    </>
  );
}`}
              </pre>
            </div>

            <div className="border-l-4 border-cyan-500 bg-cyan-500/5 rounded-r-lg p-4 text-sm text-cyan-200 leading-relaxed mb-8">
              💡 Even if Child doesn’t depend on state, it still re-renders.
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Solution: React.memo
            </p>

            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              React.memo prevents unnecessary re-renders if props didn’t change.
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 max-sm:text-xs break-words whitespace-pre-wrap">
                {`const Child = React.memo(function Child() {
  console.log("Child rendered");

  return <h2>Child Component</h2>;
});`}
              </pre>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed mb-8">
              Now Child will only re-render if its props change.
            </p>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Avoid Recreating Objects
            </p>

            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              New objects/arrays cause re-renders even if values are the same.
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 max-sm:text-xs break-words whitespace-pre-wrap">
                {`function Parent() {
  const data = { name: "Mostafa" };

  return <Child data={data} />;
}`}
              </pre>
            </div>

            <div className="border-l-4 border-cyan-500 bg-cyan-500/5 rounded-r-lg p-4 text-sm text-cyan-200 leading-relaxed mb-8">
              💡 Every render creates a new object in memory.
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Solution: useMemo
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 max-sm:text-xs break-words whitespace-pre-wrap">
                {`const data = useMemo(() => {
  return { name: "Mostafa" };
}, []);`}
              </pre>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed mb-8">
              useMemo keeps the same object between renders unless dependencies
              change.
            </p>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Expensive Functions
            </p>

            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              If you have heavy calculations, React will re-run them every
              render.
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 max-sm:text-xs break-words whitespace-pre-wrap">
                {`function App() {
  const result = heavyCalculation();

  return <h1>{result}</h1>;
}`}
              </pre>
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Solution: useMemo for calculations
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 max-sm:text-xs break-words whitespace-pre-wrap">
                {`const result = useMemo(() => {
  return heavyCalculation();
}, []);`}
              </pre>
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Summary
            </p>

            <div className="flex flex-col gap-3">
              {[
                {
                  title: "React Re-renders",
                  desc: "React re-renders components when state or props change.",
                  color: "text-cyan-400",
                },
                {
                  title: "React.memo",
                  desc: "Prevents unnecessary child re-renders.",
                  color: "text-blue-400",
                },
                {
                  title: "useMemo",
                  desc: "Prevents recalculating heavy values every render.",
                  color: "text-green-400",
                },
                {
                  title: "Optimization Goal",
                  desc: "Render only what is necessary.",
                  color: "text-purple-400",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-[#0f1117] border border-white/7 rounded-xl p-4"
                >
                  <p className={`font-medium text-sm mb-1 ${item.color}`}>
                    {item.title}
                  </p>

                  <p className="text-xs text-slate-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* lesson 17 */}
          <div
            id="project-structure"
            className="bg-[#161b27] p-10 border border-white/10 rounded-xl w-full max-w-3xl max-sm:px-5"
          >
            <span className="inline-block bg-cyan-500/10 text-cyan-400 text-xs px-4 py-1 rounded-full mb-4">
              Lesson 17
            </span>

            <h2 className="text-2xl font-semibold text-slate-100 mb-2">
              Project Structure
            </h2>

            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              Project structure in React means how you organize your files and
              folders. A good structure makes your app easier to maintain,
              scale, and debug.
            </p>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Why Structure Matters?
            </p>

            <div className="flex flex-col gap-3 mb-8">
              {[
                "Makes your code easier to read",
                "Helps when project grows bigger",
                "Improves team collaboration",
                "Avoids messy codebase",
              ].map((item) => (
                <div
                  key={item}
                  className="bg-[#0f1117] border border-white/7 rounded-xl p-4"
                >
                  <p className="text-slate-300 text-sm">{item}</p>
                </div>
              ))}
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Basic React Structure
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 whitespace-pre-wrap">
                {`src/
  components/
    Button.jsx
    Navbar.jsx

  pages/
    Home.jsx
    About.jsx

  hooks/
    useCounter.js

  services/
    api.js

  assets/
    images/
    styles/

  App.jsx
  main.jsx`}
              </pre>
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Explanation of Folders
            </p>

            <div className="flex flex-col gap-3 mb-8">
              {[
                {
                  title: "components",
                  desc: "Reusable UI components like buttons, navbar, cards.",
                  color: "text-cyan-400",
                },
                {
                  title: "pages",
                  desc: "Full pages like Home, About, Contact.",
                  color: "text-blue-400",
                },
                {
                  title: "hooks",
                  desc: "Custom React hooks like useCounter, useFetch.",
                  color: "text-green-400",
                },
                {
                  title: "services",
                  desc: "API calls and backend logic.",
                  color: "text-purple-400",
                },
                {
                  title: "assets",
                  desc: "Images, styles and static files.",
                  color: "text-pink-400",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-[#0f1117] border border-white/7 rounded-xl p-4"
                >
                  <p className={`font-medium text-sm mb-1 ${item.color}`}>
                    {item.title}
                  </p>

                  <p className="text-xs text-slate-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Simple Real Example
            </p>

            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              Instead of putting everything inside App.jsx, you split it into
              small files.
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 whitespace-pre-wrap">
                {`// App.jsx
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Navbar />
      <Home />
    </>
  );
}`}
              </pre>
            </div>

            <div className="border-l-4 border-cyan-500 bg-cyan-500/5 rounded-r-lg p-4 text-sm text-cyan-200 leading-relaxed mb-8">
              💡 The goal is not to write less code, but to organize it better.
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Best Practice
            </p>

            <div className="flex flex-col gap-3 mb-8">
              {[
                "Keep components small and reusable",
                "Separate pages from components",
                "Put API logic inside services",
                "Use custom hooks for logic",
              ].map((item) => (
                <div
                  key={item}
                  className="bg-[#0f1117] border border-white/7 rounded-xl p-4"
                >
                  <p className="text-slate-300 text-sm">{item}</p>
                </div>
              ))}
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Summary
            </p>

            <div className="flex flex-col gap-3">
              {[
                {
                  title: "Organized Code",
                  desc: "Good structure keeps your project clean and scalable.",
                  color: "text-cyan-400",
                },
                {
                  title: "Separation of Concerns",
                  desc: "Each folder has a specific responsibility.",
                  color: "text-blue-400",
                },
                {
                  title: "Reusable Components",
                  desc: "Build once, use everywhere.",
                  color: "text-green-400",
                },
                {
                  title: "Easy Maintenance",
                  desc: "Easier to update and debug your app.",
                  color: "text-purple-400",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-[#0f1117] border border-white/7 rounded-xl p-4"
                >
                  <p className={`font-medium text-sm mb-1 ${item.color}`}>
                    {item.title}
                  </p>

                  <p className="text-xs text-slate-500 leading-relaxed">
                    {item.desc}
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

export default React;
