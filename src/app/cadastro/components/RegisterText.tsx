"use client";

import { motion } from "framer-motion";

export default function RegisterText() {
  return (
    <motion.aside
      id="login-text"
      className="relative"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <h1 className="text-white hidden lg:block font-poppins text-d-s lg:text-d-m font-normal leading-normal w-[400px] md:w-[447px] mb-35 md:mb-0">
        Para acessar os arquivos da{" "}
        <strong className="font-bold">
          Associação Quilombola Vila Sta Efigênia e Adjacêcias
        </strong>
        , faça seu cadastro.
      </h1>
    </motion.aside>
  );
}
