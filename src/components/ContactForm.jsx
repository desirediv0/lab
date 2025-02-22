"use client";
import { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        consent: false
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Add your form submission logic here
            console.log('Form submitted:', formData);
            // Reset form after submission
            setFormData({ name: '', email: '', message: '', consent: false });
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    return (
        <form onSubmit={handleSubmit} className="mt-6 bg-grey-100 rounded-3xl p-8">
            <div>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="w-full p-3 border border-gray-300 rounded-md mb-4"
                    required
                />
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className="w-full p-3 border border-gray-300 rounded-md"
                    required
                />
            </div>

            <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="How can we help you? Feel free to get in touch!"
                className="w-full h-32 mt-4 p-3 border border-gray-300 rounded-md"
                required
            ></textarea>

            <div className="flex items-center mt-4">
                <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    className="w-5 h-5 text-blue-600 border-gray-300 rounded"
                    required
                />
                <label htmlFor="consent" className="ml-2 text-gray-600 text-sm">
                    I agree that my submitted data is being collected and stored.
                </label>
            </div>

            <button
                type="submit"
                className="mt-6 bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-md transition duration-300 uppercase"
            >
                Get in Touch
            </button>
        </form>
    );
};

export default ContactForm;
