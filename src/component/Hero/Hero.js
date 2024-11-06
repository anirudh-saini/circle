import React from "react";
import styles from "./hero.module.scss";
import { Clam } from "../Clam/Clam";
export const Hero = () => {
    return (
        <div className={styles.hero}>
            <div className={styles.heading}>
                <h1>
                    Create a Circle of Customers Ready to Buy with a
                    <span> High-Converting</span> Website
                </h1>
            </div>
            <div className={styles.sub_heading}>
                <p>
                    Expertly crafted design, copy, and development that turns
                    <span>
                        &nbsp;visitors into loyal customers and drives sales
                        with ease.
                    </span>
                </p>
            </div>
            <Clam />
            <div className={styles.fee}>
                <p>
                    No hidden fees. No long-term commitments. Just clear,
                    reliable results.
                </p>
            </div>
        </div>
    );
};
