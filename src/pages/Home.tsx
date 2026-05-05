import { Button } from "../components/ui/Button";
import { Header } from "../components/Header";
import { useTranslation } from "react-i18next";
import { RiSchoolFill } from "react-icons/ri";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { BsJournal } from "react-icons/bs";
import { FaBell } from "react-icons/fa";

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Header></Header>
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-450 h-180 border-2 border-border p-10 rounded-2xl bg-secondary flex items-center justify-center">
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
            <FaBell className="w-25 h-25"/>
            <div className="pt-2 whitespace-normal wrap-break-words">
              {t("home.requests")}
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
