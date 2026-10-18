import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useSetTheme, useTheme } from "@/store/theme";
import type { Theme } from "@/type";
import { PopoverClose } from "@radix-ui/react-popover";
import { CheckIcon, SunIcon } from "lucide-react";

const THEMES: Theme[] = ["system", "dark", "light"];

export default function ThemeButton() {
  const currentTheme = useTheme();
  const setTheme = useSetTheme();
  /* const onChangeTheme = (theme: Theme) => {
    const htmlTag = document.documentElement;
    htmlTag.classList.remove("dark", "light");

    if (theme === "system") {
      const isDarkTheme = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      htmlTag.classList.add(isDarkTheme ? "dark" : "light");
    } else {
      htmlTag.classList.add(theme);
    }
  }; */
  return (
    <Popover>
      <PopoverTrigger>
        <div className="hover:bg-muted cursor-pointer rounded-full p-2">
          <SunIcon />{" "}
          {/* Shadcn UI 셋업시 설치된 Lucide React 라이브러리의 아이콘 */}
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-35 p-0">
        {THEMES.map((theme) => (
          <PopoverClose key={`theme-button-${theme}`} asChild>
            <div
              onClick={() => setTheme(theme)}
              className="hover:bg-muted flex cursor-pointer items-center justify-between p-3"
            >
              {theme}
              {currentTheme === theme && <CheckIcon className="h-4 w-4" />}
            </div>
          </PopoverClose>
        ))}
      </PopoverContent>
    </Popover>
  );
}
