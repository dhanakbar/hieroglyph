import { Nunito, Amaranth } from "next/font/google";
import HomePage from "./home";

const nunito = Nunito({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${nunito.className}`}>
      <HomePage />
    </main>
  );
}
