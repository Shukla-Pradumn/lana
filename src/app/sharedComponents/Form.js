import { useState } from 'react';
import styles from '../page.module.css';
import CrossIcon from './svgIcons/crossIcon';

export default function PrivateMeetingForm({
  setIsDrawerOpen,
  crossIcon,
  heading,
}) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneCode: '+971',
    phoneNumber: '',
    language: '',
    nationality: '',
    projectInterest: '',
    contactMethod: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log(formData);
  };
  const closeDrawer = (e) => {
    setIsDrawerOpen(false);
  };
  return (
    <form
      onSubmit={handleSubmit}
      style={{ maxWidth: '75%', margin: 'auto', marginTop: '112px' }}
    >
      <div className="d-flex justify-content-between align-items-center">
        <div
          className={`${styles.subHeading} text-center`}
          style={{ color: '#000', flex: 1 }}
        >
          {heading ? (
            <div className="formHeading ff-MrEavesModOTReg mb-4">{heading}</div>
          ) : (
            'Book Your'
          )}
        </div>
        {crossIcon && (
          <div
            className={heading ? 'mb-4 cr-pointer' : 'cr-pointer'}
            onClick={() => closeDrawer()}
          >
            <CrossIcon />
          </div>
        )}
      </div>

      {!heading && <h2 className="mt-2 h2 text-center">Private Meeting</h2>}
      <div style={{ display: 'flex', gap: '10px' }}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name*"
          value={formData.firstName}
          onChange={handleChange}
          required
          style={{ flex: 1 }}
          className="inputItem ff-MrEavesModOTReg para"
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name*"
          value={formData.lastName}
          onChange={handleChange}
          required
          style={{ flex: 1 }}
          className="inputItem ff-MrEavesModOTReg para"
        />
      </div>
      <input
        type="email"
        name="email"
        placeholder="Email Address*"
        value={formData.email}
        onChange={handleChange}
        required
        style={{ width: '100%', margin: '10px 0' }}
        className="inputItem ff-MrEavesModOTReg para"
      />
      <div style={{ display: 'flex', gap: '10px' }}>
        <select
          name="phoneCode"
          value={formData.phoneCode}
          onChange={handleChange}
          style={{ width: '80px' }}
          className="inputItem ff-MrEavesModOTReg para"
        >
          <option value="+971">+971</option>
          {/* Add other country codes here */}
        </select>
        <input
          type="tel"
          name="phoneNumber"
          placeholder="Phone Number"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
          style={{ flex: 1 }}
          className="inputItem ff-MrEavesModOTReg para"
        />
      </div>
      <select
        name="language"
        value={formData.language}
        onChange={handleChange}
        required
        style={{ width: '100%', margin: '10px 0' }}
        className="inputItem ff-MrEavesModOTReg para"
      >
        <option value="">Preferred Language</option>
        {/* Add options for languages here */}
        <option className="ff-MrEavesModOTReg para" value="english">
          English
        </option>
        <option className="ff-MrEavesModOTReg para" value="arabic">
          Arabic
        </option>
      </select>
      <select
        name="nationality"
        value={formData.nationality}
        onChange={handleChange}
        required
        style={{ width: '100%', margin: '10px 0' }}
        className="inputItem ff-MrEavesModOTReg para"
      >
        <option value="">Nationality</option>
        {/* Add options for nationalities here */}
        <option className="ff-MrEavesModOTReg para" value="uae">
          UAE
        </option>
        <option className="ff-MrEavesModOTReg para" value="other">
          Other
        </option>
      </select>
      <select
        name="projectInterest"
        value={formData.projectInterest}
        onChange={handleChange}
        required
        style={{ width: '100%', margin: '10px 0' }}
        className="inputItem ff-MrEavesModOTReg para"
      >
        <option value="">Project of Interest</option>
        {/* Add options for projects here */}
        <option className="ff-MrEavesModOTReg para" value="project1">
          Project 1
        </option>
        <option className="ff-MrEavesModOTReg para" value="project2">
          Project 2
        </option>
      </select>
      <select
        name="contactMethod"
        value={formData.contactMethod}
        onChange={handleChange}
        required
        style={{ width: '100%', margin: '10px 0' }}
        className="inputItem ff-MrEavesModOTReg para"
      >
        <option value="">Preferred Method of Contact</option>
        {/* Add options for contact methods here */}
        <option className="ff-MrEavesModOTReg para" value="email">
          Email
        </option>
        <option className="ff-MrEavesModOTReg para" value="phone">
          Phone
        </option>
      </select>
      <button
        type="submit"
        style={{
          width: '100%',
          padding: '10px',
          backgroundColor: '#000',
          color: '#fff',
        }}
        className="text-uppercase ff-MrEavesModOTReg para"
      >
        Submit Now
      </button>
    </form>
  );
}
