import React from 'react';
import './about_page.css';

export const About = () => {
    return (
        <div className="about-wrap">
            <div className="header-wrap">
                <h1>Vincent Willats</h1>
                <p>A Full Stack Software Developer living in Perth, Western Australia.</p>
            </div>

            <div className="body">
                <img className="img" src={'/assets/IMG_4495.JPG'} />
                <div className="text-wrap">
                    <p>
                        Proficient in:
                        <ul>
                            <li>Go</li>
                            <li>React</li>
                            <li>React Native</li>
                            <li>Flutter/Dart</li>
                            <li>JavaScript/Typescript</li>
                            <li>PostgreSQL.</li>
                        </ul>
                    </p>
                    <p>
                        Confident in:
                        <ul>
                            <li>Git</li>
                            <li>C#</li>
                            <li>Xamarin</li>
                            <li>CSS</li>
                            <li>SQL.</li>
                        </ul>
                    </p>
                    <p>
                        Have used:
                        <ul>
                            <li>Unity</li>
                            <li>Java</li>
                            <li>PHP/Laravel</li>
                            <li>.NET</li>
                            <li>Python</li>
                            <li>Many more.</li>
                        </ul>
                    </p>
                    <p>
                        Things I enjoy:
                        <ul>
                            <li>Coffee</li>
                            <li>Boardgames</li>
                            <li>Videogames</li>
                            <li>UFC</li>
                            <li>Programming</li>
                            <li>Simplicity</li>
                        </ul>
                    </p>
                </div>
            </div>
        </div>
    );
};
