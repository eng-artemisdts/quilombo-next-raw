import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function absoluteUrl(path: string) {
  return `${process.env.NEXT_PUBLIC_APP_URL}${path}`;
}

export function scrollToSection(href: string) {
  const element = document.querySelector(href);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export function downloadUserCredentials(username: string, password: string) {
  const element = document.createElement("a");
  const fileContent = `Atenção:
As credenciais abaixo foram geradas automaticamente para o seu acesso.
Guarde estas informações com segurança, pois serão necessárias para fazer login no sistema.

Importante: Salve este arquivo ou anote os dados, pois não será possível visualizá-los novamente após o download.

usuário: ${username}
senha: ${password}`;
  const file = new Blob([fileContent], { type: "text/plain" });
  element.href = URL.createObjectURL(file);
  element.download = `${username}-acesso.txt`;
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
};