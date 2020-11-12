import React, { createRef, useEffect } from 'react';
import { Contact } from './contact_page';
import { About } from './about_page';
import { Projects } from './projects_page';
import { CodeSnips } from './code_snips';

export interface MainScrollProps {
    scrollTo: string;
}

export const MainScroll = ({ scrollTo }: MainScrollProps) => {
    const aboutRef = createRef<HTMLDivElement>();
    const projectRef = createRef<HTMLDivElement>();
    const contactRef = createRef<HTMLDivElement>();
    const snipsRef = createRef<HTMLDivElement>();

    useEffect(() => {
        const handleScroll = (whatRef: String) => {
            if (
                !aboutRef.current ||
                !projectRef.current ||
                !contactRef.current ||
                !snipsRef.current
            ) {
                return;
            }
            switch (whatRef) {
                case 'about':
                    aboutRef.current.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                    });
                    return;
                case 'projects':
                    projectRef.current.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                    });
                    return;
                case 'code':
                    snipsRef.current.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                    });
                    return;
                case 'contact':
                    contactRef.current.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                    });
                    return;
            }
        };
        // code to run on component mount
        handleScroll(scrollTo);
    }, [aboutRef, projectRef, contactRef, scrollTo]);

    return (
        <div>
            <div ref={aboutRef}>
                <About />
            </div>
            <div ref={projectRef}>
                <Projects />
            </div>
            <div ref={snipsRef}>
                <CodeSnips />
            </div>
            <div ref={contactRef}>
                <Contact />
            </div>
        </div>
    );
};
