import React, { useState } from 'react';

const Modal = ({ isOpen, onClose ,setData,keys }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone_number: '',
    website: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setData((prevData) =>
    prevData.map((item) => (item.keys === keys ? { ...item, ...formData } : item))
  );
    onClose();
  };

  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-container">
        <h2> Bacis Modal</h2>
        <hr />
        <form onSubmit={handleSubmit}>
          <div className='name_div'>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className='email_div'>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className='phone_div'>
            <label>Phone:</label>
            <input
              type="number"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
              required
            />
          </div>
          <div className='website_div'>
            <label>Website:</label>
            <input
              type="url"
              name="website"
              value={formData.website}
              onChange={handleChange}
              required
            />
          </div>
          <hr />
          <div className='button_div'>
            <button className='cancel' onClick={onClose}>Cancle </button>
          <button className='submit' type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
