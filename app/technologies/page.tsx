import React from 'react'

function technologies() {
    return (
      <div className='bg-violet-600/60 text-white p-4 rounded-2xl'>
        <h2 className='text-3xl md:text-4xl font-semibold mb-4'>Les technologies</h2>
        <p className='mb-4 text-lg text-white/80'>
          Ma formation m'a amené à travailler avec différentes technologies plus ou moins sophistiquées et modernes.
        </p>
  
        <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
          <div className='bg-purple-500 text-xl md:text-2xl text-center text-white/90 font-bold py-3 rounded-lg shadow-md h-fit'>
            Langages de programmation
            <div className='bg-black/70 p-3 text-lg font-normal rounded-b-lg'>
              <h3 className='text-white/80 font-semibold mb-2'>Développement web</h3>
              <ul className='grid grid-cols-2 md:grid-cols-3 gap-2'>
                <li className='bg-white text-black py-2 px-3 rounded-full text-center text-sm'>HTML</li>
                <li className='bg-white text-black py-2 px-3 rounded-full text-center text-sm'>CSS</li>
                <li className='bg-white text-black py-2 px-3 rounded-full text-center text-sm'>JavaScript</li>
                <li className='bg-white text-black py-2 px-3 rounded-full text-center text-sm'>TypeScript</li>
                <li className='bg-white text-black py-2 px-3 rounded-full text-center text-sm'>PHP</li>
                <li className='bg-white text-black py-2 px-3 rounded-full text-center text-sm'>React</li>
              </ul>
              <h3 className='text-white/80 font-semibold mt-3 mb-2'>Développement applications lourdes</h3>
              <ul className='grid grid-cols-2 md:grid-cols-3 gap-2'>
                <li className='bg-white text-black py-2 px-3 rounded-full text-center text-sm'>Java</li>
                <li className='bg-white text-black py-2 px-3 rounded-full text-center text-sm'>C#</li>
                <li className='bg-white text-black py-2 px-3 rounded-full text-center text-sm'>Kotlin</li>
              </ul>
              <h3 className='text-white/80 font-semibold mt-3 mb-2'>Autres langages de programmation</h3>
              <ul className='grid grid-cols-2 md:grid-cols-3 gap-2'>
                <li className='bg-white text-black py-2 px-3 rounded-full text-center text-sm'>Python</li>
                <li className='bg-white text-black py-2 px-3 rounded-full text-center text-sm'>C++</li>
              </ul>
            </div>
          </div>
  
          <div className='bg-purple-500 text-xl md:text-2xl text-center text-white/90 font-bold py-3 rounded-lg shadow-md h-fit'>
            Frameworks
            <div className='bg-black/70 p-3 text-lg font-normal rounded-b-lg'>
              <h3 className='text-white/80 font-semibold mb-2'>Développement web</h3>
              <ul className='grid grid-cols-2 md:grid-cols-3 gap-2'>
                <li className='bg-white text-black py-2 px-3 rounded-full text-center text-sm'>Laravel</li>
                <li className='bg-white text-black py-2 px-3 rounded-full text-center text-sm'>NextJS</li>
              </ul>
            </div>
          </div>
  
          <div className='bg-purple-500 text-xl md:text-2xl text-center text-white/90 font-bold py-3 rounded-lg shadow-md h-fit'>
            SGBD
            <div className='bg-black/70 p-3 text-lg font-normal rounded-b-lg'>
              <ul className='grid grid-cols-2 md:grid-cols-3 gap-2'>
                <li className='bg-white text-black py-2 px-3 rounded-full text-center text-sm'>MySQL</li>
                <li className='bg-white text-black py-2 px-3 rounded-full text-center text-sm'>PostGreSQL</li>
              </ul>
            </div>
          </div>
  
          <div className='bg-purple-500 text-xl md:text-2xl text-center text-white/90 font-bold py-3 rounded-lg shadow-md h-fit'>
            IDE
            <div className='bg-black/70 p-3 text-lg font-normal rounded-b-lg'>
              <ul className='grid grid-cols-2 md:grid-cols-3 gap-2'>
                <li className='bg-white text-black py-2 px-3 rounded-full text-center text-sm'>Visual Studio</li>
                <li className='bg-white text-black py-2 px-3 rounded-full text-center text-sm'>Visual Studio Code</li>
                <li className='bg-white text-black py-2 px-3 rounded-full text-center text-sm'>Android Studio</li>
                <li className='bg-white text-black py-2 px-3 rounded-full text-center text-sm'>Eclipse for java</li>
              </ul>
            </div>
          </div>
  
          <div className='bg-purple-500 text-xl md:text-2xl text-center text-white/90 font-bold py-3 rounded-lg shadow-md h-fit'>
            Gestion
            <div className='bg-black/70 p-3 text-lg font-normal rounded-b-lg'>
              <h3 className='text-white/80 font-semibold mb-2'>Gestion des incidents</h3>
              <ul className='grid grid-cols-2 md:grid-cols-3 gap-2'>
                <li className='bg-white text-black py-2 px-3 rounded-full text-center text-sm'>GLPI</li>
              </ul>
              <h3 className='text-white/80 font-semibold mt-3 mb-2'>Gestion de projet et développement collaboratif</h3>
              <ul className='grid grid-cols-2 md:grid-cols-3 gap-2'>
                <li className='bg-white text-black py-2 px-3 rounded-full text-center text-sm'>Github</li>
                <li className='bg-white text-black py-2 px-3 rounded-full text-center text-sm'>Google Workspace</li>
                <li className='bg-white text-black py-2 px-3 rounded-full text-center text-sm'>Microsoft Teams</li>
              </ul>
            </div>
          </div>
        </div>
  
        <div className='pt-8'>
          <img src="h-bar.png" alt="Barre de style" className="px-4 md:px-24 h-[6px] w-full" />
        </div>
      </div>
    );
  }
  

export default technologies