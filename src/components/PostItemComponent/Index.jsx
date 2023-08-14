import React from "react";
import styles from "./Style.module.css";


const PostItemComponent = () => {
  return (
    <div className={styles.formGroup}>
      <div className={styles.postItem}>
        <button className={styles.postText}>Add new</button>
      </div>
      <div className={styles.searchBar}>
        <input className={styles.searchText} placeholder="Search name..." />
        <img src="images/Search-icon.svg" alt="" />
      </div>
    </div>
  );
};

export default PostItemComponent;
