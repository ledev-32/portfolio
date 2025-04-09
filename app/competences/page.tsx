import React from 'react'

function competences() {
    return (
        <div className='bg-violet-600/60 text-white p-3 rounded-2xl'>
            <h2 className='text-4xl'>Mes compétences</h2>
            <div className=''>Au cours de mes 2 années de BTS, j'ai pu développer de multiples compétences techniques <br />
                Ces différentes connaissances sont liées aux cours mais tout aussi bien grâce aux stages
            </div>
            <div className='flex flex-col md:flex-row'>
                <div className='bg-purple-500 text-2xl w-full md:w-4/12 text-center my-1 md:mx-1 text-foreground font-bold pt-3'>
                    Développement web
                    <div className='border-2 border-solid border-purple-500 text-lg text-justify p-4 text-white font-normal'>
                        Développement de solutions web modernes en passant d'un simple site internet statique à une application web de gestion.
                        Je travaille avec les technologies HTML-CSS-Javascript mais aussi PHP, SQL et plus récemment NextJS.
                    </div>
                </div>
                <div className='bg-black/70 text-2xl w-full md:w-4/12 text-center my-1 md:mx-1 text-white font-bold pt-3'>
                    Développement applications natives
                    <div className='text-lg text-justify p-4 font-normal'>
                        Développement de solutions mobiles et desktop de gestion avec les technologies Java (WindowBuilder), C# et Kotlin pour les applications mobiles.

                    </div>
                </div>
                <div className='bg-purple-500 text-2xl w-full md:w-4/12 text-center my-1 md:mx-1 text-foreground font-bold pt-3'>
                    Gestion des données
                    <div className='border-2 border-solid border-purple-500 text-lg text-justify p-4 text-white font-normal'>
                        Conception et évolution d'une base de données, gestion et suivi des données avec des SGBDR comme MySQL ou PostGreSQL.
                        Le modèle MERISE est utilisé pour la conception et l'évolution de la base de données.
                        Requêtage simple ou complexe des données avec SQL
                    </div>
                </div>
                <div className='bg-black/70 text-2xl w-full md:w-4/12 text-center my-1 md:mx-1 text-white font-bold pt-3'>
                    Cybersécurité
                    <div className='text-lg text-justify p-4 font-normal'>
                        Identifier, recenser et gérer les données à caractère personnel
                        Informer et sensibiliser les utilisateurs sur la protection de leurs données
                        Identifier et corriger les failles de sécurité basiques dans l'applicatif
                    </div>
                </div>
            </div>

            <div className='pt-8'>
                <img src="h-bar-i.png" alt="Barre de style" className="px-4 md:px-24 h-[6px] w-full" />
            </div>
        </div>
    )
}

export default competences