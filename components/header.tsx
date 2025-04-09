import React from 'react'
import { Config } from 'tailwindcss'

function header() {
    return (
        <header className="bg-secondary text-foreground w-full py-4">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-2xl font-bold md:w-auto w-full text-center md:text-left">
                    Rémi SALARD
                </div>

                <nav className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm md:text-base">
                    <a href="/" className="hover:underline">Accueil</a>
                    <a href="./#about" className="hover:underline">À propos</a>
                    <a href="./#competences" className="hover:underline">Compétences</a>
                    <a href="./#technologies" className="hover:underline">Technologies</a>
                    <a href="./#projets" className="hover:underline">Projets</a>
                </nav>
            </div>
        </header>
    );
}

export default header