import React from 'react'
import Image from 'next/image'

function myParera() {
    return (
      <div className='bg-violet-600/60 text-white p-4 rounded-2xl'>
        <h2 className='text-3xl md:text-4xl font-semibold mb-6'>MyParera</h2>
        <div className='mb-6 text-lg text-white/90 space-y-4'>
          <div>
            <h3 className='text-xl font-semibold mb-2'>Contexte</h3>
            <p>
              Lors de mon stage de seconde année, j'ai été amené à concevoir et
              développer le prototype de l'intranet de l'entreprise PARERA.
            </p>
            <p>
              Groupe PARERA est leader sur le marché de la topologie, topographie
              en France, comptant à ce jour plus de 1200 collaborateurs. L'équipe
              responsable communication et le RSI ont donc décidé de ma mission
              principale : développer un prototype d'intranet axé sur la
              communication.
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
              L'application web dynamique est développée avec la technologie
              NextJS, qui est un framework de React.
            </p>
            <p>La partie authentification se gère avec la connexion par Microsoft.</p>
            <p>
              Lorsqu'un utilisateur est authentifié, il peut avoir un accès direct
              à ses derniers mails, événements et fichiers OneDrive.
            </p>
            <p>
              Tous les utilisateurs (même en mode déconnecté) ont accès au flux
              LinkedIn, à la rédaction et à la consultation des articles.
            </p>
            <div className='mb-4'>
              <h4 className='text-lg font-semibold mb-2'>Page d'accueil</h4>
              <img
                src='/myparera.png'
                alt="Screenshot de la page d'accueil"
                className='w-full rounded-md shadow-sm md:w-2/3 md:mr-auto md:ml-auto'
              />
            </div>
            <div>
              <h4 className='text-lg font-semibold mb-2'>Rédaction d'articles</h4>
              <img
                src='/myparera-redac.png'
                alt="Screenshot de la partie rédaction"
                className='w-full rounded-md shadow-sm md:w-2/3 md:mr-auto md:ml-auto'
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

export default myParera