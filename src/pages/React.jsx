import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { ArrowUp } from "lucide-react";

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
          <h1 className="text-cyan-400 text-xl font-semibold">React Track</h1>

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
              { id: "deployment", label: "Deploying React Apps" },
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

            <h1 className="text-2xl font-semibold text-slate-100 mb-2">
              Introduction To React
            </h1>

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

            <h1 className="text-2xl font-semibold text-slate-100 mb-2">JSX</h1>

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

            <h1 className="text-2xl font-semibold text-slate-100 mb-2">
              Components
            </h1>

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

            <h1 className="text-2xl font-semibold text-slate-100 mb-2">
              Props
            </h1>

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

            <h1 className="text-2xl font-semibold text-slate-100 mb-2">
              useState Hook
            </h1>

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
        </div>
      </div>
    </>
  );
}

export default React;
