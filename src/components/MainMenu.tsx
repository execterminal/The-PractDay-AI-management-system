import { RiSchoolFill } from "react-icons/ri";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { BsJournal } from "react-icons/bs";
import { FaBell } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
import { Button } from "./ui/Button";
import { useTranslation } from "react-i18next";

export function MainMenu() {
  const { t } = useTranslation();
  return (
    <div className="flex items-center justify-center min-h-screen border border-green-700">
      <div className="w-7/8 h-6/8 flex items-center justify-center border-2 border-border p-10 rounded-2xl bg-secondary">
        <div className="wrap-break-words text-center items-center justify-center">
          <Button
            className="w-5/6 h-5/6 flex items-center justity-center flex-col"
            size="element"
            margin="element"
          >
            <RiSchoolFill className="w-25 h-25" />
            <div className="pt-2 whitespace-normal wrap-break-words">
              {t("home.place")}
            </div>
          </Button>
          <Button
            className="w-5/6 h-5/6 flex items-center justity-center flex-col"
            size="element"
            margin="element"
          >
            <FaLocationCrosshairs className="w-25 h-25" />
            <div className="pt-2 whitespace-normal wrap-break-words">
              {t("home.judgment")}
            </div>
          </Button>
          <Button
            className="w-5/6 h-5/6 flex items-center justity-center flex-col"
            size="element"
            margin="element"
          >
            <BsJournal className="w-25 h-25" />
            <div className="pt-2 whitespace-normal wrap-break-words">
              {t("home.journal")}
            </div>
          </Button>
          <Button
            className="w-5/6 h-5/6 flex items-center justity-center flex-col"
            size="element"
            margin="element"
          >
            <FaBell className="w-25 h-25" />
            <div className="pt-2 whitespace-normal wrap-break-words">
              {t("home.requests")}
            </div>
          </Button>
          <Button
            className="w-5/6 h-5/6 flex items-center justity-center flex-col"
            size="element"
            margin="element"
          >
            <GiReceiveMoney className="w-25 h-25" />
            <div className="pt-2 whitespace-normal wrap-break-words">
              {t("home.practice")}
            </div>
          </Button>
          <Button
            className="w-5/6 h-5/6 flex items-center justity-center flex-col"
            size="element"
            margin="element"
          >
            <GiReceiveMoney className="w-25 h-25" />
            <div className="pt-2 whitespace-normal wrap-break-words">
              {t("home.practice")}
            </div>
          </Button>
          <Button
            className="w-5/6 h-5/6 flex items-center justity-center flex-col"
            size="element"
            margin="element"
          >
            <GiReceiveMoney className="w-25 h-25" />
            <div className="pt-2 whitespace-normal wrap-break-words">
              {t("home.practice")}
            </div>
          </Button>
          <Button
            className="w-5/6 h-5/6 flex items-center justity-center flex-col"
            size="element"
            margin="element"
          >
            <FaLocationCrosshairs className="w-25 h-25" />
            <div className="pt-2 whitespace-normal wrap-break-words">
              {t("home.judgment")}
            </div>
          </Button>
          <Button
            className="w-5/6 h-5/6 flex items-center justity-center flex-col"
            size="element"
            margin="element"
          >
            <FaLocationCrosshairs className="w-25 h-25" />
            <div className="pt-2 whitespace-normal wrap-break-words">
              {t("home.judgment")}
            </div>
          </Button>
          <Button
            className="w-5/6 h-5/6 flex items-center justity-center flex-col"
            size="element"
            margin="element"
          >
            <FaLocationCrosshairs className="w-25 h-25" />
            <div className="pt-2 whitespace-normal wrap-break-words">
              {t("home.judgment")}
            </div>
          </Button>
          <Button
            className="w-5/6 h-5/6 flex items-center justity-center flex-col"
            size="element"
            margin="element"
          >
            <FaLocationCrosshairs className="w-25 h-25" />
            <div className="pt-2 whitespace-normal wrap-break-words">
              {t("home.judgment")}
            </div>
          </Button>
          <Button
            className="w-5/6 h-5/6 flex items-center justity-center flex-col"
            size="element"
            margin="element"
          >
            <FaLocationCrosshairs className="w-25 h-25" />
            <div className="pt-2 whitespace-normal wrap-break-words">
              {t("home.judgment")}
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
}
