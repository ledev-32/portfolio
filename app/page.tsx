import competences from "./competences/page";
import technologies from "./technologies/page";
import projets from "./projets/page";
import aPropos from "./about/page";

export default function Home() {
  return (
    <section className="">
      <div className="">
      <h1 className="text-6xl text-left p-2">Mon portfolio</h1>
      <div className="m-1 p-2 bg-amber-300/70 text-black">{aPropos()}</div>
      <div className="m-1 p-2 bg-violet-600/70 text-white">{competences()}</div>  
      <div className="m-1 p-2 bg-amber-300/70 text-black">{technologies()}</div> 
      <div className="m-1 p-2 bg-violet-600/70 text-white">{projets()}</div>
    </div>
    </section>
  );
}
