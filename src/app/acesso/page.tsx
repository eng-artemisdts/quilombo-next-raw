import LoginForm from "./components/LoginForm";
import LoginText from "./components/LoginText";

export default function AcessoPage() {
  return (
    <div
      className="min-h-screen w-full px-[89px] py-[205px] max-xl:px-[3rem] flex flex-col items-center md:flex-row justify-between"
      style={{
        backgroundImage: "url('/assets/images/bg-arquivo.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <LoginText />
      <LoginForm />
    </div>
  );
}
