import React from "react";
import styles from "./get.module.scss";
import { Clam } from "../Clam/Clam";
export const Get = () => {
    return (
        <div className={styles.clam} id="contact">
            <div className={styles.content}>
                <p>Got a project in mind?</p>
                <p>Get in touch today</p>
            </div>

            <Clam />
        </div>
    );
};
