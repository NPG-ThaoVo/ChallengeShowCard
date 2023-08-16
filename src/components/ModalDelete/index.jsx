import React from "react";
import styles from "./style.module.css";

function ModalDeleteComponent(onClose) {
  return (
    <div className={styles.Modal}>
      <div className={styles.modalContent}>
        <div className={styles.modalText}>Your about to delete a item</div>
        <div className={styles.modalDelete}>
          <img src="./images/Modal-Delete.svg" alt="" />
        </div>
        <div className={styles.subTitle}>This will delete your item form list </div>
        <div className={styles.subTitle}> Are you sure?</div>
        <div className={styles.Line}></div>
        <div className={styles.modalButton}>
          <button class={styles.btnDelete}>
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

export default ModalDeleteComponent;  
