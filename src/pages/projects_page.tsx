import React, { useState } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { InvoiceGen } from '../components/projects/invoice_gen';
import { Wapl } from '../components/projects/wapl';
import { SideNavButtons } from '../components/sidenav_buttons';
import { PocketTarkov } from '../components/projects/pocket_tarkov';
import { styled } from '../stitches.config';
import { Header } from '../components/header';

import './inout.css';

export const Projects = () => {
    const [projects] = useState<JSX.Element[]>([<InvoiceGen />, <Wapl />, <PocketTarkov />]);
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
            <SideNavButtons prevButton={prevProject} nextButton={nextProject} />
            <Header header={'Projects'} subheader={'Here are a few of my personal projects.'} />

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
    padding: '10px',
});
