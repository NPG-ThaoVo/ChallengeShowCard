import React from "react";
import styles from "./Style.module.css";

function ModalAddComponent() {
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
          <button class={styles.btnSave}>
            <div class={styles.btnTitle}>Delete</div>
            </button>
            <button class={styles.btnCancel}>
              <div class={styles.btnTitle}>Cancel</div>
            </button>
        </div>
      </div>
    </div>
  );
}

export default ModalAddComponent;

// function ModalDeleteComponent() {
//   return (
//     <div className={styles.Modal}>
//       <div className={styles.modalContent}>
//         <div className={styles.modalText}>Your about to delete a item</div>
//         <div className={styles.modalDelete}>
//           <img src="./images/Modal-Delete.svg" alt="" />
//         </div>
//         <div className={styles.subTitle}>This will delete your item form list </div>
//         <div className={styles.subTitle}> Are you sure?</div>
//         <div className={styles.Line}></div>
//         <div className={styles.modalButton}>
//           <button class={styles.btnDelete}>
//             <div class={styles.btnTitle}>Delete</div>
//           </button>
//           <button class={styles.btnCancel}>
//             <div class={styles.btnTitle}>Cancel</div>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ModalDeleteComponent;
