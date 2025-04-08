import competences from "./competences/page";
import technologies from "./technologies/page";
import projets from "./projets/page";
import aPropos from "./about/page";

export default function Home() {
  return (
    <section className="">
      <div className="">
      <h1 className="text-6xl text-left p-2">Mon portfolio</h1>
      <div className="mx-1 p-2 pb-3 bg-violet-600/60 text-white">{aPropos()}</div>
      <div className="mx-1 p-2 pb-3 bg-violet-600/60 text-white">{competences()}</div> 
      <div className="mx-1 p-2 pb-3 bg-violet-600/60 text-white">{technologies()}</div> 
      <div className="mx-1 p-2 pb-3 bg-violet-600/60 text-white">{projets()}</div>
    </div>
    </section>
  );
}
