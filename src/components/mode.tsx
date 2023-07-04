import Image from "next/image";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { IconSun, IconMoon } from "@tabler/icons-react";

function Mode() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const currentTheme = theme === "system" ? systemTheme : theme;

  // Conditional styling for moon icon color
  const moonIconColor = currentTheme === "dark" ? "text-white" : "text-black";

  return (
    <div>
      <div className="flex justify-center">
        {currentTheme === "light" ? (
          <button
            className=" button rounded-md p-1 text-black"
            aria-label="Icon Sun"
            onClick={() => setTheme("dark")}
          >
            <IconSun strokeWidth={1.5} className="h-6 w-6" />
          </button>
        ) : (
          <button
            className={`p-1 button rounded-md ${moonIconColor}`}
            aria-label="Icon Moon"
            onClick={() => setTheme("light")}
          >
            <IconMoon strokeWidth={1.5} className="h-6 w-6" />
          </button>
        )}
      </div>
    </div>
  );
}

export default Mode;
