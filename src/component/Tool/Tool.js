import React from "react";
import styles from "./tool.module.scss";

export const Tool = () => {
    const tools = [
        "tool1.svg",
        "tool2.svg",
        "tool3.svg",
        "tool4.svg",
        "tool5.svg",
        "tool6.svg",
    ];

    return (
        <div className={`container ${styles.tool}`}>
            <div className={styles.heading}>
                <h3>Tools</h3>
            </div>

            <div className={styles.toolContainer}>
                {[...Array(3)].map((_, i) => (
                    <React.Fragment key={i}>
                        {tools.map((item, index) => (
                            <img
                                key={`${i}-${index}`}
                                src={item}
                                alt={`Tool ${index + 1}`}
                                className={styles.toolImage}
                            />
                        ))}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};
