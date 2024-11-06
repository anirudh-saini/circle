import React, { useRef, useState } from "react";
import Slider from "react-slick";
import styles from "./carousel.module.scss";
import {
    faChevronLeft,
    faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const Carousel = () => {
    const sliderRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const carouselItems = [
        {
            title: "Project 1",
            imgPath: "project2.png",
        },
        {
            title: "Project 2",
            imgPath: "project1.png",
        },
        {
            title: "Project 3",
            imgPath: "project2.png",
        },
        {
            title: "Project 4",
            imgPath: "project1.png",
        },
        {
            title: "Project 4",
            imgPath: "project1.png",
        },
        {
            title: "Project 4",
            imgPath: "project1.png",
        },
        {
            title: "Project 4",
            imgPath: "project1.png",
        },
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        beforeChange: (current, next) => setActiveIndex(next), // Update active index
    };

    const nextSlide = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }
    };

    const prevSlide = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }
    };

    const CustomDots = () => {
        return (
            <div className={styles.customDots}>
                {carouselItems.map((_, index) => (
                    <div
                        key={index}
                        className={`${styles.dot} ${
                            activeIndex === index ? styles.active : ""
                        }`}
                        onClick={() => sliderRef.current.slickGoTo(index)} // Go to specific slide on dot click
                    />
                ))}
            </div>
        );
    };

    return (
        <div id="our_work">
            <div className={styles.carousel}>
                <Slider ref={sliderRef} {...settings} className={styles.slide}>
                    {carouselItems.map((item, index) => (
                        <div key={index} className={styles.slide}>
                            <img src={item.imgPath} alt={item.title} />
                            <p className={styles.title}>{item.title}</p>{" "}
                        </div>
                    ))}
                </Slider>
            </div>
            <div className={`container ${styles.buttonstyle}`}>
                <CustomDots />
                <div className={styles["button-container"]}>
                    <button className={styles.button} onClick={prevSlide}>
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </button>
                    <button className={styles.button} onClick={nextSlide}>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                </div>
            </div>
        </div>
    );
};
