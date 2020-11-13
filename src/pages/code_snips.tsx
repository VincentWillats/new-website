import React, { useState } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { GoSnip } from '../components/snips/go_snips';
import { TsSnip } from '../components/snips/ts_snips';
import { SQLSnip } from '../components/snips/sql_snips';

import { css, styled } from '../stitches.config';
import './inout.css';

export interface SnipProps {
    codeNumber: number;
}

export const CodeSnips = () => {
    const [projects] = useState<JSX.Element[]>([
        <GoSnip codeNumber={0} />,
        <GoSnip codeNumber={1} />,
        <GoSnip codeNumber={2} />,
        <GoSnip codeNumber={3} />,
        <TsSnip codeNumber={0} />,
        <SQLSnip codeNumber={0} />,
    ]);
    const [index, setIndex] = useState(0);
    const [fadeDirection, setFadeDirection] = useState('fade-forward');

    const nextComponent = () => {
        setFadeDirection('fade-forward');
        if (index + 1 >= projects.length) {
            setIndex(0);
            return;
        }
        setIndex((prev) => prev + 1);
    };

    const prevComponent = () => {
        setFadeDirection('fade-backwards');
        if (index - 1 < 0) {
            setIndex(projects.length - 1);
            return;
        }
        setIndex((prev) => prev - 1);
    };

    return (
        <CodeSnipWrap>
            <NavButtons>
                <NavButton onClick={() => prevComponent()}>{'<'}</NavButton>
                <NavButton onClick={() => nextComponent()}>{'>'}</NavButton>
            </NavButtons>
            <HeaderWrap>
                <HeaderTitle size={{ initial: 'default', bp880: 'small', bp540: 'smallest' }}>
                    Code Snippets
                </HeaderTitle>
                <HeaderText>A few example snips of my code.</HeaderText>
            </HeaderWrap>

            <ImgBtnWrap>
                {projects.map((_, i) => {
                    return (
                        <ImgBtn selected={i === index} onClick={() => setIndex(i)}>
                            {i + 1}
                        </ImgBtn>
                    );
                })}
            </ImgBtnWrap>

            <SwitchTransition>
                <CSSTransition
                    key={index}
                    addEndListener={(node, done) => {
                        node.addEventListener('transitionend', done, false);
                    }}
                    classNames={fadeDirection}
                >
                    {projects[index]}
                </CSSTransition>
            </SwitchTransition>
        </CodeSnipWrap>
    );
};

const CodeSnipWrap = styled('div', {
    display: 'flex',
    maxWidth: '1280px',
    minHeight: '500px',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    position: 'relative',
    margin: 'auto',
    paddingBottom: '20px',
});

const NavButtons = styled('div', {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    position: 'absolute',
    padding: '1rem',
    top: '400px',
    transform: 'translateY(-50%)',
    zIndex: '999',
});

const NavButton = styled('button', {
    backgroundColor: 'gainsboro',
    borderRadius: '100%',
    width: '60px',
    height: '60px',
    border: '0',
    boxShadow: '2px 2px 2px 2px rgba(0, 0, 0, 0.2)',
    transition: 'all 0.3s',
    opacity: '0.5',

    ':hover': {
        transform: 'translateY(-2px)',
        boxShadow: '0 10px 25px rgba(0, 0, 0, .3)',
        opacity: '1',
    },

    ':active': {
        transform: 'translateY(4px)',
    },
});

const HeaderWrap = styled('div', {
    width: '70%',
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
});
const HeaderTitle = styled('h1', {
    fontSize: '40px',
    fontStyle: 'normal',

    variants: {
        size: {
            default: { fontSize: '40px' },
            small: { fontSize: '30px' },
            smallest: { fontSize: '24px' },
        },
    },
});
const HeaderText = styled('p', {
    fontSize: '12px',
});

const ImgBtnWrap = styled('div', {
    display: 'flex',
    justifyContent: 'center',
    padding: '5px',
});

const animation = css.keyframes({
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)' },
});

const ImgBtn = styled('button', {
    backgroundColor: 'lightgrey',
    color: 'black',
    border: '0',
    borderWidth: '1px',
    borderColor: 'black',
    marginLeft: '1px',
    marginRight: '1px',
    transition: 'all 0.2s',

    ':hover': {
        animation: `${animation} 500ms`,
    },

    ':active': {
        transform: 'translate(2px, 2px)',
    },

    variants: {
        selected: {
            true: {
                backgroundColor: '#282a36',
                color: 'white',
            },
            false: {
                backgroundColor: 'lightgrey',
            },
        },
    },
});
