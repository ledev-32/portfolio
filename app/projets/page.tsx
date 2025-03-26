import React from 'react'

function projets() {
    return (
        <div className=''>
            <h2 className='text-4xl'>Mes projets</h2>
            <div className=''>
                Voici les différents projets réalisés lors de ces 2 années de BTS
            </div>
            <div className='border-2 border-solid border-purple-500 text-black text-2xl'>
                MyParera
                <div className='border-2 border-solid border-purple-500 text-black text-lg'>
                    <a href="/projets/my-parera">
                        <img src="screenshot-myparera.png" alt="Screenshot du rendu de l'application" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default projets