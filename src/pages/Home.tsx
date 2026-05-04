import { Button } from "../components/ui/Button";
import { Header } from "../components/ui/Header";
import { useTranslation } from "react-i18next";

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Header></Header>
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-450 h-180 border-2 border-border p-10 rounded-2xl bg-secondary flex items-center justify-center">
          <Button size="element"></Button>
          <Button size="element" margin="element">
            HI
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
