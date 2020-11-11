import React, { useState } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { InvoiceGen } from '../components/projects/invoice_gen';
import { Wapl } from '../components/projects/wapl';
import { styled } from '../stitches.config';
import './projects_page.css';
export const Projects = () => {
    const [projects] = useState<JSX.Element[]>([<InvoiceGen />, <Wapl />]);
    const [index, setIndex] = useState(0);
    const [fadeDirection, setFadeDirection] = useState('fade-forward');

    const nextProject = () => {
        setFadeDirection('fade-forward');
        if (index + 1 >= projects.length) {
            setIndex(0);
            return;
        }
        setIndex((prev) => prev + 1);
    };

    const prevProject = () => {
        setFadeDirection('fade-backwards');
        if (index - 1 < 0) {
            setIndex(projects.length - 1);
            return;
        }
        setIndex((prev) => prev - 1);
    };

    return (
        <ProjectWrap>
            <NavButtons>
                <NavButton onClick={() => prevProject()}>{'<'}</NavButton>
                <NavButton onClick={() => nextProject()}>{'>'}</NavButton>
            </NavButtons>
            <HeaderWrap>
                <HeaderTitle>Projects</HeaderTitle>
                <HeaderText>Here are a few of my personal projects.</HeaderText>
            </HeaderWrap>
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
        </ProjectWrap>
    );
};

const ProjectWrap = styled('div', {
    display: 'flex',
    maxWidth: '1280px',
    minHeight: '500px',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    position: 'relative',
    margin: 'auto',
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

    ':hover': {
        transform: 'translateY(-2px)',
        boxShadow: '0 10px 25px rgba(0, 0, 0, .3)',
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
});
const HeaderText = styled('p', {
    fontSize: '12px',
});
