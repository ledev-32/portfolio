import React from 'react'

function projets() {
    return (
        <div className=''>
            <h2 className='text-4xl'>Mes projets</h2>
            <div className='p-6 text-xl'>
                Voici les différents projets réalisés lors de ces 2 années de BTS
            </div>
            <div className='text-2xl mr-auto ml-auto p-16 pt-2'>
                MyParera
                <div className='rounded-xl text-lg text-justify p-4 bg-black/70 text-white'>
                Conception et développement du prototype d’un intranet pour le Groupe PARERA (entreprise de topographie, cartographie). Le prototype suit un cahier des charges élaboré par le Responsable Services d’Information et le Responsable Communication et Marketing. L’intranet permet l’affichage des actualités d’entreprises (flux LinkedIn), la rédaction d’articles par les collaborateurs ainsi que l’affichage et le lien vers des composants Microsoft (seulement pour les utilisateurs authentifiés).
Ce projet utilise les technologies suivantes : Next.JS, PostGreSQL, API Microsoft Graph
Travail réalisé en autonomie partielle avec l’aide d’une apprentie en marketing et communication ainsi qu’avec le Responsable Services d’Informations.

                    <a href="/projets/my-parera">
                        <img src="myparera-blur.png" alt="Screenshot du rendu de l'application" className='w-2/4 ml-auto mr-auto py-4'/>
                    </a>
                </div>
            </div>
            <div className='text-2xl mr-auto ml-auto p-16 pt-2'>
                GSB - Web
                <div className='rounded-xl text-lg text-justify p-4 bg-black/70 text-white'>
                Création d'une application Web pour le contexte GSB (laboratoire médical) permettant la gestion et le suivi des visites des commerciaux du laboratoire. Les utilisateurs authentifiés peuvent saisir, modifier et/ou supprimer des rapports de visite.
                Ce projet mobilise les technologies suivantes : PHP, SQL, HTML, JavaScript.
                Travail réalisé en mode projet en groupe de 5
                    <a href="/projets/gsb-web">
                        <img src="gsb-web-consultation.png" alt="Screenshot du rendu de l'application" className='w-2/4 ml-auto mr-auto py-4'/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default projets