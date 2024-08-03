import { Nunito, Amaranth, Kanit } from "next/font/google";
import HomePage from "./home";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Home() {
  return (
    <main className={`${kanit.className}`}>
      <HomePage />
    </main>
  );
}
