import React, { createRef, useEffect } from 'react';
import { Contact } from './contact_page';
import { Home } from './home_page';
import { Projects } from './projects_page';

export interface MainScrollProps {
    scrollTo: string;
}

export const MainScroll = ({ scrollTo }: MainScrollProps) => {
    const homeRef = createRef<HTMLDivElement>();
    const projectRef = createRef<HTMLDivElement>();
    const contactRef = createRef<HTMLDivElement>();

    useEffect(() => {
        const handleScroll = (whatRef: String) => {
            if (!homeRef.current || !projectRef.current || !contactRef.current) {
                return;
            }
            switch (whatRef) {
                case 'home':
                    homeRef.current.scrollIntoView({
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
    }, [homeRef, projectRef, contactRef, scrollTo]);

    return (
        <div>
            <div ref={homeRef}>
                <Home />
            </div>
            <div ref={projectRef}>
                <Projects />
            </div>
            <div ref={contactRef}>
                <Contact />
            </div>
        </div>
    );
};
