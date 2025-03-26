import React from 'react'
import { Config } from 'tailwindcss'

function header() {
    return (
        <header className='flex-1/12 bg-secondary text-center text-foreground flex p-2'>
            <div className="w-1/12">Rémi SALARD</div>
            <div className="w-1/12"></div>
            <div className="w-2/12">
                <a href="/">Accueil</a>
            </div>
            <div className="w-2/12">
                <a href="/about">A propos</a>
            </div>
            <div className='w-2/12'>
                <a href="/competences">Compétences</a>
            </div>
            <div className='w-2/12'>
                <a href="/technologies">Technologies</a>
            </div>
            <div className='w-2/12'>
                <a href="/projets">Projets</a>
            </div>
        </header>
    )
}

export default header