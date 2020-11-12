import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/navbar';
import { MainScroll } from './pages/main_scroll';

function App() {
    return (
        <Router>
            <div>
                <Navbar />

                <Switch>
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
            </div>
        </Router>
    );
}

export default App;
