import React from 'react'
import Image from 'next/image'

function glpi() {
    return (
      <div className='bg-violet-600/60 text-white p-4 rounded-2xl'>
        <h2 className='text-3xl md:text-4xl font-semibold mb-6'>GLPI</h2>
        <div className='mb-6 text-lg text-white/90 space-y-4'>
          <div>
            <h3 className='text-xl font-semibold mb-2'>Contexte</h3>
            <p>
              L'équipe pédagogique nous a demandé d'explorer l'outil de gestion du parc informatique GLPI. Le but étant de découvrir la gestion et le suivi des actifs et configurations IT ainsi que la gestion de tickets
            </p>
          </div>
          <div>
            <h3 className='text-xl font-semibold mb-2'>Compétences travaillées</h3>
            <ul className='grid grid-cols-2 md:grid-cols-3 gap-2'>
              <li className='bg-white text-black py-2 px-3 rounded-full text-center text-sm'>
                Gérer le patrimoine informatique  
              </li>
              <li className='bg-white text-black py-2 px-3 rounded-full text-center text-sm'>
              Répondre aux incidents et aux demandes d'assistance et d'évolution
              </li>
              <li className='bg-white text-black py-2 px-3 rounded-full text-center text-sm'>
              Travailler en mode projet
              </li>
              <li className='bg-white text-black py-2 px-3 rounded-full text-center text-sm'>
              Organiser son développement professionnel
              </li>
            </ul>
          </div>
          <div>
            <h3 className='text-xl font-semibold mb-2'>Présentation rapide</h3>
            <p>
              La découverte de l'outil GLPI nous a apportée la getion et le suivi du parc informatique comme la visualisation.
              De plus nous avions découvert la gestion du cycle de vie d'un ticket
            </p>
            <div className='mb-4'>
              <h4 className='text-lg font-semibold mb-2'>Simulation d'un ticket</h4>
              <img
                src='/glpi-ticket.png'
                alt="Screenshot de la page d'authentification"
                className='w-full rounded-md shadow-sm md:w-2/3 md:mr-auto md:ml-auto'
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

export default glpi