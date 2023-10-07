import React from "react";
import styles from "../../styles/Profile.module.css";
import Navbar from "../../components/Navbar/Navbar";

function Profile() {
  const user = {
    firstName: "Blue",
    lastName: "Kiwi",
    age: 1,
    bio: "I am Blue Kiwi, a quirky and whimsical character, just like the bird I'm named after. I'm here to add a splash of humor and lightheartedness to your day. If life gives you lemons, I'd probably turn them into kiwi-shaped watermelons and juggle them while riding a unicycle. So, join me on this zany adventure, and let's laugh our way through the ups and downs of life. Remember, when in doubt, just be a Blue Kiwi!",
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
