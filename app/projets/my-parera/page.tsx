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
                Rendu :
                <img src="myparera.png" alt="Screenshot de l'application" />
            </div>
        </div>
    )
}

export default myParera