import React from 'react';
import { styled } from '../stitches.config';
import { Header } from '../components/header';

export const About = () => {
    return (
        <AboutWrap>
            <Header
                header={'Vincent Willats'}
                subheader={'A Full Stack Software Developer living in Perth, Western Australia.'}
            />

            <Body size={{ initial: 'default', bp1010: 'smaller', bp910: 'default' }}>
                <img src={'/assets/IMG_4495.JPG'} alt={'Failed to load.'} />
                <div>
                    <p>
                        Proficient in:
                        <ul>
                            <li>Go</li>
                            <li>React</li>
                            <li>React Native</li>
                            <li>Flutter/Dart</li>
                            <li>JavaScript</li>
                            <li>Typescript</li>
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
                            <li>Craft Beer</li>
                            <li>Simplicity</li>
                            <li>Lists</li>
                        </ul>
                    </p>
                    <p>
                        Facts about me:
                        <ul>
                            <li>Age 28</li>
                            <li>Father of 1</li>
                            <li>Macaw owner</li>
                            <li>I'm 5' 10"</li>
                            <li>Really 5' 7"</li>
                            <li>Can eat a pizza slice in seconds</li>
                        </ul>
                    </p>
                    <p>
                        Certificates:
                        <ul>
                            <li>Cert IV in Software Development</li>
                            <li>Full Drivers License</li>
                            <li>Gaming Operator License</li>
                        </ul>
                    </p>
                </div>
            </Body>
        </AboutWrap>
    );
};

const AboutWrap = styled('div', {
    paddingLeft: '20px',
    paddingRight: '20px',
    display: 'flex',
    maxWidth: '1280px',
    margin: 'auto',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
});

const Body = styled('div', {
    padding: '10px',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    margin: 'auto',

    variants: {
        size: {
            default: {
                img: {
                    maxWidth: '400px',
                },
            },
            smaller: {
                img: {
                    maxWidth: '300px',
                },
            },
        },
    },

    img: {
        minWidth: '300px',
        maxWidth: '400px',
        width: '100%',
        height: 'auto',
        borderRadius: '10px',
    },

    div: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        padding: '10px',
        minWidth: '180px',
        maxWidth: '550px',

        p: {
            fontSize: '14px',
            // padding: 'px',
            margin: '14px',
            width: '100%',
            maxWidth: '110px',
            borderRadius: '2px',
            backgroundColor: '$secondary',
            alignSelf: 'stretch',

            boxShadow: '0px 0px 10px 10px $secondary',
            ul: {
                padding: '0px',
                borderRadius: '2px',

                paddingLeft: '20px',
            },
        },
    },
});
