function Html() {
  return (
    <div className="bg-[#0f1117] min-h-screen text-white flex">
      {/* sidebar */}
      <div className="border-r border-white/10 p-7 w-[230px] flex flex-col gap-[30px] shrink-0 sticky top-0 h-screen">
        <h1 className="text-orange-400 text-xl">Html Track</h1>
        <div className="flex flex-col gap-2">
          <a href="#intro" className="text-orange-300 text-sm font-medium">
            • Introduction To Html
          </a>
          <a href="#page-structure" className="text-slate-500 text-sm">
            • Page Structure
          </a>
          <a href="#headings-and-texts" className="text-slate-500 text-sm">
            • Headings And Texts
          </a>
          <a href="#links-and-images" className="text-slate-500 text-sm">
            • Links And Images
          </a>
          <a href="#lists" className="text-slate-500 text-sm">
            • Lists
          </a>
          <a href="#tables" className="text-slate-500 text-sm">
            • Tables
          </a>
          <a href="#forms" className="text-slate-500 text-sm">
            • Forms
          </a>
          <a href="#semantic-elements" className="text-slate-500 text-sm">
            • Semantic Elements
          </a>
        </div>
      </div>

      {/* HtmlBody */}
      <div className="flex-1 py-10 px-20 overflow-y-auto flex flex-col justify-center items-center gap-10">
        <div
          id="intro"
          className="bg-[#161b27] p-10 border border-white/10 rounded-xl max-w-3xl"
        >
          <span className="inline-block bg-orange-500/10 text-orange-400 text-xs px-4 py-1 rounded-full mb-4">
            Lesson 1
          </span>

          <h1 className="text-2xl font-semibold text-slate-100 mb-2">
            Introduction To HTML
          </h1>
          <p className="text-slate-400 text-sm leading-relaxed mb-8">
            HTML is the structure and content language of every website — before
            learning CSS or JavaScript, you need to understand HTML well.
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
              <span className="text-slate-300">This is my first website.</span>
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
            <code className="text-blue-200">&lt;!DOCTYPE html&gt;</code> — this
            tells the browser the page is HTML5.
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

        <div
          id="page-structure"
          className="bg-[#161b27] p-10 border border-white/10 rounded-xl max-w-3xl mb-10"
        >
          <span className="inline-block bg-orange-500/10 text-orange-400 text-xs px-4 py-1 rounded-full mb-4">
            Lesson 2
          </span>

          <h1 className="text-2xl font-semibold text-slate-100 mb-2">
            Page Structure
          </h1>
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
            💡 The <code className="text-blue-200">&lt;main&gt;</code> tag holds
            the unique content of each page — there should only be one{" "}
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

        <div
          id="headings-and-texts"
          className="bg-[#161b27] p-10 border border-white/10 rounded-xl max-w-3xl mb-10"
        >
          <span className="inline-block bg-orange-500/10 text-orange-400 text-xs px-4 py-1 rounded-full mb-4">
            Lesson 3
          </span>

          <h1 className="text-2xl font-semibold text-slate-100 mb-2">
            Headings And Texts
          </h1>
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
              <span className="text-slate-200 text-sm italic">Italic text</span>
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
            💡 Use <code className="text-blue-200">&lt;strong&gt;</code> instead
            of <code className="text-blue-200">&lt;b&gt;</code> for important
            text — it carries semantic meaning for screen readers.
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

        <div
          id="links-and-images"
          className="bg-[#161b27] p-10 border border-white/10 rounded-xl max-w-3xl mb-10"
        >
          <span className="inline-block bg-orange-500/10 text-orange-400 text-xs px-4 py-1 rounded-full mb-4">
            Lesson 4
          </span>

          <h1 className="text-2xl font-semibold text-slate-100 mb-2">
            Links And Images
          </h1>
          <p className="text-slate-400 text-sm leading-relaxed mb-8">
            Links connect pages together and images make websites visually rich
            — these are two of the most used HTML elements.
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
            className="bg-[#0f1117] border border-white/10 rounded-lg p-4 font-mono text-sm mb-8"
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
                <p className="text-pink-400 font-mono text-sm min-w-[120px]">
                  {item.tag}
                </p>

                <p className="text-xs text-slate-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div
          id="lists"
          className="bg-[#161b27] p-10 border border-white/10 rounded-xl max-w-3xl mb-10"
        >
          <span className="inline-block bg-orange-500/10 text-orange-400 text-xs px-4 py-1 rounded-full mb-4">
            Lesson 5
          </span>

          <h1 className="text-2xl font-semibold text-slate-100 mb-2">Lists</h1>

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

        <div
          id="tables"
          className="bg-[#161b27] p-10 border border-white/10 rounded-xl max-w-3xl mb-10"
        >
          <span className="inline-block bg-orange-500/10 text-orange-400 text-xs px-4 py-1 rounded-full mb-4">
            Lesson 6
          </span>

          <h1 className="text-2xl font-semibold text-slate-100 mb-2">Tables</h1>

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

          <div className="bg-[#0f1117] border border-white/10 rounded-xl overflow-hidden mb-8">
            <table className="w-full text-sm text-left">
              <thead className="bg-white/5 text-slate-300">
                <tr>
                  <th className="p-4 border-b border-white/10">Language</th>
                  <th className="p-4 border-b border-white/10">Type</th>
                  <th className="p-4 border-b border-white/10">Difficulty</th>
                </tr>
              </thead>

              <tbody className="text-slate-400">
                <tr className="border-b border-white/5">
                  <td className="p-4">HTML</td>
                  <td className="p-4">Markup</td>
                  <td className="p-4">Easy</td>
                </tr>

                <tr className="border-b border-white/5">
                  <td className="p-4">CSS</td>
                  <td className="p-4">Styling</td>
                  <td className="p-4">Medium</td>
                </tr>

                <tr>
                  <td className="p-4">JavaScript</td>
                  <td className="p-4">Programming</td>
                  <td className="p-4">Hard</td>
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
            💡 Tables should only be used for displaying data — not for building
            page layouts.
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

        <div
          id="forms"
          className="bg-[#161b27] p-10 border border-white/10 rounded-xl max-w-3xl mb-10"
        >
          <span className="inline-block bg-orange-500/10 text-orange-400 text-xs px-4 py-1 rounded-full mb-4">
            Lesson 7
          </span>

          <h1 className="text-2xl font-semibold text-slate-100 mb-2">Forms</h1>

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
              <div key={item.type} className="flex items-center gap-4">
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

        <div
          id="semantic-elements"
          className="bg-[#161b27] p-10 border border-white/10 rounded-xl max-w-3xl mb-10"
        >
          <span className="inline-block bg-orange-500/10 text-orange-400 text-xs px-4 py-1 rounded-full mb-4">
            Lesson 8
          </span>

          <h1 className="text-2xl font-semibold text-slate-100 mb-2">
            Semantic Elements
          </h1>

          <p className="text-slate-400 text-sm leading-relaxed mb-8">
            Semantic HTML elements describe the meaning of content — making
            websites easier for developers, browsers, search engines, and screen
            readers to understand.
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
            <code className="text-blue-200">&lt;div&gt;</code> for everything —
            semantic tags made structure much clearer.
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
      </div>
    </div>
  );
}

export default Html;
