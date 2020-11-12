import React from 'react';
import { styled } from '../stitches.config';

export const About = () => {
    return (
        <AboutWrap>
            <HeaderWrap size={{ initial: 'default', bp880: 'small', bp540: 'smallest' }}>
                <h1>Vincent Willats</h1>
                <p>A Full Stack Software Developer living in Perth, Western Australia.</p>
            </HeaderWrap>

            <Body size={{ initial: 'default', bp1010: 'smaller', bp910: 'default' }}>
                <img src={'/assets/IMG_4495.JPG'} />
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
                            <li>Can eat a pizze slice in seconds</li>
                        </ul>
                    </p>
                    <p>
                        Certificates:
                        <ul>
                            <li>Cert IV in Software Development</li>
                            <li>Full drivers license</li>
                            <li>Gaming Operator Certificate</li>
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

const HeaderWrap = styled('div', {
    width: '90%',
    height: 'auto',
    backgroundColor: 'lightgrey',
    borderRadius: '10px',
    textAlign: 'center',
    padding: '10px 0',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '10px',
    marginBottom: '10px',
    boxShadow: '5px 5px 15px 5px rgba(0, 0, 0, 0.53)',

    h1: {
        fontSize: '58px',
        fontStyle: 'normal',
    },
    p: {
        fontSize: '12px',
    },

    variants: {
        size: {
            default: {
                h1: {
                    fontSize: '58px',
                },
            },
            small: {
                h1: {
                    fontSize: '44px',
                },
            },
            smallest: {
                h1: {
                    fontSize: '28px',
                },
            },
        },
    },
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
            padding: '10px',
            margin: '5px',
            width: '100%',
            maxWidth: '130px',
            borderRadius: '10px',
            backgroundColor: 'lightgrey',
            alignSelf: 'stretch',
            boxShadow: '3px 3px 10px 5px rgba(0, 0, 0, 0.21)',
            ul: {
                padding: '0px',
                paddingLeft: '20px',
            },
        },
    },
});

// /* media queries */
// @media only screen and (max-width: 888px) {

//     .header-wrap > h1 {
//         font-size: 44px;
//     }
// }

// /* media queries */
// @media only screen and (max-width: 540px) {
//     .text-wrap > p {
//         max-width: 100%;
//         padding-left: 50px;
//     }
//     .header-wrap > h1 {
//         font-size: 28px;
//     }
// }
