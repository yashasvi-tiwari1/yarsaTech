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
  return (
    <div>
      <div className="flex justify-center">
        {currentTheme === "dark" ? (
          <button
            className="hover:bg-black rounded-md p-1"
            onClick={() => setTheme("light")}
          >
            <IconSun strokeWidth={1.5} className="h-6 w-6" />
          </button>
        ) : (
          <button
            className="p-1 hover:bg-gray-100 rounded-md"
            onClick={() => setTheme("dark")}
          >
            <IconMoon strokeWidth={1.5} className="h-6 w-6" />
          </button>
        )}
      </div>
    </div>
  );
}
export default Mode;
