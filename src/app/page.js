import Link from "next/link";
import Hero from "@/components/layout/Hero";
import Hero2 from "@/components/layout/Hero2";
import Hero3 from "@/components/layout/Hero3";
import Hero4 from "@/components/layout/Hero4";
import Hero5 from "@/components/layout/Hero5";


export default function Home() {
  return (
    <main>
      <Hero/>
        <Hero2/>
        <Hero3/>
        <Hero4/>
        <Hero5/>
    </main>
  );
}
