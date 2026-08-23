import { Poppins } from "next/font/google";
import { IntroProvider } from "../components/IntroLoader";
import { CitaProvider } from "../features/appointments/components/CitaProvider";
import "./globals.css";

// Poppins es una familia estatica: next/font exige los pesos explicitos
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata = {
  title: "Dental Clinic | Clínica dental en Zapopan",
  description:
    "Clínica dental moderna en Zapopan, Jalisco. Odontología general, ortodoncia invisible, implantes y estética dental sin dolor.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={poppins.variable}>
      <body>
        <IntroProvider>
          <CitaProvider>{children}</CitaProvider>
        </IntroProvider>
      </body>
    </html>
  );
}
