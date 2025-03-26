import React from 'react'

function technologies() {
    return (
        <div className=''>
            <h2 className='text-4xl'>Les technologies</h2>
            <div className=''>
                Ma formation m'a amené à travailler avec différentes technologies plus ou moins sophistiquées et modernes
            </div>
            <div className='border-2 border-solid border-purple-500 text-black text-2xl'>
                Langages de programmation
                <div className='border-2 border-solid border-purple-500 text-black text-lg'>
                    Développement web
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>TypeScript</li>
                        <li>PHP</li>
                        <li>React</li>
                    </ul>
                    Développement applications lourdes
                    <ul>
                        <li>Java</li>
                        <li>C#</li>
                        <li>Kotlin</li>
                    </ul>
                    Autres langages de programmation
                    <ul>
                        <li>Python</li>
                        <li>C++</li>
                    </ul>
                </div>
            </div>
            <div className='border-2 border-solid border-purple-500 text-black text-2xl'>
                Frameworks
                <div className='border-2 border-solid border-purple-500 text-black text-lg'>
                   Développement web
                   <ul>
                    <li>Laravel</li>
                    <li>NextJS</li>
                   </ul>
                </div>
            </div>
            <div className='border-2 border-solid border-purple-500 text-black text-2xl'>
                SGBD
                <div className='border-2 border-solid border-purple-500 text-black text-lg'>
                    <ul>
                        <li>MySQL</li>
                        <li>PostGreSQL</li>
                    </ul>
                </div>
            </div>
            <div className='border-2 border-solid border-purple-500 text-black text-2xl'>
                IDE
                <div className='border-2 border-solid border-purple-500 text-black text-lg'>
                    <ul>
                        <li>Visual Studio</li>
                        <li>Visual Studio Code</li>
                        <li>Android Studio</li>
                        <li>Eclipse for java</li>
                    </ul>
                </div>
            </div>
            <div className='border-2 border-solid border-purple-500 text-black text-2xl'>
                Gestion
                <div className='border-2 border-solid border-purple-500 text-black text-lg'>
                    Gestion des incidents
                    <ul>
                        <li>GLPI</li>
                    </ul>
                    Gestion de projet et développement collaboratif
                    <ul>
                        <li>Github</li>
                        <li>Google Workspace</li>
                        <li>Microsoft Teams</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default technologies