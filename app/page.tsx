import competences from "./competences/page";
import technologies from "./technologies/page";
import projets from "./projets/page";
import aPropos from "./about/page";

export default function Home() {
  return (
    <section className="">
      <div></div>
      <div className="">
      <h1 className="text-6xl text-left">Mon portfolio</h1>
      <div className="m-1">{aPropos()}</div>
      <div className="m-8">=</div>
      <div className="m-1">{competences()}</div>
      <div className="m-8">=</div>   
      <div className="m-1">{technologies()}</div> 
      <div className="m-8">=</div>
      <div className="m-1">{projets()}</div>
    </div>
    </section>
  );
}
