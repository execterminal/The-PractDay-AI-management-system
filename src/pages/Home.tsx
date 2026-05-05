import { Header } from "../components/Header";
import { MainMenu } from "../components/MainMenu";

const Home: React.FC = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <MainMenu />
      </div>
    </div>
  );
};

export default Home;
