import React from "react";
import styles from "./Style.module.css";

function ModalAddComponent(onClose) {
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
              <div><img src="./images/Upload-Icon.svg" alt="" /></div>
              <div className={styles.uploadImg}>Upload image</div>
            </div>
            <div className={styles.formName}><input type="text" /></div>
            <div className={styles.formDes}><input type="text" /></div>
            <div className={styles.formUpload}>
              <div><img src="./images/Upload-Icon.svg" alt="" /></div>
              <div className={styles.uploadImg}>Upload image</div>
            </div>
          </div>
        </div>
        <div className={styles.Line}></div>
        <div className={styles.modalButton}>
          <button class={styles.btnSave}>
            <div class={styles.btnTitle}>Delete</div>
            </button>
            <button className={styles.btnCancel} onClick={onClose}>
            <div className={styles.btnTitle}>Cancel</div>
          </button>
        </div>
      </div>
    </div>
  );
}
export default ModalAddComponent;  
