import React, { useState } from 'react';
import '../../../src/index.css';
import Button from "../commonComponents/button";

const ACListingForm = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        brand: '',
        manufacturingYear: '',
        acType: '',
        dimensions: '',
        noOfAC: '',
        price: '',
        photos: [] // Store photo objects here
    });

    const acBrands = [
        'Voltas',
        'Hitachi',
        'O General',
        'Carrier',
        'Daikin',
        'LG',
        'Samsung',
        'Whirlpool',
        'Blue Star',
        'Panasonic'
    ];

    const acTypes = [
        'Split AC',
        'Window AC'
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handlePhotoChange = (e, index) => {
        const file = e.target.files[0];
        if (file) {
            const updatedPhotos = [...formData.photos];
            updatedPhotos[index] = URL.createObjectURL(file); // Create a preview URL for the image
            setFormData({
                ...formData,
                photos: updatedPhotos
            });
        }
    };

    const addPhotoField = () => {
        if (formData.photos.length < 5) {
            setFormData({
                ...formData,
                photos: [...formData.photos, null] // Add a placeholder for the new photo
            });
        }
    };

    const handleOwnerSelection = (owner) => {
        setFormData({
            ...formData,
            noOfAC: owner
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted with data:', formData);
        // Here you would typically send the data to your backend
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                {/* Title */}
                <div className="form-group">
                    <label className="form-label">Write Title</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        placeholder="Write Heading Here"
                        className="form-control"
                    />
                </div>

                {/* Description */}
                <div className="form-group">
                    <label className="form-label">Write Description</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Write Description Here"
                        className="form-control form-textarea"
                    />
                </div>

                <div className="grid-container">
                    {/* Brand Selection */}
                    <div className="form-group">
                        <label className="form-label">Select Brand</label>
                        <select
                            name="brand"
                            value={formData.brand}
                            onChange={handleChange}
                            className="select-dropdown"
                        >
                            <option value="">Select your AC Brand</option>
                            {acBrands.map((brand) => (
                                <option key={brand} value={brand}>{brand}</option>
                            ))}
                        </select>
                    </div>

                    {/* Manufacturing Year */}
                    <div className="form-group">
                        <label className="form-label">Enter Manufacturing Year</label>
                        <input
                            type="text"
                            name="manufacturingYear"
                            value={formData.manufacturingYear}
                            onChange={handleChange}
                            placeholder="Enter year"
                            className="form-control"
                        />
                    </div>
                </div>

                <div className="grid-container">
                    {/* AC Type Selection */}
                    <div className="form-group">
                        <label className="form-label">Select Type</label>
                        <select
                            name="acType"
                            value={formData.acType}
                            onChange={handleChange}
                            className="select-dropdown"
                        >
                            <option value="">Select your AC Type</option>
                            {acTypes.map((type) => (
                                <option key={type} value={type}>{type}</option>
                            ))}
                        </select>
                    </div>

                    {/* Dimensions */}
                    <div className="form-group">
                        <label className="form-label">Enter Dimensions</label>
                        <input
                            type="text"
                            name="dimensions"
                            value={formData.dimensions}
                            onChange={handleChange}
                            placeholder="Enter Dimensions of your AC"
                            className="form-control"
                        />
                    </div>
                </div>

                {/* Number of Owners */}
                <div className="form-group">
                    <label className="form-label">No. of AC (Select One Of Them):</label>
                    <div className="owner-buttons">
                        {['1', '2', '3', '4', '4+'].map((owner) => (
                            <button
                                key={owner}
                                type="button"
                                onClick={() => handleOwnerSelection(owner)}
                                className={`owner-button ${formData.noOfAC === owner ? 'owner-button-selected' : ''
                                    }`}
                            >
                                {owner}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Price */}
                <div className="form-group">
                    <label className="form-label">Set A Price</label>
                    <div className="price-input-container">
                        <span className="price-symbol">₹</span>
                        <input
                            type="number"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                            placeholder="0"
                            className={`form-control price-input ${formData.price ? 'filled' : ''}`}
                        />
                    </div>
                </div>

                {/* Photos */}
                <div className="form-group">
                    <label className="form-label">Add Up to 5 Photos of Your AC</label>
                    <div className="photos-container">
                        {formData.photos.map((photo, index) => (
                            <div key={index} className="photo-box">
                                {photo && (
                                    <img
                                        src={photo}
                                        alt={`Preview ${index + 1}`}
                                        className="photo-preview"
                                    />
                                )}
                                <input
                                    type="file"
                                    accept="image/*"
                                    className="file-input-hidden"
                                    id={`photo-${index}`}
                                    onChange={(e) => handlePhotoChange(e, index)}
                                />
                                <label htmlFor={`photo-${index}`}>Select</label>
                            </div>
                        ))}
                        {formData.photos.length < 5 && (
                            <button
                                type="button"
                                onClick={addPhotoField}
                                className="add-photo-box"
                            >
                                + Add
                            </button>
                        )}
                    </div>
                </div>

                {/* Submit Button */}
                <div className="form-group">
                    <Button text="Add your AC" className="default-button" />
                </div>
            </form>
        </div>
    );
};

export default ACListingForm;