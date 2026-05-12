import { RiSchoolFill } from "react-icons/ri";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { BsJournal } from "react-icons/bs";
import { FaBell } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";

import { Button } from "./ui/Button";
import { useTranslation } from "react-i18next";

const menuItems = [
  {
    icon: RiSchoolFill,
    label: "home.place",
  },
  {
    icon: FaLocationCrosshairs,
    label: "home.judgment",
  },
  {
    icon: BsJournal,
    label: "home.journal",
  },
  {
    icon: FaBell,
    label: "home.requests",
  },
  {
    icon: GiReceiveMoney,
    label: "home.practice",
  },
  {
    icon: GiReceiveMoney,
    label: "home.practice",
  },
  {
    icon: GiReceiveMoney,
    label: "home.practice",
  },
  {
    icon: FaLocationCrosshairs,
    label: "home.judgment",
  },
  {
    icon: FaLocationCrosshairs,
    label: "home.judgment",
  },
  {
    icon: FaLocationCrosshairs,
    label: "home.judgment",
  },
  {
    icon: FaLocationCrosshairs,
    label: "home.judgment",
  },
  {
    icon: FaLocationCrosshairs,
    label: "home.judgment",
  },
];

export function MainMenu() {
  const { t } = useTranslation();

  return (
    <div className="fc min-h-screen border border-green-700">
      <div className="w-7/8 h-6/8 rounded-2xl border-2 border-border bg-secondary p-10">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
          {menuItems.map(({ icon: Icon, label }) => (
            <Button
              className="fc h-48 w-full justify-center gap-3"
              size="element"
              margin="element"
            >
              <Icon className="h-20 w-20" />

              <div className="max-w-[120px] text-center wrap-break-words whitespace-normal">
                {t(label)}
              </div>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
