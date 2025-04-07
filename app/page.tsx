import competences from "./competences/page";
import technologies from "./technologies/page";
import projets from "./projets/page";
import aPropos from "./about/page";

export default function Home() {
  return (
    <section className="">
      <div className="">
      <h1 className="text-6xl text-left p-2">Mon portfolio</h1>
      <div className="mx-1 p-2 pb-3 bg-violet-600/70 text-white">{aPropos()}</div>
      <div className="mx-1 p-2 w-full bg-violet-600/70"><img src="h-bar.png" alt="Barre de style" className="text-left px-24 h-[6px] w-full "/></div>
      <div className="mx-1 p-2 pb-3 bg-violet-600/70 text-white">{competences()}</div>
      <div className="mx-1 p-2 w-full bg-violet-600/70 "><img src="h-bar-i.png" alt="Barre de style" className=" pl-24 h-[6px]  w-2/5"/></div>  
      <div className="mx-1 p-2 pb-3 bg-violet-600/70 text-white">{technologies()}</div> 
      <div className="mx-1 p-2 w-full bg-violet-600/70"><img src="h-bar.png" alt="Barre de style" className="text-left pl-24 h-[6px] w-2/5 "/></div>
      <div className="mx-1 p-2 pb-3 bg-violet-600/70 text-white">{projets()}</div>
    </div>
    </section>
  );
}
