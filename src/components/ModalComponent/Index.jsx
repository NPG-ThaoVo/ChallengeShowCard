import React from "react";
import styles from "./Style.module.css";

function ModalComponent() {
  return (
    <div className={styles.Modal}>
      <div className={styles.modalContent}>
        <div className={styles.modalTitle}>Add new card</div>
        <div className={styles.modalCard}>
          <div className={styles.Title}>
            <div className={styles.modalAvatar}>
              Avartar
              <div className={styles.Icon}>*</div>
            </div>
            <div className={styles.modalName}>
              Name
              <div className={styles.Icon}>*</div>
            </div>
            <div className={styles.modalDes}>
              Description
              <div className={styles.Icon}>*</div>
            </div>
            <div className={styles.modalImg}>Image</div>
          </div>
          <div className={styles.formGroups}>
            <div className={styles.formUpload}>
              <div><img src="./images/Upload-icon.svg" alt="" /></div>
              <div className={styles.uploadImg}>Upload image</div>
            </div>
            <div className={styles.formName}><input type="text" /></div>
            <div className={styles.formDes}><input type="text" /></div>
            <div className={styles.formUpload}>
              <div><img src="./images/Upload-icon.svg" alt="" /></div>
              <div className={styles.uploadImg}>Upload image</div>
            </div>
          </div>
        </div>
        <div className={styles.Line}></div>
        <div className={styles.modalButton}>
          <div className={styles.btnSave}>
            <div className={styles.btnTitle}>Save</div>
          </div>
          <div className={styles.btnCancel}>
            <div className={styles.btnTitle}>Cancel</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalComponent;
