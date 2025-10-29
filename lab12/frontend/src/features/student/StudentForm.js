import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  updateField,
  updateSubject,
  addSubject,
  removeSubject,
  submitStudent
} from './studentSlice';

const StudentForm = () => {
  const dispatch = useDispatch();
  const { name, class: studentClass, rollno, subjects, status } = useSelector(state => state.student);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submitStudent({ name, class: studentClass, rollno, subjects }));
  };

  return (
    <div className="container mt-5">
      <form
        onSubmit={handleSubmit}
        className="card p-4 shadow-lg border border-success"
        style={{ backgroundColor: '#f8f9fa', borderRadius: '12px' }}
      >
        <h2 className="mb-4 text-center text-success">🎓 Student Registration</h2>

        <div className="mb-3">
          <label className="form-label fw-bold text-primary">Name</label>
          <input
            type="text"
            className="form-control border border-primary"
            placeholder="Enter student name"
            value={name}
            onChange={e => dispatch(updateField({ field: 'name', value: e.target.value }))}
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-bold text-primary">Class</label>
          <select
            className="form-select border border-primary"
            value={studentClass}
            onChange={e => dispatch(updateField({ field: 'class', value: e.target.value }))}
          >
            <option value="">Select Class</option>
            <option value="TYBCA-A">TYBCA-A</option>
            <option value="TYBCA-B">TYBCA-B</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label fw-bold text-primary">Roll No</label>
          <input
            type="number"
            className="form-control border border-primary"
            placeholder="Enter roll number"
            value={rollno}
            onChange={e => dispatch(updateField({ field: 'rollno', value: e.target.value }))}
          />
        </div>

        <h4 className="mt-4 text-success">📚 Subjects & Marks</h4>
        {subjects.map((sub, index) => (
          <div key={index} className="row mb-3">
            <div className="col-md-5">
              <input
                type="text"
                className="form-control border border-info"
                placeholder="Subject"
                value={sub.subject}
                onChange={e => dispatch(updateSubject({ index, field: 'subject', value: e.target.value }))}
              />
            </div>
            <div className="col-md-5">
              <input
                type="number"
                className="form-control border border-info"
                placeholder="Marks"
                value={sub.marks}
                onChange={e => dispatch(updateSubject({ index, field: 'marks', value: e.target.value }))}
              />
            </div>
            <div className="col-md-2 d-grid">
              <button
                type="button"
                className="btn btn-outline-danger"
                onClick={() => dispatch(removeSubject(index))}
              >
                ❌ Remove
              </button>
            </div>
          </div>
        ))}

        <div className="mb-3 d-flex justify-content-between">
          <button type="button" className="btn btn-outline-secondary" onClick={() => dispatch(addSubject())}>
            ➕ Add Subject
          </button>
          <button type="submit" className="btn btn-success">✅ Submit</button>
        </div>

        {status === 'loading' && <div className="alert alert-info">Submitting...</div>}
        {status === 'succeeded' && <div className="alert alert-success">Student submitted successfully!</div>}
        {status === 'failed' && <div className="alert alert-danger">Submission failed. Try again.</div>}
      </form>
    </div>
  );
};

export default StudentForm;