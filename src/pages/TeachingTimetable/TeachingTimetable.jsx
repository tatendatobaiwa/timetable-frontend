import React, { useState } from "react";
import { Plus, X, Calendar } from "lucide-react";
import blob1 from "../../assets/blob1.png";
import blob2 from "../../assets/blob2.png";
import "./TeachingTimetable.css";

const TeachingTimetable = () => {
  const [modules, setModules] = useState([{ code: "", name: "" }]);
  const [errors, setErrors] = useState([{ code: "", name: "" }]);

  const validateModuleCode = (code) => {
    const regex = /^[A-Z]{4}\s\d{3}$/;
    return regex.test(code);
  };

  const handleModuleChange = (index, field, value) => {
    const newModules = [...modules];
    newModules[index][field] = value;
    setModules(newModules);

    if (field === "code") {
      const newErrors = [...errors];
      if (!value) {
        newErrors[index].code = "Module code is required";
      } else if (!validateModuleCode(value)) {
        newErrors[index].code = 'Module code must be in format "COMP 101"';
      } else {
        newErrors[index].code = "";
      }
      setErrors(newErrors);
    }
  };

  const addModule = () => {
    setModules([...modules, { code: "", name: "" }]);
    setErrors([...errors, { code: "", name: "" }]);
  };

  const removeModule = (index) => {
    if (modules.length > 1) {
      const newModules = modules.filter((_, i) => i !== index);
      const newErrors = errors.filter((_, i) => i !== index);
      setModules(newModules);
      setErrors(newErrors);
    }
  };

  const handleGenerateTimetable = () => {
    // Validate all modules before proceeding
    const hasErrors = modules.some((module, index) => {
      const newErrors = [...errors];
      if (!module.code) {
        newErrors[index].code = "Module code is required";
      } else if (!validateModuleCode(module.code)) {
        newErrors[index].code = 'Module code must be in format "COMP 101"';
      }
      if (!module.name) {
        newErrors[index].name = "Module name is required";
      }
      setErrors(newErrors);
      return !validateModuleCode(module.code) || !module.name;
    });

    if (!hasErrors) {
      console.log("Generating timetable for modules:", modules);
      // Future implementation: Handle timetable generation
    }
  };

  return (
    <div className="teaching-timetable-container">
      {/* Background blobs */}
      <div className="backgrounds-blobs">
        <img src={blob1} alt="Decorative blob 1" className="blob blob-1" />
        <img src={blob2} alt="Decorative blob 2" className="blob blob-2" />
        <img src={blob1} alt="Decorative blob 3" className="blob blob-3" />
        <img src={blob2} alt="Decorative blob 4" className="blob blob-4" />
      </div>

      {/* Teaching Timetable Card */}
      <div className="teaching-timetable-card">
        <h1 className="teaching-timetable-title">Teaching Timetable</h1>

        <div className="modules-container">
          {modules.map((module, index) => (
            <div key={index} className="module-item">
              <div className="module-grid">
                <div className="input-group">
                  <label className="input-label">Module Code</label>
                  <input
                    type="text"
                    value={module.code}
                    onChange={(e) =>
                      handleModuleChange(
                        index,
                        "code",
                        e.target.value.toUpperCase()
                      )
                    }
                    placeholder="COMP 101"
                    className="input-field"
                  />
                  {errors[index].code && (
                    <p className="error-message">{errors[index].code}</p>
                  )}
                </div>

                <div className="input-group">
                  <label className="input-label">Module Name</label>
                  <input
                    type="text"
                    value={module.name}
                    onChange={(e) =>
                      handleModuleChange(index, "name", e.target.value)
                    }
                    placeholder="Introduction to Computing"
                    className="input-field"
                  />
                  {errors[index].name && (
                    <p className="error-message">{errors[index].name}</p>
                  )}
                </div>
              </div>

              {modules.length > 1 && (
                <button
                  onClick={() => removeModule(index)}
                  className="remove-button"
                >
                  <X size={20} />
                </button>
              )}
            </div>
          ))}

          <button onClick={addModule} className="add-module-button">
            <Plus size={20} className="button-icon" />
            Add Module
          </button>

          <button onClick={handleGenerateTimetable} className="generate-button">
            <Calendar size={20} className="button-icon" />
            Generate Timetable
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeachingTimetable;
