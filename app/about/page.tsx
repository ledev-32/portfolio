import React from 'react'

function aPropos() {
  return (
    <div className='p-2 flex flex-col text-white bg-violet-600/60 rounded-2xl'>
      <h2 className='text-4xl'>A propos de moi</h2>
      <div className='text-justify mr-auto ml-auto p-4 w-full md:w-2/3 bg-black/70 rounded-3xl'>
      Je m'appelle Rémi SALARD, étudiant en deuxième année de BTS Services Informatiques aux Organisations option SLAM. 
      Issu d'un BAC général spécialités Mathématiques et Physique Chimie option Mathématiques Expertes, j'ai choisi de faire un BTS SIO option développement en vue d'une poursuite d'études en cybersécurité. Pour moi, le BTS SIO est une passerelle pertinente pour continuer les études car cette formation apporte les bases de l'informatique de gestion et c'est pour cette raison que j'ai choisi de partir en BTS SIO.
      Je suis quelqu'un de curieux, passionné par ce qu'il fait et toujours intéressé par les nouvelles technologies. Néanmoins, je suis passionné par d'autres choses dans la vie comme l'automobile, la photographie et le sport.
      </div>
      <div className='w-full md:w-1/3'>

      </div>
      <div className='pt-8'>
        <img src="h-bar.png" alt="Barre de style" className="px-4 md:px-24 h-[6px] w-full"/>
      </div>
      
    </div>
  )
}

export default aPropos