import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { ArrowUp, ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
function JavaScriptPage() {
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
    title: "Learn JavaScript | Learn Web Dev",
    desc: "Learn JavaScript from scratch with variables, functions, arrays, DOM, events and modern ES6 concepts.",
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
          content="JavaScript, Learn JavaScript, JS Tutorial, Web Development, ES6"
        />

        <meta name="robots" content="index, follow" />

        <meta
          property="og:image"
          content="https://learnwebdev.me/favicon.png"
        />

        <meta property="og:type" content="website" />

        <link rel="canonical" href="https://learnwebdev.me/javascript" />
      </Helmet>

      <h1 className="sr-only">Learn JavaScript — تعلم JavaScript </h1>


      <div className="bg-[#0f1117] min-h-screen text-white flex">
        {/* sidebar button mobile */}
        <button
          className="fixed top-24 left-0 bg-yellow-400 text-black p-2 rounded-r-xl z-50 sm:hidden"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          <div className="flex flex-col gap-1 w-6">
            <span
              className={`block h-0.5 w-full bg-white rounded transition-all duration-300 ${showSidebar ? "rotate-45 translate-y-1.5" : ""}`}
            ></span>
            <span
              className={`block h-0.5 w-full bg-white rounded transition-all duration-300 ${showSidebar ? "opacity-0" : ""}`}
            ></span>
            <span
              className={`block h-0.5 w-full bg-white rounded transition-all duration-300 ${showSidebar ? "-rotate-45 -translate-y-1.5" : ""}`}
            ></span>
          </div>
        </button>

        {/* top button */}
        <button
          className="fixed bottom-5 right-5 bg-yellow-400 text-black p-2 rounded-xl z-50"
          onClick={() => Top()}
        >
          <ArrowUp size={20} color="white" />
        </button>

        {/* sidebar */}
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
          <h2 className="text-yellow-400 text-xl font-semibold">
            JavaScript Track
          </h2>

          <div className="flex flex-col gap-2">
            {[
              { id: "intro", label: "Introduction To JavaScript" },
              { id: "variables", label: "Variables" },
              { id: "data-types", label: "Data Types" },
              { id: "operators", label: "Operators" },
              { id: "conditions", label: "Conditions" },
              { id: "loops", label: "Loops" },
              { id: "functions", label: "Functions" },
              { id: "arrays", label: "Arrays" },
              { id: "objects", label: "Objects" },
              { id: "dom", label: "DOM Manipulation" },
              { id: "events", label: "Events" },
              { id: "timers", label: "setTimeout & setInterval" },
              { id: "es6", label: "Modern ES6+" },
              { id: "fetch", label: "Fetch API" },
              { id: "async-await", label: "Async / Await" },
              { id: "local-storage", label: "Local Storage" },
              { id: "modules", label: "JavaScript Modules" },
              { id: "oop", label: "OOP In JavaScript" },
              { id: "error-handling", label: "Error Handling" },
            ].map((lesson) => (
              <a
                key={lesson.id}
                href={`#${lesson.id}`}
                onClick={() => setShowSidebar(false)}
                className={`text-sm transition ${
                  activeLesson === lesson.id
                    ? "text-yellow-300 font-medium"
                    : "text-slate-500 hover:text-slate-300"
                }`}
              >
                • {lesson.label}
              </a>
            ))}
          </div>
          <div className="flex  gap-5">
            <Link
              to="/css"
              aria-label="الدرس السابق"
              className="flex items-center gap-1 text-sm text-slate-500 hover:text-slate-800 transition-colors"
            >
              <ArrowLeft size={16} />
              <span>css</span>
            </Link>

            <Link
              to="/react"
              aria-label="الدرس التالي"
              className="flex items-center gap-1 text-sm text-slate-500 hover:text-slate-800 transition-colors"
            >
              <span>react</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* body */}
        <div className="flex-1 py-10 px-20 overflow-y-auto flex flex-col items-center gap-10 max-sm:p-5">
          {/* lesson 1 */}
          <div
            id="intro"
            className="bg-[#161b27] p-10 border border-white/10 rounded-xl w-full max-w-3xl max-sm:px-5"
          >
            <span className="inline-block bg-yellow-500/10 text-yellow-400 text-xs px-4 py-1 rounded-full mb-4">
              Lesson 1
            </span>

            <h2 className="text-2xl font-semibold text-slate-100 mb-2">
              Introduction To JavaScript
            </h2>

            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              JavaScript adds logic and interactivity to websites. It allows you
              to create dynamic pages, respond to user actions, update content,
              and build full web applications.
            </p>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              What is JavaScript?
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {[
                {
                  title: "Programming Language",
                  desc: "JavaScript is a real programming language used to create logic and behavior in websites.",
                  color: "text-yellow-400",
                },
                {
                  title: "Runs In The Browser",
                  desc: "Browsers can execute JavaScript directly without installing anything extra.",
                  color: "text-orange-400",
                },
                {
                  title: "Interactive Websites",
                  desc: "JavaScript lets websites react to clicks, typing, scrolling and user actions.",
                  color: "text-blue-400",
                },
                {
                  title: "Full Stack Language",
                  desc: "JavaScript can run on both frontend and backend using Node.js.",
                  color: "text-green-400",
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
              Your First JavaScript Code
            </p>

            <p className="text-sm text-slate-400 mb-3 leading-relaxed">
              JavaScript code is usually written inside the{" "}
              <code className="text-yellow-300">&lt;script&gt;</code> tag.
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <p>
                <span className="text-pink-400">&lt;script&gt;</span>
              </p>

              <p className="pl-4">
                <span className="text-blue-400">console</span>
                <span className="text-slate-300">.</span>
                <span className="text-yellow-300">log</span>
                <span className="text-slate-300">(</span>
                <span className="text-green-400">"Hello JavaScript!"</span>
                <span className="text-slate-300">)</span>
              </p>

              <p>
                <span className="text-pink-400">&lt;/script&gt;</span>
              </p>
            </div>

            <div className="border-l-4 border-yellow-500 bg-yellow-500/5 rounded-r-lg p-4 text-sm text-yellow-200 leading-relaxed mb-8">
              💡 JavaScript is case-sensitive. That means{" "}
              <code className="text-yellow-100">myVar</code> and{" "}
              <code className="text-yellow-100">myvar</code> are different
              variables.
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Ways To Use JavaScript
            </p>

            <div className="flex flex-col gap-3">
              {[
                {
                  tag: "DOM Manipulation",
                  desc: "Change text, styles and HTML elements dynamically.",
                  example: `document.querySelector("h1").textContent = "Hello";`,
                  color: "text-yellow-400",
                },
                {
                  tag: "User Interaction",
                  desc: "Respond to clicks, keyboard input and mouse events.",
                  example: `button.addEventListener("click", () => {
    alert("Button clicked!");
    });`,
                  color: "text-orange-400",
                },
                {
                  tag: "API Requests",
                  desc: "Fetch data from servers and external APIs.",
                  example: `fetch("https://api.example.com/users")
    .then((res) => res.json())
    .then((data) => console.log(data));`,
                  color: "text-blue-400",
                },
                {
                  tag: "Animations",
                  desc: "Create transitions, sliders and dynamic effects.",
                  example: `box.style.transform = "translateX(100px)";`,
                  color: "text-green-400",
                },
              ].map((item) => (
                <div
                  key={item.tag}
                  className="bg-[#0f1117] border border-white/7 rounded-xl p-4"
                >
                  <p className={`font-medium text-sm mb-1 ${item.color}`}>
                    {item.tag}
                  </p>

                  <p className="text-xs text-slate-500 leading-relaxed mb-3">
                    {item.desc}
                  </p>

                  <div
                    className="bg-black/30 border border-white/5 rounded-lg p-3 font-mono text-xs overflow-x-auto"
                    dir="ltr"
                  >
                    <pre className="text-slate-300 whitespace-pre-wrap break-words"> 
                      {item.example}
                    </pre>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* lesson 2 */}
          <div
            id="variables"
            className="bg-[#161b27] p-10 border border-white/10 rounded-xl w-full max-w-3xl max-sm:px-5"
          >
            <span className="inline-block bg-yellow-500/10 text-yellow-400 text-xs px-4 py-1 rounded-full mb-4">
              Lesson 2
            </span>

            <h2 className="text-2xl font-semibold text-slate-100 mb-2">
              Variables
            </h2>

            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              Variables are used to store data in JavaScript. You can save text,
              numbers, arrays, objects and reuse them later in your code.
            </p>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Creating Variables
            </p>

            <p className="text-sm text-slate-400 mb-3 leading-relaxed">
              JavaScript provides three ways to create variables:
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <p className="mb-2">
                <span className="text-pink-400">let</span>
                <span className="text-slate-300"> age = </span>
                <span className="text-green-400">20</span>
              </p>

              <p className="mb-2">
                <span className="text-pink-400">const</span>
                <span className="text-slate-300"> name = </span>
                <span className="text-green-400">"Ahmed"</span>
              </p>

              <p>
                <span className="text-pink-400">var</span>
                <span className="text-slate-300"> city = </span>
                <span className="text-green-400">"Cairo"</span>
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
              {[
                {
                  title: "let",
                  desc: "Can be changed later.",
                  color: "text-yellow-400",
                },
                {
                  title: "const",
                  desc: "Cannot be reassigned after creation.",
                  color: "text-blue-400",
                },
                {
                  title: "var",
                  desc: "Old way of creating variables.",
                  color: "text-green-400",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-[#0f1117] border border-white/7 rounded-xl p-5"
                >
                  <p className={`font-medium mb-2 ${item.color}`}>
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
              Updating Variables
            </p>

            <p className="text-sm text-slate-400 mb-3 leading-relaxed">
              Variables created with{" "}
              <code className="text-yellow-300">let</code> can be updated later.
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <p>
                <span className="text-pink-400">let</span>
                <span className="text-slate-300"> score = </span>
                <span className="text-green-400">10</span>
              </p>

              <br />

              <p>
                <span className="text-slate-300">score = </span>
                <span className="text-green-400">50</span>
              </p>

              <br />

              <p>
                <span className="text-blue-400">console</span>
                <span className="text-slate-300">.</span>
                <span className="text-yellow-300">log</span>
                <span className="text-slate-300">(score)</span>
              </p>
            </div>

            <div className="border-l-4 border-yellow-500 bg-yellow-500/5 rounded-r-lg p-4 text-sm text-yellow-200 leading-relaxed mb-8">
              💡 Use <code className="text-yellow-100">const</code> by default,
              and use <code className="text-yellow-100">let</code> only when the
              value needs to change.
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Variable Naming Rules
            </p>

            <div className="flex flex-col gap-3 mb-8">
              {[
                {
                  rule: "Names can contain letters, numbers, _ and $",
                },
                {
                  rule: "Names cannot start with a number",
                },
                {
                  rule: "Variable names are case-sensitive",
                },
                {
                  rule: "Do not use reserved keywords like let or const",
                },
              ].map((item) => (
                <div
                  key={item.rule}
                  className="bg-[#0f1117] border border-white/7 rounded-xl p-4"
                >
                  <p className="text-xs text-slate-400">• {item.rule}</p>
                </div>
              ))}
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Real Examples
            </p>

            <div className="flex flex-col gap-4">
              {[
                {
                  title: "Store User Name",
                  code: `const username = "Ahmed";`,
                },
                {
                  title: "Store Price",
                  code: `let price = 199;`,
                },
                {
                  title: "Store Login State",
                  code: `let isLoggedIn = true;`,
                },
                {
                  title: "Store Multiple Colors",
                  code: `const colors = ["red", "blue", "green"];`,
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-[#0f1117] border border-white/7 rounded-xl p-4"
                >
                  <p className="text-sm text-yellow-400 font-medium mb-3">
                    {item.title}
                  </p>

                  <div
                    className="bg-black/30 border border-white/5 rounded-lg p-3 font-mono text-xs overflow-x-auto"
                    dir="ltr"
                  >
                    <pre className="text-slate-300 whitespace-pre-wrap">
                      {item.code}
                    </pre>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* lesson 3 */}
          <div
            id="data-types"
            className="bg-[#161b27] p-10 border border-white/10 rounded-xl w-full max-w-3xl max-sm:px-5"
          >
            <span className="inline-block bg-yellow-500/10 text-yellow-400 text-xs px-4 py-1 rounded-full mb-4">
              Lesson 3
            </span>

            <h2 className="text-2xl font-semibold text-slate-100 mb-2">
              Data Types
            </h2>

            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              Data types define what kind of value a variable stores. JavaScript
              supports strings, numbers, booleans, arrays, objects and more.
            </p>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Common Data Types
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {[
                {
                  title: "String",
                  desc: "Stores text values.",
                  example: `const name = "Ahmed";`,
                  color: "text-yellow-400",
                },
                {
                  title: "Number",
                  desc: "Stores numeric values.",
                  example: `const age = 20;`,
                  color: "text-blue-400",
                },
                {
                  title: "Boolean",
                  desc: "Stores true or false values.",
                  example: `const isOnline = true;`,
                  color: "text-green-400",
                },
                {
                  title: "Array",
                  desc: "Stores multiple values in one variable.",
                  example: `const colors = ["red", "blue"];`,
                  color: "text-pink-400",
                },
                {
                  title: "Object",
                  desc: "Stores grouped data using key/value pairs.",
                  example: `const user = {
    name: "Ahmed",
    age: 20
};`,
                  color: "text-orange-400",
                },
                {
                  title: "Undefined",
                  desc: "A variable without a value.",
                  example: `let score;`,
                  color: "text-indigo-400",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-[#0f1117] border border-white/7 rounded-xl p-5"
                >
                  <p className={`text-sm font-medium mb-2 ${item.color}`}>
                    {item.title}
                  </p>

                  <p className="text-xs text-slate-500 leading-relaxed mb-4">
                    {item.desc}
                  </p>

                  <div
                    className="bg-black/30 border border-white/5 rounded-lg p-3 font-mono text-xs overflow-x-auto"
                    dir="ltr"
                  >
                    <pre className="text-slate-300 whitespace-pre-wrap">
                      {item.example}
                    </pre>
                  </div>
                </div>
              ))}
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Checking Data Types
            </p>

            <p className="text-sm text-slate-400 mb-3 leading-relaxed">
              Use the <code className="text-yellow-300">typeof</code> operator
              to check the type of a value.
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <p className="mb-2">
                <span className="text-pink-400">typeof</span>
                <span className="text-slate-300"> "Hello"</span>
              </p>

              <p className="text-slate-500 mb-4">// string</p>

              <p className="mb-2">
                <span className="text-pink-400">typeof</span>
                <span className="text-slate-300"> 100</span>
              </p>

              <p className="text-slate-500 mb-4">// number</p>

              <p className="mb-2">
                <span className="text-pink-400">typeof</span>
                <span className="text-slate-300"> true</span>
              </p>

              <p className="text-slate-500">// boolean</p>
            </div>

            <div className="border-l-4 border-yellow-500 bg-yellow-500/5 rounded-r-lg p-4 text-sm text-yellow-200 leading-relaxed mb-8">
              💡 Arrays and objects are technically considered{" "}
              <code className="text-yellow-100">object</code> in JavaScript.
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Primitive vs Reference Types
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              <div className="bg-[#0f1117] border border-white/7 rounded-xl p-5">
                <p className="text-yellow-400 font-medium mb-2">
                  Primitive Types
                </p>

                <p className="text-xs text-slate-500 leading-relaxed mb-3">
                  Simple single values stored directly in memory.
                </p>

                <div
                  className="bg-black/30 border border-white/5 rounded-lg p-3 font-mono text-xs"
                  dir="ltr"
                >
                  <pre className="text-slate-300">
                    {`String
Number
Boolean
Undefined
Null`}
                  </pre>
                </div>
              </div>

              <div className="bg-[#0f1117] border border-white/7 rounded-xl p-5">
                <p className="text-blue-400 font-medium mb-2">
                  Reference Types
                </p>

                <p className="text-xs text-slate-500 leading-relaxed mb-3">
                  Complex values stored by reference.
                </p>

                <div
                  className="bg-black/30 border border-white/5 rounded-lg p-3 font-mono text-xs"
                  dir="ltr"
                >
                  <pre className="text-slate-300">
                    {`Object
Array
Function`}
                  </pre>
                </div>
              </div>
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Real Examples
            </p>

            <div className="flex flex-col gap-4">
              {[
                {
                  title: "User Name",
                  code: `const username = "Ali";`,
                },
                {
                  title: "Cart Total",
                  code: `const total = 299.99;`,
                },
                {
                  title: "Login Status",
                  code: `const isLoggedIn = false;`,
                },
                {
                  title: "Product List",
                  code: `const products = ["Phone", "Laptop", "Watch"];`,
                },
                {
                  title: "User Object",
                  code: `const user = {
    name: "Sara",
    age: 22,
    isAdmin: true
};`,
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-[#0f1117] border border-white/7 rounded-xl p-4"
                >
                  <p className="text-sm text-yellow-400 font-medium mb-3">
                    {item.title}
                  </p>

                  <div
                    className="bg-black/30 border border-white/5 rounded-lg p-3 font-mono text-xs overflow-x-auto"
                    dir="ltr"
                  >
                    <pre className="text-slate-300 whitespace-pre-wrap">
                      {item.code}
                    </pre>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* lesson 4 */}
          <div
            id="operators"
            className="bg-[#161b27] p-10 border border-white/10 rounded-xl w-full max-w-3xl max-sm:px-5"
          >
            <span className="inline-block bg-yellow-500/10 text-yellow-400 text-xs px-4 py-1 rounded-full mb-4">
              Lesson 4
            </span>

            <h2 className="text-2xl font-semibold text-slate-100 mb-2">
              Operators
            </h2>

            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              Operators are symbols used to perform operations on values and
              variables. JavaScript includes arithmetic, comparison, logical and
              assignment operators.
            </p>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Arithmetic Operators
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {[
                {
                  op: "+",
                  desc: "Addition",
                  example: `10 + 5 // 15`,
                  color: "text-yellow-400",
                },
                {
                  op: "-",
                  desc: "Subtraction",
                  example: `10 - 5 // 5`,
                  color: "text-blue-400",
                },
                {
                  op: "*",
                  desc: "Multiplication",
                  example: `10 * 5 // 50`,
                  color: "text-green-400",
                },
                {
                  op: "/",
                  desc: "Division",
                  example: `10 / 2 // 5`,
                  color: "text-pink-400",
                },
                {
                  op: "%",
                  desc: "Remainder",
                  example: `10 % 3 // 1`,
                  color: "text-orange-400",
                },
                {
                  op: "++",
                  desc: "Increment",
                  example: `count++`,
                  color: "text-indigo-400",
                },
              ].map((item) => (
                <div
                  key={item.op}
                  className="bg-[#0f1117] border border-white/7 rounded-xl p-5"
                >
                  <p className={`text-lg font-bold mb-2 ${item.color}`}>
                    {item.op}
                  </p>

                  <p className="text-xs text-slate-500 mb-4">{item.desc}</p>

                  <div
                    className="bg-black/30 border border-white/5 rounded-lg p-3 font-mono text-xs"
                    dir="ltr"
                  >
                    <pre className="text-slate-300">{item.example}</pre>
                  </div>
                </div>
              ))}
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Assignment Operators
            </p>

            <p className="text-sm text-slate-400 mb-3 leading-relaxed">
              Assignment operators store or update values inside variables.
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <p className="mb-3">
                <span className="text-pink-400">let</span>
                <span className="text-slate-300"> score = </span>
                <span className="text-green-400">10</span>
              </p>

              <p className="mb-2 text-slate-300">score += 5</p>

              <p className="mb-2 text-slate-300">score -= 2</p>

              <p className="mb-2 text-slate-300">score *= 2</p>

              <p className="text-slate-300">score /= 2</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {[
                {
                  op: "=",
                  desc: "Assign value",
                },
                {
                  op: "+=",
                  desc: "Add then assign",
                },
                {
                  op: "-=",
                  desc: "Subtract then assign",
                },
                {
                  op: "*=",
                  desc: "Multiply then assign",
                },
              ].map((item) => (
                <div
                  key={item.op}
                  className="bg-[#0f1117] border border-white/7 rounded-xl p-4"
                >
                  <p className="text-yellow-400 font-medium mb-1">{item.op}</p>

                  <p className="text-xs text-slate-500">{item.desc}</p>
                </div>
              ))}
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Comparison Operators
            </p>

            <p className="text-sm text-slate-400 mb-3 leading-relaxed">
              Comparison operators return either{" "}
              <code className="text-yellow-300">true</code> or{" "}
              <code className="text-yellow-300">false</code>.
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <p className="mb-2 text-slate-300">10 &gt; 5 // true</p>

              <p className="mb-2 text-slate-300">10 &lt; 5 // false</p>

              <p className="mb-2 text-slate-300">10 == "10" // true</p>

              <p className="mb-2 text-slate-300">10 === "10" // false</p>

              <p className="text-slate-300">5 != 3 // true</p>
            </div>

            <div className="border-l-4 border-yellow-500 bg-yellow-500/5 rounded-r-lg p-4 text-sm text-yellow-200 leading-relaxed mb-8">
              💡 Prefer using <code className="text-yellow-100">===</code>{" "}
              instead of <code className="text-yellow-100">==</code> because it
              checks both value and data type.
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Logical Operators
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
              {[
                {
                  op: "&&",
                  title: "AND",
                  example: `age > 18 && isLoggedIn`,
                },
                {
                  op: "||",
                  title: "OR",
                  example: `isAdmin || isEditor`,
                },
                {
                  op: "!",
                  title: "NOT",
                  example: `!isOnline`,
                },
              ].map((item) => (
                <div
                  key={item.op}
                  className="bg-[#0f1117] border border-white/7 rounded-xl p-5"
                >
                  <p className="text-yellow-400 text-lg font-bold mb-2">
                    {item.op}
                  </p>

                  <p className="text-xs text-slate-500 mb-4">{item.title}</p>

                  <div
                    className="bg-black/30 border border-white/5 rounded-lg p-3 font-mono text-xs"
                    dir="ltr"
                  >
                    <pre className="text-slate-300">{item.example}</pre>
                  </div>
                </div>
              ))}
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Real Examples
            </p>

            <div className="flex flex-col gap-4">
              {[
                {
                  title: "Calculate Total",
                  code: `const total = 100 + 50;`,
                },
                {
                  title: "Check Age",
                  code: `const canEnter = age >= 18;`,
                },
                {
                  title: "Toggle Boolean",
                  code: `isOpen = !isOpen;`,
                },
                {
                  title: "Increase Likes",
                  code: `likes++;`,
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-[#0f1117] border border-white/7 rounded-xl p-4"
                >
                  <p className="text-sm text-yellow-400 font-medium mb-3">
                    {item.title}
                  </p>

                  <div
                    className="bg-black/30 border border-white/5 rounded-lg p-3 font-mono text-xs overflow-x-auto"
                    dir="ltr"
                  >
                    <pre className="text-slate-300 whitespace-pre-wrap">
                      {item.code}
                    </pre>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* lesson 5 */}
          <div
            id="conditions"
            className="bg-[#161b27] p-10 border border-white/10 rounded-xl w-full max-w-3xl max-sm:px-5"
          >
            <span className="inline-block bg-yellow-500/10 text-yellow-400 text-xs px-4 py-1 rounded-full mb-4">
              Lesson 5
            </span>

            <h2 className="text-2xl font-semibold text-slate-100 mb-2">
              Conditions
            </h2>

            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              Conditions allow your program to make decisions. You can run
              different code depending on whether a condition is true or false.
            </p>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              if Statement
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 whitespace-pre-wrap">
                {`let age = 20;

if (age >= 18) {
  console.log("You are an adult");
}`}
              </pre>
            </div>

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              if / else
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 whitespace-pre-wrap">
                {`let age = 15;

if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Not adult");
}`}
              </pre>
            </div>

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              if / else if / else
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 whitespace-pre-wrap">
                {`let score = 75;

if (score >= 90) {
  console.log("A grade");
} else if (score >= 70) {
  console.log("B grade");
} else if (score >= 50) {
  console.log("C grade");
} else {
  console.log("Fail");
}`}
              </pre>
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Comparison Used in Conditions
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {[
                {
                  op: "==",
                  desc: "Equal value",
                  example: `5 == "5" // true`,
                },
                {
                  op: "===",
                  desc: "Equal value + type",
                  example: `5 === "5" // false`,
                },
                {
                  op: ">",
                  desc: "Greater than",
                  example: `10 > 5 // true`,
                },
                {
                  op: "<",
                  desc: "Less than",
                  example: `3 < 7 // true`,
                },
                {
                  op: ">=",
                  desc: "Greater or equal",
                  example: `10 >= 10 // true`,
                },
                {
                  op: "<=",
                  desc: "Less or equal",
                  example: `5 <= 6 // true`,
                },
              ].map((item) => (
                <div
                  key={item.op}
                  className="bg-[#0f1117] border border-white/7 rounded-xl p-5"
                >
                  <p className="text-yellow-400 font-bold text-lg mb-2">
                    {item.op}
                  </p>

                  <p className="text-xs text-slate-500 mb-3">{item.desc}</p>

                  <div
                    className="bg-black/30 border border-white/5 rounded-lg p-3 font-mono text-xs overflow-x-auto"
                    dir="ltr"
                  >
                    <pre className="text-slate-300">{item.example}</pre>
                  </div>
                </div>
              ))}
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Logical Conditions
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 whitespace-pre-wrap">
                {`let age = 20;
let hasID = true;

if (age >= 18 && hasID) {
console.log("You can enter");
}`}
              </pre>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
              {[
                {
                  op: "&&",
                  desc: "Both conditions must be true",
                },
                {
                  op: "||",
                  desc: "One condition is enough",
                },
                {
                  op: "!",
                  desc: "Reverses the condition",
                },
              ].map((item) => (
                <div
                  key={item.op}
                  className="bg-[#0f1117] border border-white/7 rounded-xl p-4"
                >
                  <p className="text-yellow-400 font-medium mb-1">{item.op}</p>

                  <p className="text-xs text-slate-500">{item.desc}</p>
                </div>
              ))}
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Real Examples
            </p>

            <div className="flex flex-col gap-4">
              {[
                {
                  title: "Login Check",
                  code: `const isLoggedIn = true;

if (isLoggedIn) {
console.log("Welcome back");
} else {
console.log("Please login");
}`,
                },
                {
                  title: "Discount System",
                  code: `let price = 100;

if (price > 50) {
price = price - 20;
}`,
                },
                {
                  title: "Age Check",
                  code: `let age = 17;

if (age < 18) {
console.log("Not allowed");
}`,
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-[#0f1117] border border-white/7 rounded-xl p-4"
                >
                  <p className="text-sm text-yellow-400 font-medium mb-3">
                    {item.title}
                  </p>

                  <div
                    className="bg-black/30 border border-white/5 rounded-lg p-3 font-mono text-xs overflow-x-auto"
                    dir="ltr"
                  >
                    <pre className="text-slate-300 whitespace-pre-wrap">
                      {item.code}
                    </pre>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* lesson 6 */}
          <div
            id="loops"
            className="bg-[#161b27] p-10 border border-white/10 rounded-xl w-full max-w-3xl max-sm:px-5"
          >
            <span className="inline-block bg-yellow-500/10 text-yellow-400 text-xs px-4 py-1 rounded-full mb-4">
              Lesson 6
            </span>

            <h2 className="text-2xl font-semibold text-slate-100 mb-2">
              Loops
            </h2>

            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              Loops are used to repeat a block of code multiple times. They help
              you avoid writing repetitive code and work with lists and data
              easily.
            </p>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              for Loop
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 whitespace-pre-wrap">
                {`for (let i = 1; i <= 5; i++) {
  console.log("Number:", i);
}`}
              </pre>
            </div>

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              while Loop
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 whitespace-pre-wrap">
                {`let i = 1;

while (i <= 5) {
  console.log("Count:", i);
  i++;
}`}
              </pre>
            </div>

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              do...while Loop
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 whitespace-pre-wrap">
                {`let i = 1;

do {
  console.log("Run at least once:", i);
  i++;
} while (i <= 5);`}
              </pre>
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Looping Arrays
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 whitespace-pre-wrap">
                {`const colors = ["red", "green", "blue"];

for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}`}
              </pre>
            </div>

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              for...of Loop (Modern)
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 whitespace-pre-wrap">
                {`const colors = ["red", "green", "blue"];

for (const color of colors) {
  console.log(color);
}`}
              </pre>
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Loop Control
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {[
                {
                  op: "break",
                  desc: "Stops the loop completely",
                  example: `for (let i = 1; i <= 5; i++) {
  if (i === 3) break;
  console.log(i);
}`,
                },
                {
                  op: "continue",
                  desc: "Skips current iteration",
                  example: `for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log(i);
}`,
                },
              ].map((item) => (
                <div
                  key={item.op}
                  className="bg-[#0f1117] border border-white/7 rounded-xl p-5"
                >
                  <p className="text-yellow-400 font-bold mb-2">{item.op}</p>

                  <p className="text-xs text-slate-500 mb-3">{item.desc}</p>

                  <div
                    className="bg-black/30 border border-white/5 rounded-lg p-3 font-mono text-xs overflow-x-auto"
                    dir="ltr"
                  >
                    <pre className="text-slate-300 whitespace-pre-wrap">
                      {item.example}
                    </pre>
                  </div>
                </div>
              ))}
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Real Examples
            </p>

            <div className="flex flex-col gap-4">
              {[
                {
                  title: "Print Numbers",
                  code: `for (let i = 1; i <= 10; i++) {
  console.log(i);
}`,
                },
                {
                  title: "Sum Array",
                  code: `const nums = [1, 2, 3, 4];
let sum = 0;

for (let n of nums) {
  sum += n;
}

console.log(sum);`,
                },
                {
                  title: "Find Item",
                  code: `const users = ["Ali", "Sara", "Omar"];

for (let user of users) {
  if (user === "Sara") {
    console.log("Found Sara");
  }
}`,
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-[#0f1117] border border-white/7 rounded-xl p-4"
                >
                  <p className="text-sm text-yellow-400 font-medium mb-3">
                    {item.title}
                  </p>

                  <div
                    className="bg-black/30 border border-white/5 rounded-lg p-3 font-mono text-xs overflow-x-auto"
                    dir="ltr"
                  >
                    <pre className="text-slate-300 whitespace-pre-wrap">
                      {item.code}
                    </pre>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* lesson 7 */}
          <div
            id="functions"
            className="bg-[#161b27] p-10 border border-white/10 rounded-xl w-full max-w-3xl max-sm:px-5"
          >
            <span className="inline-block bg-yellow-500/10 text-yellow-400 text-xs px-4 py-1 rounded-full mb-4">
              Lesson 7
            </span>

            <h2 className="text-2xl font-semibold text-slate-100 mb-2">
              Functions
            </h2>

            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              Functions are reusable blocks of code. You write them once and
              call them whenever you need them.
            </p>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Function Declaration
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 whitespace-pre-wrap">
                {`function sayHello() {
  console.log("Hello World");
}

sayHello();`}
              </pre>
            </div>

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Function With Parameters
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 whitespace-pre-wrap">
                {`function greet(name) {
  console.log("Hello " + name);
}

greet("Ahmed");
greet("Sara");`}
              </pre>
            </div>

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Function With Return
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 whitespace-pre-wrap">
                {`function add(a, b) {
  return a + b;
}

let result = add(5, 3);
console.log(result);`}
              </pre>
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Function Types
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {[
                {
                  title: "Regular Function",
                  desc: "Traditional way to define functions.",
                  example: `function test() {
  console.log("Hi");
}`,
                },
                {
                  title: "Arrow Function",
                  desc: "Modern shorter syntax for functions.",
                  example: `const test = () => {
  console.log("Hi");
};`,
                },
                {
                  title: "Anonymous Function",
                  desc: "Function without a name, often used in events.",
                  example: `setTimeout(function () {
  console.log("Hello");
}, 1000);`,
                },
                {
                  title: "Callback Function",
                  desc: "Function passed as an argument to another function.",
                  example: `function run(cb) {
  cb();
}

run(() => {
  console.log("Callback");
});`,
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-[#0f1117] border border-white/7 rounded-xl p-5"
                >
                  <p className="text-yellow-400 font-medium mb-2">
                    {item.title}
                  </p>

                  <p className="text-xs text-slate-500 mb-3">{item.desc}</p>

                  <div
                    className="bg-black/30 border border-white/5 rounded-lg p-3 font-mono text-xs overflow-x-auto"
                    dir="ltr"
                  >
                    <pre className="text-slate-300 whitespace-pre-wrap">
                      {item.example}
                    </pre>
                  </div>
                </div>
              ))}
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Real Examples
            </p>

            <div className="flex flex-col gap-4">
              {[
                {
                  title: "Calculate Age",
                  code: `function getAge(year) {
  return 2026 - year;
}

console.log(getAge(2005));`,
                },
                {
                  title: "Check Even Number",
                  code: `function isEven(num) {
  return num % 2 === 0;
}

console.log(isEven(10));`,
                },
                {
                  title: "Greeting System",
                  code: `function greetUser(name) {
  return "Welcome " + name;
}

console.log(greetUser("Ali"));`,
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-[#0f1117] border border-white/7 rounded-xl p-4"
                >
                  <p className="text-sm text-yellow-400 font-medium mb-3">
                    {item.title}
                  </p>

                  <div
                    className="bg-black/30 border border-white/5 rounded-lg p-3 font-mono text-xs overflow-x-auto"
                    dir="ltr"
                  >
                    <pre className="text-slate-300 whitespace-pre-wrap">
                      {item.code}
                    </pre>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* lesson 8 */}
          <div
            id="arrays"
            className="bg-[#161b27] p-10 border border-white/10 rounded-xl w-full max-w-3xl max-sm:px-5"
          >
            <span className="inline-block bg-yellow-500/10 text-yellow-400 text-xs px-4 py-1 rounded-full mb-4">
              Lesson 8
            </span>

            <h2 className="text-2xl font-semibold text-slate-100 mb-2">
              Arrays
            </h2>

            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              Arrays are used to store multiple values in a single variable. You
              can store strings, numbers, objects and even functions inside
              arrays.
            </p>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Creating Arrays
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 whitespace-pre-wrap">
                {`const fruits = ["Apple", "Banana", "Orange"];

const numbers = [1, 2, 3, 4, 5];

const mixed = ["Ali", 20, true];`}
              </pre>
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Accessing Elements
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 whitespace-pre-wrap">
                {`const fruits = ["Apple", "Banana", "Orange"];

console.log(fruits[0]); // Apple
console.log(fruits[1]); // Banana
console.log(fruits[2]); // Orange`}
              </pre>
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Array Methods
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {[
                {
                  title: "push()",
                  desc: "Adds item to the end of array",
                  example: `fruits.push("Mango");`,
                },
                {
                  title: "pop()",
                  desc: "Removes last item",
                  example: `fruits.pop();`,
                },
                {
                  title: "shift()",
                  desc: "Removes first item",
                  example: `fruits.shift();`,
                },
                {
                  title: "unshift()",
                  desc: "Adds item at the beginning",
                  example: `fruits.unshift("Grapes");`,
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-[#0f1117] border border-white/7 rounded-xl p-5"
                >
                  <p className="text-yellow-400 font-medium mb-2">
                    {item.title}
                  </p>

                  <p className="text-xs text-slate-500 mb-3">{item.desc}</p>

                  <div
                    className="bg-black/30 border border-white/5 rounded-lg p-3 font-mono text-xs overflow-x-auto"
                    dir="ltr"
                  >
                    <pre className="text-slate-300">{item.example}</pre>
                  </div>
                </div>
              ))}
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Looping Arrays
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 whitespace-pre-wrap">
                {`const fruits = ["Apple", "Banana", "Orange"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}`}
              </pre>
            </div>

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Modern Loop (for...of)
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 whitespace-pre-wrap">
                {`const fruits = ["Apple", "Banana", "Orange"];

for (const fruit of fruits) {
  console.log(fruit);
}`}
              </pre>
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Real Examples
            </p>

            <div className="flex flex-col gap-4">
              {[
                {
                  title: "Shopping List",
                  code: `const cart = ["Milk", "Bread", "Eggs"];

cart.push("Juice");

console.log(cart);`,
                },
                {
                  title: "Sum Numbers",
                  code: `const nums = [10, 20, 30];

let sum = 0;

for (const n of nums) {
  sum += n;
}

console.log(sum);`,
                },
                {
                  title: "Find Item",
                  code: `const users = ["Ali", "Sara", "Omar"];

for (const user of users) {
  if (user === "Sara") {
    console.log("Found Sara");
  }
}`,
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-[#0f1117] border border-white/7 rounded-xl p-4"
                >
                  <p className="text-sm text-yellow-400 font-medium mb-3">
                    {item.title}
                  </p>

                  <div
                    className="bg-black/30 border border-white/5 rounded-lg p-3 font-mono text-xs overflow-x-auto"
                    dir="ltr"
                  >
                    <pre className="text-slate-300 whitespace-pre-wrap">
                      {item.code}
                    </pre>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* lesson 9 */}
          <div
            id="objects"
            className="bg-[#161b27] p-10 border border-white/10 rounded-xl w-full max-w-3xl max-sm:px-5"
          >
            <span className="inline-block bg-yellow-500/10 text-yellow-400 text-xs px-4 py-1 rounded-full mb-4">
              Lesson 9
            </span>

            <h2 className="text-2xl font-semibold text-slate-100 mb-2">
              Objects
            </h2>

            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              Objects are used to store structured data using key-value pairs.
              They help you represent real-world things like users, products,
              and posts.
            </p>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Creating Objects
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 whitespace-pre-wrap">
                {`const user = {
  name: "Ahmed",
  age: 20,
  isLoggedIn: true
};`}
              </pre>
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Accessing Properties
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 whitespace-pre-wrap">
                {`const user = {
  name: "Ahmed",
  age: 20
};

console.log(user.name);   // Ahmed
console.log(user["age"]); // 20`}
              </pre>
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Updating Objects
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 whitespace-pre-wrap">
                {`const user = {
  name: "Ahmed",
  age: 20
};

user.age = 21;
user.city = "Cairo";

console.log(user);`}
              </pre>
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Nested Objects
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 whitespace-pre-wrap break-words">
                {`const user = {
  name: "Sara",
  address: {
    city: "Cairo",
    country: "Egypt"
  }
};

console.log(user.address.city);`}
              </pre>
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Object Methods
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 whitespace-pre-wrap">
                {`const user = {
  name: "Ali",
  greet: function () {
    console.log("Hello " + this.name);
  }
};

user.greet();`}
              </pre>
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Real Examples
            </p>

            <div className="flex flex-col gap-4">
              {[
                {
                  title: "User Profile",
                  code: `const user = {
  name: "Omar",
  age: 25,
  email: "omar@example.com"
};`,
                },
                {
                  title: "Product",
                  code: `const product = {
  title: "Phone",
  price: 500,
  inStock: true
};`,
                },
                {
                  title: "Update Data",
                  code: `const user = {
  name: "Sara",
  age: 22
};

user.age = 23;`,
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-[#0f1117] border border-white/7 rounded-xl p-4"
                >
                  <p className="text-sm text-yellow-400 font-medium mb-3">
                    {item.title}
                  </p>

                  <div
                    className="bg-black/30 border border-white/5 rounded-lg p-3 font-mono text-xs overflow-x-auto"
                    dir="ltr"
                  >
                    <pre className="text-slate-300 whitespace-pre-wrap">
                      {item.code}
                    </pre>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* lesson 10 */}
          <div
            id="dom"
            className="bg-[#161b27] p-10 border border-white/10 rounded-xl w-full max-w-3xl max-sm:px-5"
          >
            <span className="inline-block bg-yellow-500/10 text-yellow-400 text-xs px-4 py-1 rounded-full mb-4">
              Lesson 10
            </span>

            <h2 className="text-2xl font-semibold text-slate-100 mb-2">
              DOM Manipulation
            </h2>

            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              DOM Manipulation means using JavaScript to change HTML elements,
              styles, and content dynamically after the page loads.
            </p>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Selecting Elements
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 whitespace-pre-wrap max-sm:text-xs break-words">
                {`document.getElementById("title");

document.querySelector(".box");

document.querySelectorAll(".item");`}
              </pre>
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4 ">
              Changing Text & Content
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 whitespace-pre-wrap max-sm:text-xs break-words">
                {`const title = document.getElementById("title");

title.textContent = "Hello World";
title.innerHTML = "<span>New Title</span>";`}
              </pre>
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Changing Styles
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 whitespace-pre-wrap max-sm:text-xs break-words">
                {`const box = document.querySelector(".box");

box.style.backgroundColor = "red";
box.style.color = "white";
box.style.padding = "20px";`}
              </pre>
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Adding & Removing Elements
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 whitespace-pre-wrap max-sm:text-xs break-words">
                {`const div = document.createElement("div");

div.textContent = "New Element";

document.body.appendChild(div);

// Remove element
div.remove();`}
              </pre>
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Events Example
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 whitespace-pre-wrap max-sm:text-xs break-words">
                {`const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  alert("Button clicked!");
});`}
              </pre>
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Real Examples
            </p>

            <div className="flex flex-col gap-4">
              {[
                {
                  title: "Change Title",
                  code: `document.querySelector("h1").textContent = "Welcome!";`,
                },
                {
                  title: "Toggle Class",
                  code: `document.querySelector(".box").classList.toggle("active");`,
                },
                {
                  title: "Click Event",
                  code: `button.addEventListener("click", () => {
  console.log("Clicked!");
});`,
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-[#0f1117] border border-white/7 rounded-xl p-4"
                >
                  <p className="text-sm text-yellow-400 font-medium mb-3">
                    {item.title}
                  </p>

                  <div
                    className="bg-black/30 border border-white/5 rounded-lg p-3 font-mono text-xs overflow-x-auto"
                    dir="ltr"
                  >
                    <pre className="text-slate-300 whitespace-pre-wrap max-sm:text-xs break-words">
                      {item.code}
                    </pre>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* lesson 11 */}
          <div
            id="events"
            className="bg-[#161b27] p-10 border border-white/10 rounded-xl w-full max-w-3xl max-sm:px-5"
          >
            <span className="inline-block bg-yellow-500/10 text-yellow-400 text-xs px-4 py-1 rounded-full mb-4">
              Lesson 11
            </span>

            <h2 className="text-2xl font-semibold text-slate-100 mb-2">
              Events
            </h2>

            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              Events in JavaScript let you react to user actions like clicks,
              typing, scrolling, hovering, and more.
            </p>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Click Event
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8"
              dir="ltr"
            >
              <pre className="text-slate-300 whitespace-pre-wrap max-sm:text-xs break-words">
                {`const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  console.log("Button clicked!");
});`}
              </pre>
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Mouse Events
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {[
                {
                  title: "click",
                  desc: "When user clicks an element",
                  example: `element.addEventListener("click", () => {});`,
                },
                {
                  title: "dblclick",
                  desc: "Double click event",
                  example: `element.addEventListener("dblclick", () => {});`,
                },
                {
                  title: "mouseover",
                  desc: "When mouse enters element",
                  example: `element.addEventListener("mouseover", () => {});`,
                },
                {
                  title: "mouseout",
                  desc: "When mouse leaves element",
                  example: `element.addEventListener("mouseout", () => {});`,
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-[#0f1117] border border-white/7 rounded-xl p-5"
                >
                  <p className="text-yellow-400 font-medium mb-2">
                    {item.title}
                  </p>

                  <p className="text-xs text-slate-500 mb-3">{item.desc}</p>

                  <div
                    className="bg-black/30 border border-white/5 rounded-lg p-3 font-mono text-xs"
                    dir="ltr"
                  >
                    <pre className="text-slate-300 whitespace-pre-wrap max-sm:text-xs break-words">
                      {item.example}
                    </pre>
                  </div>
                </div>
              ))}
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Keyboard Events
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8"
              dir="ltr"
            >
              <pre className="text-slate-300 whitespace-pre-wrap max-sm:text-xs break-words">
                {`document.addEventListener("keydown", (e) => {
  console.log(e.key);
});

document.addEventListener("keyup", (e) => {
  console.log("Key released");
});`}
              </pre>
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Form Events
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8"
              dir="ltr"
            >
              <pre className="text-slate-300 whitespace-pre-wrap max-sm:text-xs break-words">
                {`const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Form submitted");
});`}
              </pre>
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Input Event
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8"
              dir="ltr"
            >
              <pre className="text-slate-300 whitespace-pre-wrap max-sm:text-xs break-words">
                {`const input = document.querySelector("input");

input.addEventListener("input", (e) => {
  console.log(e.target.value);
});`}
              </pre>
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Real Examples
            </p>

            <div className="flex flex-col gap-4">
              {[
                {
                  title: "Button Click Alert",
                  code: `button.addEventListener("click", () => {
  alert("Hello!");
});`,
                },
                {
                  title: "Live Input",
                  code: `input.addEventListener("input", (e) => {
  console.log(e.target.value);
});`,
                },
                {
                  title: "Toggle Class",
                  code: `box.addEventListener("click", () => {
  box.classList.toggle("active");
});`,
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-[#0f1117] border border-white/7 rounded-xl p-4"
                >
                  <p className="text-sm text-yellow-400 font-medium mb-3">
                    {item.title}
                  </p>

                  <div
                    className="bg-black/30 border border-white/5 rounded-lg p-3 font-mono text-xs"
                    dir="ltr"
                  >
                    <pre className="text-slate-300 whitespace-pre-wrap max-sm:text-xs break-words">
                      {item.code}
                    </pre>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* lesson 12 */}
          <div
            id="timers"
            className="bg-[#161b27] p-10 border border-white/10 rounded-xl w-full max-w-3xl max-sm:px-5"
          >
            <span className="inline-block bg-yellow-500/10 text-yellow-400 text-xs px-4 py-1 rounded-full mb-4">
              Lesson 12
            </span>

            <h2 className="text-2xl font-semibold text-slate-100 mb-2">
              setTimeout & setInterval
            </h2>

            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              JavaScript timers let you run code after a delay or repeatedly at
              intervals. They are useful for animations, countdowns, and
              automation.
            </p>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              setTimeout
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8"
              dir="ltr"
            >
              <pre className="text-slate-300 whitespace-pre-wrap">
                {`setTimeout(() => {
  console.log("This runs after 2 seconds");
}, 2000);`}
              </pre>
            </div>

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Example Use Case
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8"
              dir="ltr"
            >
              <pre className="text-slate-300 whitespace-pre-wrap">
                {`setTimeout(() => {
  alert("Welcome to the website!");
}, 3000);`}
              </pre>
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              setInterval
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8"
              dir="ltr"
            >
              <pre className="text-slate-300 whitespace-pre-wrap">
                {`setInterval(() => {
  console.log("Runs every 1 second");
}, 1000);`}
              </pre>
            </div>

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Example Use Case
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8"
              dir="ltr"
            >
              <pre className="text-slate-300 whitespace-pre-wrap">
                {`let count = 0;

setInterval(() => {
  count++;
  console.log("Counter:", count);
}, 1000);`}
              </pre>
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Stop Timer
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8"
              dir="ltr"
            >
              <pre className="text-slate-300 whitespace-pre-wrap">
                {`const id = setInterval(() => {
  console.log("Running...");
}, 1000);

// Stop after 5 seconds
setTimeout(() => {
  clearInterval(id);
  console.log("Stopped!");
}, 5000);`}
              </pre>
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Key Difference
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {[
                {
                  title: "setTimeout",
                  desc: "Runs once after delay",
                  color: "text-yellow-400",
                },
                {
                  title: "setInterval",
                  desc: "Runs repeatedly every interval",
                  color: "text-indigo-400",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-[#0f1117] border border-white/7 rounded-xl p-5"
                >
                  <p className={`font-medium mb-2 ${item.color}`}>
                    {item.title}
                  </p>

                  <p className="text-xs text-slate-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* lesson 13 */}
          <div
            id="es6"
            className="bg-[#161b27] p-10 border border-white/10 rounded-xl w-full max-w-3xl max-sm:px-5"
          >
            <span className="inline-block bg-yellow-500/10 text-yellow-400 text-xs px-4 py-1 rounded-full mb-4">
              Lesson 13
            </span>

            <h2 className="text-2xl font-semibold text-slate-100 mb-2">
              Modern ES6+
            </h2>

            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              ES6 (ECMAScript 2015) introduced modern JavaScript features that
              make code shorter, cleaner, and more powerful.
            </p>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              let & const
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8"
              dir="ltr"
            >
              <pre className="text-slate-300 whitespace-pre-wrap">
                {`let name = "Ali";
const age = 20;`}
              </pre>
            </div>

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Arrow Functions
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8"
              dir="ltr"
            >
              <pre className="text-slate-300 whitespace-pre-wrap">
                {`// Old way
function add(a, b) {
  return a + b;
}

// ES6 way
const add = (a, b) => a + b;`}
              </pre>
            </div>

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Template Literals
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8"
              dir="ltr"
            >
              <pre className="text-slate-300 whitespace-pre-wrap">
                {`const name = "Ahmed";

console.log(\`Hello \${name}\`);`}
              </pre>
            </div>

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Destructuring
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8"
              dir="ltr"
            >
              <pre className="text-slate-300 whitespace-pre-wrap">
                {`const user = {
  name: "Sara",
  age: 22
};

const { name, age } = user;`}
              </pre>
            </div>

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Spread Operator
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8"
              dir="ltr"
            >
              <pre className="text-slate-300 whitespace-pre-wrap">
                {`const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];`}
              </pre>
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Default Parameters
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8"
              dir="ltr"
            >
              <pre className="text-slate-300 whitespace-pre-wrap">
                {`function greet(name = "Guest") {
  console.log("Hello " + name);
}

greet();`}
              </pre>
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Real Examples
            </p>

            <div className="flex flex-col gap-4">
              {[
                {
                  title: "Arrow Function Sum",
                  code: `const sum = (a, b) => a + b;

console.log(sum(5, 3));`,
                },
                {
                  title: "User Object",
                  code: `const user = {
  name: "Ali",
  age: 25
};

const { name } = user;`,
                },
                {
                  title: "Combine Arrays",
                  code: `const a = [1, 2];
const b = [3, 4];

const result = [...a, ...b];`,
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-[#0f1117] border border-white/7 rounded-xl p-4"
                >
                  <p className="text-sm text-yellow-400 font-medium mb-3">
                    {item.title}
                  </p>

                  <div
                    className="bg-black/30 border border-white/5 rounded-lg p-3 font-mono text-xs"
                    dir="ltr"
                  >
                    <pre className="text-slate-300 whitespace-pre-wrap">
                      {item.code}
                    </pre>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            id="fetch"
            className="bg-[#161b27] p-10 border border-white/10 rounded-xl w-full max-w-3xl max-sm:px-5"
          >
            <span className="inline-block bg-yellow-500/10 text-yellow-400 text-xs px-4 py-1 rounded-full mb-4">
              Lesson 14
            </span>

            <h2 className="text-2xl font-semibold text-slate-100 mb-2">
              Fetch API
            </h2>

            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              The Fetch API allows you to make HTTP requests to servers and
              external APIs directly from the browser. It returns a Promise that
              resolves with the response.
            </p>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              What is Fetch?
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {[
                {
                  title: "Built-in Browser API",
                  desc: "Fetch is natively available in all modern browsers — no libraries needed.",
                  color: "text-yellow-400",
                },
                {
                  title: "Returns a Promise",
                  desc: "Fetch is asynchronous and uses Promises to handle responses.",
                  color: "text-orange-400",
                },
                {
                  title: "Works with JSON",
                  desc: "Easily parse JSON responses using the .json() method on the response object.",
                  color: "text-blue-400",
                },
                {
                  title: "Supports All Methods",
                  desc: "Use GET, POST, PUT, DELETE and more with the options parameter.",
                  color: "text-green-400",
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
              Basic Fetch GET Request
            </p>

            <p className="text-sm text-slate-400 mb-3 leading-relaxed">
              Use <code className="text-yellow-300">fetch()</code> with a URL to
              get data from an API.
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 whitespace-pre-wrap max-sm:text-xs break-words">{`fetch("https://api.example.com/users")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.error("Error:", err));`}</pre>
            </div>

            <div className="border-l-4 border-yellow-500 bg-yellow-500/5 rounded-r-lg p-4 text-sm text-yellow-200 leading-relaxed mb-8">
              💡 Always add <code className="text-yellow-100">.catch()</code> to
              handle network errors. Fetch only rejects on network failure, not
              on HTTP errors like 404.
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Common Fetch Patterns
            </p>

            <div className="flex flex-col gap-3">
              {[
                {
                  tag: "GET Request",
                  desc: "Fetch data from an API and display it.",
                  example: `fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((res) => res.json())
  .then((data) => console.log(data.title));`,
                  color: "text-yellow-400",
                },
                {
                  tag: "POST Request",
                  desc: "Send data to a server using the POST method.",
                  example: `fetch("https://api.example.com/users", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name: "Ahmed", age: 25 }),
})
  .then((res) => res.json())
  .then((data) => console.log(data));`,
                  color: "text-orange-400",
                },
                {
                  tag: "Async / Await with Fetch",
                  desc: "Use async/await for cleaner and more readable fetch calls.",
                  example: `async function getUser() {
  try {
    const res = await fetch("https://api.example.com/users/1");
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error("Error:", err);
  }
}`,
                  color: "text-blue-400",
                },
                {
                  tag: "Check Response Status",
                  desc: "Always check if the response was successful before using the data.",
                  example: `fetch("https://api.example.com/data")
  .then((res) => {
    if (!res.ok) throw new Error("Request failed: " + res.status);
    return res.json();
  })
  .then((data) => console.log(data));`,
                  color: "text-green-400",
                },
              ].map((item) => (
                <div
                  key={item.tag}
                  className="bg-[#0f1117] border border-white/7 rounded-xl p-4"
                >
                  <p className={`font-medium text-sm mb-1 ${item.color}`}>
                    {item.tag}
                  </p>
                  <p className="text-xs text-slate-500 leading-relaxed mb-3">
                    {item.desc}
                  </p>
                  <div
                    className="bg-black/30 border border-white/5 rounded-lg p-3 font-mono text-xs overflow-x-auto"
                    dir="ltr"
                  >
                    <pre className="text-slate-300 whitespace-pre-wrap max-sm:text-xs break-words">
                      {item.example}
                    </pre>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            id="async-await"
            className="bg-[#161b27] p-10 border border-white/10 rounded-xl w-full max-w-3xl max-sm:px-5"
          >
            <span className="inline-block bg-yellow-500/10 text-yellow-400 text-xs px-4 py-1 rounded-full mb-4">
              Lesson 15
            </span>

            <h2 className="text-2xl font-semibold text-slate-100 mb-2">
              Async / Await
            </h2>

            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              Async/Await is a modern way to handle asynchronous code in
              JavaScript. It makes your code look and behave like synchronous
              code, which makes it much easier to read and debug.
            </p>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              What is Async / Await?
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {[
                {
                  title: "Built on Promises",
                  desc: "Async/Await is just cleaner syntax on top of Promises — it doesn't replace them.",
                  color: "text-yellow-400",
                },
                {
                  title: "async Keyword",
                  desc: "Adding async before a function makes it always return a Promise automatically.",
                  color: "text-orange-400",
                },
                {
                  title: "await Keyword",
                  desc: "await pauses the function until the Promise resolves, then returns the result.",
                  color: "text-blue-400",
                },
                {
                  title: "Error Handling",
                  desc: "Use try/catch to handle errors cleanly instead of chaining .catch().",
                  color: "text-green-400",
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
              Basic Syntax
            </p>

            <p className="text-sm text-slate-400 mb-3 leading-relaxed">
              Use <code className="text-yellow-300">async</code> before the
              function and <code className="text-yellow-300">await</code> before
              any Promise.
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 whitespace-pre-wrap max-sm:text-xs break-words">{`async function getData() {
  const res = await fetch("https://api.example.com/data");
  const data = await res.json();
  console.log(data);
}

getData();`}</pre>
            </div>

            <div className="border-l-4 border-yellow-500 bg-yellow-500/5 rounded-r-lg p-4 text-sm text-yellow-200 leading-relaxed mb-8">
              💡 <code className="text-yellow-100">await</code> can only be used
              inside an <code className="text-yellow-100">async</code> function.
              Using it outside will throw a syntax error.
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Common Patterns
            </p>

            <div className="flex flex-col gap-3">
              {[
                {
                  tag: "Async with Try / Catch",
                  desc: "Always wrap await calls in try/catch to handle errors properly.",
                  example: `async function getUser() {
  try {
    const res = await fetch("https://api.example.com/users/1");
    if (!res.ok) throw new Error("Failed: " + res.status);
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error("Error:", err.message);
  }
}`,
                  color: "text-yellow-400",
                },
                {
                  tag: "Async Arrow Function",
                  desc: "You can also use async with arrow functions.",
                  example: `const getPost = async (id) => {
  const res = await fetch(\`https://api.example.com/posts/\${id}\`);
  const data = await res.json();
  return data;
};`,
                  color: "text-orange-400",
                },
                {
                  tag: "Multiple Awaits",
                  desc: "You can await multiple requests one after another.",
                  example: `async function loadPage() {
  const user = await fetchUser();
  const posts = await fetchPosts(user.id);
  const comments = await fetchComments(posts[0].id);
  console.log(comments);
}`,
                  color: "text-blue-400",
                },
                {
                  tag: "Parallel Requests with Promise.all",
                  desc: "Run multiple requests at the same time for better performance.",
                  example: `async function loadAll() {
  const [users, posts] = await Promise.all([
    fetch("https://api.example.com/users").then(r => r.json()),
    fetch("https://api.example.com/posts").then(r => r.json()),
  ]);
  console.log(users, posts);
}`,
                  color: "text-green-400",
                },
              ].map((item) => (
                <div
                  key={item.tag}
                  className="bg-[#0f1117] border border-white/7 rounded-xl p-4"
                >
                  <p className={`font-medium text-sm mb-1 ${item.color}`}>
                    {item.tag}
                  </p>
                  <p className="text-xs text-slate-500 leading-relaxed mb-3">
                    {item.desc}
                  </p>
                  <div
                    className="bg-black/30 border border-white/5 rounded-lg p-3 font-mono text-xs overflow-x-auto"
                    dir="ltr"
                  >
                    <pre className="text-slate-300 whitespace-pre-wrap max-sm:text-xs break-words">
                      {item.example}
                    </pre>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            id="local-storage"
            className="bg-[#161b27] p-10 border border-white/10 rounded-xl w-full max-w-3xl max-sm:px-5"
          >
            <span className="inline-block bg-yellow-500/10 text-yellow-400 text-xs px-4 py-1 rounded-full mb-4">
              Lesson 16
            </span>

            <h2 className="text-2xl font-semibold text-slate-100 mb-2">
              Local Storage
            </h2>

            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              Local Storage allows you to save data in the browser that persists
              even after the page is refreshed or closed. It stores data as
              key-value pairs with no expiration date.
            </p>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              What is Local Storage?
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {[
                {
                  title: "Persistent Storage",
                  desc: "Data stays in the browser even after closing the tab or restarting the browser.",
                  color: "text-yellow-400",
                },
                {
                  title: "Key-Value Pairs",
                  desc: "Everything is stored as strings using a simple key and value system.",
                  color: "text-orange-400",
                },
                {
                  title: "Up to 5MB",
                  desc: "Local Storage can hold around 5MB of data per origin in most browsers.",
                  color: "text-blue-400",
                },
                {
                  title: "Synchronous API",
                  desc: "Local Storage operations are synchronous and instantly available — no Promises needed.",
                  color: "text-green-400",
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
              Basic Syntax
            </p>

            <p className="text-sm text-slate-400 mb-3 leading-relaxed">
              Use{" "}
              <code className="text-yellow-300">localStorage.setItem()</code> to
              save and{" "}
              <code className="text-yellow-300">localStorage.getItem()</code> to
              read.
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 whitespace-pre-wrap max-sm:text-xs break-words">{`// Save
localStorage.setItem("username", "Ahmed");

// Read
const name = localStorage.getItem("username");
console.log(name); // "Ahmed"

// Delete
localStorage.removeItem("username");

// Clear all
localStorage.clear();`}</pre>
            </div>

            <div className="border-l-4 border-yellow-500 bg-yellow-500/5 rounded-r-lg p-4 text-sm text-yellow-200 leading-relaxed mb-8">
              💡 Local Storage only stores strings. To save objects or arrays,
              use <code className="text-yellow-100">JSON.stringify()</code> when
              saving and <code className="text-yellow-100">JSON.parse()</code>{" "}
              when reading.
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Common Patterns
            </p>

            <div className="flex flex-col gap-3">
              {[
                {
                  tag: "Save & Read a String",
                  desc: "Store simple text values like usernames or tokens.",
                  example: `localStorage.setItem("token", "abc123");
const token = localStorage.getItem("token");
console.log(token); // "abc123"`,
                  color: "text-yellow-400",
                },
                {
                  tag: "Save & Read an Object",
                  desc: "Convert objects to JSON strings before saving them.",
                  example: `const user = { name: "Ahmed", age: 25 };
localStorage.setItem("user", JSON.stringify(user));

const saved = JSON.parse(localStorage.getItem("user"));
console.log(saved.name); // "Ahmed"`,
                  color: "text-orange-400",
                },
                {
                  tag: "Save & Read an Array",
                  desc: "Store arrays the same way using JSON.stringify and JSON.parse.",
                  example: `const todos = ["Buy milk", "Read book", "Code"];
localStorage.setItem("todos", JSON.stringify(todos));

const list = JSON.parse(localStorage.getItem("todos"));
console.log(list[0]); // "Buy milk"`,
                  color: "text-blue-400",
                },
                {
                  tag: "Check if Key Exists",
                  desc: "getItem returns null if the key doesn't exist — always check before using.",
                  example: `const theme = localStorage.getItem("theme");

if (theme) {
  document.body.className = theme;
} else {
  document.body.className = "light";
}`,
                  color: "text-green-400",
                },
              ].map((item) => (
                <div
                  key={item.tag}
                  className="bg-[#0f1117] border border-white/7 rounded-xl p-4"
                >
                  <p className={`font-medium text-sm mb-1 ${item.color}`}>
                    {item.tag}
                  </p>
                  <p className="text-xs text-slate-500 leading-relaxed mb-3">
                    {item.desc}
                  </p>
                  <div
                    className="bg-black/30 border border-white/5 rounded-lg p-3 font-mono text-xs overflow-x-auto"
                    dir="ltr"
                  >
                    <pre className="text-slate-300 whitespace-pre-wrap max-sm:text-xs break-words">
                      {item.example}
                    </pre>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* lesson 17 */}
          <div
            id="modules"
            className="bg-[#161b27] p-10 border border-white/10 rounded-xl w-full max-w-3xl max-sm:px-5"
          >
            <span className="inline-block bg-yellow-500/10 text-yellow-400 text-xs px-4 py-1 rounded-full mb-4">
              Lesson 17
            </span>

            <h2 className="text-2xl font-semibold text-slate-100 mb-2">
              JavaScript Modules
            </h2>

            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              JavaScript Modules allow you to split your code into multiple
              files. This makes projects more organized, reusable, and easier to
              maintain.
            </p>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Why Use Modules?
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {[
                {
                  title: "Better Organization",
                  desc: "Separate features into different files instead of writing everything in one file.",
                  color: "text-yellow-400",
                },
                {
                  title: "Reusable Code",
                  desc: "Export code once and import it wherever you need it.",
                  color: "text-orange-400",
                },
                {
                  title: "Maintainability",
                  desc: "Large applications become easier to manage and update.",
                  color: "text-blue-400",
                },
                {
                  title: "Avoid Global Variables",
                  desc: "Modules create their own scope and reduce naming conflicts.",
                  color: "text-green-400",
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
              Exporting Code
            </p>

            <p className="text-sm text-slate-400 mb-3 leading-relaxed">
              Use the <code className="text-yellow-300">export</code> keyword to
              make variables, functions, or classes available to other files.
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 whitespace-pre-wrap">
                {`// math.js

export function add(a, b) {
  return a + b;
}`}
              </pre>
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Importing Code
            </p>

            <p className="text-sm text-slate-400 mb-3 leading-relaxed">
              Use the <code className="text-yellow-300">import</code> keyword to
              use exported code from another file.
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 whitespace-pre-wrap">
                {`// app.js

import { add } from "./math.js";

console.log(add(5, 3));`}
              </pre>
            </div>

            <div className="border-l-4 border-yellow-500 bg-yellow-500/5 rounded-r-lg p-4 text-sm text-yellow-200 leading-relaxed mb-8">
              💡 When using modules in the browser, remember to add
              <code className="text-yellow-100 mx-1">type="module"</code>
              to your script tag.
            </div>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 whitespace-pre-wrap">
                {`<script type="module" src="app.js"></script>`}
              </pre>
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Types Of Exports
            </p>

            <div className="flex flex-col gap-3">
              {[
                {
                  tag: "Named Export",
                  desc: "Export multiple items from a file and import them using curly braces.",
                  example: `export const name = "Mostafa";

import { name } from "./file.js";`,
                  color: "text-yellow-400",
                },
                {
                  tag: "Default Export",
                  desc: "Export a single main value from a file.",
                  example: `export default function greet() {}

import greet from "./file.js";`,
                  color: "text-orange-400",
                },
                {
                  tag: "Multiple Exports",
                  desc: "A file can export several variables and functions.",
                  example: `export const age = 20;
export const city = "Cairo";`,
                  color: "text-blue-400",
                },
                {
                  tag: "Import Everything",
                  desc: "Import all exports under one object.",
                  example: `import * as utils from "./utils.js";

utils.add(1,2);`,
                  color: "text-green-400",
                },
              ].map((item) => (
                <div
                  key={item.tag}
                  className="bg-[#0f1117] border border-white/7 rounded-xl p-4"
                >
                  <p className={`font-medium text-sm mb-1 ${item.color}`}>
                    {item.tag}
                  </p>

                  <p className="text-xs text-slate-500 leading-relaxed mb-3">
                    {item.desc}
                  </p>

                  <div
                    className="bg-black/30 border border-white/5 rounded-lg p-3 font-mono text-xs overflow-x-auto"
                    dir="ltr"
                  >
                    <pre className="text-slate-300 whitespace-pre-wrap">
                      {item.example}
                    </pre>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* lesson 18 */}
          <div
            id="oop"
            className="bg-[#161b27] p-10 border border-white/10 rounded-xl w-full max-w-3xl max-sm:px-5"
          >
            <span className="inline-block bg-yellow-500/10 text-yellow-400 text-xs px-4 py-1 rounded-full mb-4">
              Lesson 18
            </span>

            <h2 className="text-2xl font-semibold text-slate-100 mb-2">
              OOP In JavaScript
            </h2>

            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              Object-Oriented Programming (OOP) is a programming paradigm that
              helps organize code using objects and classes. It makes
              applications easier to build, maintain, and reuse.
            </p>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              OOP Concepts
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {[
                {
                  title: "Class",
                  desc: "A blueprint used to create objects.",
                  color: "text-yellow-400",
                },
                {
                  title: "Object",
                  desc: "An instance created from a class.",
                  color: "text-orange-400",
                },
                {
                  title: "Properties",
                  desc: "Variables that belong to an object.",
                  color: "text-blue-400",
                },
                {
                  title: "Methods",
                  desc: "Functions that belong to an object.",
                  color: "text-green-400",
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
              Creating A Class
            </p>

            <p className="text-sm text-slate-400 mb-3 leading-relaxed">
              Classes are used as templates for creating objects.
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 whitespace-pre-wrap">
                {`class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}`}
              </pre>
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Creating Objects
            </p>

            <p className="text-sm text-slate-400 mb-3 leading-relaxed">
              Use the <code className="text-yellow-300">new</code> keyword to
              create objects from a class.
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 whitespace-pre-wrap">
                {`const user1 = new User("Mostafa", 20);

console.log(user1.name);
console.log(user1.age);`}
              </pre>
            </div>

            <div className="border-l-4 border-yellow-500 bg-yellow-500/5 rounded-r-lg p-4 text-sm text-yellow-200 leading-relaxed mb-8">
              💡 The constructor runs automatically whenever a new object is
              created.
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Methods
            </p>

            <p className="text-sm text-slate-400 mb-3 leading-relaxed">
              Methods are functions inside a class.
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 whitespace-pre-wrap">
                {`class User {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log("Hello " + this.name);
  }
}

const user = new User("Mostafa");

user.greet();`}
              </pre>
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Inheritance
            </p>

            <p className="text-sm text-slate-400 mb-3 leading-relaxed">
              A class can inherit properties and methods from another class
              using
              <code className="text-yellow-300 mx-1">extends</code>.
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 whitespace-pre-wrap">
                {`class User {
  constructor(name) {
    this.name = name;
  }
}

class Admin extends User {
  deleteUser() {
    console.log("User Deleted");
  }
}

const admin = new Admin("Mostafa");

admin.deleteUser();`}
              </pre>
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              The this Keyword
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 whitespace-pre-wrap">
                {`class Car {
  constructor(model) {
    this.model = model;
  }

  showModel() {
    console.log(this.model);
  }
}

const car = new Car("BMW");

car.showModel();`}
              </pre>
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              OOP Benefits
            </p>

            <div className="flex flex-col gap-3">
              {[
                {
                  tag: "Reusable Code",
                  desc: "Create classes once and use them many times.",
                  color: "text-yellow-400",
                },
                {
                  tag: "Easy Maintenance",
                  desc: "Large applications become easier to update.",
                  color: "text-orange-400",
                },
                {
                  tag: "Better Organization",
                  desc: "Keeps related data and functions together.",
                  color: "text-blue-400",
                },
                {
                  tag: "Scalability",
                  desc: "Makes large projects easier to grow.",
                  color: "text-green-400",
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

          {/* lesson 19 */}
          <div
            id="error-handling"
            className="bg-[#161b27] p-10 border border-white/10 rounded-xl w-full max-w-3xl max-sm:px-5"
          >
            <span className="inline-block bg-yellow-500/10 text-yellow-400 text-xs px-4 py-1 rounded-full mb-4">
              Lesson 19
            </span>

            <h2 className="text-2xl font-semibold text-slate-100 mb-2">
              Error Handling In JavaScript
            </h2>

            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              Errors are common in programming. JavaScript provides tools to
              detect, handle and recover from errors without crashing your
              application.
            </p>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              What Is An Error?
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {[
                {
                  title: "Syntax Error",
                  desc: "Occurs when JavaScript code has invalid syntax.",
                  color: "text-yellow-400",
                },
                {
                  title: "Reference Error",
                  desc: "Occurs when using a variable that doesn't exist.",
                  color: "text-orange-400",
                },
                {
                  title: "Type Error",
                  desc: "Occurs when using a value incorrectly.",
                  color: "text-blue-400",
                },
                {
                  title: "Runtime Error",
                  desc: "Occurs while the program is running.",
                  color: "text-green-400",
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
              Try & Catch
            </p>

            <p className="text-sm text-slate-400 mb-3 leading-relaxed">
              Use <code className="text-yellow-300">try</code> to run code and
              <code className="text-yellow-300 mx-1">catch</code> to handle
              errors.
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 whitespace-pre-wrap">
                {`try {
  console.log(userName);
} catch (error) {
  console.log("Something went wrong!");
}`}
              </pre>
            </div>

            <div className="border-l-4 border-yellow-500 bg-yellow-500/5 rounded-r-lg p-4 text-sm text-yellow-200 leading-relaxed mb-8">
              💡 The code inside catch only runs if an error happens.
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Accessing Error Information
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 whitespace-pre-wrap">
                {`try {
  console.log(userName);
} catch (error) {
  console.log(error.message);
}`}
              </pre>
            </div>

            <p className="text-sm text-slate-400 mb-8">
              The error object contains useful information such as the error
              message.
            </p>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Finally
            </p>

            <p className="text-sm text-slate-400 mb-3 leading-relaxed">
              The <code className="text-yellow-300">finally</code> block runs
              whether an error occurs or not.
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 whitespace-pre-wrap">
                {`try {
  console.log("Running...");
} catch (error) {
  console.log(error.message);
} finally {
  console.log("Finished");
}`}
              </pre>
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Throwing Custom Errors
            </p>

            <p className="text-sm text-slate-400 mb-3 leading-relaxed">
              You can create your own errors using the
              <code className="text-yellow-300 mx-1">throw</code> keyword.
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 whitespace-pre-wrap">
                {`const age = 15;

if (age < 18) {
  throw new Error("You must be 18 or older");
}`}
              </pre>
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Handling Async Errors
            </p>

            <p className="text-sm text-slate-400 mb-3 leading-relaxed">
              When using async/await, wrap your code in try/catch.
            </p>

            <div
              className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8 overflow-x-auto"
              dir="ltr"
            >
              <pre className="text-slate-300 whitespace-pre-wrap">
                {`async function getUsers() {
  try {
    const response = await fetch("/users");

    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log("Request Failed");
  }
}`}
              </pre>
            </div>

            <hr className="border-white/10 mb-8" />

            <p className="text-xs text-slate-500 uppercase tracking-widest mb-4">
              Best Practices
            </p>

            <div className="flex flex-col gap-3">
              {[
                {
                  tag: "Use try/catch",
                  desc: "Handle errors gracefully instead of letting the app crash.",
                  color: "text-yellow-400",
                },
                {
                  tag: "Show Helpful Messages",
                  desc: "Display meaningful error messages to users.",
                  color: "text-orange-400",
                },
                {
                  tag: "Use throw",
                  desc: "Create custom errors when needed.",
                  color: "text-blue-400",
                },
                {
                  tag: "Handle Async Errors",
                  desc: "Always wrap async/await code in try/catch.",
                  color: "text-green-400",
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
        </div>
      </div>
    </>
  );
}

export default JavaScriptPage;
