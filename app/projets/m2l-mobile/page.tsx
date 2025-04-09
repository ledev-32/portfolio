import React from 'react'
import Image from 'next/image'

function m2lMobile() {
    return (
      <div className='bg-violet-600/60 text-white p-4 rounded-2xl'>
        <h2 className='text-3xl md:text-4xl font-semibold mb-6'>M2L - Mobile</h2>
        <div className='mb-6 text-lg text-white/90 space-y-4'>
          <div>
            <h3 className='text-xl font-semibold mb-2'>Contexte</h3>
            <p>
              La Maison des Ligues de Lille a besoin d'une application mobile à
              proposer à ses clients pour permettre aux adhérents de s'inscrire à
              des formations.
            </p>
          </div>
          <div>
            <h3 className='text-xl font-semibold mb-2'>Compétences travaillées</h3>
            <ul className='grid grid-cols-2 md:grid-cols-3 gap-2'>
              <li className='bg-white text-black py-2 px-3 rounded-full text-center text-sm'>
                Gérer le patrimoine informatique
              </li>
              <li className='bg-white text-black py-2 px-3 rounded-full text-center text-sm'>
                Travailler en mode projet
              </li>
              <li className='bg-white text-black py-2 px-3 rounded-full text-center text-sm'>
                Mettre à disposition des utilisateurs un service informatique
              </li>
              <li className='bg-white text-black py-2 px-3 rounded-full text-center text-sm'>
                Organiser son développement professionnel
              </li>
            </ul>
          </div>
          <div>
            <h3 className='text-xl font-semibold mb-2'>Présentation rapide</h3>
            <p>
              Les adhérents peuvent s'inscrire à des sessions liées à des
              formations, et la secrétaire peut saisir ou modifier des formations.
            </p>
            <p>
              L'application communique avec une API pour récupérer les données, la
              base de données étant stockée sur un serveur réseau local.
            </p>
            <p>
              L'application mobile est développée en utilisant les technologies
              Android Studio, Kotlin, SQL et une API REST.
            </p>
          </div>
        </div>
      </div>
    );
  }

export default m2lMobile