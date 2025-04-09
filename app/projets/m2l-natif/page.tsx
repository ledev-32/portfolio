import React from 'react'
import Image from 'next/image'

function m2lNatif() {
    return (
      <div className='bg-violet-600/60 text-white p-4 rounded-2xl'>
        <h2 className='text-3xl md:text-4xl font-semibold mb-6'>M2L - Natif</h2>
        <div className='mb-6 text-lg text-white/90 space-y-4'>
          <div>
            <h3 className='text-xl font-semibold mb-2'>Contexte</h3>
            <p>
              La Maison des Ligues de Lille a besoin d'une application client
              lourd pour permettre au secrétariat de gérer les adhérents des
              différents clubs sportifs.
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
              La personne s'occupant de la gestion des adhérents peut accéder à une
              interface graphique pour gérer les adhérents ainsi que pour avoir un
              annuaire des clubs.
            </p>
            <p>
              L'application native est développée en Java avec WindowBuilder sur
              Eclipse For Java ainsi que la manipulation de fichiers XML.
            </p>
            <div className='mb-4'>
              <h4 className='text-lg font-semibold mb-2'>Fenêtre principale</h4>
              <img
                src='/m2l-natif.png'
                alt="Screenshot de la fenêtre principale"
                className='w-full rounded-md shadow-sm md:w-2/3 md:mr-auto md:ml-auto'
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

export default m2lNatif