import React from 'react';
import Navbar from './components/Navbar';
import WelcomeSection from './sections/WelcomeSection';
import AboutSection from './sections/AboutSection';
import ProblemSolutionSection from './sections/ProblemSolutionSection';
import CompetitorsSection from './sections/CompetitorsSection';
import ProductSection from './sections/ProductSection';
import ProductVideoSection from './sections/ProductVideoSection';
import TargetMarketSection from './sections/TargetMarketSection';
import TimingSection from './sections/TimingSection';
import BusinessModelSection from './sections/BusinessModelSection';
import RoadmapSection from './sections/RoadmapSection';
import ContactSection from './sections/ContactSection';
import RevenueProjection from './pages/RevenueProjection';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './styles/global.css'; 

import { LanguageProvider } from './contexts/LanguageContext';

function App() {
    return (
        <Router>
            <LanguageProvider>
                <div>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={
                            <div style={{ paddingTop: '60px' }}>
                                <WelcomeSection />
                                <AboutSection />
                                <ProblemSolutionSection />
                                <CompetitorsSection />
                                <ProductSection />
                                <ProductVideoSection />
                                <TargetMarketSection />
                                <TimingSection />
                                <BusinessModelSection />
                                <RoadmapSection />
                                <ContactSection />
                            </div>
                        } />
                        <Route path="/projection" element={<RevenueProjection />} />
                    </Routes>
                </div>
            </LanguageProvider>
        </Router>
    );
}

export default App;
