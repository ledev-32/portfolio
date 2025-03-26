import React from 'react'
import { Config } from 'tailwindcss'

function header() {
    return (
        <header className='bg-secondary text-center text-foreground w-full p-2 flex flex-col md:flex-row'>
            <div className="flex-auto text-left pl-2 text-2xl w-1/12">Rémi SALARD</div>
            <div className="w-1/12"></div>
            <div className="flex-auto mx-auto w-2/12">
                <a href="/">Accueil</a>
            </div>
            <div className="flex-auto mx-auto w-2/12">
                <a href="/about">A propos</a>
            </div>
            <div className='flex-auto mx-auto w-2/12'>
                <a href="/competences">Compétences</a>
            </div>
            <div className='flex-auto mx-auto w-2/12'>
                <a href="/technologies">Technologies</a>
            </div>
            <div className='flex-auto mx-auto w-2/12'>
                <a href="/projets">Projets</a>
            </div>
        </header>
    )
}

export default header