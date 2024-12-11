import { React, Suspense } from 'react';
import WelcomeSection from '../sections/WelcomeSection';
import ProductSection from '../sections/ProductSection';
import ProblemSolutionSection from '../sections/ProblemSolutionSection';
import CompetitorsSection from '../sections/CompetitorsSection';
import TargetMarketSection from '../sections/TargetMarketSection';
import TimingSection from '../sections/TimingSection';
import BusinessModelSection from '../sections/BusinessModelSection';
import MarketSizeSection from '../sections/MarketSizeSection';
import RoadmapSection from '../sections/RoadmapSection';

const HomePage = () => {
    return (
        <div style={{ paddingTop: '60px' }}>
            <WelcomeSection />
            <ProductSection />
            <ProblemSolutionSection />
            <CompetitorsSection />
            <BusinessModelSection />
            <TargetMarketSection />
            <MarketSizeSection />
            <TimingSection />
            <RoadmapSection />
        </div>
    );
};

export default HomePage; 