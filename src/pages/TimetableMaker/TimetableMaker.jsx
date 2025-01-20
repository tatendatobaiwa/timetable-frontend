import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, BookOpen } from 'lucide-react';
import './TimetableMaker.css'; // Importing the CSS file

const TimetableMaker = () => {
  const navigate = useNavigate();

  return (
    <div className="timetable-container">
      <div className="timetable-card">
        <h1 className="timetable-title">Make Your TimeTable</h1>
        
        <div className="timetable-grid">
          <div 
            onClick={() => navigate('/exam-timetable')}
            className="timetable-item"
          >
            <Calendar size={48} className="icon exam-icon" />
            <h2 className="item-title">Exam Timetable</h2>
            <p className="item-description">Create and manage your examination schedules with ease</p>
          </div>

          <div 
            onClick={() => navigate('/teaching-timetable')}
            className="timetable-item"
          >
            <BookOpen size={48} className="icon teaching-icon" />
            <h2 className="item-title">Teaching Timetable</h2>
            <p className="item-description">Organize your teaching schedule and class assignments</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimetableMaker;
