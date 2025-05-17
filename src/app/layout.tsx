import "./globals.css";
import Header from "../components/Header";
import { Poppins } from "next/font/google";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export default async function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={poppins.variable}>
      <head>
        <title>Associacao Quilombolas Vila Santa Efigenia</title>
        <meta
          name="description"
          content="Associacao Quilombolas Vila Santa Efigenia"
        />
      </head>
      <body className={poppins.className}>
        <Header />
        <Toaster position="top-right" />
        {children}
      </body>
    </html>
  );
}
