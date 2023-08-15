import styles from "./Style.module.css";
import React, { useState } from "react";

const PostItemComponent = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    userAvatar: "",
    userName: "",
    date: "",
    description: "",
    imageURL: "",
  });
  const [items, setItems] = useState([]);

  const handleAddNewClick = () => {
    setShowForm(true);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    setShowForm(false);
    setItems((prevItems) => [...prevItems, formData]);
    setFormData({
      userAvatar: "",
      userName: "",
      date: "",
      description: "",
      imageURL: "",
    });
  };

  return (
    <div className={styles.formGroup}>
      <div className={styles.postItem}>
        <button className={styles.postText} onClick={handleAddNewClick}>
          Add new
        </button>
      </div>
      <div className={styles.searchBar}>
        <input className={styles.searchText} placeholder="Search name..." />
        <img src="images/Search-icon.svg" alt="" />
      </div>
      {showForm && (
        <div className={styles.Card}>
          <div className={styles.userInfo}>
            <div className={styles.userAvatar}>
              <input
                className={styles.imageInput}
                name="userURL"
                value={formData.userURL}
                onChange={handleInputChange}
                placeholder="User URL"
              />
            </div>
            <div className={styles.inFormation}>
              <input
                className={styles.userName}
                name="userName"
                value={formData.userName}
                onChange={handleInputChange}
                placeholder="User Name"
              />
              <input
                className={styles.Date}
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                placeholder="Date"
              />
            </div>
          </div>
          <div className={styles.desScription}>
            <textarea
              className={styles.descriptionInput}
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Description"
            />
          </div>
          <div className={styles.postImage}>
            <input
              className={styles.imageInput}
              name="imageURL"
              value={formData.imageURL}
              onChange={handleInputChange}
              placeholder="Image URL"
            />
          </div>
          <button className={styles.addButton} onClick={handleSubmit}>
            Add Item
          </button>
        </div>
      )}
      {/* {items.map((item, index) => (
        <div key={index} className={styles.Card}>
          <div className={styles.userInfo}>
            <div className={styles.userAvatar}>
              <img src={item.userAvatar} alt="" />
            </div>
            <div className={styles.inFormation}>
              <div className={styles.userName}>{item.userName}</div>
              <div className={styles.Date}>{item.date}</div>
            </div>
          </div>
          <div className={styles.desScription}>{item.description}</div>
          <div className={styles.postImage}>
            <img src={item.imageURL} alt="" />
          </div>
        </div>
      ))} */}
    </div>
  );
};

export default PostItemComponent;

// const PostItemComponent = () => {
//   return (
//     <div className={styles.formGroup}>
//       <div className={styles.postItem}>
//         <button className={styles.postText}>Add new</button>
//       </div>
//       <div className={styles.searchBar}>
//         <input className={styles.searchText} placeholder="Search name..." />
//         <img src="images/Search-icon.svg" alt="" />
//       </div>
//     </div>
//   );
// };

// export default PostItemComponent;
