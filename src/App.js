import React from 'react';
import Navbar from './components/Navbar';
import WelcomeSection from './sections/WelcomeSection';
import AboutSection from './sections/AboutSection';
import ProblemSolutionSection from './sections/ProblemSolutionSection';
import CompetitorsSection from './sections/CompetitorsSection';
import ProductSection from './sections/ProductSection';
import TargetMarketSection from './sections/TargetMarketSection';
import TimingSection from './sections/TimingSection';
import BusinessModelSection from './sections/BusinessModelSection';
import RoadmapSection from './sections/RoadmapSection';
import ContactSection from './sections/ContactSection';

import './styles/global.css'; 

function App() {
    return (
        <div>
            <Navbar />
            <div style={{ paddingTop: '60px' }}>
                <WelcomeSection />
                <AboutSection />
                <ProblemSolutionSection />
                <CompetitorsSection />
                <ProductSection />
                <TargetMarketSection />
                <TimingSection />
                <BusinessModelSection />
                <RoadmapSection />
                <ContactSection />
            </div>
        </div>
    );
}

export default App;
