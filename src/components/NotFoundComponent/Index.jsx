import React from "react";
import styles from "./Style.module.css";

const NotFound = () => {
  return (
    <div>
      <div className={styles.notFound}>
        <img src="./images/NotFound-Img.svg" alt="" />
      </div>
      <div className={styles.notFoundTitle}>No Results Found</div>
      <div className={styles.notFoundSubTitle}>
        No content matched your criteria. Try searching for something else.
      </div>
    </div>
  );
};

export default NotFound;
