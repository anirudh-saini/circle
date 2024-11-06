import React from "react";
import styles from "./clam.module.scss";
import { link } from "../../data/Links";
export const Clam = () => {
    return (
        <div className={styles.claim}>
            <a href={link.contact} target="_blank" rel="noopener noreferrer">
                <img src="claim_logo.svg" alt="logo" />
                <p>Claim Your Free Strategy Call Now</p>
            </a>
        </div>
    );
};
