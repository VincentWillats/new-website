import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar } from './components/navbar';
import { Footer } from './components/footer';
import { MainScroll } from './pages/main_scroll';
import { PrivacyPage } from './pages/privacy_page';

function App() {
    useEffect(() => {
        document.title = 'Vincent Willats';
    }, []);
    return (
        <Router>
            <div>
                <Navbar />

                <Switch>
                    <Route path="/privacy">
                        <PrivacyPage />
                    </Route>
                    <Route path="/projects">
                        <MainScroll scrollTo={'projects'} />
                    </Route>
                    <Route path="/contact">
                        <MainScroll scrollTo={'contact'} />
                    </Route>
                    <Route path="/code">
                        <MainScroll scrollTo={'code'} />
                    </Route>
                    <Route path="/">
                        <MainScroll scrollTo={'about'} />
                    </Route>
                </Switch>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
