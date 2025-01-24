import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import TimetableMaker from "./pages/TimetableMaker/TimetableMaker";
import TermsOfUse from "./pages/TermsOfUse/TermsOfUse";
import AboutUs from "./pages/AboutUs/AboutUs";
import ExamTimetable from "./pages/ExamTimetable/ExamTimetable";
import TeachingTimetable from "./pages/TeachingTimetable/TeachingTimetable";
import LandingPage from "./pages/LandingPage/LandingPage";
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import "./App.css";

const hideHeaderFooterRoutes = ['/', '/signup', '/signin'];

function AppContent() {
  const location = useLocation();
  const shouldHideHeaderFooter = hideHeaderFooterRoutes.includes(location.pathname);

  return (
    <div className="ScheduleMaster">
      {!shouldHideHeaderFooter && <Header />}
      <main>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/timetable-maker" element={<TimetableMaker />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="/exam-timetable" element={<ExamTimetable />} />
          <Route path="/teaching-timetable" element={<TeachingTimetable />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </main>
      {!shouldHideHeaderFooter && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;