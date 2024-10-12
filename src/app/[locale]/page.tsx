import Card from "~/components/Card";
import FAQ from "~/components/FAQ";
import Hero from "~/components/Hero";
import Service from "~/components/Service";
import Statistic from "~/components/Statistic";
import Support from "~/components/Support";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <Card />
      <Statistic />
      <Support />
      <Service />
      <FAQ />
    </div>
  );
}
