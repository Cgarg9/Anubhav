import React, { useState } from 'react';
import ProfileInfo from './ProfileInfo.js';
import EditProfileForm from './EditProfileForm.js';
import styles from './ProfilePage.module.css'; // Import CSS module

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    fullName: 'Ashit Joshi',
    email: 'akshitjoshi.com',
    phone: '123-456-7890',
    jobDescription: 'Student at PEC',
    dob: '3-11-2003',
    city: 'Chandigarh',
    password: 'examplepassword',
    photoUrl: 'https://via.placeholder.com/150', // Placeholder image URL
  });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  const handleSubmitEdit = (updatedUserData) => {
    setUserData(updatedUserData);
    setIsEditing(false);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Profile</h1>
      {isEditing ? (
        <EditProfileForm userData={userData} onCancelEdit={handleCancelEdit} onSubmitEdit={handleSubmitEdit} />
      ) : (
        <ProfileInfo userData={userData} onEditClick={handleEditClick} />
      )}
    </div>
  );
};

export default ProfilePage;
