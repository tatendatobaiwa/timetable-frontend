import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import TimetableMaker from './pages/TimetableMaker/TimetableMaker'
import TermsOfUse from './pages/TermsOfUse/TermsOfUse';
import Settings from './pages/Settings/Settings';
import AboutUs from './pages/AboutUs/AboutUs';
import ExamTimetable from './pages/ExamTimetable/ExamTimetable';
import TeachingTimetable from './pages/TeachingTimetable/TeaachingTimetable';


import './App.css';

function App() {
  return (
    <Router>
      <div className="ScheduleMaster">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/timetable-maker" element={<TimetableMaker />} />
            <Route path="/terms-of-use" element={<TermsOfUse />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/exam-timetable" element={<ExamTimetable />} />
            <Route path="/teaching-timetable" element={<TeachingTimetable />} />
            <Route path="/about-us" element={<AboutUs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;