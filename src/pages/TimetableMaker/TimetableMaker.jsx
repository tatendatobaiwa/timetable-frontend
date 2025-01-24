import React from "react";
import { useNavigate } from "react-router-dom";
import { Calendar, BookOpen } from "lucide-react";
import blob1 from "../../assets/blob1.png"; // Import blob1
import blob2 from "../../assets/blob2.png"; // Import blob2
import "./TimetableMaker.css"; // Importing the CSS file

const TimetableMaker = () => {
  const navigate = useNavigate();

  return (
    <div className="timetable-container">
      {/* Background blobs */}
      <div className="backgrounds-blobs">
        <img src={blob1} alt="Decorative blob 1" className="blob blob-1" />
        <img src={blob2} alt="Decorative blob 2" className="blob blob-2" />
        <img src={blob1} alt="Decorative blob 3" className="blob blob-3" />
        <img src={blob2} alt="Decorative blob 4" className="blob blob-4" />
      </div>

      {/* Timetable Card */}
      <div className="timetable-card">
        <h1 className="timetable-title">Make Your Timetable</h1>

        <div className="timetable-grid">
          <div
            onClick={() => navigate("/exam-timetable")}
            className="timetable-item"
          >
            <Calendar size={48} className="icon exam-icon" />
            <h2 className="item-title">Exam Timetable</h2>
            <p className="item-description">
              Create and manage your examination schedules with ease.
            </p>
          </div>

          <div
            onClick={() => navigate("/teaching-timetable")}
            className="timetable-item"
          >
            <BookOpen size={48} className="icon teaching-icon" />
            <h2 className="item-title">Teaching Timetable</h2>
            <p className="item-description">
              Organize your teaching schedule and class assignments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimetableMaker;
