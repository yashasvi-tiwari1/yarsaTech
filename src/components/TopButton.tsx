import { useEffect, useState } from "react";
import { IconCircleChevronsUp } from "@tabler/icons-react";

const TopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const topOffset =
        window.pageYOffset || document.documentElement.scrollTop;

      setIsVisible(topOffset > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className="top-button"
      style={{ display: isVisible ? "block" : "none" }}
    >
      <IconCircleChevronsUp className="h-9 w-9" />
    </button>
  );
};

export default TopButton;
