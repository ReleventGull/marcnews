import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { Home } from './Home';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
// import { createDatabase } from '../db';
import { health } from './api';
import { AdminHome } from './components/AdminHome';
import { CreateStory } from './components/CreateStory';
import { StoryStats } from './components/StoryStats';
import { CreateAuthor } from './components/CreateAuthor';


const App = () => {

    // useEffect(() => {
    //     health();
    // }, []);

    // there's probably a safer and better way to do this?
    const domain = /:\/\/([^\/]+)/.exec(window.location.href)[1];
    console.log('view', domain)
    const subdomain = domain.split('.')[0];
    console.log('subdomain', subdomain)

    if (subdomain === "admin") {
        return (
            <BrowserRouter>
                <div className="App">
                    <Header />
                    <Routes>
                    <Route exact path="/" element={<AdminHome/>} />
                    <Route path="/createstory" element={<CreateStory/>} />
                    <Route path="/storystats" element={<StoryStats/>} />
                    <Route path="/createauthor" element={<CreateAuthor/>} />
                    </Routes>
                    <Footer />
                </div>
            </BrowserRouter>
        )
    } else {
        return (
            <BrowserRouter>
                <div className="App">
                    <Header />
                    <Routes>
                    <Route exact path="/" element={<Home/>} />
        
                    </Routes>
                    <Footer />
                </div>
            </BrowserRouter>
            );
    }
};


export default App;