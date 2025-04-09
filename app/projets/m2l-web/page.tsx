import React from 'react'
import Image from 'next/image'

function m2lWeb() {
    return (
      <div className='bg-violet-600/60 text-white p-4 rounded-2xl'>
        <h2 className='text-3xl md:text-4xl font-semibold mb-6'>M2L - Web</h2>
        <div className='mb-6 text-lg text-white/90 space-y-4'>
          <div>
            <h3 className='text-xl font-semibold mb-2'>Contexte</h3>
            <p>
              La Maison des Ligues de Lille a besoin d'une application web pour
              permettre aux adhérents de s'inscrire à des formations.
            </p>
          </div>
          <div>
            <h3 className='text-xl font-semibold mb-2'>Compétences travaillées</h3>
            <ul className='grid grid-cols-2 md:grid-cols-3 gap-2'>
              <li className='bg-white text-black py-2 px-3 rounded-full text-center text-sm'>
                Gérer le patrimoine informatique
              </li>
              <li className='bg-white text-black py-2 px-3 rounded-full text-center text-sm'>
                Développer la présence en ligne de l'organisation
              </li>
              <li className='bg-white text-black py-2 px-3 rounded-full text-center text-sm'>
                Travailler en mode projet
              </li>
            </ul>
          </div>
          <div>
            <h3 className='text-xl font-semibold mb-2'>Présentation rapide</h3>
            <p>
              Les adhérents doivent pouvoir s'inscrire à des sessions liées à des
              formations. De plus, la secrétaire et le directeur peuvent inscrire
              de nouvelles formations.
            </p>
            <p>
              L'application web est basée sur la technologie PHP sur un serveur
              Apache en localhost avec UwAmp.
            </p>
            <div className='mb-4'>
              <h4 className='text-lg font-semibold mb-2'>Page d'authentification</h4>
              <img
                src='/m2l-web-login.png'
                alt="Screenshot de la page d'authentification"
                className='w-full rounded-md shadow-sm md:w-2/3 md:mr-auto md:ml-auto'
              />
            </div>
            <div>
              <h4 className='text-lg font-semibold mb-2'>Page de consultation des formations</h4>
              <img
                src='/m2l-web-consultation.png'
                alt="Screenshot de la page de consultation des formations"
                className='w-full rounded-md shadow-sm md:w-2/3 md:mr-auto md:ml-auto'
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

export default m2lWeb