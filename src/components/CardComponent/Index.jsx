import React from "react";
import styles from "./Style.module.css";

const SocialCard = () => {
    return (
        <div className={styles.cardsContent}>
            <div className={styles.Card}>
                <div className={styles.userInfo}>
                    <div className={styles.userAvatar}><img src="./images/User-PhuNguyen.svg" alt="" /></div>
                    <div className={styles.inFormation}>
                        <div className={styles.userName}>Phu Nguyen</div>
                        <div className={styles.Date}>14/08/2023</div>
                    </div>
                    <div className={styles.iconGroup}>
                        <img src="./images/Update-icon.svg" alt="" />
                        <img src="./images/Delete.icon.svg" alt="" />
                    </div>
                </div>
                <div className={styles.desScription}>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                </div>
                <div className={styles.postImage}>
                    <img src="./images/PhuNguyen-Img.svg" alt="" />
                </div>
            </div>
            <div className={styles.Card}>
                <div className={styles.userInfo}>
                    <div className={styles.userAvatar}><img src="./images/User-Varen.svg" alt="" /></div>
                    <div className={styles.inFormation}>
                        <div className={styles.userName}>Varen</div>
                        <div className={styles.Date}>14/08/2023</div>
                    </div>
                    <div className={styles.iconGroup}>
                        <img src="./images/Update-icon.svg" alt="" />
                        <img src="./images/Delete.icon.svg" alt="" />
                    </div>
                </div>
                <div className={styles.desScription}>
                Lập một form để tạo mới 1 Social Card , trong card sẽ chứa các thông tin: Avatar, Name, Description, Image
                </div>
                <div className={styles.postImage}>
                    <img src="./images/Varen-Img.svg" alt="" />
                </div>
            </div>
            <div className={styles.Card}>
                <div className={styles.userInfo}>
                    <div className={styles.userAvatar}><img src="./images/User-Mio.svg" alt="" /></div>
                    <div className={styles.inFormation}>
                        <div className={styles.userName}>Mio</div>
                        <div className={styles.Date}>14/08/2023</div>
                    </div>
                    <div className={styles.iconGroup}>
                        <img src="./images/Update-icon.svg" alt="" />
                        <img src="./images/Delete.icon.svg" alt="" />
                    </div>
                </div>
                <div className={styles.desScription}>
                Next, you select one property. It doesn’t matter which one you choose, yet it’s best to pick one that seems totally unrelated to your challenge.
                </div>
                <div className={styles.postImage}>
                    <img src="./images/Mio-Img.svg" alt="" />
                </div>
            </div>
            <div className={styles.Card}>
                <div className={styles.userInfo}>
                    <div className={styles.userAvatar}><img src="./images/User-PhuNguyen.svg" alt="" /></div>
                    <div className={styles.inFormation}>
                        <div className={styles.userName}>Phu Nguyen</div>
                        <div className={styles.Date}>14/08/2023</div>
                    </div>
                    <div className={styles.iconGroup}>
                        <img src="./images/Update-icon.svg" alt="" />
                        <img src="./images/Delete.icon.svg" alt="" />
                    </div>
                </div>
                <div className={styles.desScription}>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                </div>
                <div className={styles.postImage}>
                    <img src="./images/PhuNguyen-Img.svg" alt="" />
                </div>
            </div>
            
        </div>
    );
}

export default SocialCard;