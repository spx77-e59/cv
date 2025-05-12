import PersonalInfo from "./components/PersonalInfo"
import EducationBackground from "./components/EducationBackground"
import PracticalExperience from "./components/PracticalExperience"
import "./styles/App.css"
import "./styles/global.css"
import "./styles/preview.css"
import { useState } from "react"
import { v4 as uuidv4 } from "uuid";

function App() {

  const [isPreview, setisPreview] = useState(false);
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

  const handlePreview = () => {
    setisPreview(true);
  }

  const handleBack = () => {
    setisPreview(false);
  }

  const createPDF = () => {
    window.print();
  }

  return (
    <div className="container">
      <div>
        <h1>CV/ Resume Builder</h1>
        <h2>Fill in your details</h2>
        <h2>Personal Information</h2>
        <PersonalInfo isPreview={isPreview}></PersonalInfo>
        <h2>Education Background</h2>
        {EBForms.map(EBForm => (
          <EducationBackground key={EBForm.id} id={EBForm.id} onDelete={handleEBDelete} isPreview={isPreview}></EducationBackground>
        ))}
        {!isPreview && <button className="btn-add" onClick={createEB}>Add Another</button>}

        <h2>Practical Experience</h2>
        {PEForms.map(PEForm => (
          <PracticalExperience key={PEForm.id} id={PEForm.id} onDelete={handlePEDelete} isPreview={isPreview}></PracticalExperience>
        ))}
        {!isPreview && <button className="btn-add" onClick={createPE}>Add Another</button>}
      </div>

      {isPreview ? (
        <div>
          <button onClick={handleBack}>Back</button>
          <button onClick={createPDF}>pdf</button>
        </div>
      ) : (
        <button className="btn-preview" onClick={handlePreview}>Preview</button>
      )}
    </div>
  )
}

export default App
