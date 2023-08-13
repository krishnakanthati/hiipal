import React from "react";
import styles from "../../styles/Profile.module.css";
import Navbar from "../../components/Navbar/Navbar";

function Profile() {
  const user = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
    bio: "Frontend Developer passionate about creating user-friendly web experiences.",
    profileImage:
      "https://th.bing.com/th/id/OIP.CtJX8JsV6P3lFVNdGCAyBQHaHa?pid=ImgDet&rs=1", // Replace with actual image URL
  };
  return (
    <>
      <Navbar />
      <div className="main-container">
        <div className={styles["profile-div"]}>
          <img
            src={user.profileImage}
            alt={`${user.firstName} ${user.lastName}`}
            className={styles["profile-image"]}
          />
          <div className={styles["profile-info"]}>
            <h1>{`${user.firstName} ${user.lastName}`}</h1>
            <p>{user.age} years old</p>
            <p>{user.bio}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
