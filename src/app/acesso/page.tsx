import LoginForm from "./components/LoginForm";
import LoginText from "./components/LoginText";

export default function AcessoPage() {
  return (
    <div
      className="min-h-screen w-full px-4 sm:px-10 py-16 lg:px-[89px] lg:py-[205px] flex flex-col items-center lg:items-start lg:flex-row justify-between overflow-hidden"
      style={{
        backgroundImage: "url('/assets/images/images_arquivo/bg-arquivo.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <LoginText />
      <LoginForm />
    </div>
  );
}
