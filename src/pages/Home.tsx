import { Button } from "../components/ui/Button";
import { Header } from "../components/Header";
import { useTranslation } from "react-i18next";
import { RiSchoolFill } from "react-icons/ri";

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Header></Header>
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-450 h-180 border-2 border-border p-10 rounded-2xl bg-secondary flex items-center justify-center">
          <Button
            className="flex items-center justity-center flex-col"
            size="element"
          >
            <RiSchoolFill className="w-20 h-20" />
            {t("home.place")}
          </Button>
          <Button size="element" margin="element">
            HI
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
