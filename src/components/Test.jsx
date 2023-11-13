import React, { useState } from 'react';
import { updateUserInfo } from './authFunctions'; // Assuming you have this function available

const SettingsForm = () => {
  const [name, setName] = useState('');
  const [branch, setBranch] = useState('');
  const [section, setSection] = useState('');
  const [year, setYear] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Assuming you have the userId available in your component's state or context
    const userId = 'yourUserId'; // Replace with the actual user ID

    // Call the updateUserInfo function with the form values
    await updateUserInfo(userId, null, null, name, branch, section, year);

    // You can add additional logic here, such as redirecting the user or displaying a success message
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>

      <br />

      <label>
        Branch:
        <input type="text" value={branch} onChange={(e) => setBranch(e.target.value)} />
      </label>

      <br />

      <label>
        Section:
        <input type="text" value={section} onChange={(e) => setSection(e.target.value)} />
      </label>

      <br />

      <label>
        Year:
        <input type="text" value={year} onChange={(e) => setYear(e.target.value)} />
      </label>

      <br />

      <button type="submit">Update Profile</button>
    </form>
  );
};

export default SettingsForm;
