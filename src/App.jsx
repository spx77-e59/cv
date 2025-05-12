import PersonalInfo from "./components/PersonalInfo"
import EducationBackground from "./components/EducationBackground"
import PracticalExperience from "./components/PracticalExperience"
import "./App.css"
import { useState } from "react"
import { v4 as uuidv4 } from "uuid";

function App() {

  const [EBForms, setEBForms] = useState([{ id: uuidv4() }]);
  const [PEForms, setPEForms] = useState([{ id: uuidv4() }]);

  const createEB = () => {
    setEBForms(prev => [...prev, { id: uuidv4() }])
  }

  const createPE = () => {
    setPEForms(prev => [...prev, { id: uuidv4() }])
  }

  const handleEBDelete = (id) => {
    setEBForms(EBForms.filter(EBForm => EBForm.id !== id))
  }

  const handlePEDelete = (id) => {
    setPEForms(PEForms.filter(PEForm => PEForm.id !== id))
  }

  return (
    <>
      <div className="App">
        <h1>CV/ Resume Builder</h1>
        <h2>Fill in your details</h2>
        <h2>Personal Information</h2>
        <PersonalInfo></PersonalInfo>
        <h2>Education Background</h2>
        {EBForms.map(EBForm => (
          <EducationBackground key={EBForm.id} id={EBForm.id} onDelete={handleEBDelete}></EducationBackground>
        ))}

        <button onClick={createEB}>Add Another</button>
        <h2>Practical Experience</h2>
        {PEForms.map(PEForm => (
          <PracticalExperience key={PEForm.id} id={PEForm.id} onDelete={handlePEDelete}></PracticalExperience>
        ))}
        <button onClick={createPE}>Add Another</button>
      </div>
    </>
  )
}

export default App
