import React, { useState } from "react";
import styles from "./style.module.css";
import ModalAdd from "../ModalAdd";
import ModalDelete from "../ModalDelete";

const SocialCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleUpdateClick = () => {
    setIsModalOpen(true);
  };

  const handleDeleteClick = () => {
    setShowDeleteModal(true);
  };

  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
  };
  return (
    <div className={styles.cardsContent}>
      <div className={styles.Card}>
        <div className={styles.userBar}>
          <div className={styles.userInfor}>
            <div className={styles.userAvatar}>
              <img src="./images/User-PhuNguyen.svg" alt="" />
            </div>
            <div className={styles.inFormation}>
              <div className={styles.userName}>Phu Nguyen</div>
              <div className={styles.Date}>14/08/2023</div>
            </div>
          </div>
          <div className={styles.iconGroup}>
            <img
              src="./images/Update-Icon.svg"
              alt=""
              onClick={handleUpdateClick}
            />
            <img
              src="./images/Delete.Icon.svg"
              alt=""
              onClick={handleDeleteClick}
            />
          </div>
        </div>
        <div className={styles.desScription}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </div>
        <div className={styles.postImage}>
          <img src="./images/PhuNguyen-Img.svg" alt="" />
        </div>
      </div>
      <div className={styles.Card}>
        <div className={styles.userBar}>
          <div className={styles.userInfor}>
            <div className={styles.userAvatar}>
              <img src="./images/User-Varen.svg" alt="" />
            </div>
            <div className={styles.inFormation}>
              <div className={styles.userName}>Varen</div>
              <div className={styles.Date}>14/08/2023</div>
            </div>
          </div>
          <div className={styles.iconGroup}>
            <img
              src="./images/Update-Icon.svg"
              alt=""
              onClick={handleUpdateClick}
            />
            <img
              src="./images/Delete.Icon.svg"
              alt=""
              onClick={handleDeleteClick}
            />
          </div>
        </div>
        <div className={styles.desScription}>
          Lập một form để tạo mới 1 Social Card , trong card sẽ chứa các thông
          tin: Avatar, Name, Description, Image
        </div>
        <div className={styles.postImage}>
          <img src="./images/Varen-Img.svg" alt="" />
        </div>
      </div>
      <div className={styles.Card}>
        <div className={styles.userBar}>
          <div className={styles.userInfor}>
            <div className={styles.userAvatar}>
              <img src="./images/User-Mio.svg" alt="" />
            </div>
            <div className={styles.inFormation}>
              <div className={styles.userName}>Mio</div>
              <div className={styles.Date}>14/08/2023</div>
            </div>
          </div>
          <div className={styles.iconGroup}>
            <img
              src="./images/Update-Icon.svg"
              alt=""
              onClick={handleUpdateClick}
            />
            <img
              src="./images/Delete.Icon.svg"
              alt=""
              onClick={handleDeleteClick}
            />
          </div>
        </div>
        <div className={styles.desScription}>
          Next, you select one property. It doesn’t matter which one you choose,
          yet it’s best to pick one that seems totally unrelated to your
          challenge.
        </div>
        <div className={styles.postImage}>
          <img src="./images/Mio-Img.svg" alt="" />
        </div>
      </div>
      {isModalOpen && <ModalAdd onClose={() => setIsModalOpen(false)} />}
      {showDeleteModal && <ModalDelete onClose={handleCloseDeleteModal} />}
    </div>
  );
};

export default SocialCard;
