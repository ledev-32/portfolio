import React from 'react'
import Image from 'next/image'

function newPacman() {
    return (
      <div className='bg-violet-600/60 text-white p-4 rounded-2xl'>
        <h2 className='text-3xl md:text-4xl font-semibold mb-6'>NewPacman</h2>
        <div className='mb-6 text-lg text-white/90 space-y-4'>
          <div>
            <h3 className='text-xl font-semibold mb-2'>Contexte</h3>
            <p>
              Tiria, entreprise de développement de la présence web des
              entreprises, m'a confié le rôle de faire évoluer un jeu vidéo Web et
              d'intégrer un système de base de données.
            </p>
            <p>
              De plus, ce contexte me permet d'apprendre de manière globale le
              fonctionnement d'une API Rest.
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
                Organiser son développement professionnel
              </li>
            </ul>
          </div>
          <div>
            <h3 className='text-xl font-semibold mb-2'>Présentation rapide</h3>
            <p>
              Les joueurs se connectent ou s'inscrivent au jeu, ensuite ils peuvent
              jouer différents niveaux. Leurs scores sont sauvegardés en base de
              données. Plusieurs systèmes de bonus ainsi que les grands traits du
              jeu vidéo célèbre Pacman sont repris ici.
            </p>
            <p>Le moteur de jeu est en JavaScript (peu performant).</p>
            <p>
              L'application web est développée grâce à PHP, HTML/CSS/JavaScript et
              est hébergée sur un serveur Apache local (UwAmp).
            </p>
            <div className='mb-4'>
              <h4 className='text-lg font-semibold mb-2'>Page principale de jeu</h4>
              <img
                src='/new-pacman.png'
                alt="Screenshot de la page principale de jeu"
                className='w-full rounded-md shadow-sm md:w-2/3 md:mr-auto md:ml-auto'
              />
            </div>
            <div>
              <h4 className='text-lg font-semibold mb-2'>Détails</h4>
              <img
                src='/new-pacman-2.png'
                alt="Screenshot des détails du jeu"
                className='w-full rounded-md shadow-sm md:w-2/3 md:mr-auto md:ml-auto'
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

export default newPacman