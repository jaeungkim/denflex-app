import Layout from "@/components/shared/layout";
import EmblaCarousel from "@/components/shared/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel-react";

const OPTIONS: EmblaOptionsType = { inViewThreshold: 0, dragFree: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export default function Home() {
  return (
    <Layout maxWidth={false}>
      {" "}
      <section className="sandbox__carousel">
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </section>
    </Layout>
  );
}
