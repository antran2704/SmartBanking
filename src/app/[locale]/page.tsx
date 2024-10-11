import Card from "~/components/Card";
import Hero from "~/components/Hero";
import Statistic from "~/components/Statistic";

export default function HomePage() {
  return (
    <div className="h-[1000px]">
      <Hero />
      <Card />
      <Statistic />
    </div>
  );
}
