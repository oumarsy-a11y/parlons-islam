import Menu from "@/components/Menu";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import Mission from "@/components/Mission";
import DailyQuote from "@/components/DailyQuote";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Menu />
      <Hero />
      <Categories />
      <Mission />
      <DailyQuote />
      <Footer />
    </main>
  );
}