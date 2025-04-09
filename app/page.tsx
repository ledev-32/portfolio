import competences from "./competences/page";
import technologies from "./technologies/page";
import projets from "./projets/page";
import aPropos from "./about/page";

export default function Home() {
  return (
    <section className="bg-violet-600/60">
      <div className="">
      <h1 className="text-6xl text-center p-8"><span className="text-white">Mon</span> portfolio</h1>
      <section className=" p-3 pb-3  text-white" id="about">{aPropos()}</section>
      <section className=" p-3 pb-3  text-white" id="competences">{competences()}</section>
      <section className=" p-3 pb-3  text-white" id="technologies">{technologies()}</section> 
      <section className=" p-3 pb-3  text-white" id="projets">{projets()}</section>
    </div>
    </section>
  );
}
