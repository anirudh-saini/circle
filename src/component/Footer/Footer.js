import React from "react";
import {
    faFacebookF,
    // faXTwitter,
    faWhatsapp,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./footer.module.scss";
import { link } from "../../data/Links";
export const Footer = () => {
    return (
        <div className={` ${styles.footer}`}>
            <div className={styles.carousel}>
                <p>Closing the loop on digital solutions</p>
                <p>Closing the loop on digital solutions</p>
                <p>Closing the loop on digital solutions</p>
            </div>
            <div className={`container ${styles.content}`}>
                <div className={styles.para}>
                    <p>Circle Digital Solutions 2024</p>
                </div>
                <div className={styles.social}>
                    <a
                        href={link.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                    {/* <a href={link.x} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faXTwitter} />
                    </a> */}
                    <a
                        href={link.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={faWhatsapp} />
                    </a>
                    <a
                        href={link.insta}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                </div>
            </div>
        </div>
    );
};
