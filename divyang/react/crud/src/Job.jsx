import React, { useState } from 'react';

const JobApplicationTracker = () => {
  const [candidateName, setCandidateName] = useState('');
  const [position, setPosition] = useState('');
  const [interviewScheduled, setInterviewScheduled] = useState(false);
  const [interviewDate, setInterviewDate] = useState('');
  const [status, setStatus] = useState('');
  const [applications, setApplications] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newApplication = {
      id: Date.now(),
      candidateName,
      position,
      interviewScheduled,
      interviewDate: interviewScheduled ? interviewDate : '',
      status,
    };

    setApplications([...applications, newApplication]);

    // Reset form
    setCandidateName('');
    setPosition('');
    setInterviewScheduled(false);
    setInterviewDate('');
    setStatus('');
  };

  const handleDelete = (id) => {
    setApplications(applications.filter((app) => app.id !== id));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Job Application Tracker (Divyang)</h2>
      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <div>
          <label>Candidate Name: </label>
          <input
            type="text"
            value={candidateName}
            onChange={(e) => setCandidateName(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Position Applied: </label>
          <select
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            required
          >
            <option value="">Select Position</option>
            <option value="Frontend Developer">Frontend Developer</option>
            <option value="Backend Developer">Backend Developer</option>
            <option value="HR Executive">HR Executive</option>
            <option value="UI/UX Designer">UI/UX Designer</option>
          </select>
        </div>

        <div>
          <label>Interview Scheduled? </label>
          <input
            type="checkbox"
            checked={interviewScheduled}
            onChange={(e) => setInterviewScheduled(e.target.checked)}
          />
        </div>

        {interviewScheduled && (
          <div>
            <label>Interview Date: </label>
            <input
              type="date"
              value={interviewDate}
              onChange={(e) => setInterviewDate(e.target.value)}
            />
          </div>
        )}

        <div>
          <label>Application Status: </label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            required
          >
            <option value="">Select Status</option>
            <option value="Pending">Pending</option>
            <option value="Shortlisted">Shortlisted</option>
            <option value="Interviewed">Interviewed</option>
            <option value="Rejected">Rejected</option>
            <option value="Selected">Selected</option>
          </select>
        </div>

        <button type="submit">Add Application</button>
      </form>

      <h3>Applications List</h3>
      {applications.length === 0 ? (
        <p>No applications added yet.</p>
      ) : (
        <table border="1" cellPadding="10" cellSpacing="0">
          <thead>
            <tr>
              <th>Candidate Name</th>
              <th>Position Applied</th>
              <th>Interview Scheduled</th>
              <th>Interview Date</th>
              <th>Application Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app) => (
              <tr key={app.id}>
                <td>{app.candidateName}</td>
                <td>{app.position}</td>
                <td>{app.interviewScheduled ? 'Yes' : 'No'}</td>
                <td>{app.interviewScheduled ? app.interviewDate : '-'}</td>
                <td>{app.status}</td>
                <td>
                  <button onClick={() => handleDelete(app.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default JobApplicationTracker;
