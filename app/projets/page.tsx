import React from 'react'

function projets() {
    return (
        <div className=''>
            <h2 className='text-4xl'>Mes projets</h2>
            <div className='p-6 text-xl'>
                Voici les différents projets réalisés lors de ces 2 années de BTS
            </div>

            <div className='text-2xl mr-auto ml-auto p-4 md:p-16 md:pb-4 md:pt-4 pt-2'>
                MyParera
                <div className='rounded-xl text-lg text-justify p-4 bg-black/70 text-white'>
                Conception et développement du prototype d’un intranet pour le Groupe PARERA (entreprise de topographie, cartographie). Le prototype suit un cahier des charges élaboré par le Responsable Services d’Information et le Responsable Communication et Marketing. L’intranet permet l’affichage des actualités d’entreprises (flux LinkedIn), la rédaction d’articles par les collaborateurs ainsi que l’affichage et le lien vers des composants Microsoft (seulement pour les utilisateurs authentifiés).
Ce projet utilise les technologies suivantes : Next.JS, PostGreSQL, API Microsoft Graph
Travail réalisé en autonomie partielle avec l’aide d’une apprentie en marketing et communication ainsi qu’avec le Responsable Services d’Informations.

                    <a href="/projets/my-parera">
                        <img src="myparera-blur.png" alt="Screenshot du rendu de l'application" className='w-3/4 md:w-2/4 ml-auto mr-auto py-4'/>
                    </a>
                </div>
            </div>

            <div className='text-2xl mr-auto ml-auto p-4 md:p-16 md:pb-4  pt-2'>
                GSB - Web
                <div className='rounded-xl text-lg text-justify p-4 bg-black/70 text-white'>
                Création d'une application Web pour le contexte GSB (laboratoire médical) permettant la gestion et le suivi des visites des commerciaux du laboratoire. Les utilisateurs authentifiés peuvent saisir, modifier et/ou supprimer des rapports de visite.
                Ce projet mobilise les technologies suivantes : PHP, SQL, HTML, JavaScript.
                Travail réalisé en mode projet en groupe de 5
                    <a href="/projets/gsb-web">
                        <img src="gsb-web-consultation.png" alt="Screenshot du rendu de l'application" className='w-3/4 md:w-2/4 ml-auto mr-auto py-4'/>
                    </a>
                </div>
            </div>

            <div className='text-2xl mr-auto ml-auto p-4 md:p-16 md:pb-4  pt-2'>
                M2L - Web
                <div className='rounded-xl text-lg text-justify p-4 bg-black/70 text-white'>
                Création d'une application Web pour le contexte M2L (Maison des Ligues de Lille) permettant la gestion et le suivi des inscriptions aux formations ainsi qu'au catalogue des formations proposées. Les utilisateurs authentifiés peuvent s'inscrire aux formations selon des règles précises définies dans le cahier des charges.
                Ce projet mobilise les technologie suivantes : PHP, SQL, HTML, CSS, JavaScript.
                Travail réalisé en mode projet en binôme.

                    <a href="/projets/gsb-web">
                        <img src="gsb-web-consultation.png" alt="Screenshot du rendu de l'application" className='w-3/4 md:w-2/4 ml-auto mr-auto py-4'/>
                    </a>
                </div>
            </div>

            <div className='text-2xl mr-auto ml-auto p-4 md:p-16 md:pb-4  pt-2'>
                M2L - Natif
                <div className='rounded-xl text-lg text-justify p-4 bg-black/70 text-white'>
                Création d’une application native (client lourd avec langage de programmation orienté objet) pour le contexte M2L (Maison des Ligues) permettant la gestion et le suivi des adhérents d’un club d’escrime (saisie, modification et suppression des adhérents) ainsi que la visualisation des différents clubs de la région.
                Ce projet mobilise les technologies suivantes : Java, XML
                Travail réalisé en mode projet en binôme.

                    <a href="/projets/gsb-web">
                        <img src="gsb-web-consultation.png" alt="Screenshot du rendu de l'application" className='w-3/4 md:w-2/4 ml-auto mr-auto py-4'/>
                    </a>
                </div>
            </div>

            <div className='text-2xl mr-auto ml-auto p-4 md:p-16 md:pb-4  pt-2'>
                M2L - Mobile
                <div className='rounded-xl text-lg text-justify p-4 bg-black/70 text-white'>
                Création d’une application mobile (locale avec base de données en réseau local) pour le contexte M2L (Maison des Ligues) permettant la gestion et le suivi des inscriptions aux formations ainsi qu'au catalogue des formations proposées
                Ce projet mobilise les technologies suivantes : Android Studio, Kotlin, SQL, API REST
                Travail réalisé seul

                    <a href="/projets/gsb-web">
                        <img src="gsb-web-consultation.png" alt="Screenshot du rendu de l'application" className='w-3/4 md:w-2/4 ml-auto mr-auto py-4'/>
                    </a>
                </div>
            </div>

            <div className='text-2xl mr-auto ml-auto p-4 md:p-16 md:pb-4  pt-2'>
                NewPacman
                <div className='rounded-xl text-lg text-justify p-4 bg-black/70 text-white'>
                Développement des évolutions d’un jeu vidéo web dans un contexte fictif pour TIRIA.
                Le jeu est développé en Javascript et des évolutions majeures comme l’intégration d’une base de données. La conception d’une esquisse d’API Rest pour accéder aux données a été faite. Les évolutions ont été décidées de manière dynamique sans cahier des charges initial.
                Ce projet utilise les technologies suivantes :HTML/CSS/JavaScript, MySQL, PHP, SwaggerUI.
                Travail réalisé en autonomie partielle avec l’aide de mon tuteur de stage en cas de grandes questions liés à des obstacles importants.


                    <a href="/projets/gsb-web">
                        <img src="gsb-web-consultation.png" alt="Screenshot du rendu de l'application" className='w-3/4 md:w-2/4 ml-auto mr-auto py-4'/>
                    </a>
                </div>
            </div>
            
        </div>
    )
}

export default projets