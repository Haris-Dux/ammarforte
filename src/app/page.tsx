
import Blogs from "@/components/Blogs";
import Gallery from "@/components/Gallery";
import HeroSection from "@/components/HeroSection";
import Intro from "@/components/Intro";
import Loading from "@/components/Loading";
import Project from "@/components/Project";
import StatsSection from "@/components/StatsSection";
import { Suspense } from "react";


export default function Home() {
 
  return (
    <main className="">
      <Suspense fallback={<Loading />}>
      <section id="home"><HeroSection /></section>
      <section id="Intro"><Intro /></section>
      <section id="stats"><StatsSection /></section>
      <section id="gallery"><Gallery /></section>
      <section id="project"><Project /></section>
      <section id="blogs"><Blogs /></section>
      </Suspense>
    </main>
  );
}
