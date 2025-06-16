import { useState } from "react";
import "./Popup.css";

function Popup({ handleCancleBtn }) {
    const [formData, setFormData] = useState({
        name: "",
        weight: "",
        age: "",
        email: "",
        services: [],
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === "checkbox") {
            let updatedServices = [...formData.services];
            if (checked) {
                updatedServices.push(value);
            } else {
                updatedServices = updatedServices.filter(service => service !== value);
            }
            setFormData(prev => ({ ...prev, services: updatedServices }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    const validateField = (name, value) => {
        let message = "";

        if (!value) {
            message = "This field is required";
        } else if (name === "name" && /\d/.test(value)) {
            message = "Name cannot contain numbers";
        }

        setErrors(prev => ({ ...prev, [name]: message }));
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        validateField(name, value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        Object.entries(formData).forEach(([key, value]) => {
            if (key === "services") {
                if (value.length === 0) {
                    newErrors.services = "Please select at least one service.";
                }
            } else if (!value) {
                newErrors[key] = "This field is required";
            } else if (key === "name" && /\d/.test(value)) {
                newErrors.name = "Name cannot contain numbers";
            }
        });

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            alert("Form submitted successfully!");
            handleCancleBtn();
        }
    };

    return (
        <div className="overlay">
            <div className="popup">
                <h2>Join Us</h2>

                <p>
                    Start your journey with us today!<br />
                    Sign up now and become part of an inspiring community that shares your passion and ambition.<br />
                    Don’t miss the chance — your first step begins here.
                </p>

                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Enter Your Name"
                    />
                    {errors.name && <div className="error">{errors.name}</div>}

                    <label htmlFor="weight">Weight</label>
                    <input
                        type="number"
                        id="weight"
                        name="weight"
                        value={formData.weight}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Enter Your Weight"
                    />
                    {errors.weight && <div className="error">{errors.weight}</div>}

                    <label htmlFor="age">Age</label>
                    <input
                        type="number"
                        id="age"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Enter Your Age"
                    />
                    {errors.age && <div className="error">{errors.age}</div>}

                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Enter Your Email"
                    />
                    {errors.email && <div className="error">{errors.email}</div>}

                    <fieldset>
                        <legend>Choose at least one service:</legend>
                        <label>
                            <input
                                type="checkbox"
                                name="services"
                                value="resistance-training"
                                checked={formData.services.includes("resistance-training")}
                                onChange={handleChange}
                            />
                            Resistance Training Offer
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="services"
                                value="fitness-training"
                                checked={formData.services.includes("fitness-training")}
                                onChange={handleChange}
                            />
                            Fitness Training
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="services"
                                value="personal-trainer"
                                checked={formData.services.includes("personal-trainer")}
                                onChange={handleChange}
                            />
                            Personal Trainer
                        </label>
                        {errors.services && <div className="error">{errors.services}</div>}
                    </fieldset>

                    <input className="submit" type="submit" value="Send" />
                </form>
                <button onClick={handleCancleBtn}>Cancel</button>
            </div>
        </div>
    );
}

export default Popup;
