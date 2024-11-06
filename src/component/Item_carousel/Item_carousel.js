import React from "react";
import styles from "./item_carousel.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export const Item_carousel = () => {
    // Define an object with unique values for each column
    const carouselContent = {
        arr1: [
            "Reviews Management",
            "Google Business Profile",
            "Website Design & Development",
            "Branding",
        ],
        arr2: [
            "Social Media Management",
            "Search Engine Optimization",
            "Social Media Managament ",
            "eCommerce",
        ],
        arr3: [
            "Search Engine Optimization",
            "UI/UX Audits",
            "Marketing",
            "Website Maintenance",
        ],
        arr4: [
            "Google Business Profile",
            "Website Maintenance",
            "Marketing",
            "Website Design & Development",
        ],
    };

    return (
        <div className={`container ${styles.carousel}`}>
            <div className={styles.left}>
                {[...Array(3)].map((_, i) => (
                    <React.Fragment key={i}>
                        {carouselContent.arr1.map((item, index) => (
                            <p key={`${i}-${index}`}>{item}</p>
                        ))}
                    </React.Fragment>
                ))}
            </div>
            <div className={styles.right_container}>
                <div className={styles.right}>
                    {[...Array(3)].map((_, i) => (
                        <React.Fragment key={i}>
                            {carouselContent.arr2.map((item, index) => (
                                <p key={`${i}-${index}`}>{item}</p>
                            ))}
                        </React.Fragment>
                    ))}
                </div>
            </div>

            <div className={styles.left}>
                {[...Array(3)].map((_, i) => (
                    <React.Fragment key={i}>
                        {carouselContent.arr3.map((item, index) => (
                            <p key={`${i}-${index}`}>{item}</p>
                        ))}
                    </React.Fragment>
                ))}
            </div>
            <div className={styles.right_container}>
                <div className={styles.right}>
                    {[...Array(3)].map((_, i) => (
                        <React.Fragment key={i}>
                            {carouselContent.arr4.map((item, index) => (
                                <p key={`${i}-${index}`}>{item}</p>
                            ))}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
};
