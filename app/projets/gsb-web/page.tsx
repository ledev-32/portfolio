import React from 'react'
import Image from 'next/image'

function gsbWeb() {
    return (
        <div className=''>
            <h2 className='text-4xl'>GBS - Web</h2>
            <div className=''>
                Contexte : <br />
                Le laboratoire GSB a besoin d'une application web accessible par les commerciaux du laboratoire faisant des visites chez les praticiens pour des motifs de visites différents
            </div>
            <div>
                En voici la présentation rapide :
                Les commerciaux, après authentification, ont accès à la consultation et la saisie de rapports de visite. La modification et la suppression se fait à partir d'un compte avec des droits plus hauts.    
                L'application web est basée sur la technologie PHP sur un serveur Apache en local sur le réseau du lycée.
                <h3>Page d'authentification</h3>
                <img src="/gsb-web-login.png" alt="Screenshot de la page d'authentification" />

                <h3>Page de consultation des rapports</h3>
                <img src="/gsb-web-consultation.png" alt="Screenshot de la page d'authentification" />

                <h3>Page de saisie d'un rapport</h3>
                <img src="/gsb-web-insert.png" alt="Screenshot de la page d'authentification" />
            </div>
            <div>
                Documentation :
                Attention, pour accéder aux ressources, vous devez envoyer une demande d'authorisation qui sera validée. Aucune collecte des adresses mail n'est effectuée <br />
                <a href="https://drive.google.com/drive/folders/1FSOy5TkSIB70K-bwJCU7CMT0N2soc7N2?usp=sharing" target="_blank" rel="Lien vers le dossier drive gsb-web">Ressources gsb-web</a>
            </div>
        </div>
    )
}

export default gsbWeb