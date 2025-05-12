import { useState } from "react";
import "../styles/PracticalExperience.css";
import "../styles/form.css";
import "../styles/submitted.css";
import "../styles/preview.css";

const PracticalExperience = ({ id, onDelete, isPreview }) => {

    const [PEForm, setPEForm] = useState({
        company: "",
        position: "",
        responsibilities: "",
        startDate: "",
        endDate: "",
    });

    const [submitted, setSubmitted] = useState(false);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setPEForm({
            ...PEForm,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    }

    const handleEdit = (e) => {
        setSubmitted(false);
    }

    return (
        <div className="practical-experience-container">
  {isPreview ? (
    <div>
      <p>Company: {PEForm.company}</p>
      <p>Position: {PEForm.position}</p>
      <p>Responsibilities: {PEForm.responsibilities}</p>
      <p>Start Date: {PEForm.startDate}</p>
      <p>End Date: {PEForm.endDate}</p>
    </div>
  ) : submitted ? (
    <div>
      <p>Company: {PEForm.company}</p>
      <p>Position: {PEForm.position}</p>
      <p>Responsibilities: {PEForm.responsibilities}</p>
      <p>Start Date: {PEForm.startDate}</p>
      <p>End Date: {PEForm.endDate}</p>
      <button className="btn-edit" onClick={handleEdit}>Edit</button>
    </div>
  ) : (
    <form onSubmit={handleSubmit}>
      <input type="text" id="company" name="company" value={PEForm.company} onChange={handleChange} placeholder="Company" />
      <input type="text" id="position" name="position" value={PEForm.position} onChange={handleChange} placeholder="Position" />
      <textarea name="responsibilities" id="responsibilities" value={PEForm.responsibilities} onChange={handleChange} placeholder="Responsibilities"></textarea>
      <div className="date">
        <label htmlFor="startDate">Start Date</label>
        <input type="date" id="startDate" name="startDate" value={PEForm.startDate} onChange={handleChange} />
      </div>
      <div className="date">
        <label htmlFor="endDate">End Date</label>
        <input type="date" id="endDate" name="endDate" value={PEForm.endDate} onChange={handleChange} />
      </div>
      <button type="submit" className="btn-submit">Submit</button>
    </form>
  )}
  {!isPreview && <button className="btn-delete" onClick={() => onDelete(id)}>Delete</button>}
</div>

    );
}

export default PracticalExperience;