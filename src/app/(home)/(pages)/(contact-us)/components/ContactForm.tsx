import { useForm, SubmitHandler } from "react-hook-form";
import ContactInput from "./ContactInput";
import ContactTextArea from "./ContactTextArea";

type FormValues = {
  nome: string;
  email: string;
  telefone: string;
  mensagem: string;
};

export const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col w-full gap-3 "
    >
      <div className="">
        <ContactInput
          register={register}
          errors={errors}
          name="nome"
          type="text"
          placeholder="nome completo"
          validation={{ required: "Nome é obrigatório" }}
          className="mt-1 block w-full h-[16px]"
        />
      </div>
      <div className="">
        <ContactInput
          register={register}
          errors={errors}
          name="telefone"
          type="tel"
          placeholder="telefone"
          validation={{ required: "Telefone é obrigatório" }}
          className="mt-1 block w-full h-[16px]"
          mask={(value) => value.replace(/\D/g, "")}
        />
      </div>
      <div className="">
        <ContactInput
          register={register}
          errors={errors}
          name="email"
          type="email"
          placeholder="email"
          validation={{ required: "Email é obrigatório" }}
          className="mt-1 block w-full h-[16px]"
          mask={(value) =>
            value.replace(
              /[^a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              ""
            )
          }
        />
      </div>
      <div className="">
        <ContactTextArea
          register={register}
          errors={errors}
          name="mensagem"
          placeholder="mensagem"
          validation={{ required: "Mensagem é obrigatória" }}
        />
      </div>
      <div className=" flex justify-end">
        <button
          type="submit"
          className="text-red-500 bg-white font-semibold py-2 px-6 rounded-full cursor-pointer hover:opacity-80 transition-opacity duration-300"
        >
          Enviar
        </button>
      </div>
    </form>
  );
};
