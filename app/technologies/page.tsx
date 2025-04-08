import React from 'react'

function technologies() {
    return (
        <div className=''>
            <h2 className='text-4xl'>Les technologies</h2>
            <div className=''>
                Ma formation m'a amené à travailler avec différentes technologies plus ou moins sophistiquées et modernes
            </div>

            {/* dsdsd */}

            <div className='flex flex-col md:grid md:grid-cols-3 p-4 gap-4'>
                <div className='bg-black/70 text-2xl text-center my-1 md:mx-1 text-white font-bold pt-3 h-fit rounded-2xl'>
                    Langages de programmation
                    <div className='bg-purple-500 p-3 text-lg font-normal'>
                        Développement web
                        <ul className='grid grid-cols-3 place-content-stretch gap-1'>
                            <li className='mr-auto ml-auto bg-white p-2 text-black rounded-3xl border-1 border-solid border-black'>HTML</li>
                            <li className='mr-auto ml-auto bg-white p-2 text-black rounded-3xl border-1 border-solid border-black'>CSS</li>
                            <li className='mr-auto ml-auto bg-white p-2 text-black rounded-3xl border-1 border-solid border-black'>JavaScript</li>
                            <li className='mr-auto ml-auto bg-white text-black p-2 rounded-3xl border-1 border-solid border-black'>TypeScript</li>
                            <li className='mr-auto ml-auto bg-white text-black p-2 rounded-3xl border-1 border-solid border-black'>PHP</li>
                            <li className='mr-auto ml-auto bg-white text-black p-2 rounded-3xl border-1 border-solid border-black'>React</li>
                        </ul>
                        Développement applications lourdes
                        <ul className='grid grid-cols-3 place-content-stretch gap-1 '>
                            <li className='mr-auto ml-auto bg-white p-2 text-black rounded-3xl border-1 border-solid border-black'>Java</li>
                            <li className='mr-auto ml-auto bg-white p-2 text-black rounded-3xl border-1 border-solid border-black'>C#</li>
                            <li className='mr-auto ml-auto bg-white p-2 text-black rounded-3xl border-1 border-solid border-black'>Kotlin</li>
                        </ul>
                        Autres langages de programmation
                        <ul className='grid grid-cols-3 place-content-stretch gap-1 '>
                            <li className='mr-auto ml-auto bg-white p-2 text-black rounded-3xl border-1 border-solid border-black'>Python</li>
                            <li className='mr-auto ml-auto bg-white p-2 text-black rounded-3xl border-1 border-solid border-black'>C++</li>
                        </ul>
                    </div>
                </div>
                <div className='bg-black/70 text-2xl text-center my-1 md:mx-1 text-white font-bold pt-3 h-fit rounded-2xl'>
                    Frameworks
                    <div className='bg-purple-500 p-3 text-lg'>
                        Développement web
                        <ul className='grid grid-cols-3 place-content-stretch gap-1 '>
                            <li className='mr-auto ml-auto bg-white p-2 text-black rounded-3xl border-1 border-solid border-black'>Laravel</li>
                            <li className='mr-auto ml-auto bg-white p-2 text-black rounded-3xl border-1 border-solid border-black'>NextJS</li>
                        </ul>
                    </div>
                </div>
                <div className='bg-black/70 text-2xl text-center my-1 md:mx-1 text-white font-bold pt-3 h-fit rounded-2xl'>
                    SGBD
                    <div className='bg-purple-500 p-3 text-lg'>
                        <ul className='grid grid-cols-3 place-content-stretch gap-1 '>
                            <li className='mr-auto ml-auto bg-white p-2 text-black rounded-3xl border-1 border-solid border-black'>MySQL</li>
                            <li className='mr-auto ml-auto bg-white p-2 text-black rounded-3xl border-1 border-solid border-black'>PostGreSQL</li>
                        </ul>
                    </div>
                </div>
                <div className='bg-black/70 text-2xl text-center my-1 md:mx-1 text-white font-bold pt-3 h-fit rounded-2xl'>
                    IDE
                    <div className='bg-purple-500 p-3 text-lg'>
                        <ul className='grid grid-cols-3 place-content-stretch gap-1 '>
                            <li className='mr-auto ml-auto bg-white p-2 text-black rounded-3xl border-1 border-solid border-black'>Visual Studio</li>
                            <li className='mr-auto ml-auto bg-white p-2 text-black rounded-3xl border-1 border-solid border-black'>Visual Studio Code</li>
                            <li className='mr-auto ml-auto bg-white p-2 text-black rounded-3xl border-1 border-solid border-black'>Android Studio</li>
                            <li className='mr-auto ml-auto bg-white p-2 text-black rounded-3xl border-1 border-solid border-black'>Eclipse for java</li>
                        </ul>
                    </div>
                </div>
                <div className='bg-black/70 text-2xl text-center my-1 md:mx-1 text-white font-bold pt-3 h-fit rounded-2xl'>
                    Gestion
                    <div className='bg-purple-500 p-3 text-lg'>
                        Gestion des incidents
                        <ul className='grid grid-cols-3 place-content-stretch gap-1 '>
                            <li className='mr-auto ml-auto bg-white p-2 text-black rounded-3xl border-1 border-solid border-black'>GLPI</li>
                        </ul>
                        Gestion de projet et développement collaboratif
                        <ul className='grid grid-cols-3 place-content-stretch gap-1'>
                            <li className='mr-auto ml-auto bg-white p-2 text-black rounded-3xl border-1 border-solid border-black'>Github</li>
                            <li className='mr-auto ml-auto bg-white p-2 text-black rounded-3xl border-1 border-solid border-black'>Google Workspace</li>
                            <li className='mr-auto ml-auto bg-white p-2 text-black rounded-3xl border-1 border-solid border-black'>Microsoft Teams</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='pt-8'>
                <img src="h-bar.png" alt="Barre de style" className="px-4 md:px-24 h-[6px] w-full" />
            </div>
        </div>
    )
}

export default technologies