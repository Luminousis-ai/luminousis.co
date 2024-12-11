import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import RevenueProjection from './pages/RevenueProjection';
import InvestorRelations from './pages/Investor';
import CareerPage from './pages/CareerPage';
import NotFound from './pages/NotFound';
import { LanguageProvider } from './contexts/LanguageContext';
import './styles/global.css';

function App() {
    return (
        <Router>
            <LanguageProvider>
                <div className="App">
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/projection" element={<RevenueProjection />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="/career" element={<CareerPage />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                    <Footer />
                </div>
            </LanguageProvider>
        </Router>
    );
}

export default App;
