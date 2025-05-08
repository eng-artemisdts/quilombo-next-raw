import { useForm, SubmitHandler } from "react-hook-form";

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
      className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3"
    >
      <div className="col-span-2">
        <input
          {...register("nome", { required: "Nome é obrigatório" })}
          type="text"
          className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-[1.25rem] bg-[rgba(255,255,255,0.45)]"
          placeholder="Seu nome"
        />
        {errors.nome && (
          <span className="text-red-500">{errors.nome.message as string}</span>
        )}
      </div>
      <div className="col-span-2">
        <input
          {...register("email", { required: "Email é obrigatório" })}
          type="email"
          className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          placeholder="Seu email"
        />
        {errors.email && (
          <span className="text-red-500">{errors.email.message as string}</span>
        )}
      </div>
      <div className="col-span-2">
        <input
          {...register("telefone", {
            required: "Telefone é obrigatório",
          })}
          type="tel"
          className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          placeholder="Seu telefone"
        />
        {errors.telefone && (
          <span className="text-red-500">
            {errors.telefone.message as string}
          </span>
        )}
      </div>
      <div className="col-span-2">
        <label className="block text-sm font-medium text-gray-700">
          Mensagem
        </label>
        <textarea
          {...register("mensagem", {
            required: "Mensagem é obrigatória",
          })}
          className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          rows={4}
          placeholder="Sua mensagem"
        />
        {errors.mensagem && (
          <span className="text-red-500">
            {errors.mensagem.message as string}
          </span>
        )}
      </div>
      <div className="col-span-2">
        <button
          type="submit"
          className="text-white bg-red-500 font-semibold p-2 rounded-full cursor-pointer hover:opacity-80 transition-opacity duration-300"
        >
          Enviar
        </button>
      </div>
    </form>
  );
};
