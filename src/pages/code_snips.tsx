import React, { useState } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { GoSnip } from '../components/snips/go_snips';
import { TsSnip } from '../components/snips/ts_snips';
import { SQLSnip } from '../components/snips/sql_snips';
import { styled } from '../stitches.config';
import './inout.css';
import { SideNavButtons } from '../components/sidenav_buttons';
import { Header } from '../components/header';
import { ImgButtons } from '../components/img_buttons';

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
            <SideNavButtons prevButton={prevComponent} nextButton={nextComponent} />
            <Header header={'Code Snippets'} subheader={'A little peek of my code.'} />
            <ImgButtons listLength={projects.length} selectedIndex={index} setIndex={setIndex} />
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
    minHeight: '810px',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    position: 'relative',
    margin: 'auto',
    paddingBottom: '20px',
});
