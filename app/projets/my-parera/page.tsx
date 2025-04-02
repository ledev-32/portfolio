import React from 'react'
import Image from 'next/image'

function myParera() {
    return (
        <div className=''>
            <h2 className='text-4xl'>MyParera</h2>
            <div className=''>
                Contexte : <br />
                Lors de mon stage de seconde année, j'ai été amené à concevoir et développer le prototype de l'intranet de l'entreprise PARERA <br />
                Groupe PARERA est leader sur le marché de la topologie, topographie en France, comptant à ce jour plus de 1200 collaborateurs.
                L'équipe responsable communication et le RSI ont donc décidés de ma mission principale : développer un prototype d'intranet axé sur la communication
            </div>
            <div>
                En voici la présentation rapide :
                L'application web dynamique est développée avec la technologie NextJS, qui est un framework de NextJS
                La partie authentification se gère avec la connexion par Microsoft. 
                Lorsqu'un utilisateur est authentifié, il peut avoir un accès direct à ses derniers mails, évènements et fichiers OneDrive.
                Tout les utilisateurs (même en mode déconnecté) ont accès au flux LinkedIn, à la rédaction et à la consultation des articles.
                <h3>Page d'accueil</h3>
                <img src="/myparera.png" alt="Screenshot de la page d'accueil" />

                <h3>Rédaction d'articles</h3>
                <img src="/myparera-redac.png" alt="Screenshot de la partie rédaction" />
            </div>
            <div>
                Documentation :
                Attention, pour accéder aux ressources, vous devez envoyer une demande d'authorisation qui sera validée. Aucune collecte des adresses mail n'est effectuée <br />
                <a href="https://drive.google.com/drive/folders/1sPcFwEM9vkagL36_1Rn9oqmN9acEDq6Y?usp=drive_link" target="_blank" rel="Lien vers le dossier drive myparera">Ressources myParera</a>
            </div>
        </div>
    )
}

export default myParera