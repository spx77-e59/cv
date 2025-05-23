import { useState } from 'react';
import "../styles/PersonalInfo.css";
import "../styles/form.css";
import "../styles/submitted.css";
import "../styles/preview.css";


const PersonalInfo = ({ isPreview }) => {

    const [PIForm, setPIForm] = useState({
        name: '',
        email: '',
        phone: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPIForm({
            ...PIForm,
            [name]: value
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    }
    const handleEdit = () => {
        setSubmitted(false);
    }
    return (
        <div className="personal-info-container">
            {isPreview ? (
                <div>
                    <p>Full Name: {PIForm.name}</p>
                    <p>Email: {PIForm.email}</p>
                    <p>Phone: {PIForm.phone}</p>
                </div>
            ) : submitted ? (
                <div>
                    <p>Full Name: {PIForm.name}</p>
                    <p>Email: {PIForm.email}</p>
                    <p>Phone: {PIForm.phone}</p>

                    <button className="btn-edit" onClick={handleEdit}>Edit</button>
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={PIForm.name}
                        onChange={handleChange}
                        placeholder="Full Name"
                        required
                    />
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={PIForm.email}
                        onChange={handleChange}
                        placeholder="Email"
                        required
                    />
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={PIForm.phone}
                        onChange={handleChange}
                        placeholder="Phone"
                        required
                    />

                    <button type="submit" className="btn-submit">Submit</button>
                </form>
            )}
        </div>

    );
}

export default PersonalInfo;