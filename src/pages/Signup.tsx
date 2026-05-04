import React from "react"; // useState
import { useTranslation } from "react-i18next";
import { Input } from "../components/ui/Input";
import { Button } from "../components/ui/Button";
import { Header } from "../components/ui/Header";

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

  // return (
  //   <div>
  //     <Header></Header>
  //     <div className="flex items-center justify-center min-h-screen">
  //       <div className="border-2 border-border p-10 rounded-2xl bg-secondary">
  //         <h1 className="text-3xl mb-8">{t("reg1")}</h1>

  //         <form
  //           className="space-y-6 bg-back"
  //           // onSubmit={handleSubmit}
  //         >
  //           <div>
  //             <Input
  //               name="password2"
  //               type="password"
  //               placeholder={t("password2")}
  //               // value={email}
  //               // onChange={(e) => setEmail(e.target.value)}
  //             />
  //           </div>
  //           <div>
  //             <Input
  //               name="person1"
  //               type="text"
  //               placeholder={t("person1")}
  //               // value={email}
  //               // onChange={(e) => setEmail(e.target.value)}
  //             />
  //           </div>
  //           <div>
  //             <Input
  //               name="person2"
  //               type="text"
  //               placeholder={t("person2")}
  //               // value={email}
  //               // onChange={(e) => setEmail(e.target.value)}
  //             />
  //           </div>
  //           <div>
  //             <Input
  //               name="person3z"
  //               type="text"
  //               placeholder={t("person3")}
  //               // value={person3}
  //               // onChange={(e) => setEmail(e.target.value)}
  //             />
  //           </div>

  //           <Button type="submit">{t("create2")}</Button>
  //         </form>
  //       </div>
  //     </div>
  //   </div>
  // );

  return (
    <div>
      <Header></Header>
      <div className="flex items-center justify-center min-h-screen">
        <div className="border-2 border-border p-10 rounded-2xl bg-secondary">
          <h1 className="text-3xl mb-8">{t("others")}</h1>

          <form
            className="space-y-6 bg-back"
            // onSubmit={handleSubmit}
          >
            <div>
              <Input
                name="phone"
                type="text"
                placeholder={t("phone")}
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <Input
                name="role"
                type="text"
                placeholder={t("role")}
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <Input
                name="info"
                type="text"
                placeholder={t("info")}
                // value={person3}
                // onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <Button type="submit">{t("create3")}</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
