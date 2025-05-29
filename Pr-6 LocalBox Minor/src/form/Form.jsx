import './Form.css';

const Form = ({ name, setName, age, setAge, gender, setGender, diagnosis, setDiagnosis, contact, setContact, birthdate, setBirthDate, update, handleSubmit }) => {
  return (
    <div className="form-container">
      <h2>{update ? "Update Patient" : "Add New Patient"}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Patient Name</label>
          <input type="text" placeholder='Enter Your Name' value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Age</label>
          <input type="number" placeholder='Enter Your Age' value={age} onChange={(e) => setAge(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Gender</label>
          <div className="radio-group">
            <label><input type="radio" checked={gender === "male"} value="male" onChange={(e) => setGender(e.target.value)} /> Male</label>
            <label><input type="radio" checked={gender === "female"} value="female" onChange={(e) => setGender(e.target.value)} /> Female</label>
          </div>
        </div>
        <div className="form-group">
          <label>Diagnosis</label>
          <input type="text" value={diagnosis} onChange={(e) => setDiagnosis(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Birth Date</label>
          <input type="date" value={birthdate} onChange={(e) => setBirthDate(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Contact</label>
          <input type="number" value={contact} onChange={(e) => setContact(e.target.value)} />
        </div>
        <button type="submit" className="submit-btn">
          {update ? "Update" : "Add"}
        </button>
      </form>
    </div>
  );
};

export default Form;
