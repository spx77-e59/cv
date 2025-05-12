import { useState } from "react";
import "../styles/EducationBackground.css";
import "../styles/form.css";
import "../styles/submitted.css";
import "../styles/preview.css";

const EducationBackground = ({ id, onDelete, isPreview }) => {
    const [EBForm, setEBForm] = useState({
        institution: "",
        study: "",
        startDate: "",
        endDate: "",
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEBForm({
            ...EBForm,
            [name]: value,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    }

    const handleEdit = (e) => {
        setSubmitted(false);
    }

    return (
        <div>
            {isPreview ? (
                <div>
                    <p>Institution: {EBForm.institution}</p>
                    <p>Area of Study: {EBForm.study}</p>
                    <p>Start Date: {EBForm.startDate}</p>
                    <p>End Date: {EBForm.endDate}</p>
                </div>
            ) : submitted ? (
                <div>
                    <p>Institution: {EBForm.institution}</p>
                    <p>Area of Study: {EBForm.study}</p>
                    <p>Start Date: {EBForm.startDate}</p>
                    <p>End Date: {EBForm.endDate}</p>
                    <button onClick={handleEdit}>Edit</button>
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <input type="text" id="institution" name="institution" value={EBForm.institution} onChange={handleChange} placeholder="Institution" />

                    <input type="text" id="study" name="study" value={EBForm.study} onChange={handleChange} placeholder="Area of study" />

                    <label htmlFor="startDate"></label>
                    <input type="date" id="startDate" name="startDate" value={EBForm.startDate} onChange={handleChange} />

                    <label htmlFor="endDate"></label>
                    <input type="date" id="endDate" name="endDate" value={EBForm.endDate} onChange={handleChange} />

                    <button type="submit">Submit</button>
                </form>
            )}
            {!isPreview && <button onClick={() => onDelete(id)}>Delete</button>}
        </div>
    );
}

export default EducationBackground;