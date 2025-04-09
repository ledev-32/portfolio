import React from 'react'

function projets() {
    return (
      <div className='bg-violet-600/60 text-white p-4 rounded-2xl'>
        <h2 className='text-3xl md:text-4xl font-semibold mb-6'>Mes projets</h2>
        <p className='mb-6 text-lg text-white/80'>
          Voici les différents projets réalisés lors de ces 2 années de BTS.
        </p>
  
        <div className='space-y-8'>
          <div className='rounded-xl shadow-md overflow-hidden'>
            <h3 className='text-2xl font-semibold bg-purple-500 py-3 px-4'><a href="/projets/my-parera" className='hover:underline hover:text-foreground'>MyParera</a></h3>
            <div className='bg-black/70 text-white p-4'>
              <p className='text-lg text-justify mb-4'>
                Conception et développement du prototype d’un intranet pour le Groupe PARERA (entreprise de topographie, cartographie). Le prototype suit un cahier des charges élaboré par le Responsable Services d’Information et le Responsable Communication et Marketing. L’intranet permet l’affichage des actualités d’entreprises (flux LinkedIn), la rédaction d’articles par les collaborateurs ainsi que l’affichage et le lien vers des composants Microsoft (seulement pour les utilisateurs authentifiés).
                Ce projet utilise les technologies suivantes : Next.JS, PostGreSQL, API Microsoft Graph.
                Travail réalisé en autonomie partielle avec l’aide d’une apprentie en marketing et communication ainsi qu’avec le Responsable Services d’Informations.
              </p>
              <a href="/projets/my-parera" className='block'>
                <img
                  src="myparera.png"
                  alt="Screenshot du rendu de l'application"
                  className='w-full md:w-1/2 rounded-md shadow-sm  md:mr-auto md:ml-auto'
                />
              </a>
            </div>
          </div>
  
          <div className='rounded-xl shadow-md overflow-hidden'>
            <h3 className='text-2xl font-semibold bg-purple-500 py-3 px-4'><a href="/projets/gsb-web" className='hover:underline hover:text-foreground'>GSB - Web</a></h3>
            <div className='bg-black/70 text-white p-4'>
              <p className='text-lg text-justify mb-4'>
                Création d'une application Web pour le contexte GSB (laboratoire médical) permettant la gestion et le suivi des visites des commerciaux du laboratoire. Les utilisateurs authentifiés peuvent saisir, modifier et/ou supprimer des rapports de visite.
                Ce projet mobilise les technologies suivantes : PHP, SQL, HTML, JavaScript.
                Travail réalisé en mode projet en groupe de 5.
              </p>
              <a href="/projets/gsb-web" className='block'>
                <img
                  src="gsb-web-consultation.png"
                  alt="Screenshot du rendu de l'application"
                  className='w-full rounded-md shadow-sm md:w-1/2 md:mr-auto md:ml-auto'
                />
              </a>
            </div>
          </div>
  
          <div className='rounded-xl shadow-md overflow-hidden'>
            <h3 className='text-2xl font-semibold bg-purple-500 py-3 px-4'><a href="/projets/m2l-web" className='hover:underline hover:text-foreground'>M2L - Web</a></h3>
            <div className='bg-black/70 text-white p-4'>
              <p className='text-lg text-justify mb-4'>
                Création d'une application Web pour le contexte M2L (Maison des Ligues de Lille) permettant la gestion et le suivi des inscriptions aux formations ainsi qu'au catalogue des formations proposées. Les utilisateurs authentifiés peuvent s'inscrire aux formations selon des règles précises définies dans le cahier des charges.
                Ce projet mobilise les technologie suivantes : PHP, SQL, HTML, CSS, JavaScript.
                Travail réalisé en mode projet en binôme.
              </p>
              <a href="/projets/m2l-web" className='block'>
                <img
                  src="m2l-web-consultation.png"
                  alt="Screenshot du rendu de l'application"
                  className='w-full rounded-md shadow-sm md:w-1/2 md:mr-auto md:ml-auto'
                />
              </a>
            </div>
          </div>
  
          <div className='rounded-xl shadow-md overflow-hidden'>
            <h3 className='text-2xl font-semibold bg-purple-500 py-3 px-4'><a href="/projets/m2l-natif" className='hover:underline hover:text-foreground'>M2L - Natif</a></h3>
            <div className='bg-black/70 text-white p-4'>
              <p className='text-lg text-justify mb-4'>
                Création d’une application native (client lourd avec langage de programmation orienté objet) pour le contexte M2L (Maison des Ligues) permettant la gestion et le suivi des adhérents d’un club d’escrime (saisie, modification et suppression des adhérents) ainsi que la visualisation des différents clubs de la région.
                Ce projet mobilise les technologies suivantes : Java, XML.
                Travail réalisé en mode projet en binôme.
              </p>
              <a href="/projets/m2l-natif" className='block'>
                <img
                  src="gsb-web-consultation.png"
                  alt="Screenshot du rendu de l'application"
                  className='w-full rounded-md shadow-sm md:w-1/2 md:mr-auto md:ml-auto'
                />
              </a>
            </div>
          </div>
  
          <div className='rounded-xl shadow-md overflow-hidden'>
            <h3 className='text-2xl font-semibold bg-purple-500 py-3 px-4'><a href="/projets/m2l-mobile" className='hover:underline hover:text-foreground'>M2L - Mobile</a></h3>
            <div className='bg-black/70 text-white p-4'>
              <p className='text-lg text-justify mb-4'>
                Création d’une application mobile (locale avec base de données en réseau local) pour le contexte M2L (Maison des Ligues) permettant la gestion et le suivi des inscriptions aux formations ainsi qu'au catalogue des formations proposées.
                Ce projet mobilise les technologies suivantes : Android Studio, Kotlin, SQL, API REST.
                Travail réalisé seul.
              </p>             
            </div>
          </div>
  
          <div className='rounded-xl shadow-md overflow-hidden'>
            <h3 className='text-2xl font-semibold bg-purple-500 py-3 px-4'><a href="/projets/new-pacman" className='hover:underline hover:text-foreground'>NewPacman</a></h3>
            <div className='bg-black/70 text-white p-4'>
              <p className='text-lg text-justify mb-4'>
                Développement des évolutions d’un jeu vidéo web dans un contexte fictif pour TIRIA.
                Le jeu est développé en Javascript et des évolutions majeures comme l’intégration d’une base de données. La conception d’une esquisse d’API Rest pour accéder aux données a été faite. Les évolutions ont été décidées de manière dynamique sans cahier des charges initial.
                Ce projet utilise les technologies suivantes : HTML/CSS/JavaScript, MySQL, PHP, SwaggerUI.
                Travail réalisé en autonomie partielle avec l’aide de mon tuteur de stage en cas de grandes questions liés à des obstacles importants.
              </p>
              <a href="/projets/newpacman" className='block'>
                <img
                  src="gsb-web-consultation.png"
                  alt="Screenshot du rendu de l'application"
                  className='w-full rounded-md shadow-sm md:w-1/2 md:mr-auto md:ml-auto'
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
  

export default projets