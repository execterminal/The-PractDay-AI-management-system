import { Button } from "./ui/Button";
import { FiUser } from "react-icons/fi";
// import { useTranslation } from "react-i18next";

export function Header() {
  // const { t } = useTranslation();
  return (
    <header className="sticky top-0 w-full bg-secondary backdrop-blur supports-backdrop-fileter:bg-background/60">
      <div className="flex h-12 sm:h-14 items-center justify-between px-3 sm:px-4.5">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <Button>
            <p>RU / KZ</p>
          </Button>
        </div>
        <div>
          <Button className="w-full gap-2 h-7 ">
            <FiUser />
          </Button>
        </div>
      </div>
    </header>
  );
}
