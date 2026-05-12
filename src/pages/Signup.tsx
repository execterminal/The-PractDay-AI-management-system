// import React from "react"; // useState
import { useTranslation } from "react-i18next";
import { Input } from "../components/ui/Input";
import { Button } from "../components/ui/Button";
import { Header } from "../components/Header";
import { Label } from "../components/ui/Label";

const Signup: React.FC = () => {
  const { t } = useTranslation();
  // const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   console.log("Email:", email, "Password:", password);
  //   // Here you would send the data to the server
  // };

  return (
    <div>
      <Header></Header>
      <div className="fc min-h-screen">
        <div className="border-2 border-border p-10 rounded-2xl bg-secondary">
          <h1 className="text-3xl mb-8">{t("signup1.reg")}</h1>

          <form
            className="space-y-6 bg-back"
            // onSubmit={handleSubmit}
          >
            <div>
              <Input
                name="confirmPassword"
                type="password"
                placeholder={t("signup1.confirmPassword")}
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <Label>{t("signup1.enterData")}</Label>
              <Input
                name="person1"
                type="text"
                placeholder={t("signup1.surname")}
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <Input
                name="name"
                type="text"
                placeholder={t("signup1.name")}
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <Input
                name="patromic"
                type="text"
                placeholder={t("signup1.patromic")}
                // value={person3}
                // onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <Button type="submit">{t("signup1.continue")}</Button>
          </form>
        </div>
      </div>
    </div>
  );

  // return (
  //   <div>
  //     <Header></Header>
  //     <div className="flex items-center justify-center min-h-screen">
  //       <div className="border-2 border-border p-10 rounded-2xl bg-secondary">
  //         <h1 className="text-3xl mb-8">{t("signup2.other")}</h1>

  //         <form
  //           className="space-y-6 bg-back"
  //           // onSubmit={handleSubmit}
  //         >
  //           <div>
  //             <Input
  //               name="phone"
  //               type="text"
  //               placeholder={t("signup2.phone")}
  //               // value={email}
  //               // onChange={(e) => setEmail(e.target.value)}
  //             />
  //           </div>
  //           <div>
  //             <Input
  //               name="role"
  //               type="text"
  //               placeholder={t("signup2.role")}
  //               // value={email}
  //               // onChange={(e) => setEmail(e.target.value)}
  //             />
  //           </div>
  //           <div>
  //             <Input
  //               name="info"
  //               type="text"
  //               placeholder={t("signup2.info")}
  //               // value={person3}
  //               // onChange={(e) => setEmail(e.target.value)}
  //             />
  //           </div>

  //           <Button type="submit">{t("signup2.create")}</Button>
  //         </form>
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default Signup;
