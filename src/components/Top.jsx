import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

function Top({ color }) {
  const [showTopButton, setShowTopButton] = useState(false);

  const colors = {
    red: "bg-red-400",
    blue: "bg-blue-400",
    cyan: "bg-cyan-500",
    yellow: "bg-yellow-400",
    orange: "bg-orange-400",
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowTopButton(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <>
      {showTopButton && (
        <button
          className={`fixed bottom-5 right-5 p-2 rounded-xl z-50 ${colors[color]}`}
          onClick={scrollToTop}
        >
          <ArrowUp size={20} color="white" />
        </button>
      )}
    </>
  );
}

export default Top;
