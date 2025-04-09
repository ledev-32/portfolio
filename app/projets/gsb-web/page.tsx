import React from 'react'
import Image from 'next/image'

function gsbWeb() {
    return (
      <div className='bg-violet-600/60 text-white p-4 rounded-2xl'>
        <h2 className='text-3xl md:text-4xl font-semibold mb-6'>GSB - Web</h2>
        <div className='mb-6 text-lg text-white/90 space-y-4'>
          <div>
            <h3 className='text-xl font-semibold mb-2'>Contexte</h3>
            <p>
              Le laboratoire GSB a besoin d'une application web accessible par les
              commerciaux du laboratoire faisant des visites chez les praticiens
              pour des motifs de visites différents.
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
              <li className='bg-white text-black py-2 px-3 rounded-full text-center text-sm'>
                Mettre à disposition des utilisateurs un service informatique
              </li>
            </ul>
          </div>
          <div>
            <h3 className='text-xl font-semibold mb-2'>Présentation rapide</h3>
            <p>
              Les commerciaux, après authentification, ont accès à la consultation
              et la saisie de rapports de visite. La modification et la
              suppression se fait à partir d'un compte avec des droits plus hauts.
            </p>
            <p>
              L'application web est basée sur la technologie PHP sur un serveur
              Apache en local sur le réseau du lycée.
            </p>
            <div className='mb-4'>
              <h4 className='text-lg font-semibold mb-2'>Page d'authentification</h4>
              <img
                src='/gsb-web-login.png'
                alt="Screenshot de la page d'authentification"
                className='w-full rounded-md shadow-sm md:w-2/3 md:mr-auto md:ml-auto'
              />
            </div>
            <div className='mb-4'>
              <h4 className='text-lg font-semibold mb-2'>Page de consultation des rapports</h4>
              <img
                src='/gsb-web-consultation.png'
                alt="Screenshot de la page de consultation des rapports"
                className='w-full rounded-md shadow-sm md:w-2/3 md:mr-auto md:ml-auto'
              />
            </div>
            <div>
              <h4 className='text-lg font-semibold mb-2'>Page de saisie d'un rapport</h4>
              <img
                src='/gsb-web-insert.png'
                alt="Screenshot de la page de saisie d'un rapport"
                className='w-full rounded-md shadow-sm md:w-2/3 md:mr-auto md:ml-auto'
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

export default gsbWeb