import React from 'react'
import Image from 'next/image'

function m2lWeb() {
    return (
        <div className=''>
            <h2 className='text-4xl'>M2L - Web</h2>
            <div className=''>
                Contexte : <br />
                La Maison des Ligues de Lille a besoin d'une application web pour permettre aux adhérents de s'inscrire à des formations. 
                De 
            </div>
            <div>
                <div></div>
                <div></div>
                <div></div>
                En voici la présentation rapide :
                Les adhérents doivent pouvoir s'inscrire à des sessions liées à des formations. De plus la secrétaire et le directeur peuvent inscrire de nouvelles formations   
                L'application web est basée sur la technologie PHP sur un serveur Apache en localhost avec UwAmp
                <div className=''>
                    <h3>Page d'authentification</h3>
                    <img src="/m2l-web-login.png" alt="Screenshot de la page d'authentification" />

                    <h3>Page de consultation des formations</h3>
                    <img src="/m2l-web-consultation.png" alt="Screenshot de la page d'authentification" />
                </div>
            </div>
            <div>
                Documentation :
                Attention, pour accéder aux ressources, vous devez envoyer une demande d'authorisation qui sera validée. Aucune collecte des adresses mail n'est effectuée <br />
                <a href="" target="_blank" rel="Lien vers le dossier drive m2l-web">Ressources m2l-web</a>
            </div>
        </div>
    )
}

export default m2lWeb