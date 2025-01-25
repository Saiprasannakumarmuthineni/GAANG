import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import SocialPage from './pages/SocialPage';
import UpskillPage from './pages/UpskillPage';

const App: React.FC = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/social" element={<SocialPage />} />
                <Route path="/upskill" element={<UpskillPage />} />
            </Routes>
        </Router>
    );
};

export default App;
