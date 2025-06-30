import React, { useState } from 'react'
import Form from './form/Form'
import View from './table/View'
import Header from './header/Header';
import Banner from './banner/Banner';
import Footer from './footer/Footer';


const App = () => {

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [diagnosis, setDiagnosis] = useState("");
  const [birthdate, setBirthDate] = useState("");
  const [contact, setContact] = useState("");
  const [update, setUpdate] = useState("");
  const [record, setRecord] = useState(JSON.parse(localStorage.getItem("users")) || []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, age, gender, diagnosis, birthdate, contact);

    if (!name || !age || !gender || !diagnosis || !birthdate || !contact) {
      alert("Please fill all the fields");
      return false;
    }

    if (update) {
      const updateRecord = record.map((data) => {
        return data.id === update
          ? { id: update, name, age, gender, diagnosis, birthdate, contact }
          : data;
      })
      setRecord(updateRecord);
      localStorage.setItem("users", JSON.stringify(updateRecord));
      setUpdate("");
    } else {
      const newRecord = [...record, { id: Math.floor(Math.random() * 199909), name, age, gender, diagnosis, birthdate, contact }]
      setRecord(newRecord);
      localStorage.setItem("users", JSON.stringify(newRecord));
    }
    setName("");
    setAge("");
    setGender("");
    setDiagnosis("");
    setBirthDate("");
    setContact("");
  }

  const handleUpdate = (id) => {
    const update = record.find((data) => data.id === id);
    setName(update.name);
    setAge(update.age);
    setGender(update.gender);
    setDiagnosis(update.diagnosis);
    setBirthDate(update.birthdate);
    setContact(update.contact);
    setUpdate(id);
  }

  const handleDelete = (id) => {
    const deleteData = record.filter(data => data.id !== id);
    setRecord(deleteData);
    localStorage.setItem("users", JSON.stringify(deleteData));
  }

  return (
    <>
      <Header />
      <Banner />
      <div className="main-container">
        <div className="left-panel">
          <Form
            name={name} setName={setName}
            age={age} setAge={setAge}
            gender={gender} setGender={setGender}
            diagnosis={diagnosis} setDiagnosis={setDiagnosis}
            contact={contact} setContact={setContact}
            birthdate={birthdate} setBirthDate={setBirthDate}
            update={update} handleSubmit={handleSubmit}
          />
        </div>
        <div className="right-panel">
          <View
            record={record}
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
          />
        </div>

      </div>
      <Footer />
    </>
  );
}
export default App
