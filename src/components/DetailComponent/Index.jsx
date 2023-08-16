import React from "react";
import styles from "./Style.module.css";

const SocialCardDetail = () => {
  return (
    <div className={styles.Content}>
      <div className={styles.Title}>SOCIAL CARD DETAIL</div>
      <div className={styles.userInfo}>
        <div className={styles.userAvatar}>
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/008/974/656/small/cute-kid-girl-holding-bubble-milk-tea-hand-drawn-cartoon-character-illustration-vector.jpg"
            alt=""
          />
        </div>
        <div className={styles.userText}>
          <div className={styles.userName}>Binance</div>
          <div className={styles.Date}>22/04/2021 (day create)</div>
        </div>
      </div>
      <div className={styles.Descript}>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more- or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).
      </div>
      <div className={styles.Image}>
        <img src="./images/Rectangle 195.png" alt="" />
      </div>
      <div className={styles.Follow}>
        <div className={styles.Heart}>
          <img src="./images/Heart-Icon.svg" alt="" />
          <div className={styles.Count}>2</div>
        </div>
        <div className={styles.Meseges}>
          <img src="./images/Message-Icon.svg" alt="" />
          <div className={styles.Count}>2</div>
        </div>
      </div>
      <div className={styles.Line}></div>
      <div className={styles.Comments}>
        <div className={styles.commentDate}>22/04/2021 (day create)</div>
        <div className={styles.commentContent}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more- or-less normal distribution
          of letters, as opposed to using 'Content here, content here', making
          it look like readable English.
        </div>
      </div>
      <div className={styles.Comments}>
        <div className={styles.commentDate}>22/04/2021 (day create)</div>
        <div className={styles.commentContent}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more- or-less normal distribution
          of letters, as opposed to using 'Content here, content here', making
          it look like readable English.
        </div>
      </div>
      <div className={styles.Line}></div>
      <div className={styles.formComment}>
        <div className={styles.formTitle}>Post a new comment</div>
        <div className={styles.formContent}>
          <input
            className={styles.formText}
            type="textarea"
            placeholder="Add comment"
          />
          <div>
            <button>Post</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialCardDetail;
