import React, { useState } from 'react';
import Button from '../commonComponents/button'; // Fixed the path to the Button component

const FormCard = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        address: '',
        service: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data Submitted:', formData);
    };

    return (
        <div className="form-card">
            <form onSubmit={handleSubmit}>
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="fullName">Full Name<span>*</span></label>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            placeholder="Eg: Rohan Singh"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email ID<span>*</span></label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Eg: rohansingh12@gmail.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone Number<span>*</span></label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder="+91 93xxxx xxxx"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="service">Choose Service<span>*</span></label>
                        <select
                            id="service"
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            required
                        >
                            <option value="" disabled>Eg: AC Cleaning</option>
                            <option value="AC Cleaning">AC Cleaning</option>
                            <option value="AC Repair">AC Repair</option>
                            <option value="AC Installation">AC Installation</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Location/Address<span>*</span></label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            placeholder="Hno.2 ABC Colony, Delhi"
                            value={formData.address}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className="form-submit">
                    <Button text="Book Now" className="default-button" />
                </div>
            </form>
        </div>
    );
};

export default FormCard;